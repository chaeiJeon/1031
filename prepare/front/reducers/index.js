import { HYDRATE }  from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';


// 이전상태와 액션을 활용해서 다음상태를 만든다
const rootReducer = combineReducers({
    index : ( state = {}, action )=>{
        switch(action.type){
            case HYDRATE :
                return { ...state, ...action.payload }
        default:
            return state;
        }
    },
    //HYDRATE(server side rendering을 위해 사용)를 위한 reducer 추가
    user,
    post,
    //user,post combine
});
// reducer가 함수이기 때문에, 함수끼리 합치려면 combineReducer의 도움을 받아야함
export default rootReducer;