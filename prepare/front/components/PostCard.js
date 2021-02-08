import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Card, Popover, Avatar, Button, List, Comment} from 'antd';
import {RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone} from '@ant-design/icons';
import {useDispatch} from 'react-redux';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import FollowButton from './FollowButton';
import PostCardContent from './postCardContent';
import {REMOVE_POST_REQUEST} from '../reducers/post';
import useSelection from 'antd/lib/table/hooks/useSelection';

const PostCard = ({post}) => {
    const dispatch = useDispatch();
    const { removePostLoading }  = useSelector((state)=>state.post);
    const [liked, setLiked] = useState(false);
    const [commentForOpened, setCommentForOpened]=useState(false);
    const onToggleLike = useCallback(()=>{
        setLiked((prev)=> !prev);
        {/*true는 false로, false는 true로 */}
    },[]);
    const onToggleComment = useCallback(()=>{
        setCommentForOpened((prev)=>!prev);
    },[]);
    const onRemovePost = useCallback(()=>{
        dispatch({
            type : REMOVE_POST_REQUEST,
            data : post.id,
        });
    },[]);
    const {me}= useSelector((state)=>state.user);
    const id = me?.id;
    // === me && me.id
    return (
        <div style={{marginBottom:20}}>
            {/* 배열안에 jsx를 넣을때는 항상 key 붙여주기
                    Popover는 ...에 손을 올렸을 때 여러가지 더보기 버튼들 */}
            <Card
                cover={post.Images[0] && <PostImages images={post.Images}/>}
                actions = {[
                    <RetweetOutlined key="retweet"/>,
                    liked 
                        ? <HeartTwoTone twoToneColor = "#eb2f96" key="heart" onClick={onToggleLike}/>
                        : <HeartOutlined key="heart" onClick={onToggleLike}/>,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                <Button>수정</Button>
                                <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                                </>
                            ) : <Button>신고</Button>}

                        </Button.Group>
                    )}>
                        <EllipsisOutlined/>
                    </Popover>
                ]}
                extra={id && <FollowButton post={post}/>}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content}/>}
                />
                </Card>
                {commentForOpened && (
                    <div>
                        <CommentForm post={post}/>
                        {/*post를 보내는 이유 : 어떤 유저의 게시글에 댓글을 달건지 알아야 하기때문, id를 보내서 쓰려고*/}
                        <List
                            header={`${post.Comments.length}개의 댓글`}
                            itemLayout="horizontal"
                            dataSource={post.Comments}
                            renderItem={(item)=>(
                                <li>
                                    <Comment
                                        author={item.User.nickname}
                                        avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                        content={item.content}
                                    />
                                </li>

                            )}
                        />

                    </div>
                )}
                {/*
            <CommentForm/>
            <Coments/>
                */}
        </div>
    )
}
PostCard.propTypes = {
    post : PropTypes.shape({
        id : PropTypes.number,
        User : PropTypes.object,
        content : PropTypes.string,
        createAt : PropTypes.object,
        Comments : PropTypes.arrayOf(PropTypes.object),
        Images : PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};
{/*shape으로 더 구체적으로 적어줄 수 있다. 처음에
post : PropTypes.object.isRequired 로 간단하게 적어줄 수 있음*/}
export default PostCard;