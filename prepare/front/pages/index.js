import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";

import AppLayout from "../components/AppLayout";
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import {LOAD_POSTS_REQUEST} from '../reducers/post';

const Home = () =>{
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePost, loadPostsLoading } = useSelector((state)=> state.post);
    useEffect(()=>{
        dispatch({
            type : LOAD_POSTS_REQUEST,
        });
    },[]);
    useEffect(()=>{ //스크롤해서 끝까지 갔을 때 10개를 더 보여주게함
        function onScroll() {
            if(window.scrollY+document.documentElement.clientHeight > document.documentElement.scrollHeight-300){
            // 끝에서 300비트 보다 더 많이 스크롤을 내렸으면
                if(hasMorePost && !loadPostsLoading){ // 로딩이 아닐때 보내줘야 여러번 REQUEST되는 것을 막을 수 있다. scroll을 막 내리면
                    dispatch({
                        type : LOAD_POSTS_REQUEST,
                    });
                }
            }
        }
        window.addEventListener('scroll',onScroll)
        return()=>{
            window.removeEventListener('scroll',onScroll);//이렇게 remove해줘야함 아니면 계속 쌓인다
        };
    },[hasMorePost, loadPostsLoading]);
    
    
    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post)=>(
                <PostCard key={post.id} post={post}/>
            ))}
        </AppLayout>
    );
};
export default Home;