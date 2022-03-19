/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_4___default().config();\n\nconst compile = app => {\n  if (true) {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()((_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: (_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/home/M3ida/Desktop/mern-rs4e/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/M3ida/Desktop/mern-rs4e/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-rs4e/./server/devBundle.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nconst excelJS = __webpack_require__(/*! exceljs */ \"exceljs\");\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nlet port = process.env.PORT || 3000;\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default().urlencoded({\n  extended: false\n}));\nmongoose__WEBPACK_IMPORTED_MODULE_4___default().connect(process.env.MONGODB);\nconst Rs4e = mongoose__WEBPACK_IMPORTED_MODULE_4___default().model('Rs4e', {\n  date: Date,\n  data: JSON\n});\nconst UMa = mongoose__WEBPACK_IMPORTED_MODULE_4___default().model('UMa', {\n  date: Date,\n  data: JSON\n});\nconst Rs4e_emp = mongoose__WEBPACK_IMPORTED_MODULE_4___default().model('Rs4eEmp', {\n  date: Date,\n  data: JSON\n});\nconst UMaEmp = mongoose__WEBPACK_IMPORTED_MODULE_4___default().model('UMaEmp', {\n  date: Date,\n  data: JSON\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_4___default().model('User', {\n  username: String,\n  password: String\n});\n_devBundle__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compile(app);\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_2___default().join(CURRENT_WORKING_DIR, 'dist')));\napp.post('/api/save', (req, res) => {\n  switch (req.query.quest) {\n    case 'QuestRS4E':\n      const entry1 = new Rs4e({\n        date: new Date(),\n        data: JSON.parse(req.body.answers)\n      });\n      entry1.save();\n      break;\n\n    case 'QuestUMA':\n      const entry2 = new UMa({\n        date: new Date(),\n        data: JSON.parse(req.body.answers)\n      });\n      entry2.save();\n      break;\n\n    case 'QuestRS4EEmp':\n      const entry3 = new Rs4e_emp({\n        date: new Date(),\n        data: JSON.parse(req.body.answers)\n      });\n      entry3.save();\n      break;\n\n    case 'QuestUMAEmp':\n      const entry4 = new UMaEmp({\n        date: new Date(),\n        data: JSON.parse(req.body.answers)\n      });\n      entry4.save();\n      break;\n  }\n});\n\nfunction verifyJWT(req, res, next) {\n  const token = req.headers['x-access-token']?.split(' ')[1];\n\n  if (token) {\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().verify(token, process.env.JWT_SECRET, (err, decoded) => {\n      if (err) return res.json({\n        isLoggedIn: false,\n        message: err\n      });\n      req.user = {};\n      req.user.id = decoded.id;\n      req.user.username = decoded.username;\n      next();\n    });\n  } else {\n    res.json({\n      message: 'Incorrect token given',\n      isLoggedIn: false\n    });\n  }\n}\n\napp.post('/api/admin', verifyJWT, (req, res) => {\n  res.json({\n    isLoggedIn: true,\n    username: req.user.username\n  });\n}); // app.post('/admin/register', async (req, res) => {\n//     const user = req.body;\n//     const takenUsername = await User.findOne({ username: user.username });\n//     if (takenUsername) {\n//         res.json({ message: 'Username taken' });\n//     } else {\n//         user.password = await bcrypt.hash(user.password, 10);\n//         const dbUser = new User({ username: user.username, password: user.password });\n//         dbUser.save();\n//         res.json({ message: 'success' });\n//     }\n// });\n\napp.post('/admin/login', (req, res) => {\n  const user = req.body;\n  User.findOne({\n    username: user.username\n  }).then(dbUser => {\n    if (!dbUser) {\n      return res.json({\n        message: 'user not found'\n      });\n    }\n\n    bcrypt__WEBPACK_IMPORTED_MODULE_7___default().compare(user.password, dbUser.password).then(isCorrect => {\n      if (isCorrect) {\n        const payload = {\n          id: dbUser._id,\n          username: dbUser.username\n        };\n        jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().sign(payload, process.env.JWT_SECRET, {\n          expiresIn: 604800\n          /*7 days*/\n\n        }, (err, token) => {\n          if (err) return res.json({\n            message: err\n          });\n          return res.json({\n            message: 'success',\n            token: 'Bearer ' + token\n          });\n        });\n      } else {\n        return res.json({\n          message: 'wrong password'\n        });\n      }\n    });\n  });\n});\napp.post('/admin/excel', verifyJWT, async (req, res) => {\n  let db;\n\n  switch (req.query.quest) {\n    case 'QuestRS4E':\n      db = Rs4e;\n      break;\n\n    case 'QuestUMA':\n      db = UMa;\n      break;\n\n    case 'QuestRS4EEmp':\n      db = Rs4e_emp;\n      break;\n\n    case 'QuestUMAEmp':\n      db = UMaEmp;\n      break;\n  }\n\n  const workbook = new excelJS.Workbook(); // Create a new workbook\n\n  const worksheet = workbook.addWorksheet('My Users'); // New Worksheet\n\n  const path = __dirname + '/files'; // Path to download excel  // Column for data in excel. key must match data key\n\n  let colunas = [{\n    header: 'Data',\n    key: 'date',\n    width: 10\n  }];\n  const post = await db.findOne({}, {}, {\n    sort: {\n      created_at: -1\n    }\n  });\n  Object.keys(post.data).forEach(function (k) {\n    if (typeof post.data[k] === 'object') {\n      Object.keys(post.data[k]).forEach(function (j) {\n        colunas.push({\n          header: k + '.' + j,\n          key: k + '.' + j,\n          width: 10\n        });\n      });\n    } else {\n      colunas.push({\n        header: k,\n        key: k,\n        width: 10\n      });\n    }\n  });\n  console.log(colunas);\n  worksheet.columns = colunas;\n  const entries = await db.find(); // Looping through User data\n\n  let counter = 1;\n  entries.forEach(entry => {\n    const temp = entry.data;\n    Object.keys(temp).forEach(question => {\n      if (typeof temp[question] === 'object') {\n        Object.keys(temp[question]).forEach(function (subquestion) {\n          temp[question + '.' + subquestion] = temp[question][subquestion];\n        });\n        delete temp[question];\n      }\n    });\n    temp['date'] = entry.date;\n    worksheet.addRow(temp); // Add data in worksheet\n\n    counter++;\n  }); // Making first line in excel bold\n\n  worksheet.getRow(1).eachCell(cell => {\n    cell.font = {\n      bold: true\n    };\n  });\n\n  try {\n    const data = await workbook.xlsx.writeFile(`${path}/ficheiro.xlsx`).then(() => {\n      res.send({\n        status: 'success',\n        message: 'file successfully downloaded',\n        path: `${path}/ficheiro.xlsx`\n      });\n    });\n  } catch (err) {\n    res.send({\n      status: 'error',\n      message: err\n    });\n  }\n});\napp.get('*', (req, res) => {\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n});\napp.listen(port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', port);\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/home/M3ida/Desktop/mern-rs4e/server/server.js\");\n  reactHotLoader.register(port, \"port\", \"/home/M3ida/Desktop/mern-rs4e/server/server.js\");\n  reactHotLoader.register(Rs4e, \"Rs4e\", \"/home/M3ida/Desktop/mern-rs4e/server/server.js\");\n  reactHotLoader.register(UMa, \"UMa\", \"/home/M3ida/Desktop/mern-rs4e/server/server.js\");\n  reactHotLoader.register(Rs4e_emp, \"Rs4e_emp\", \"/home/M3ida/Desktop/mern-rs4e/server/server.js\");\n  reactHotLoader.register(UMaEmp, \"UMaEmp\", \"/home/M3ida/Desktop/mern-rs4e/server/server.js\");\n  reactHotLoader.register(User, \"User\", \"/home/M3ida/Desktop/mern-rs4e/server/server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/M3ida/Desktop/mern-rs4e/server/server.js\");\n  reactHotLoader.register(verifyJWT, \"verifyJWT\", \"/home/M3ida/Desktop/mern-rs4e/server/server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-rs4e/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = () => {\n  return `<!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\" />\n        <link rel=\"icon\" href=\"./favicon.ico\">\n        <script src=\"https://code.jquery.com/jquery-3.6.0.slim.js\" integrity=\"sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=\" crossorigin=\"anonymous\"></script>\n        <title>Questionário</title>\n      </head>\n      <body>\n        <noscript>You need to enable JavaScript to run this app.</noscript>\n        <div id=\"root\"></div>\n        <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n      </body>\n    </html>\n    `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/M3ida/Desktop/mern-rs4e/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-rs4e/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: 'browser',\n  mode: 'development',\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/index.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.(png|jpe?g|gif)$/i,\n      use: [{\n        loader: 'file-loader'\n      }]\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/M3ida/Desktop/mern-rs4e/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/home/M3ida/Desktop/mern-rs4e/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-rs4e/./webpack.config.client.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "exceljs":
/*!**************************!*\
  !*** external "exceljs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("exceljs");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;