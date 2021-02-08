import React, {useCallback} from 'react';
import { Card, Avatar, Button } from 'antd';
import {useSelector, useDispatch} from 'react-redux';

import { logoutRequestAction } from '../reducers/user';

const UserProfile=()=>{
    const {me, logOutLoading} = useSelector((state)=>state.user);
    console.log('helloehloehloehloehleohelo');
    console.log(me);
    const dispatch = useDispatch();
    const onLogOut = useCallback(()=>{ 
        dispatch(logoutRequestAction());
    },[]);
    return (
        <Card
            actions={[
                <div key="twit">짹짹<br />{me.Posts.length}</div>,
                <div key="followings">팔로잉<br />{me.Followings.length}</div>,
                <div key="followers">팔로워<br />{me.Followers.length}</div>,
            ]}
        >
            {/*리액트에서 배열 사용할 때, key붙이기*/}
            <Card.Meta
                avatar={<Avatar>{me.nickname}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>
    );
}
export default UserProfile;