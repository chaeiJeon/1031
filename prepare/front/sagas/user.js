import {all, delay, put, fork, takeLatest, call} from 'redux-saga/effects';
import axios from 'axios';
import {
    FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, 
    UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, 
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS,} from '../reducers/user';
function followAPI(){
    return axios.follow('/user/follow')
}
function* follow(action){
    try{
        yield delay(1000);
        yield put({
            type : FOLLOW_SUCCESS,
            data : action.data,
        })
    }catch(err){
        yield put({
            type : FOLLOW_FAILURE,
            error : err.response.data,
        })
    }
}
function unfollowAPI(){
    return axios.unfollow('/user/unfollow')
}
function* unfollow(action){
    try{
        yield delay(1000);
        yield put({
            type : UNFOLLOW_SUCCESS,
            data : action.data,
        })
    }catch(err){
        yield put({
            type : UNFOLLOW_FAILURE,
            error : err.response.data,
        })
    }
}
function logInAPI(data){
    return axios.post('/user/login', data)
}
function* logIn(action){
    try{
        const result = yield call(logInAPI, action.data);
        // call의 첫번째 인자는 함수명, 그다음부터는 매개변수들
        // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것
        yield put({
            type : LOG_IN_SUCCESS,
            data : result.data,
        })
    } catch(err){ //서버 요청 실패시
        yield put({ //put=dispatch 라고 생각하기, 액션 객체 dispatch
            type : LOG_IN_FAILURE,
            error :err.response.data,
        })
    }
}

function logOutAPI(){
    return axios.post('/user/logout')
}
function* logOut(){
    try{
        yield delay(1000);
        //result = yield call(logOutAPI)
        // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것
        yield put({
            type : LOG_OUT_SUCCESS,
        })
    } catch(err){ //서버 요청 실패시
        yield put({ //put=dispatch 라고 생각하기, 액션 객체 dispatch
            type : LOG_OUT_FAILURE,
            error:err.response.data,
        })
    }
}

function signUpAPI(data){
    return axios.post('/user', data) // 백엔드 주소 적기
}
function* signUp(action){
    try{
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        yield put({
            type : SIGN_UP_SUCCESS,
        });
    }catch(err){
        yield put({
            type : SIGN_UP_FAILURE,
            error : err.response.data,
        })
    }
}
function* watchFollow(){
    yield takeLatest(FOLLOW_REQUEST, follow);
    
}function* watchUnfollow(){
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
    
}
function* watchLogIn(){
    yield takeLatest(LOG_IN_REQUEST,logIn); 
    /* while(true){ //while로 감싸줘야 로그인하고 로그아웃하고 또 로그인 가능, while로 안감싸주면 로그인 딱 한번만 가능
        yield take('LOG_IN_REQUEST', logIn);

    } */
    // takeEvery는 while과 같은 역할, while이 직관적이지 않아서 사용
    // takeLatest는 예를들어 실수로 글올리기 버튼을 두번 눌렀을 때 둘다 로딩중이라면 마지막으로 누른것에만 반응, takeEvery에서는 두번 올린게 됨(즉각반응)
    //take는 LOG_IN이라는 액션이 실행될 때까지 기다리겠다는 뜻
    //LOG_IN 액션이 실행되면 logIn 함수 실행해라
}
function* watchLogOut(){
    yield takeLatest(LOG_OUT_REQUEST, logOut);
    
}
function* watchSignUp(){
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga(){
    yield all([
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}