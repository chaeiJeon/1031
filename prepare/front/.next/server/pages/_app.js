module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\Users\\\uC804\uCC44\uC774\\react-nodebird\\prepare\\front\\pages\\_app.js";


 // 헤드 부분을 수정할 수 있게 하는 것 (head <-> body)





const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(NodeBird))); // 'antd/dist/antd.css'를  index,profile,signup 모두에 적는 것 보다 이렇게 처리, 공통적인 부분 담당
// return부분이 Component로 들어감
// index, profile, signup의 부모인 셈

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // 이전상태와 액션을 활용해서 다음상태를 만든다

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  //HYDRATE(server side rendering을 위해 사용)를 위한 reducer 추가
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"] //user,post combine

}); // reducer가 함수이기 때문에, 함수끼리 합치려면 combineReducer의 도움을 받아야함

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  postAdded: false,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const generateDummyPost = number => Array(20).fill().map((v, i) => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
}));
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; // ACTION이름을 상수로 빼준 이유 : 중간에 오타를 막기 위해(변수로 지정하면 오타나면 오류가 난다)

const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'codl'
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: 1,
    nickname: 'hal'
  },
  content: data
});

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowDone = false;
      draft.unfollowError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.mainPosts = action.data.concat(draft.mainPosts);
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.hasMorePost = draft.mainPosts.length < 50;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
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
      draft.mainPosts = state.mainPosts.filter(v => v.id !== action.data);
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
      const post = draft.mainPosts.find(v => v.id === action.data.postId);
      post.Comments.unshift(dummyComment(action.data.content));
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;

    case ADD_COMMENT_REQUEST:
      draft.mainPosts;
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;

    default:
      break;
  }
}));

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, logoutSuccessAction, logoutFailureAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessAction", function() { return logoutSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFailureAction", function() { return logoutFailureAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: 'CHAECHAE',
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    id: 'h'
  }],
  Followers: [{
    id: 'k'
  }, {
    id: 'h'
  }]
});

const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpDate: {},
  loginData: []
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};
const logoutSuccessAction = data => {
  return {
    type: LOG_OUT_SUCCESS,
    data
  };
};
const logoutFailureAction = data => {
  return {
    type: LOG_OUT_FAILURE,
    data
  };
};
const dummyFollower = {
  id: 'halomalo'
};

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followDone = false;
      draft.followError = null;
      break;

    case FOLLOW_SUCCESS:
      draft.me.Followings.push({
        id: action.data
      });
      draft.followLoading = false;
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowDone = false;
      draft.unfollowError = null;
      break;

    case UNFOLLOW_SUCCESS:
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logInDone = true;
      draft.me = action.data;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signupLoading = true;
      draft.signupError = null;
      draft.signupDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signupLoading = false;
      draft.signupDone = true;
      draft.me = null;
      break;

    case SIGN_UP_FAILURE:
      draft.signupLoading = false;
      draft.signupError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      draft.me = null;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
function* rootSaga() {
  /* *=generator 문법 자체가 이렇게 생김(saga에서) 
  generator는 함수이름.next() 뒤에 넥스트를 써주어야 한다 
  generator함수는 안에 yield를 넣어주면 거기서 멈춤, 그리고 또 호출하면 멈춘곳에서부터
  다시 시작하고 또 yield가 있으면 멈춤, 또 호출하면 멈춘곳에서부터 시작 
  */
  // 굳이 yield를 적는 이유는 한줄 한줄 실행해 볼 수 있기 때문에
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]) //saga는 combinereducer 필요없음
  ]); // all은 배열을 받아서 배열 안에 있는 것을 한번에 실행해준다
  // fork는 함수를 실행한다는 뜻
  // fork 대신 call도 쓰지만 둘의 차이점이 있음
  // fork는 비동기 함수호출, call은 동기 함수호출

  /* call은 10번째 줄에서 loginAPI가 리턴할 때 까지 기다림
   비동기는 요청을 기다리지 않고 바로 다음꺼 실행 */
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");






function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/post', data);
}

function* loadPosts(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000); //result = yield call(loadPostsAPI, action.data)
    // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10)
    });
  } catch (err) {
    //서버 요청 실패시
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      //put=dispatch 라고 생각하기, 액션 객체 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/post', data);
}

function* addPost(action) {
  console.log('saga addPost');
  console.log(action);

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000); //result = yield call(addPostAPI, action.data)
    // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것

    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    //서버 요청 실패시
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      //put=dispatch 라고 생각하기, 액션 객체 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/post', data);
}

function* removePost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000); //result = yield call(addPostAPI, action.data)
    // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것

    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: action.data
    }); //post reducer 상태 바꾸기

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    }); //user reducer 상태 바꾸기
  } catch (err) {
    //서버 요청 실패시
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      //put=dispatch 라고 생각하기, 액션 객체 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/comment', data);
}

function* addComment(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  console.log('watchAddPost');
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* watchAddCommentPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddCommentPost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.follow('/user/follow');
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.unfollow('/user/unfollow');
}

function* unfollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data); // call의 첫번째 인자는 함수명, 그다음부터는 매개변수들
    // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    //서버 요청 실패시
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put=dispatch 라고 생각하기, 액션 객체 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //result = yield call(logOutAPI)
    // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    //서버 요청 실패시
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put=dispatch 라고 생각하기, 액션 객체 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data); // 백엔드 주소 적기
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
  /* while(true){ //while로 감싸줘야 로그인하고 로그아웃하고 또 로그인 가능, while로 안감싸주면 로그인 딱 한번만 가능
      yield take('LOG_IN_REQUEST', logIn);
    } */
  // takeEvery는 while과 같은 역할, while이 직관적이지 않아서 사용
  // takeLatest는 예를들어 실수로 글올리기 버튼을 두번 눌렀을 때 둘다 로딩중이라면 마지막으로 누른것에만 반응, takeEvery에서는 두번 올린게 됨(즉각반응)
  //take는 LOG_IN이라는 액션이 실행될 때까지 기다리겠다는 뜻
  //LOG_IN 액션이 실행되면 logIn 함수 실행해라
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");







const configureStore = () => {
  const sagaeMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaeMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  {
    /*배포용일때는 devtools 연결 X, 용량 차지 때문에
    하지만 개발자용일때는 devtools를 연결해서 history가 쌓이게 한다
    배포용일때는 history를 쌓아두지 않고 계속 버림 */
  }
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], enhancer);
  store.sagaTask = sagaeMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJwb3N0QWRkZWQiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInYiLCJpIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsImZpbmQiLCJwb3N0SWQiLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ251cExvYWRpbmciLCJzaWdudXBEb25lIiwic2lnbnVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRlIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwibG9nb3V0RmFpbHVyZUFjdGlvbiIsImR1bW15Rm9sbG93ZXIiLCJyZWR1Y2VyIiwicHVzaCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3RzIiwiZGVsYXkiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImFkZFBvc3RBUEkiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaEFkZENvbW1lbnRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0IiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImxvZ0luQVBJIiwibG9nSW4iLCJyZXN1bHQiLCJjYWxsIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FlTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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QUQsQ0FBVDtBQU9ILEM7Ozs7Ozs7Ozs7OztBQ3BJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxNQUFLO0FBQ3hCLFFBQU1DLGVBQWUsR0FBR0MsaURBQW9CLEVBQTVDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQUNGLGVBQUQsQ0FBcEI7QUFDQSxRQUFNRyxRQUFRLEdBQUcsUUFDWEMsU0FEVyxHQUVYQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBRnpCO0FBR0E7QUFBQztBQUNMO0FBQ0E7QUFBcUM7QUFDakMsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDdEQsaURBQUQsRUFBVWlELFFBQVYsQ0FBekI7QUFDQUksT0FBSyxDQUFDRSxRQUFOLEdBQWlCVCxlQUFlLENBQUNVLEdBQWhCLENBQW9CbkQsOENBQXBCLENBQWpCO0FBQ0EsU0FBT2dELEtBQVA7QUFDSCxDQVpEOztBQWFBLE1BQU10TCxPQUFPLEdBQUcwTCx3RUFBYSxDQUFDWixjQUFELEVBQWlCO0FBQzFDYSxPQUFLO0FBRHFDLENBQWpCLENBQTdCO0FBSWUzTCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuLy8g7Zek65OcIOu2gOu2hOydhCDsiJjsoJXtlaAg7IiYIOyeiOqyjCDtlZjripQg6rKDIChoZWFkIDwtPiBib2R5KVxyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSc7XHJcblxyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5jb25zdCBOb2RlQmlyZCA9ICh7Q29tcG9uZW50fSkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5Ob2RlQmlyZC5wcm9wVHlwZXM9e1xyXG4gICAgQ29tcG9uZW50IDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KHdpdGhSZWR1eFNhZ2EoTm9kZUJpcmQpKTtcclxuLy8gJ2FudGQvZGlzdC9hbnRkLmNzcyfrpbwgIGluZGV4LHByb2ZpbGUsc2lnbnVwIOuqqOuRkOyXkCDsoIHripQg6rKDIOuztOuLpCDsnbTroIfqsowg7LKY66asLCDqs7XthrXsoIHsnbgg67aA67aEIOuLtOuLuVxyXG4vLyByZXR1cm7rtoDrtoTsnbQgQ29tcG9uZW5066GcIOuTpOyWtOqwkFxyXG4vLyBpbmRleCwgcHJvZmlsZSwgc2lnbnVw7J2YIOu2gOuqqOyduCDshYhcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9ICBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG5cclxuLy8g7J207KCE7IOB7YOc7JmAIOyVoeyFmOydhCDtmZzsmqntlbTshJwg64uk7J2M7IOB7YOc66W8IOunjOuToOuLpFxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleCA6ICggc3RhdGUgPSB7fSwgYWN0aW9uICk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEUgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vSFlEUkFURShzZXJ2ZXIgc2lkZSByZW5kZXJpbmfsnYQg7JyE7ZW0IOyCrOyaqSnrpbwg7JyE7ZWcIHJlZHVjZXIg7LaU6rCAXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxuICAgIC8vdXNlcixwb3N0IGNvbWJpbmVcclxufSk7XHJcbi8vIHJlZHVjZXLqsIAg7ZWo7IiY7J206riwIOuVjOusuOyXkCwg7ZWo7IiY64G866asIO2Vqey5mOugpOuptCBjb21iaW5lUmVkdWNlcuydmCDrj4Tsm4DsnYQg67Cb7JWE7JW87ZWoXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzIDogW10sXHJcbiAgICBpbWFnZVBhdGhzIDogW10sXHJcbiAgICBoYXNNb3JlUG9zdCA6IHRydWUsXHJcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG4gICAgZm9sbG93TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgZm9sbG93RG9uZSA6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3IgOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nIDogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0RvbmUgOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3IgOiBudWxsLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZSA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3IgOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3IgOiBudWxsLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheSgyMCkuZmlsbCgpLm1hcCgodiwgaSk9Pih7XHJcbiAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXIgOiB7XHJcbiAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWUgOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudCA6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzIDogW3tcclxuICAgICAgICBzcmMgOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50cyA6IFt7XHJcbiAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lIDogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbi8vIEFDVElPTuydtOumhOydhCDsg4HsiJjroZwg67m87KSAIOydtOycoCA6IOykkeqwhOyXkCDsmKTtg4Drpbwg66eJ6riwIOychO2VtCjrs4DsiJjroZwg7KeA7KCV7ZWY66m0IOyYpO2DgOuCmOuptCDsmKTrpZjqsIAg64Kc64ukKVxyXG5leHBvcnQgY29uc3QgYWRkUG9zdD0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlIDogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudD0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlIDogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgY29udGVudCA6IGRhdGEuY29udGVudCxcclxuICAgIFVzZXIgOiB7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBuaWNrbmFtZSA6ICdjb2RsJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXMgOiBbXSxcclxuICAgIENvbW1lbnRzIDogW10sXHJcbn0pO1xyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyIDoge1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBuaWNrbmFtZSA6ICdoYWwnXHJcbiAgICB9LFxyXG4gICAgY29udGVudCA6IGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pPT4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXsgXHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDw1MDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodik9PnYuaWQ9PT1hY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cztcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRlZmF1bHQgOiBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIG5pY2tuYW1lIDogJ0NIQUVDSEFFJyxcclxuICAgIGlkIDogMSxcclxuICAgIFBvc3RzIDogW3tpZDoxfV0sXHJcbiAgICBGb2xsb3dpbmdzIDogW3tpZDonaCd9XSxcclxuICAgIEZvbGxvd2VycyA6IFt7aWQ6J2snfSx7aWQ6J2gnfV0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2dJbkRvbmUgOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3IgOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZSA6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3IgOiBudWxsLFxyXG4gICAgc2lnbnVwTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgc2lnbnVwRG9uZSA6IGZhbHNlLFxyXG4gICAgc2lnbnVwRXJyb3IgOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmUgOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3IgOiBudWxsLFxyXG4gICAgbWUgOiBudWxsLFxyXG4gICAgc2lnblVwRGF0ZSA6IHt9LFxyXG4gICAgbG9naW5EYXRhIDogW10sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVD0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTPSdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRT0nTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVD0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1M9J0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkU9J0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUz0nU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRT0nU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVD0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTPSdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRT0nRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1Q9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1M9J1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRT0nVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUz0nQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU9J0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZHVtbXlGb2xsb3dlciA9IHtcclxuICAgIGlkIDogJ2hhbG9tYWxvJyxcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbik9PlxyXG4gICAgcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQgOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpPT52LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgIFxyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWdudXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWdudXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ251cERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWdudXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWdudXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOmFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdCA6IFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7YWxsLCBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgLyogKj1nZW5lcmF0b3Ig66y467KVIOyekOyytOqwgCDsnbTroIfqsowg7IOd6rmAKHNhZ2Hsl5DshJwpIFxyXG4gICAgZ2VuZXJhdG9y64qUIO2VqOyImOydtOumhC5uZXh0KCkg65Kk7JeQIOuEpeyKpO2KuOulvCDsjajso7zslrTslbwg7ZWc64ukIFxyXG4gICAgZ2VuZXJhdG9y7ZWo7IiY64qUIOyViOyXkCB5aWVsZOulvCDrhKPslrTso7zrqbQg6rGw6riw7IScIOupiOy2pCwg6re466as6rOgIOuYkCDtmLjstpztlZjrqbQg66mI7LaY6rOz7JeQ7ISc67aA7YSwXHJcbiAgICDri6Tsi5wg7Iuc7J6R7ZWY6rOgIOuYkCB5aWVsZOqwgCDsnojsnLzrqbQg66mI7LakLCDrmJAg7Zi47Lac7ZWY66m0IOupiOy2mOqzs+yXkOyEnOu2gO2EsCDsi5zsnpEgXHJcbiAgICAqL1xyXG4gICAvLyDqtbPsnbQgeWllbGTrpbwg7KCB64qUIOydtOycoOuKlCDtlZzspIQg7ZWc7KSEIOyLpO2Wie2VtCDrs7wg7IiYIOyeiOq4sCDrlYzrrLjsl5BcclxuICAgeWllbGQgYWxsKFxyXG4gICAgICAgW1xyXG4gICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgIC8vc2FnYeuKlCBjb21iaW5lcmVkdWNlciDtlYTsmpTsl4bsnYxcclxuICAgXSk7XHJcbiAgIC8vIGFsbOydgCDrsLDsl7TsnYQg67Cb7JWE7IScIOuwsOyXtCDslYjsl5Ag7J6I64qUIOqyg+ydhCDtlZzrsojsl5Ag7Iuk7ZaJ7ZW07KSA64ukXHJcbiAgIC8vIGZvcmvripQg7ZWo7IiY66W8IOyLpO2Wie2VnOuLpOuKlCDrnLtcclxuICAgLy8gZm9yayDrjIDsi6AgY2FsbOuPhCDsk7Dsp4Drp4wg65GY7J2YIOywqOydtOygkOydtCDsnojsnYxcclxuICAgLy8gZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiY7Zi47LacLCBjYWxs7J2AIOuPmeq4sCDtlajsiJjtmLjstpxcclxuICAgLyogY2FsbOydgCAxMOuyiOynuCDspITsl5DshJwgbG9naW5BUEnqsIAg66as7YS07ZWgIOuVjCDquYzsp4Ag6riw64uk66a8XHJcbiAgICDruYTrj5nquLDripQg7JqU7LKt7J2EIOq4sOuLpOumrOyngCDslYrqs6Ag67CU66GcIOuLpOydjOq6vCDsi6TtlokgKi9cclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgeyBkZWxheSwgcHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGZvcmssIHRocm90dGxlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSwgZ2VuZXJhdGVEdW1teVBvc3R9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQge0FERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRX0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLGRhdGEpXHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIC8vIOunjOyVvSDshJzrsoTroZwg66Gc6re47J247ZWY64qUIOyalOyyreydhCDrs7Trg4jsnLzrqbQg6re4IOqysOqzvOulvCDrsJvripQg6rKDXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGdlbmVyYXRlRHVtbXlQb3N0KDEwKSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKXsgLy/shJzrsoQg7JqU7LKtIOyLpO2MqOyLnFxyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV0PWRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjquLAsIOyVoeyFmCDqsJ3ssrQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsZGF0YSlcclxufVxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pe1xyXG4gICAgY29uc29sZS5sb2coJ3NhZ2EgYWRkUG9zdCcpO1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvL3Jlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgLy8g66eM7JW9IOyEnOuyhOuhnCDroZzqt7jsnbjtlZjripQg7JqU7LKt7J2EIOuztOuDiOycvOuptCDqt7gg6rKw6rO866W8IOuwm+uKlCDqsoNcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgY29udGVudCA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTppZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKXsgLy/shJzrsoQg7JqU7LKtIOyLpO2MqOyLnFxyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV0PWRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjquLAsIOyVoeyFmCDqsJ3ssrQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsZGF0YSlcclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICAvLyDrp4zslb0g7ISc67KE66GcIOuhnOq3uOyduO2VmOuKlCDsmpTssq3snYQg67O064OI7Jy866m0IOq3uCDqsrDqs7zrpbwg67Cb64qUIOqyg1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTsgLy9wb3N0IHJlZHVjZXIg7IOB7YOcIOuwlOq+uOq4sFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7IC8vdXNlciByZWR1Y2VyIOyDge2DnCDrsJTqvrjquLBcclxuICAgIH0gY2F0Y2goZXJyKXsgLy/shJzrsoQg7JqU7LKtIOyLpO2MqOyLnFxyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV0PWRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjquLAsIOyVoeyFmCDqsJ3ssrQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZSA6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvY29tbWVudCcsZGF0YSlcclxufVxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQgKHtcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGEgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCl7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSgyMDAwLExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICBjb25zb2xlLmxvZygnd2F0Y2hBZGRQb3N0Jyk7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnRQb3N0KSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHthbGwsIGRlbGF5LCBwdXQsIGZvcmssIHRha2VMYXRlc3QsIGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBGT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFLCBcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsIFxyXG4gICAgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSwgXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLCBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUyx9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5mdW5jdGlvbiBmb2xsb3dBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5mb2xsb3coJy91c2VyL2ZvbGxvdycpXHJcbn1cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnVuZm9sbG93KCcvdXNlci91bmZvbGxvdycpXHJcbn1cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpXHJcbn1cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIC8vIGNhbGzsnZgg7LKr67KI7Ke4IOyduOyekOuKlCDtlajsiJjrqoUsIOq3uOuLpOydjOu2gO2EsOuKlCDrp6TqsJzrs4DsiJjrk6RcclxuICAgICAgICAvLyDrp4zslb0g7ISc67KE66GcIOuhnOq3uOyduO2VmOuKlCDsmpTssq3snYQg67O064OI7Jy866m0IOq3uCDqsrDqs7zrpbwg67Cb64qUIOqyg1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7IC8v7ISc67KEIOyalOyyrSDsi6TtjKjsi5xcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dD1kaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY6riwLCDslaHshZgg6rCd7LK0IGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpXHJcbn1cclxuZnVuY3Rpb24qIGxvZ091dCgpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpXHJcbiAgICAgICAgLy8g66eM7JW9IOyEnOuyhOuhnCDroZzqt7jsnbjtlZjripQg7JqU7LKt7J2EIOuztOuDiOycvOuptCDqt7gg6rKw6rO866W8IOuwm+uKlCDqsoNcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7IC8v7ISc67KEIOyalOyyrSDsi6TtjKjsi5xcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dD1kaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY6riwLCDslaHshZgg6rCd7LK0IGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpIC8vIOuwseyXlOuTnCDso7zshowg7KCB6riwXHJcbn1cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxuICAgIFxyXG59ZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsbG9nSW4pOyBcclxuICAgIC8qIHdoaWxlKHRydWUpeyAvL3doaWxl66GcIOqwkOyLuOykmOyVvCDroZzqt7jsnbjtlZjqs6Ag66Gc6re47JWE7JuD7ZWY6rOgIOuYkCDroZzqt7jsnbgg6rCA64qlLCB3aGlsZeuhnCDslYjqsJDsi7jso7zrqbQg66Gc6re47J24IOuUsSDtlZzrsojrp4wg6rCA64qlXHJcbiAgICAgICAgeWllbGQgdGFrZSgnTE9HX0lOX1JFUVVFU1QnLCBsb2dJbik7XHJcblxyXG4gICAgfSAqL1xyXG4gICAgLy8gdGFrZUV2ZXJ564qUIHdoaWxl6rO8IOqwmeydgCDsl63tlaAsIHdoaWxl7J20IOyngeq0gOyggeydtOyngCDslYrslYTshJwg7IKs7JqpXHJcbiAgICAvLyB0YWtlTGF0ZXN064qUIOyYiOulvOuTpOyWtCDsi6TsiJjroZwg6riA7Jis66as6riwIOuyhO2KvOydhCDrkZDrsogg64iM66CA7J2EIOuVjCDrkZjri6Qg66Gc65Sp7KSR7J20652866m0IOuniOyngOunieycvOuhnCDriITrpbjqsoPsl5Drp4wg67CY7J2RLCB0YWtlRXZlcnnsl5DshJzripQg65GQ67KIIOyYrOumsOqyjCDrkKgo7KaJ6rCB67CY7J2RKVxyXG4gICAgLy90YWtl64qUIExPR19JTuydtOudvOuKlCDslaHshZjsnbQg7Iuk7ZaJ65CgIOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcbiAgICAvL0xPR19JTiDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlontlbTrnbxcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXHJcblxyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJ1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PntcclxuICAgIGNvbnN0IHNhZ2FlTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhZU1pZGRsZXdhcmVdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgey8q67Cw7Y+s7Jqp7J2865WM64qUIGRldnRvb2xzIOyXsOqysCBYLCDsmqnrn4kg7LCo7KeAIOuVjOusuOyXkFxyXG4gICAg7ZWY7KeA66eMIOqwnOuwnOyekOyaqeydvOuVjOuKlCBkZXZ0b29sc+ulvCDsl7DqsrDtlbTshJwgaGlzdG9yeeqwgCDsjJPsnbTqsowg7ZWc64ukXHJcbiAgICDrsLDtj6zsmqnsnbzrlYzripQgaGlzdG9yeeulvCDsjJPslYTrkZDsp4Ag7JWK6rOgIOqzhOyGjSDrsoTrprwgKi99XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYWVNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZyA6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==