import {Form, Input, Button} from 'antd';
import React, { useCallback, useEffect } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import { ADD_COMMENT_REQUEST }  from '../reducers/post';

import { setContext } from 'redux-saga/effects';

const CommentForm = ({post}) => {
    const id = useSelector((state)=>state.user.me?.id);
    // state.user.me && state.user.me.id
    const { addCommentDone, addCommentLoading } = useSelector((state)=>state.post);
    const dispatch = useDispatch();

    const [commentText, onChangeCommentText, setCommentText]=useInput('');

    useEffect(()=>{
        if(addCommentDone){
            setCommentText('');
        }
    },[addCommentDone]); //두번째 인자는 언제 해당 콜백을 실행햐야 할 지 선택할 수 있는 값
    const onSubmitComment = useCallback(()=>{
        dispatch({
            type : ADD_COMMENT_REQUEST,
            data : { content : commentText, postId : post.id, useId : id }
        })
    },[commentText, id]);
    return(
        <Form onFinish={onSubmitComment}>
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
                <Button type="primary" htmlType="submit" style={{zIndex:1}} loading={addCommentLoading}>
                    삐약
                </Button>
            </Form.Item>
        </Form>
    );
};
CommentForm.propTypes={
    post:PropTypes.object.isRequired,
}
export default CommentForm;