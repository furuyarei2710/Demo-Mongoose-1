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
exports.id = "pages/api/user/edit";
exports.ids = ["pages/api/user/edit"];
exports.modules = {

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

/***/ "(api)/./pages/api/user/edit.js":
/*!********************************!*\
  !*** ./pages/api/user/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EditUser)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function EditUser(req, res) {\n    // const { userID } = router.query;\n    const { firstName , lastName , email , password , gender  } = req.body;\n    console.log(firstName, lastName, email, password, gender);\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9lZGl0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ047QUFFbkIsZUFBZUUsU0FBU0MsR0FBRyxFQUFFQyxHQUFHLEVBQUM7SUFDOUMsbUNBQW1DO0lBQ25DLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUUsR0FBR04sSUFBSU8sSUFBSTtJQUNqRUMsUUFBUUMsR0FBRyxDQUFDUCxXQUFXQyxVQUFVQyxPQUFPQyxVQUFVQztBQUNwRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vcGFnZXMvYXBpL3VzZXIvZWRpdC5qcz9kYTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEVkaXRVc2VyKHJlcSwgcmVzKXtcbiAgLy8gY29uc3QgeyB1c2VySUQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGdlbmRlciB9ID0gcmVxLmJvZHk7XG4gIGNvbnNvbGUubG9nKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZ2VuZGVyKVxufTtcblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkVkaXRVc2VyIiwicmVxIiwicmVzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZ2VuZGVyIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/edit.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/edit.js"));
module.exports = __webpack_exports__;

})();