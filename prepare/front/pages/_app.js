import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// 헤드 부분을 수정할 수 있게 하는 것 (head <-> body)
import 'antd/dist/antd.css';
import withReduxSaga from 'next-redux-saga';


import wrapper from '../store/configureStore';
const NodeBird = ({Component}) =>{
    return(
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>NodeBird</title>
        </Head>
        <Component />
        </>
    );
};
NodeBird.propTypes={
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(NodeBird));
// 'antd/dist/antd.css'를  index,profile,signup 모두에 적는 것 보다 이렇게 처리, 공통적인 부분 담당
// return부분이 Component로 들어감
// index, profile, signup의 부모인 셈
