import React, {useState, useCallback} from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequestAction} from '../reducers/user';
const ButtonWrapper = styled.div`
marginTop : 10px;
`;
const LoginForm = () => {
    const dispatch = useDispatch();
    const {logInLoading} = useSelector((state)=>state.user);
    const [email, onChangeEmail]=useInput('');
    const [password, onChangePassword]=useInput('');

    const onSubmitForm = useCallback(()=>{
        dispatch(loginRequestAction({email, password}));
    },[email, password]);

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="uer-email">이메일</label>
                <br/>
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required/>
            </div>
            <div>
                <label htmlFor="uer-password">비밀번호</label>
                <br/>
                <Input 
                name="user-password" 
                type="password" value={password} 
                onChange={onChangePassword} 
                required/>
            </div>
            <ButtonWrapper>
                {/*style={{marginTop : 10}}처럼 style 안에 객체 들어가면 안됨
                리액트의 virtual dom은 이전 컴포넌트와 지금 컴포넌트가 달라지면 리렌더링하는데 객체는 만들때마다 새로운 객체로 인식됨
                리렌더링하면 성능떨어짐*/}
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a>회원가입</a></Link>
            </ButtonWrapper>
        </Form>
    );
}
export default LoginForm;