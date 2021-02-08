import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

export const initialState = {
    mainPosts : [],
    imagePaths : [],
    hasMorePost : true,
    postAdded: false,
    followLoading : false,
    followDone : false,
    followError : null,
    unfollowLoading : false,
    unfollowDone : false,
    unfollowError : null,
    loadPostsLoading : false,
    loadPostsDone : false,
    loadPostsError : null,
    addPostLoading : false,
    addPostDone : false,
    addPostError : null,
    removePostLoading : false,
    removePostDone : false,
    removePostError : null,
    addCommentLoading : false,
    addCommentDone : false,
    addCommentError : null,
};
export const generateDummyPost = (number) => Array(20).fill().map((v, i)=>({
    id : shortId.generate(),
    User : {
        id : shortId.generate(),
        nickname : faker.name.findName(),
    },
    content : faker.lorem.paragraph(),
    Images : [{
        src : faker.image.image(),
    }],
    Comments : [{
        User : {
            id : shortId.generate(),
            nickname : faker.name.findName(),
        },
        content : faker.lorem.sentence(),
    }],
}));

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// ACTION이름을 상수로 빼준 이유 : 중간에 오타를 막기 위해(변수로 지정하면 오타나면 오류가 난다)
export const addPost= (data) => ({
    type : ADD_POST_REQUEST,
    data,
});
export const addComment= (data) => ({
    type : ADD_COMMENT_REQUEST,
    data,
});
const dummyPost = (data) => ({
    id: data.id,
    content : data.content,
    User : {
        id:1,
        nickname : 'codl',
    },
    Images : [],
    Comments : [],
});
const dummyComment = (data) =>({
    id : shortId.generate(),
    User : {
        id : 1,
        nickname : 'hal'
    },
    content : data,
})

export default (state=initialState, action)=> produce(state,(draft)=>{
    switch (action.type){ 
        case LOAD_POSTS_REQUEST:
            draft.unfollowLoading = true;
            draft.unfollowDone=false;
            draft.unfollowError=null;
            break;
    case LOAD_POSTS_SUCCESS:
            draft.mainPosts = action.data.concat(draft.mainPosts);
            draft.loadPostsLoading = false;
            draft.loadPostsDone = true;
            draft.hasMorePost = draft.mainPosts.length <50;
            break;
    case LOAD_POSTS_FAILURE:
            draft.loadPostsLoading = false;
            draft.loadPostsError = action.error;
            break;
        case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone=false;
                draft.addPostError=null;
                break;
        case ADD_POST_SUCCESS:
                draft.mainPosts.unshift(dummyPost(action.data));
                draft.addPostLoading = false;
                draft.addPostDone = true;
                break;
        case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
        case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
        case REMOVE_POST_SUCCESS:
                draft.mainPosts = state.mainPosts.filter((v)=>v.id !== action.data);
                draft.removePostLoading = false;
                draft.removePostDone = true;
                break;
        case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
        case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
        case ADD_COMMENT_SUCCESS: 
                const post = draft.mainPosts.find((v)=>v.id===action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addCommentDone= true;
                break;
        case ADD_COMMENT_REQUEST : 
                draft.mainPosts;
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
        case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
        default : 
            break;
    }
});
