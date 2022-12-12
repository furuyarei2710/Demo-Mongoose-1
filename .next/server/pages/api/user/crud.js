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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./config/dbConnect.js":
/*!*****************************!*\
  !*** ./config/dbConnect.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGJDb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUVyQyxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUMsTUFBTSwrQ0FBOEM7QUFDaEUsQ0FBQztBQUVELE1BQU1DLE1BQU1KLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNRyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ1AsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJQyxNQUFNLDJDQUEwQztBQUM1RCxDQUFDO0FBRUQsSUFBSUgsSUFBeUIsRUFBZTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1MsT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JKLFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNLLEtBQUtDO1FBQzlCSSxPQUFPQyxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUM3QyxDQUFDO0lBQ0RKLGdCQUFnQkUsT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVILGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb25nb29zZTEvLi9jb25maWcvZGJDb25uZWN0LmpzPzc3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJylcclxufVxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuY29uc3Qgb3B0aW9ucyA9IHt9XHJcblxyXG5sZXQgY2xpZW50XHJcbmxldCBjbGllbnRQcm9taXNlXHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWwnKVxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcclxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiTk9ERV9FTlYiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/dbConnect.js\n");

/***/ }),

/***/ "(api)/./controller/controller.js":
/*!**********************************!*\
  !*** ./controller/controller.js ***!
  \**********************************/
/***/ (() => {

eval("// import Users from \"../models/User\";\n// import clientPromise from '../../../config/dbConnect';\n// export async function putUser(req, res) {\n//   const { method } = req;\n//   const { ClientId } = req.query;\n//   try {\n//     const client = await clientPromise;\n//     const db = client.db(\"users\");\n//     const { firstName, lastName, email, password, gender } = req.body;\n//     const id = req.params;\n//     const user = await db\n//       .collection(\"users\")\n//       .updateOne(\n//         { _id: id },\n//         { $set: { firstName, lastName, email, password, gender } }\n//       );\n//     res.json(user);\n//   } catch (error) {\n//     res.status(400).json({ success: false });\n//   }\n// }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb25nb29zZTEvLi9jb250cm9sbGVyL2NvbnRyb2xsZXIuanM/ODE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgVXNlcnMgZnJvbSBcIi4uL21vZGVscy9Vc2VyXCI7XHJcbi8vIGltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJy4uLy4uLy4uL2NvbmZpZy9kYkNvbm5lY3QnO1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dFVzZXIocmVxLCByZXMpIHtcclxuLy8gICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG4vLyAgIGNvbnN0IHsgQ2xpZW50SWQgfSA9IHJlcS5xdWVyeTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbi8vICAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcInVzZXJzXCIpO1xyXG4vLyAgICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGdlbmRlciB9ID0gcmVxLmJvZHk7XHJcbi8vICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXM7XHJcbi8vICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGJcclxuLy8gICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4vLyAgICAgICAudXBkYXRlT25lKFxyXG4vLyAgICAgICAgIHsgX2lkOiBpZCB9LFxyXG4vLyAgICAgICAgIHsgJHNldDogeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGdlbmRlciB9IH1cclxuLy8gICAgICAgKTtcclxuLy8gICAgIHJlcy5qc29uKHVzZXIpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDLHlEQUF5RDtBQUV6RCw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLG9DQUFvQztBQUVwQyxVQUFVO0FBQ1YsMENBQTBDO0FBQzFDLHFDQUFxQztBQUNyQyx5RUFBeUU7QUFDekUsNkJBQTZCO0FBQzdCLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBQ3BCLHVCQUF1QjtBQUN2QixxRUFBcUU7QUFDckUsV0FBVztBQUNYLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsZ0RBQWdEO0FBQ2hELE1BQU07QUFDTixJQUFJIiwiZmlsZSI6IihhcGkpLy4vY29udHJvbGxlci9jb250cm9sbGVyLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./controller/controller.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    firstName: {\n        type: String,\n        required: true,\n        maxLength: 255\n    },\n    lastName: {\n        type: String,\n        required: true,\n        maxLength: 255\n    },\n    email: {\n        type: String,\n        required: true,\n        maxLength: 255,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true,\n        maxLength: 16\n    },\n    gender: {\n        type: String,\n        required: true,\n        maxLength: 10,\n        unique: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxXQUFXO1FBQ1RDLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtRQUNkQyxXQUFXO0lBQ2I7SUFDQUMsVUFBVTtRQUNSSixNQUFNQztRQUNOQyxVQUFVLElBQUk7UUFDZEMsV0FBVztJQUNiO0lBQ0FFLE9BQU87UUFDTEwsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RDLFdBQVc7UUFDWEcsUUFBUSxJQUFJO0lBQ2Q7SUFDQUMsVUFBVTtRQUNSUCxNQUFNQztRQUNOQyxVQUFVLElBQUk7UUFDZEMsV0FBVztJQUNiO0lBQ0FLLFFBQVE7UUFDTlIsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RDLFdBQVc7UUFDWEcsUUFBUSxJQUFJO0lBQ2Q7QUFDRjtBQUVBLGlFQUFlViw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgZmlyc3ROYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIG1heExlbmd0aDogMjU1XHJcbiAgfSxcclxuICBsYXN0TmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBtYXhMZW5ndGg6IDI1NVxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbWF4TGVuZ3RoOiAyNTUsXHJcbiAgICB1bmlxdWU6IHRydWVcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIG1heExlbmd0aDogMTZcclxuICB9LFxyXG4gIGdlbmRlcjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBtYXhMZW5ndGg6IDEwLFxyXG4gICAgdW5pcXVlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsImZpcnN0TmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsImxhc3ROYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImdlbmRlciIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/crud.js":
/*!********************************!*\
  !*** ./pages/api/user/crud.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createUser)\n/* harmony export */ });\n/* harmony import */ var _config_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/dbConnect */ \"(api)/./config/dbConnect.js\");\n/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controller/controller */ \"(api)/./controller/controller.js\");\n/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_controller_controller__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/mongoose */ \"(api)/./utils/mongoose.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// import connectMongo from \"../../../config/dbConnect\";\n\n\n\n\nasync function createUser(req, res) {\n    const { query: { id  }  } = req;\n    const { email , firstName , lastName , gender  } = req.body;\n    const obj = {\n        email,\n        firstName,\n        lastName,\n        gender\n    };\n    console.log(obj);\n    const { method  } = req;\n    // await dbConnect();\n    switch(method){\n        case \"GET\":\n            try {\n                const client = await _config_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n                const db = client.db(\"users\");\n                const users = await db.collection(\"users\").find({}).toArray();\n                res.json(users);\n            } catch (error) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const client1 = await _config_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n                const db1 = client1.db(\"users\");\n                const { firstName: firstName1 , lastName: lastName1 , email: email1 , password , gender: gender1  } = req.body;\n                const user = await db1.collection(\"users\").insert({\n                    firstName: firstName1,\n                    lastName: lastName1,\n                    email: email1,\n                    password,\n                    gender: gender1\n                });\n                res.json(user);\n            } catch (error1) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        case \"PUT\" /* Edit a model by its ID */ :\n            try {} catch (error2) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9jcnVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZFQUE2RTtBQUU3RSx3REFBd0Q7QUFFRjtBQUNHO0FBQ2pCO0FBQ087QUFFaEMsZUFBZUksV0FBV0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDakQsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLEdBQUUsRUFBRSxHQUNkLEdBQUdIO0lBQ0osTUFBTSxFQUFFSSxNQUFLLEVBQUVDLFVBQVMsRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUUsR0FBR1AsSUFBSVEsSUFBSTtJQUN2RCxNQUFNQyxNQUFNO1FBQ1ZMO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0Y7SUFDQUcsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU0sRUFBRUcsT0FBTSxFQUFFLEdBQUdaO0lBQ25CLHFCQUFxQjtJQUNyQixPQUFRWTtRQUNOLEtBQUs7WUFDSCxJQUFJO2dCQUVGLE1BQU1DLFNBQVMsTUFBTWxCLHlEQUFhQTtnQkFDbEMsTUFBTW1CLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztnQkFFckIsTUFBTUMsUUFBUSxNQUFNRCxHQUFHRSxVQUFVLENBQUMsU0FBU0MsSUFBSSxDQUFDLENBQUMsR0FBR0MsT0FBTztnQkFFM0RqQixJQUFJa0IsSUFBSSxDQUFDSjtZQUNYLEVBQUUsT0FBT0ssT0FBTztnQkFDZG5CLElBQUlvQixNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDO29CQUFFRyxTQUFTLEtBQUs7Z0JBQUM7WUFDeEM7WUFDQSxLQUFNO1FBQ1IsS0FBSztZQUNILElBQUk7Z0JBQ0YsTUFBTVQsVUFBUyxNQUFNbEIseURBQWFBO2dCQUNsQyxNQUFNbUIsTUFBS0QsUUFBT0MsRUFBRSxDQUFDO2dCQUNyQixNQUFNLEVBQUVULFdBQUFBLFdBQVMsRUFBRUMsVUFBQUEsVUFBUSxFQUFFRixPQUFBQSxPQUFLLEVBQUVtQixTQUFRLEVBQUVoQixRQUFBQSxRQUFNLEVBQUUsR0FBR1AsSUFBSVEsSUFBSTtnQkFFakUsTUFBTWdCLE9BQU8sTUFBTVYsSUFBR0UsVUFBVSxDQUFDLFNBQVNTLE1BQU0sQ0FBQztvQkFDL0NwQixXQUFBQTtvQkFDQUMsVUFBQUE7b0JBQ0FGLE9BQUFBO29CQUNBbUI7b0JBQ0FoQixRQUFBQTtnQkFDRjtnQkFDQU4sSUFBSWtCLElBQUksQ0FBQ0s7WUFDWCxFQUFFLE9BQU9KLFFBQU87Z0JBQ2RuQixJQUFJb0IsTUFBTSxDQUFDLEtBQUtGLElBQUksQ0FBQztvQkFBRUcsU0FBUyxLQUFLO2dCQUFDO1lBQ3hDO1lBQ0EsS0FBTTtRQUNSLEtBQUssTUFBTSwwQkFBMEI7WUFDbkMsSUFBSSxDQUdKLEVBQUUsT0FBT0YsUUFBTztnQkFDZG5CLElBQUlvQixNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDO29CQUFFRyxTQUFTLEtBQUs7Z0JBQUM7WUFDeEM7WUFDQSxLQUFNO1FBRVI7WUFDRXJCLElBQUlvQixNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDO2dCQUFFRyxTQUFTLEtBQUs7WUFBQztZQUN0QyxLQUFNO0lBQ1Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uZ29vc2UxLy4vcGFnZXMvYXBpL3VzZXIvY3J1ZC5qcz80OWI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcblxyXG4vLyBpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi8uLi9jb25maWcvZGJDb25uZWN0XCI7XHJcblxyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2RiQ29ubmVjdFwiO1xyXG5pbXBvcnQgeyBwdXRVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlclwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCIuLi8uLi8uLi91dGlscy9tb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgfSA9IHJlcVxyXG4gIGNvbnN0IHsgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGdlbmRlciB9ID0gcmVxLmJvZHk7XHJcbiAgY29uc3Qgb2JqID0ge1xyXG4gICAgZW1haWwsXHJcbiAgICBmaXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZSxcclxuICAgIGdlbmRlcixcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKG9iaik7XHJcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuICAvLyBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJ1c2Vyc1wiKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJlcy5qc29uKHVzZXJzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwidXNlcnNcIik7XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGdlbmRlciB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuaW5zZXJ0KHtcclxuICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgIGdlbmRlcixcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXMuanNvbih1c2VyKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBVVFwiIC8qIEVkaXQgYSBtb2RlbCBieSBpdHMgSUQgKi86XHJcbiAgICAgIHRyeSB7XHJcbiAgICBcclxuICAgICAgICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsInB1dFVzZXIiLCJVc2VyIiwibW9uZ29vc2UiLCJjcmVhdGVVc2VyIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJnZW5kZXIiLCJib2R5Iiwib2JqIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImNsaWVudCIsImRiIiwidXNlcnMiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJzdWNjZXNzIiwicGFzc3dvcmQiLCJ1c2VyIiwiaW5zZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/crud.js\n");

/***/ }),

/***/ "(api)/./utils/mongoose.js":
/*!***************************!*\
  !*** ./utils/mongoose.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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