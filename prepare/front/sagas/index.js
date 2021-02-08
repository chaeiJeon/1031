import {all, fork} from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';

axios.defaults.baseURL = 'http://localhost:3065';

export default function* rootSaga() {
    /* *=generator 문법 자체가 이렇게 생김(saga에서) 
    generator는 함수이름.next() 뒤에 넥스트를 써주어야 한다 
    generator함수는 안에 yield를 넣어주면 거기서 멈춤, 그리고 또 호출하면 멈춘곳에서부터
    다시 시작하고 또 yield가 있으면 멈춤, 또 호출하면 멈춘곳에서부터 시작 
    */
   // 굳이 yield를 적는 이유는 한줄 한줄 실행해 볼 수 있기 때문에
   yield all(
       [
       fork(postSaga),
       fork(userSaga),
       //saga는 combinereducer 필요없음
   ]);
   // all은 배열을 받아서 배열 안에 있는 것을 한번에 실행해준다
   // fork는 함수를 실행한다는 뜻
   // fork 대신 call도 쓰지만 둘의 차이점이 있음
   // fork는 비동기 함수호출, call은 동기 함수호출
   /* call은 10번째 줄에서 loginAPI가 리턴할 때 까지 기다림
    비동기는 요청을 기다리지 않고 바로 다음꺼 실행 */
}