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





axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = 'http://localhost:3065';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBUXlCQSxROztBQVJ6QjtBQUNBO0FBRUE7QUFDQTtBQUVBQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsdUJBQXpCO0FBRWUsU0FBVUgsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPWixpQkFBTUksOERBQUcsQ0FDTCxDQUNBQywrREFBSSxDQUFDQyw2Q0FBRCxDQURKLEVBRUFELCtEQUFJLENBQUNFLDZDQUFELENBRkosQ0FHQTtBQUhBLFdBREssQ0FBVDs7QUFQWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI2ZTM4NDMzMjdhZmYzZmExYTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FsbCwgZm9ya30gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIC8qICo9Z2VuZXJhdG9yIOusuOuylSDsnpDssrTqsIAg7J2066CH6rKMIOyDneq5gChzYWdh7JeQ7IScKSBcclxuICAgIGdlbmVyYXRvcuuKlCDtlajsiJjsnbTrpoQubmV4dCgpIOuSpOyXkCDrhKXsiqTtirjrpbwg7I2o7KO87Ja07JW8IO2VnOuLpCBcclxuICAgIGdlbmVyYXRvcu2VqOyImOuKlCDslYjsl5AgeWllbGTrpbwg64Sj7Ja07KO866m0IOqxsOq4sOyEnCDrqYjstqQsIOq3uOumrOqzoCDrmJAg7Zi47Lac7ZWY66m0IOupiOy2mOqzs+yXkOyEnOu2gO2EsFxyXG4gICAg64uk7IucIOyLnOyeke2VmOqzoCDrmJAgeWllbGTqsIAg7J6I7Jy866m0IOupiOy2pCwg65iQIO2YuOy2nO2VmOuptCDrqYjstpjqs7Psl5DshJzrtoDthLAg7Iuc7J6RIFxyXG4gICAgKi9cclxuICAgLy8g6rWz7J20IHlpZWxk66W8IOyggeuKlCDsnbTsnKDripQg7ZWc7KSEIO2VnOykhCDsi6TtlontlbQg67O8IOyImCDsnojquLAg65WM66y47JeQXHJcbiAgIHlpZWxkIGFsbChcclxuICAgICAgIFtcclxuICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICAgICAvL3NhZ2HripQgY29tYmluZXJlZHVjZXIg7ZWE7JqU7JeG7J2MXHJcbiAgIF0pO1xyXG4gICAvLyBhbGzsnYAg67Cw7Je07J2EIOuwm+yVhOyEnCDrsLDsl7Qg7JWI7JeQIOyeiOuKlCDqsoPsnYQg7ZWc67KI7JeQIOyLpO2Wie2VtOykgOuLpFxyXG4gICAvLyBmb3Jr64qUIO2VqOyImOulvCDsi6TtlontlZzri6TripQg65y7XHJcbiAgIC8vIGZvcmsg64yA7IugIGNhbGzrj4Qg7JOw7KeA66eMIOuRmOydmCDssKjsnbTsoJDsnbQg7J6I7J2MXHJcbiAgIC8vIGZvcmvripQg67mE64+Z6riwIO2VqOyImO2YuOy2nCwgY2FsbOydgCDrj5nquLAg7ZWo7IiY7Zi47LacXHJcbiAgIC8qIGNhbGzsnYAgMTDrsojsp7gg7KSE7JeQ7IScIGxvZ2luQVBJ6rCAIOumrO2EtO2VoCDrlYwg6rmM7KeAIOq4sOuLpOumvFxyXG4gICAg67mE64+Z6riw64qUIOyalOyyreydhCDquLDri6Trpqzsp4Ag7JWK6rOgIOuwlOuhnCDri6TsnYzqurwg7Iuk7ZaJICovXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9