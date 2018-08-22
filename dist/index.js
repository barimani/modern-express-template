/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../express */ "./src/express.js");
/* harmony import */ var _users_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.route */ "./src/controllers/users.route.js");
/* harmony import */ var _project_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.route */ "./src/controllers/project.route.js");



_express__WEBPACK_IMPORTED_MODULE_0__["default"].use('/users', _users_route__WEBPACK_IMPORTED_MODULE_1__["default"]);
_express__WEBPACK_IMPORTED_MODULE_0__["default"].use('/projects', _project_route__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/controllers/project.route.js":
/*!******************************************!*\
  !*** ./src/controllers/project.route.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/models/index.js");


var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router({});
router.get('/', function (req, res) {
  _models__WEBPACK_IMPORTED_MODULE_1__["Project"].findAll().then(function (projects) {
    return res.send(projects);
  });
});
router.post('/', function (req, res) {
  var title = req.body.title;
  _models__WEBPACK_IMPORTED_MODULE_1__["Project"].create({
    title: title
  }).then(function (project) {
    return res.send(project);
  });
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/controllers/users.route.js":
/*!****************************************!*\
  !*** ./src/controllers/users.route.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/services/user.service.js");


var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router({});
router.get('/', _services_user_service__WEBPACK_IMPORTED_MODULE_1__["getUsers"]);
router.post('/', _services_user_service__WEBPACK_IMPORTED_MODULE_1__["createUser"]);
var userDetailRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router({
  mergeParams: true
});
router.use('/:userId', userDetailRouter);
userDetailRouter.get('/', _services_user_service__WEBPACK_IMPORTED_MODULE_1__["getUser"]);
userDetailRouter.get('/project', _services_user_service__WEBPACK_IMPORTED_MODULE_1__["getUsersProjects"]);
userDetailRouter.post('/project', _services_user_service__WEBPACK_IMPORTED_MODULE_1__["linkProjectToUser"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/express.js":
/*!************************!*\
  !*** ./src/express.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);


var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.json());
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express */ "./src/express.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/index */ "./src/models/index.js");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers */ "./src/controllers/index.js");
 // Just to run the db connection once

 // Sets up the routes


_express__WEBPACK_IMPORTED_MODULE_0__["default"].listen(3000, function () {
  return console.log('Example app listening on port 3000!');
});

/***/ }),

/***/ "./src/models/Project.model.js":
/*!*************************************!*\
  !*** ./src/models/Project.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/sequelize */ "./src/models/config/sequelize.js");


var Project = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__["default"].define('project', {
  title: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.STRING
});
/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/models/User.model.js":
/*!**********************************!*\
  !*** ./src/models/User.model.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/sequelize */ "./src/models/config/sequelize.js");


var User = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__["default"].define('user', {
  username: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.STRING,
  birthday: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.DATE
});
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/models/config/relationships.js":
/*!********************************************!*\
  !*** ./src/models/config/relationships.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../User.model */ "./src/models/User.model.js");
/* harmony import */ var _Project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Project.model */ "./src/models/Project.model.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  _User_model__WEBPACK_IMPORTED_MODULE_0__["default"].belongsToMany(_Project_model__WEBPACK_IMPORTED_MODULE_1__["default"], {
    through: 'UserProject'
  });
  _Project_model__WEBPACK_IMPORTED_MODULE_1__["default"].belongsToMany(_User_model__WEBPACK_IMPORTED_MODULE_0__["default"], {
    through: 'UserProject'
  });
});

/***/ }),

/***/ "./src/models/config/sequelize.js":
/*!****************************************!*\
  !*** ./src/models/config/sequelize.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);

var db = new sequelize__WEBPACK_IMPORTED_MODULE_0___default.a('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: User, Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/sequelize */ "./src/models/config/sequelize.js");
/* harmony import */ var _User_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.model */ "./src/models/User.model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User_model__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project.model */ "./src/models/Project.model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _Project_model__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _config_relationships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/relationships */ "./src/models/config/relationships.js");




Object(_config_relationships__WEBPACK_IMPORTED_MODULE_3__["default"])(); // This will create the tables (if don't exist)

_config_sequelize__WEBPACK_IMPORTED_MODULE_0__["default"].sync();


/***/ }),

/***/ "./src/services/user.service.js":
/*!**************************************!*\
  !*** ./src/services/user.service.js ***!
  \**************************************/
/*! exports provided: getUsers, createUser, getUser, getUsersProjects, linkProjectToUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersProjects", function() { return getUsersProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkProjectToUser", function() { return linkProjectToUser; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./src/models/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getUsers =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models__WEBPACK_IMPORTED_MODULE_0__["User"].findAll();

          case 2:
            users = _context.sent;
            res.send(users);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, username, birthday, user;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, birthday = _req$body.birthday;
            _context2.next = 3;
            return _models__WEBPACK_IMPORTED_MODULE_0__["User"].create({
              username: username,
              birthday: birthday
            });

          case 3:
            user = _context2.sent;
            res.send(user);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUser =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _models__WEBPACK_IMPORTED_MODULE_0__["User"].findById(req.params.userId);

          case 2:
            user = _context3.sent;
            res.send(user);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getUsersProjects =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var user, projects;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _models__WEBPACK_IMPORTED_MODULE_0__["User"].findById(req.params.userId);

          case 2:
            user = _context4.sent;
            _context4.next = 5;
            return user.getProjects();

          case 5:
            projects = _context4.sent;
            res.send(projects);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getUsersProjects(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var linkProjectToUser =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var userPromise, projectPromise, _ref6, _ref7, user, project;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            userPromise = _models__WEBPACK_IMPORTED_MODULE_0__["User"].findById(req.params.userId);
            projectPromise = _models__WEBPACK_IMPORTED_MODULE_0__["Project"].findById(req.body.projectId);
            _context5.next = 4;
            return Promise.all([userPromise, projectPromise]);

          case 4:
            _ref6 = _context5.sent;
            _ref7 = _slicedToArray(_ref6, 2);
            user = _ref7[0];
            project = _ref7[1];

            if (project && user) {
              user.addProject(project);
              res.send(200);
            } else {
              res.send(500);
            }

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function linkProjectToUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map