import axios from 'axios';
import shortId from 'shortid';
import { delay, put, takeLatest, all, fork, throttle } from "redux-saga/effects";
import { LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
        ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, generateDummyPost} from '../reducers/post';
import {ADD_POST_TO_ME, REMOVE_POST_OF_ME} from '../reducers/user';

function loadPostAPI(data){
    return axios.post('/api/post',data)
}
function* loadPosts(action){
    try{
        yield delay(1000);
        //result = yield call(loadPostsAPI, action.data)
        // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것
        yield put({
            type : LOAD_POSTS_SUCCESS,
            data : generateDummyPost(10),
        });
    } catch(err){ //서버 요청 실패시
        yield put({ //put=dispatch 라고 생각하기, 액션 객체 dispatch
            type : LOAD_POSTS_FAILURE,
            data:err.response.data,
        });
    }
}
function addPostAPI(data){
    return axios.post('/api/post',data)
}
function* addPost(action){
    console.log('saga addPost');
    console.log(action);
    try{
        yield delay(1000);
        //result = yield call(addPostAPI, action.data)
        // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것
        const id = shortId.generate();
        yield put({
            type : ADD_POST_SUCCESS,
            data : {
                id,
                content : action.data,
            },
        });
        yield put({
            type : ADD_POST_TO_ME,
            data:id,
        });
    } catch(err){ //서버 요청 실패시
        yield put({ //put=dispatch 라고 생각하기, 액션 객체 dispatch
            type : ADD_POST_FAILURE,
            data:err.response.data,
        })
    }
}
function removePostAPI(data){
    return axios.post('/api/post',data)
}
function* removePost(action){
    try{
        yield delay(1000);
        //result = yield call(addPostAPI, action.data)
        // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것
        const id = shortId.generate();
        yield put({
            type : REMOVE_POST_SUCCESS,
            data : action.data
        }); //post reducer 상태 바꾸기
        yield put({
            type : REMOVE_POST_OF_ME,
            data: action.data,
        }); //user reducer 상태 바꾸기
    } catch(err){ //서버 요청 실패시
        yield put({ //put=dispatch 라고 생각하기, 액션 객체 dispatch
            type : REMOVE_POST_FAILURE,
            data:err.response.data,
        })
    }
}
function addCommentAPI(data){
    return axios.post('/api/comment',data)
}
function* addComment(action){
    try{
        yield delay(1000);
        yield put({
            type : ADD_COMMENT_SUCCESS,
            data : action.data,
        });
    }catch(err){
        yield put ({
            type : ADD_COMMENT_FAILURE,
            data : err.response.data,
        })
    }
}


function* watchLoadPosts(){
    yield throttle(2000,LOAD_POSTS_REQUEST, loadPosts);
}
function* watchAddPost(){
    console.log('watchAddPost');
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchAddCommentPost(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchRemovePost),
        fork(watchAddCommentPost),
    ]);
}