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
exports.id = "pages/api/user/crud";
exports.ids = ["pages/api/user/crud"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./config/dbConnect.js":
/*!*****************************!*\
  !*** ./config/dbConnect.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n//create mongodb connection\n\nconst main = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://admin:admin123@bitsdemo.uq7ferw.mongodb.net/?retryWrites=true&w=majority\");\n    console.log(\"Connected to MongoDB\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGJDb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJCQUEyQjtBQUVLO0FBRWhDLE1BQU1DLE9BQU8sVUFBWTtJQUN2QixNQUFNRCx1REFBZ0IsQ0FBQztJQUN2QkcsUUFBUUMsR0FBRyxDQUFDO0FBQ2Q7QUFFQSxpRUFBZUgsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmdvb3NlMS8uL2NvbmZpZy9kYkNvbm5lY3QuanM/Nzc5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBtb25nb2RiIGNvbm5lY3Rpb25cclxuXHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hZG1pbjphZG1pbjEyM0BiaXRzZGVtby51cTdmZXJ3Lm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREInKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW47Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwibWFpbiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/dbConnect.js\n");

/***/ }),

/***/ "(api)/./controller/controller.js":
/*!**********************************!*\
  !*** ./controller/controller.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"putUser\": () => (/* binding */ putUser)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ \"(api)/./models/User.js\");\n\nasync function putUser(req, res) {\n    const { method  } = req;\n    const { ClientId  } = req.query;\n    try {\n        const formData = req.body;\n        if (!formData) throw new Error(\"Invalid data\");\n        await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n            _id: ClientId,\n            formData\n        });\n        res.status(200).json({\n            success: true,\n            data: formData\n        });\n    } catch (error) {\n        res.status(400).json({\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb250cm9sbGVyL2NvbnRyb2xsZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUM7QUFDNUIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFDbkIsTUFBTSxFQUFFRyxTQUFRLEVBQUUsR0FBR0gsSUFBSUksS0FBSztJQUU3QixJQUFJO1FBQ0YsTUFBTUMsV0FBV0wsSUFBSU0sSUFBSTtRQUV6QixJQUFJLENBQUNELFVBQVUsTUFBTSxJQUFJRSxNQUFNLGdCQUFnQjtRQUVqRCxNQUFNVCw4REFBZSxDQUFDO1lBQUVXLEtBQUtOO1lBQVVFO1FBQVE7UUFDL0NKLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUyxJQUFJO1lBQUVDLE1BQU1SO1FBQVE7SUFDbkQsRUFBRSxPQUFPUyxPQUFPO1FBQ2RiLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxLQUFLO1FBQUM7SUFDeEM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vY29udHJvbGxlci9jb250cm9sbGVyLmpzPzgxNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJzIGZyb20gXCIuLi9tb2RlbHMvVXNlclwiO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHV0VXNlcihyZXEsIHJlcykge1xyXG5cdGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcblx0Y29uc3QgeyBDbGllbnRJZCB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSByZXEuYm9keTtcclxuXHJcbiAgICBpZiAoIWZvcm1EYXRhKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGFcIik7XHJcblxyXG5cdFx0YXdhaXQgVXNlcnMudXBkYXRlT25lKHsgX2lkOiBDbGllbnRJZCwgZm9ybURhdGF9KTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOiB0cnVlLCBkYXRhOiBmb3JtRGF0YX0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJVc2VycyIsInB1dFVzZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJDbGllbnRJZCIsInF1ZXJ5IiwiZm9ybURhdGEiLCJib2R5IiwiRXJyb3IiLCJ1cGRhdGVPbmUiLCJfaWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./controller/controller.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    firstName: {\n        type: String,\n        required: true,\n        maxLength: 255\n    },\n    lastName: {\n        type: String,\n        required: true,\n        maxLength: 255\n    },\n    email: {\n        type: String,\n        required: true,\n        maxLength: 255,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true,\n        maxLength: 16\n    },\n    gender: {\n        type: String,\n        required: true,\n        maxLength: 10,\n        unique: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxXQUFXO1FBQ1RDLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtRQUNkQyxXQUFXO0lBQ2I7SUFDQUMsVUFBVTtRQUNSSixNQUFNQztRQUNOQyxVQUFVLElBQUk7UUFDZEMsV0FBVztJQUNiO0lBQ0FFLE9BQU87UUFDTEwsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RDLFdBQVc7UUFDWEcsUUFBUSxJQUFJO0lBQ2Q7SUFDQUMsVUFBVTtRQUNSUCxNQUFNQztRQUNOQyxVQUFVLElBQUk7UUFDZEMsV0FBVztJQUNiO0lBQ0FLLFFBQVE7UUFDTlIsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RDLFdBQVc7UUFDWEcsUUFBUSxJQUFJO0lBQ2Q7QUFDRjtBQUVBLGlFQUFlViw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgZmlyc3ROYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIG1heExlbmd0aDogMjU1XHJcbiAgfSxcclxuICBsYXN0TmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBtYXhMZW5ndGg6IDI1NVxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbWF4TGVuZ3RoOiAyNTUsXHJcbiAgICB1bmlxdWU6IHRydWVcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIG1heExlbmd0aDogMTZcclxuICB9LFxyXG4gIGdlbmRlcjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBtYXhMZW5ndGg6IDEwLFxyXG4gICAgdW5pcXVlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsImZpcnN0TmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsImxhc3ROYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImdlbmRlciIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/crud.js":
/*!********************************!*\
  !*** ./pages/api/user/crud.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/dbConnect */ \"(api)/./config/dbConnect.js\");\n/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controller/controller */ \"(api)/./controller/controller.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/mongoose */ \"(api)/./utils/mongoose.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// import connectMongo from \"../../../config/dbConnect\";\n\n\n\n\n\n(0,_config_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nasync function handler(req, res) {\n    try {\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(req.body);\n        res.redirect(\"/\");\n        if (!user) {\n            return res.json({\n                code: \"User not created\"\n            });\n        }\n    } catch (error) {\n        res.status(400).json({\n            status: \"Not able to create user\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9jcnVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNkVBQTZFO0FBRTdFLHdEQUF3RDtBQUVGO0FBQ0c7QUFDakI7QUFDTTtBQUNEO0FBRTdDSSw2REFBSUE7QUFFVyxlQUFlQyxRQUFTQyxHQUFHLEVBQUVDLEdBQUcsRUFBRztJQUNoRCxJQUFHO1FBQ0QsTUFBTUMsT0FBTyxNQUFNTiwyREFBVyxDQUFDSSxJQUFJSSxJQUFJO1FBQ3ZDSCxJQUFJSSxRQUFRLENBQUM7UUFDYixJQUFHLENBQUNILE1BQUs7WUFDUCxPQUFPRCxJQUFJSyxJQUFJLENBQUM7Z0JBQUNDLE1BQU07WUFBa0I7UUFDM0MsQ0FBQztJQUNILEVBQUUsT0FBT0MsT0FBTztRQUNkUCxJQUFJUSxNQUFNLENBQUMsS0FBS0gsSUFBSSxDQUFDO1lBQUNHLFFBQVE7UUFBeUI7SUFDekQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vcGFnZXMvYXBpL3VzZXIvY3J1ZC5qcz80OWI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcblxyXG4vLyBpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi8uLi9jb25maWcvZGJDb25uZWN0XCI7XHJcblxyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi8uLi9jb25maWcvZGJDb25uZWN0JztcclxuaW1wb3J0IHsgcHV0VXNlciB9IGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJy4uLy4uLy4uL3V0aWxzL21vbmdvb3NlJ1xyXG5pbXBvcnQgbWFpbiBmcm9tICcuLi8uLi8uLi9jb25maWcvZGJDb25uZWN0JztcclxuXHJcbm1haW4gKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykgIHtcclxuICB0cnl7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgcmVzLnJlZGlyZWN0KCcvJyk7XHJcbiAgICBpZighdXNlcil7XHJcbiAgICAgIHJldHVybiByZXMuanNvbih7Y29kZTogJ1VzZXIgbm90IGNyZWF0ZWQnfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdGF0dXM6ICdOb3QgYWJsZSB0byBjcmVhdGUgdXNlcid9KTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsInB1dFVzZXIiLCJVc2VyIiwibW9uZ29vc2UiLCJtYWluIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXIiLCJjcmVhdGUiLCJib2R5IiwicmVkaXJlY3QiLCJqc29uIiwiY29kZSIsImVycm9yIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/crud.js\n");

/***/ }),

/***/ "(api)/./utils/mongoose.js":
/*!***************************!*\
  !*** ./utils/mongoose.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    multipleMongooseToObject: (mongooses)=>{\n        return mongooses.map((mongoose)=>mongoose.toObject());\n    },\n    mongooseToObject: (mongoose)=>{\n        return mongoose ? mongoose.toObject() : mongoose;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nb29zZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWU7SUFDYkEsMEJBQTBCLENBQUNDLFlBQWM7UUFDdkMsT0FBT0EsVUFBVUMsR0FBRyxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLFFBQVE7SUFDdEQ7SUFDQUMsa0JBQWtCLENBQUNGLFdBQWE7UUFDOUIsT0FBT0EsV0FBV0EsU0FBU0MsUUFBUSxLQUFLRCxRQUFRO0lBQ2xEO0FBQ0YsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vdXRpbHMvbW9uZ29vc2UuanM/OGQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbXVsdGlwbGVNb25nb29zZVRvT2JqZWN0OiAobW9uZ29vc2VzKSA9PiB7XHJcbiAgICByZXR1cm4gbW9uZ29vc2VzLm1hcCgobW9uZ29vc2UpID0+IG1vbmdvb3NlLnRvT2JqZWN0KCkpO1xyXG4gIH0sXHJcbiAgbW9uZ29vc2VUb09iamVjdDogKG1vbmdvb3NlKSA9PiB7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UgPyBtb25nb29zZS50b09iamVjdCgpIDogbW9uZ29vc2U7XHJcbiAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbIm11bHRpcGxlTW9uZ29vc2VUb09iamVjdCIsIm1vbmdvb3NlcyIsIm1hcCIsIm1vbmdvb3NlIiwidG9PYmplY3QiLCJtb25nb29zZVRvT2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/mongoose.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/crud.js"));
module.exports = __webpack_exports__;

})();