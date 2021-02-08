webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./sagas/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




 //axios.defaults.baseURL = 'http://localhost:3065';

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_post__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_user__WEBPACK_IMPORTED_MODULE_4__["default"]) //saga는 combinereducer 필요없음
          ]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVF5QkEsUTs7QUFSekI7QUFDQTtBQUVBO0NBR0E7O0FBRWUsU0FBVUEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPWixpQkFBTUMsOERBQUcsQ0FDTCxDQUNBQywrREFBSSxDQUFDQyw2Q0FBRCxDQURKLEVBRUFELCtEQUFJLENBQUNFLDZDQUFELENBRkosQ0FHQTtBQUhBLFdBREssQ0FBVDs7QUFQWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFjOGI4MWQ3MTUyYjI3ZTBhMWVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FsbCwgZm9ya30gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbi8vYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgLyogKj1nZW5lcmF0b3Ig66y467KVIOyekOyytOqwgCDsnbTroIfqsowg7IOd6rmAKHNhZ2Hsl5DshJwpIFxyXG4gICAgZ2VuZXJhdG9y64qUIO2VqOyImOydtOumhC5uZXh0KCkg65Kk7JeQIOuEpeyKpO2KuOulvCDsjajso7zslrTslbwg7ZWc64ukIFxyXG4gICAgZ2VuZXJhdG9y7ZWo7IiY64qUIOyViOyXkCB5aWVsZOulvCDrhKPslrTso7zrqbQg6rGw6riw7IScIOupiOy2pCwg6re466as6rOgIOuYkCDtmLjstpztlZjrqbQg66mI7LaY6rOz7JeQ7ISc67aA7YSwXHJcbiAgICDri6Tsi5wg7Iuc7J6R7ZWY6rOgIOuYkCB5aWVsZOqwgCDsnojsnLzrqbQg66mI7LakLCDrmJAg7Zi47Lac7ZWY66m0IOupiOy2mOqzs+yXkOyEnOu2gO2EsCDsi5zsnpEgXHJcbiAgICAqL1xyXG4gICAvLyDqtbPsnbQgeWllbGTrpbwg7KCB64qUIOydtOycoOuKlCDtlZzspIQg7ZWc7KSEIOyLpO2Wie2VtCDrs7wg7IiYIOyeiOq4sCDrlYzrrLjsl5BcclxuICAgeWllbGQgYWxsKFxyXG4gICAgICAgW1xyXG4gICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgIC8vc2FnYeuKlCBjb21iaW5lcmVkdWNlciDtlYTsmpTsl4bsnYxcclxuICAgXSk7XHJcbiAgIC8vIGFsbOydgCDrsLDsl7TsnYQg67Cb7JWE7IScIOuwsOyXtCDslYjsl5Ag7J6I64qUIOqyg+ydhCDtlZzrsojsl5Ag7Iuk7ZaJ7ZW07KSA64ukXHJcbiAgIC8vIGZvcmvripQg7ZWo7IiY66W8IOyLpO2Wie2VnOuLpOuKlCDrnLtcclxuICAgLy8gZm9yayDrjIDsi6AgY2FsbOuPhCDsk7Dsp4Drp4wg65GY7J2YIOywqOydtOygkOydtCDsnojsnYxcclxuICAgLy8gZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiY7Zi47LacLCBjYWxs7J2AIOuPmeq4sCDtlajsiJjtmLjstpxcclxuICAgLyogY2FsbOydgCAxMOuyiOynuCDspITsl5DshJwgbG9naW5BUEnqsIAg66as7YS07ZWgIOuVjCDquYzsp4Ag6riw64uk66a8XHJcbiAgICDruYTrj5nquLDripQg7JqU7LKt7J2EIOq4sOuLpOumrOyngCDslYrqs6Ag67CU66GcIOuLpOydjOq6vCDsi6TtlokgKi9cclxufSJdLCJzb3VyY2VSb290IjoiIn0=