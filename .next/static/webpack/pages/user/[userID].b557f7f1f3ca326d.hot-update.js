"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/[userID]",{

/***/ "./pages/user/[userID].js":
/*!********************************!*\
  !*** ./pages/user/[userID].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst User = (param)=>{\n    let { users  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!router.isReady) return;\n    }, [\n        router.isReady\n    ]);\n    const { userID  } = router.query;\n    const specificUser = users.find((user)=>user._id === userID);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"/api/user/edit\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"firstname\",\n                    children: \" First name\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: specificUser.firstName,\n                    onChange: (e)=>setFirstName(e.target.value),\n                    name: \"firstName\",\n                    id: \"firstname\",\n                    placeholder: \"first Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"lastname\",\n                    children: \" Last name\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: specificUser.lastName,\n                    onChange: (e)=>setLastname(e.target.value),\n                    name: \"lastName\",\n                    id: \"lastname\",\n                    placeholder: \"last Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"email\",\n                    children: \"email\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: specificUser.email,\n                    onChange: (e)=>setEmail(e.target.value),\n                    type: \"email\",\n                    placeholder: \"youremail@gmail.com\",\n                    id: \"email\",\n                    name: \"email\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"password\",\n                    children: \"password\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: specificUser.password,\n                    onChange: (e)=>setPassword(e.target.value),\n                    type: \"password\",\n                    placeholder: \"********\",\n                    id: \"password\",\n                    name: \"password\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"gender\",\n                    children: \" Gender\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"radio\",\n                    name: \"gender\",\n                    value: specificUser.gender,\n                    onChange: (e)=>setGender(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                \" \",\n                \"Male\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"radio\",\n                    name: \"gender\",\n                    value: specificUser.gender,\n                    onChange: (e)=>setGender(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                \" \",\n                \"Female\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(User, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1t1c2VySURdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDTjtBQUVsQyxNQUFNRSxPQUFPLFNBQWdCO1FBQWQsRUFBRUMsTUFBSyxFQUFFOztJQUN0QixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEJDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUNHLE9BQU9DLE9BQU8sRUFBRTtJQUN2QixHQUFHO1FBQUNELE9BQU9DLE9BQU87S0FBQztJQUNuQixNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHRixPQUFPRyxLQUFLO0lBQy9CLE1BQU1DLGVBQWVMLE1BQU1NLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsR0FBRyxLQUFLTDtJQUVyRCxxQkFDRTtrQkFDRSw0RUFBQ007WUFBS0MsUUFBTzs7OEJBQ1gsOERBQUNDO29CQUFNQyxTQUFROzhCQUFZOzs7Ozs7OEJBQzNCLDhEQUFDQztvQkFDQ0MsT0FBT1QsYUFBYVUsU0FBUztvQkFDN0JDLFVBQVUsQ0FBQ0MsSUFBTUMsYUFBYUQsRUFBRUUsTUFBTSxDQUFDTCxLQUFLO29CQUM1Q00sTUFBSztvQkFDTEMsSUFBRztvQkFDSEMsYUFBWTs7Ozs7OzhCQUVkLDhEQUFDWDtvQkFBTUMsU0FBUTs4QkFBVzs7Ozs7OzhCQUMxQiw4REFBQ0M7b0JBQ0NDLE9BQU9ULGFBQWFrQixRQUFRO29CQUM1QlAsVUFBVSxDQUFDQyxJQUFNTyxZQUFZUCxFQUFFRSxNQUFNLENBQUNMLEtBQUs7b0JBQzNDTSxNQUFLO29CQUNMQyxJQUFHO29CQUNIQyxhQUFZOzs7Ozs7OEJBRWQsOERBQUNYO29CQUFNQyxTQUFROzhCQUFROzs7Ozs7OEJBQ3ZCLDhEQUFDQztvQkFDQ0MsT0FBT1QsYUFBYW9CLEtBQUs7b0JBQ3pCVCxVQUFVLENBQUNDLElBQU1TLFNBQVNULEVBQUVFLE1BQU0sQ0FBQ0wsS0FBSztvQkFDeENhLE1BQUs7b0JBQ0xMLGFBQVk7b0JBQ1pELElBQUc7b0JBQ0hELE1BQUs7Ozs7Ozs4QkFFUCw4REFBQ1Q7b0JBQU1DLFNBQVE7OEJBQVc7Ozs7Ozs4QkFDMUIsOERBQUNDO29CQUNDQyxPQUFPVCxhQUFhdUIsUUFBUTtvQkFDNUJaLFVBQVUsQ0FBQ0MsSUFBTVksWUFBWVosRUFBRUUsTUFBTSxDQUFDTCxLQUFLO29CQUMzQ2EsTUFBSztvQkFDTEwsYUFBWTtvQkFDWkQsSUFBRztvQkFDSEQsTUFBSzs7Ozs7OzhCQUVQLDhEQUFDVDtvQkFBTUMsU0FBUTs4QkFBUzs7Ozs7OzhCQUN4Qiw4REFBQ0M7b0JBQ0NjLE1BQUs7b0JBQ0xQLE1BQUs7b0JBQ0xOLE9BQU9ULGFBQWF5QixNQUFNO29CQUMxQmQsVUFBVSxDQUFDQyxJQUFNYyxVQUFVZCxFQUFFRSxNQUFNLENBQUNMLEtBQUs7Ozs7OztnQkFDeEM7Z0JBQUk7OEJBRVAsOERBQUNEO29CQUNDYyxNQUFLO29CQUNMUCxNQUFLO29CQUNMTixPQUFPVCxhQUFheUIsTUFBTTtvQkFDMUJkLFVBQVUsQ0FBQ0MsSUFBTWMsVUFBVWQsRUFBRUUsTUFBTSxDQUFDTCxLQUFLOzs7Ozs7Z0JBQ3hDO2dCQUFJOzhCQUVQLDhEQUFDRDtvQkFBTWMsTUFBSztvQkFBU2IsT0FBTzs7Ozs7Ozs7Ozs7OztBQVVwQztHQXRFTWY7O1FBQ1dGLGtEQUFTQTs7O0tBRHBCRTs7QUFzRk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9bdXNlcklEXS5qcz83MmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFVzZXIgPSAoIHsgdXNlcnMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuICBjb25zdCB7IHVzZXJJRCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBzcGVjaWZpY1VzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5faWQgPT09IHVzZXJJRCApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvdXNlci9lZGl0XCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RuYW1lXCI+IEZpcnN0IG5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17c3BlY2lmaWNVc2VyLmZpcnN0TmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgaWQ9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmlyc3QgTmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdG5hbWVcIj4gTGFzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3NwZWNpZmljVXNlci5sYXN0TmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhc3RuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgIGlkPVwibGFzdG5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwibGFzdCBOYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPmVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3NwZWNpZmljVXNlci5lbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91cmVtYWlsQGdtYWlsLmNvbVwiXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPnBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3NwZWNpZmljVXNlci5wYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKipcIlxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2VuZGVyXCI+IEdlbmRlcjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgdmFsdWU9e3NwZWNpZmljVXNlci5nZW5kZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5kZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgTWFsZVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgIHZhbHVlPXtzcGVjaWZpY1VzZXIuZ2VuZGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgIEZlbWFsZVxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXtcIkVkaXRcIn0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHsvKiA8cD57c3BlY2lmaWNVc2VyLmZpcnN0TmFtZX08L3A+XG4gICAgICA8cD57c3BlY2lmaWNVc2VyLmxhc3ROYW1lfTwvcD5cbiAgICAgIDxwPntzcGVjaWZpY1VzZXIuZW1haWx9PC9wPlxuICAgICAgPHA+e3NwZWNpZmljVXNlci5wYXNzd29yZH08L3A+XG4gICAgICA8cD57c3BlY2lmaWNVc2VyLmdlbmRlcn08L3A+ICovfVxuXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XG4gIHRyeSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvY3J1ZFwiKTtcbiAgICBsZXQgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHVzZXJzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXJzKSksXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiVXNlciIsInVzZXJzIiwicm91dGVyIiwiaXNSZWFkeSIsInVzZXJJRCIsInF1ZXJ5Iiwic3BlY2lmaWNVc2VyIiwiZmluZCIsInVzZXIiLCJfaWQiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ2YWx1ZSIsImZpcnN0TmFtZSIsIm9uQ2hhbmdlIiwiZSIsInNldEZpcnN0TmFtZSIsInRhcmdldCIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwibGFzdE5hbWUiLCJzZXRMYXN0bmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImdlbmRlciIsInNldEdlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/[userID].js\n"));

/***/ })

});