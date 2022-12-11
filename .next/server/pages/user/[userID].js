"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/user/[userID]";
exports.ids = ["pages/user/[userID]"];
exports.modules = {

/***/ "./pages/user/[userID].js":
/*!********************************!*\
  !*** ./pages/user/[userID].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst User = ({ users  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { userID  } = router.query;\n    const specificUser = users.find((user)=>user._id === userID);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(specificUser.email);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(specificUser.password);\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(specificUser.firstName);\n    const [lastName, setLastname] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(specificUser.lastName);\n    const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(specificUser.gender);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!router.isReady) return;\n    }, [\n        router.isReady\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"/api/user/crud\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"firstname\",\n                    children: \" First name\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: firstName,\n                    onChange: (e)=>setFirstName(e.target.value),\n                    name: \"firstName\",\n                    id: \"firstname\",\n                    placeholder: \"first Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"lastname\",\n                    children: \" Last name\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: lastName,\n                    onChange: (e)=>setLastname(e.target.value),\n                    name: \"lastName\",\n                    id: \"lastname\",\n                    placeholder: \"last Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"email\",\n                    children: \"email\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: email,\n                    onChange: (e)=>setEmail(e.target.value),\n                    type: \"email\",\n                    placeholder: \"youremail@gmail.com\",\n                    name: \"email\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"password\",\n                    children: \"password\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: password,\n                    onChange: (e)=>setPassword(e.target.value),\n                    type: \"password\",\n                    placeholder: \"********\",\n                    name: \"password\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"gender\",\n                    children: \" Gender\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"radio\",\n                    name: \"gender\",\n                    value: gender,\n                    onChange: (e)=>setGender(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                \" \",\n                \"Male\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"radio\",\n                    name: \"gender\",\n                    value: gender,\n                    onChange: (e)=>setGender(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined),\n                \" \",\n                \"Female\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookpro/IdeaProjects/StoreManagementSystem/Demo-Mongoose-1/pages/user/[userID].js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\nasync function getServerSideProps() {\n    try {\n        let response = await fetch(\"http://localhost:3000/api/user/crud\");\n        let users = await response.json();\n        return {\n            props: {\n                users: JSON.parse(JSON.stringify(users))\n            }\n        };\n    } catch (error) {\n        throw new Error(error);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87WUFDTEMsT0FBTztnQkFDTHRDLE9BQU91QyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLFNBQVMsQ0FBQ3pDO1lBQ25DO1FBQ0Y7SUFDRixFQUFFLE9BQU8wQyxPQUFPO1FBQ2QsTUFBTSxJQUFJQyxNQUFNRCxPQUFPO0lBQ3pCO0FBQ0YsQ0FBQztBQUVELGlFQUFlM0MsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmdvb3NlMS8uL3BhZ2VzL3VzZXIvW3VzZXJJRF0uanM/NzJkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVXNlciA9ICggeyB1c2VycyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHVzZXJJRCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBzcGVjaWZpY1VzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5faWQgPT09IHVzZXJJRCApO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKHNwZWNpZmljVXNlci5lbWFpbCk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoc3BlY2lmaWNVc2VyLnBhc3N3b3JkKTtcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKHNwZWNpZmljVXNlci5maXJzdE5hbWUpO1xuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3RuYW1lXSA9IHVzZVN0YXRlKHNwZWNpZmljVXNlci5sYXN0TmFtZSk7XG4gIGNvbnN0IFtnZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZShzcGVjaWZpY1VzZXIuZ2VuZGVyKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS91c2VyL2NydWRcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdG5hbWVcIj4gRmlyc3QgbmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgIGlkPVwiZmlyc3RuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImZpcnN0IE5hbWVcIlxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RuYW1lXCI+IExhc3QgbmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhc3RuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgIGlkPVwibGFzdG5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwibGFzdCBOYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPmVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyZW1haWxAZ21haWwuY29tXCJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+cGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbmRlclwiPiBHZW5kZXI8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgIHZhbHVlPXtnZW5kZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5kZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgTWFsZVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgIHZhbHVlPXtnZW5kZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5kZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgRmVtYWxlXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9e1wiRWRpdFwifSAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xuICB0cnkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyL2NydWRcIik7XG4gICAgbGV0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICB1c2VyczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1c2VycykpLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlciIsInVzZXJzIiwicm91dGVyIiwidXNlcklEIiwicXVlcnkiLCJzcGVjaWZpY1VzZXIiLCJmaW5kIiwidXNlciIsIl9pZCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0bmFtZSIsImdlbmRlciIsInNldEdlbmRlciIsImlzUmVhZHkiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJwcm9wcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/[userID].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user/[userID].js"));
module.exports = __webpack_exports__;

})();