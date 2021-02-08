import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas'
import reducer from '../reducers'

const configureStore = () =>{
    const sagaeMiddleware = createSagaMiddleware();
    const middlewares = [sagaeMiddleware];
    const enhancer = process.env.NODE_ENV==='production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))
    {/*배포용일때는 devtools 연결 X, 용량 차지 때문에
    하지만 개발자용일때는 devtools를 연결해서 history가 쌓이게 한다
    배포용일때는 history를 쌓아두지 않고 계속 버림 */}
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaeMiddleware.run(rootSaga);
    return store;
};
const wrapper = createWrapper(configureStore, {
    debug : process.env.NODE_ENV === 'development',
});

export default wrapper;