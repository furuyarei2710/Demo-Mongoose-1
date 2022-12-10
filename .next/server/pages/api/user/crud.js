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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n//create mongodb connection\n\nconst main = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://admin:admin123@bitsdemo.uq7ferw.mongodb.net/?retryWrites=true&w=majority\");\n    console.log(\"Connected to MongoDB\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGJDb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJCQUEyQjtBQUVLO0FBRWhDLE1BQU1DLE9BQU8sVUFBWTtJQUN2QixNQUFNRCx1REFBZ0IsQ0FBQztJQUN2QkcsUUFBUUMsR0FBRyxDQUFDO0FBQ2Q7QUFFQSxpRUFBZUgsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmdvb3NlMS8uL2NvbmZpZy9kYkNvbm5lY3QuanM/Nzc5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBtb25nb2RiIGNvbm5lY3Rpb25cblxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiK3NydjovL2FkbWluOmFkbWluMTIzQGJpdHNkZW1vLnVxN2ZlcncubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xuICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREInKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW47Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwibWFpbiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/dbConnect.js\n");

/***/ }),

/***/ "(api)/./controller/controller.js":
/*!**********************************!*\
  !*** ./controller/controller.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"putUser\": () => (/* binding */ putUser)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ \"(api)/./models/User.js\");\n\nasync function putUser(req, res) {\n    const { method  } = req;\n    const { ClientId  } = req.query;\n    try {\n        const formData = req.body;\n        if (!formData) throw new Error(\"Invalid data\");\n        await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n            _id: ClientId,\n            formData\n        });\n        res.status(200).json({\n            success: true,\n            data: formData\n        });\n    } catch (error) {\n        res.status(400).json({\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb250cm9sbGVyL2NvbnRyb2xsZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUM7QUFDNUIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFDbkIsTUFBTSxFQUFFRyxTQUFRLEVBQUUsR0FBR0gsSUFBSUksS0FBSztJQUU3QixJQUFJO1FBQ0YsTUFBTUMsV0FBV0wsSUFBSU0sSUFBSTtRQUV6QixJQUFJLENBQUNELFVBQVUsTUFBTSxJQUFJRSxNQUFNLGdCQUFnQjtRQUVqRCxNQUFNVCw4REFBZSxDQUFDO1lBQUVXLEtBQUtOO1lBQVVFO1FBQVE7UUFDL0NKLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUyxJQUFJO1lBQUVDLE1BQU1SO1FBQVE7SUFDbkQsRUFBRSxPQUFPUyxPQUFPO1FBQ2RiLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxLQUFLO1FBQUM7SUFDeEM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vY29udHJvbGxlci9jb250cm9sbGVyLmpzPzgxNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJzIGZyb20gXCIuLi9tb2RlbHMvVXNlclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dFVzZXIocmVxLCByZXMpIHtcblx0Y29uc3QgeyBtZXRob2QgfSA9IHJlcTtcblx0Y29uc3QgeyBDbGllbnRJZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSByZXEuYm9keTtcblxuICAgIGlmICghZm9ybURhdGEpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0YVwiKTtcblxuXHRcdGF3YWl0IFVzZXJzLnVwZGF0ZU9uZSh7IF9pZDogQ2xpZW50SWQsIGZvcm1EYXRhfSk7XG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6IHRydWUsIGRhdGE6IGZvcm1EYXRhfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVXNlcnMiLCJwdXRVc2VyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiQ2xpZW50SWQiLCJxdWVyeSIsImZvcm1EYXRhIiwiYm9keSIsIkVycm9yIiwidXBkYXRlT25lIiwiX2lkIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./controller/controller.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    firstName: {\n        type: String,\n        required: true,\n        maxLength: 255\n    },\n    lastName: {\n        type: String,\n        required: true,\n        maxLength: 255\n    },\n    email: {\n        type: String,\n        required: true,\n        maxLength: 255,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true,\n        maxLength: 16\n    },\n    gender: {\n        type: String,\n        required: true,\n        maxLength: 10,\n        unique: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxXQUFXO1FBQ1RDLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtRQUNkQyxXQUFXO0lBQ2I7SUFDQUMsVUFBVTtRQUNSSixNQUFNQztRQUNOQyxVQUFVLElBQUk7UUFDZEMsV0FBVztJQUNiO0lBQ0FFLE9BQU87UUFDTEwsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RDLFdBQVc7UUFDWEcsUUFBUSxJQUFJO0lBQ2Q7SUFDQUMsVUFBVTtRQUNSUCxNQUFNQztRQUNOQyxVQUFVLElBQUk7UUFDZEMsV0FBVztJQUNiO0lBQ0FLLFFBQVE7UUFDTlIsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RDLFdBQVc7UUFDWEcsUUFBUSxJQUFJO0lBQ2Q7QUFDRjtBQUVBLGlFQUFlViw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgZmlyc3ROYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG1heExlbmd0aDogMjU1XG4gIH0sXG4gIGxhc3ROYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG1heExlbmd0aDogMjU1XG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG1heExlbmd0aDogMjU1LFxuICAgIHVuaXF1ZTogdHJ1ZVxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtYXhMZW5ndGg6IDE2XG4gIH0sXG4gIGdlbmRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtYXhMZW5ndGg6IDEwLFxuICAgIHVuaXF1ZTogdHJ1ZVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsImZpcnN0TmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsImxhc3ROYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImdlbmRlciIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/crud.js":
/*!********************************!*\
  !*** ./pages/api/user/crud.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/dbConnect */ \"(api)/./config/dbConnect.js\");\n/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controller/controller */ \"(api)/./controller/controller.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/mongoose */ \"(api)/./utils/mongoose.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// import connectMongo from \"../../../config/dbConnect\";\n\n\n\n\n\n(0,_config_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nasync function handler(req, res) {\n    try {\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(req.body);\n        res.redirect(\"/\");\n        if (!user) {\n            return res.json({\n                code: \"User not created\"\n            });\n        }\n    } catch (error) {\n        res.status(400).json({\n            status: \"Not able to create user\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9jcnVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNkVBQTZFO0FBRTdFLHdEQUF3RDtBQUVGO0FBQ0c7QUFDakI7QUFDTTtBQUNEO0FBRTdDSSw2REFBSUE7QUFFVyxlQUFlQyxRQUFTQyxHQUFHLEVBQUVDLEdBQUcsRUFBRztJQUNoRCxJQUFHO1FBQ0QsTUFBTUMsT0FBTyxNQUFNTiwyREFBVyxDQUFDSSxJQUFJSSxJQUFJO1FBQ3ZDSCxJQUFJSSxRQUFRLENBQUM7UUFDYixJQUFHLENBQUNILE1BQUs7WUFDUCxPQUFPRCxJQUFJSyxJQUFJLENBQUM7Z0JBQUNDLE1BQU07WUFBa0I7UUFDM0MsQ0FBQztJQUNILEVBQUUsT0FBT0MsT0FBTztRQUNkUCxJQUFJUSxNQUFNLENBQUMsS0FBS0gsSUFBSSxDQUFDO1lBQUNHLFFBQVE7UUFBeUI7SUFDekQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vcGFnZXMvYXBpL3VzZXIvY3J1ZC5qcz80OWI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbi8vIGltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9kYkNvbm5lY3RcIjtcblxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vLi4vY29uZmlnL2RiQ29ubmVjdCc7XG5pbXBvcnQgeyBwdXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlci9jb250cm9sbGVyJztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy9Vc2VyJztcbmltcG9ydCBtb25nb29zZSBmcm9tICcuLi8uLi8uLi91dGlscy9tb25nb29zZSdcbmltcG9ydCBtYWluIGZyb20gJy4uLy4uLy4uL2NvbmZpZy9kYkNvbm5lY3QnO1xuXG5tYWluICgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykgIHtcbiAgdHJ5e1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZShyZXEuYm9keSk7XG4gICAgcmVzLnJlZGlyZWN0KCcvJyk7XG4gICAgaWYoIXVzZXIpe1xuICAgICAgcmV0dXJuIHJlcy5qc29uKHtjb2RlOiAnVXNlciBub3QgY3JlYXRlZCd9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N0YXR1czogJ05vdCBhYmxlIHRvIGNyZWF0ZSB1c2VyJ30pO1xuICB9XG59Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJwdXRVc2VyIiwiVXNlciIsIm1vbmdvb3NlIiwibWFpbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VyIiwiY3JlYXRlIiwiYm9keSIsInJlZGlyZWN0IiwianNvbiIsImNvZGUiLCJlcnJvciIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/crud.js\n");

/***/ }),

/***/ "(api)/./utils/mongoose.js":
/*!***************************!*\
  !*** ./utils/mongoose.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    multipleMongooseToObject: (mongooses)=>{\n        return mongooses.map((mongoose)=>mongoose.toObject());\n    },\n    mongooseToObject: (mongoose)=>{\n        return mongoose ? mongoose.toObject() : mongoose;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nb29zZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWU7SUFDYkEsMEJBQTBCLENBQUNDLFlBQWM7UUFDdkMsT0FBT0EsVUFBVUMsR0FBRyxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLFFBQVE7SUFDdEQ7SUFDQUMsa0JBQWtCLENBQUNGLFdBQWE7UUFDOUIsT0FBT0EsV0FBV0EsU0FBU0MsUUFBUSxLQUFLRCxRQUFRO0lBQ2xEO0FBQ0YsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vdXRpbHMvbW9uZ29vc2UuanM/OGQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIG11bHRpcGxlTW9uZ29vc2VUb09iamVjdDogKG1vbmdvb3NlcykgPT4ge1xuICAgIHJldHVybiBtb25nb29zZXMubWFwKChtb25nb29zZSkgPT4gbW9uZ29vc2UudG9PYmplY3QoKSk7XG4gIH0sXG4gIG1vbmdvb3NlVG9PYmplY3Q6IChtb25nb29zZSkgPT4ge1xuICAgIHJldHVybiBtb25nb29zZSA/IG1vbmdvb3NlLnRvT2JqZWN0KCkgOiBtb25nb29zZTtcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsibXVsdGlwbGVNb25nb29zZVRvT2JqZWN0IiwibW9uZ29vc2VzIiwibWFwIiwibW9uZ29vc2UiLCJ0b09iamVjdCIsIm1vbmdvb3NlVG9PYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/mongoose.js\n");

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