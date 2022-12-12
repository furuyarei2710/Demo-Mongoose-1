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
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Register() {\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [firstname, setfirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastname, setLastname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"auth-form-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sign up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: \"/api/user/crud\",\n                method: \"POST\",\n                className: \"register-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"firstname\",\n                        children: \" First name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: firstname,\n                        onChange: (e)=>setfirstName(e.target.value),\n                        type: \" firstname\",\n                        name: \"firstName\",\n                        id: \"firstname\",\n                        placeholder: \"first Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"lastname\",\n                        children: \" Last name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: lastname,\n                        onChange: (e)=>setLastname(e.target.value),\n                        type: \" lastname\",\n                        name: \"lastName\",\n                        id: \"lastname\",\n                        placeholder: \"last Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        type: \"email\",\n                        placeholder: \"youremail@gmail.com\",\n                        id: \"email\",\n                        name: \"email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        type: \"password\",\n                        placeholder: \"********\",\n                        id: \"password\",\n                        name: \"password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"gender\",\n                        children: \" Gender\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"radio\",\n                        name: \"gender\",\n                        value: \"Male\",\n                        onChange: (e)=>setGender(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this),\n                    \" Male\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"radio\",\n                        name: \"gender\",\n                        value: \"Female\",\n                        onChange: (e)=>setGender(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this),\n                    \" Female\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"link-btn\",\n                onClick: ()=>props.onFormSwitch(\"login\"),\n                children: \"Already have an account? Login here.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ryan Tran\\\\Documents\\\\GitHub\\\\Demo-Mongoose-1\\\\pages\\\\register.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF3QztBQUV6QixTQUFTRSxXQUFVO0lBQzlCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsVUFBU0MsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBRTtJQUN6QyxNQUFNLENBQUNVLFFBQU9DLFVBQVUsR0FBR1gsK0NBQVFBLENBQUU7SUFHckMscUJBQ0ksOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNSLDhEQUFDQztnQkFBS0MsUUFBTztnQkFBaUJDLFFBQU87Z0JBQU9KLFdBQVU7O2tDQUNsRCw4REFBQ0s7d0JBQU1DLFNBQVE7a0NBQVk7Ozs7OztrQ0FDM0IsOERBQUNDO3dCQUFNQyxPQUFPZjt3QkFBV2dCLFVBQVUsQ0FBQ0MsSUFBTWhCLGFBQWFnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQUdJLE1BQU07d0JBQWFDLE1BQUs7d0JBQVlDLElBQUc7d0JBQVlDLGFBQVk7Ozs7OztrQ0FDdkksOERBQUNWO3dCQUFNQyxTQUFRO2tDQUFXOzs7Ozs7a0NBQzFCLDhEQUFDQzt3QkFBTUMsT0FBT2I7d0JBQVVjLFVBQVUsQ0FBQ0MsSUFBTWQsWUFBWWMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUFFSSxNQUFNO3dCQUFZQyxNQUFLO3dCQUFXQyxJQUFHO3dCQUFXQyxhQUFZOzs7Ozs7a0NBQ2pJLDhEQUFDVjt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O2tDQUN2Qiw4REFBQ0M7d0JBQU1DLE9BQU9uQjt3QkFBT29CLFVBQVUsQ0FBQ0MsSUFBTXBCLFNBQVNvQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQUVJLE1BQUs7d0JBQVFHLGFBQVk7d0JBQXNCRCxJQUFHO3dCQUFRRCxNQUFLOzs7Ozs7a0NBQzlILDhEQUFDUjt3QkFBTUMsU0FBUTtrQ0FBVzs7Ozs7O2tDQUMxQiw4REFBQ0M7d0JBQU1DLE9BQU9qQjt3QkFBVWtCLFVBQVUsQ0FBQ0MsSUFBTWxCLFlBQVlrQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQUdJLE1BQUs7d0JBQVdHLGFBQVk7d0JBQVdELElBQUc7d0JBQVdELE1BQUs7Ozs7OztrQ0FDaEksOERBQUNSO3dCQUFNQyxTQUFRO2tDQUFTOzs7Ozs7a0NBQ3hCLDhEQUFDQzt3QkFBTUssTUFBTTt3QkFBUUMsTUFBTTt3QkFBU0wsT0FBUTt3QkFBT0MsVUFBWUMsQ0FBQUEsSUFBR1osVUFBVVksRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7b0JBQUs7a0NBQy9GLDhEQUFDRDt3QkFBTUssTUFBTTt3QkFBUUMsTUFBTTt3QkFBU0wsT0FBUTt3QkFBU0MsVUFBWUMsQ0FBQUEsSUFBR1osVUFBVVksRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7b0JBQUs7a0NBRWpHLDhEQUFDRDt3QkFBTUssTUFBSzt3QkFBU0osT0FBTzs7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ1E7Z0JBQU9oQixXQUFVO2dCQUFXaUIsU0FBUyxJQUFNQyxNQUFNQyxZQUFZLENBQUM7MEJBQVU7Ozs7Ozs7Ozs7OztBQUdqRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vcGFnZXMvcmVnaXN0ZXIuanN4P2U4MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3Rlcigpe1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtmaXJzdG5hbWUsIHNldGZpcnN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGFzdG5hbWUsc2V0TGFzdG5hbWVdID0gdXNlU3RhdGUgKCcnKTtcclxuICAgIGNvbnN0IFtnZW5kZXIsc2V0R2VuZGVyXSA9IHVzZVN0YXRlICgnJyk7XHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyPlNpZ24gdXA8L2gyPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvdXNlci9jcnVkXCIgbWV0aG9kPVwiUE9TVFwiIGNsYXNzTmFtZT1cInJlZ2lzdGVyLWZvcm1cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdG5hbWVcIj4gRmlyc3QgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17Zmlyc3RuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldGZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9IHR5cGUgPVwiIGZpcnN0bmFtZVwiIG5hbWU9XCJmaXJzdE5hbWVcIiBpZD1cImZpcnN0bmFtZVwiIHBsYWNlaG9sZGVyPVwiZmlyc3QgTmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdG5hbWVcIj4gTGFzdCBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtsYXN0bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0bmFtZShlLnRhcmdldC52YWx1ZSl9dHlwZSA9XCIgbGFzdG5hbWVcIiBuYW1lPVwibGFzdE5hbWVcIiBpZD1cImxhc3RuYW1lXCIgcGxhY2Vob2xkZXI9XCJsYXN0IE5hbWVcIiAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+ZW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX10eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cInlvdXJlbWFpbEBnbWFpbC5jb21cIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPnBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiKioqKioqKipcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5kZXJcIj4gR2VuZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwicmFkaW9cIiBuYW1lID1cImdlbmRlclwiIHZhbHVlID0gXCJNYWxlXCIgb25DaGFuZ2UgPSB7ZT0+c2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKX0gLz4gTWFsZVxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJyYWRpb1wiIG5hbWUgPVwiZ2VuZGVyXCIgdmFsdWUgPSBcIkZlbWFsZVwiIG9uQ2hhbmdlID0ge2U9PnNldEdlbmRlcihlLnRhcmdldC52YWx1ZSl9IC8+IEZlbWFsZVxyXG4gICAgXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9e1wiU2lnbiBVcFwifSAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxpbmstYnRuXCIgb25DbGljaz17KCkgPT4gcHJvcHMub25Gb3JtU3dpdGNoKCdsb2dpbicpfT5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gTG9naW4gaGVyZS48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZWdpc3RlciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZmlyc3RuYW1lIiwic2V0Zmlyc3ROYW1lIiwibGFzdG5hbWUiLCJzZXRMYXN0bmFtZSIsImdlbmRlciIsInNldEdlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsImFjdGlvbiIsIm1ldGhvZCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwicHJvcHMiLCJvbkZvcm1Td2l0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.jsx\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.jsx"));
module.exports = __webpack_exports__;

})();