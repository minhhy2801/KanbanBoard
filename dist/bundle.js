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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Task/components/Task.js":
/*!************************************************!*\
  !*** ./src/components/Task/components/Task.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar style = {\n  taskStyle: {\n    border: '1px solid black',\n    width: '80%',\n    padding: '2%',\n    margin: '2%',\n    marginLeft: '8%',\n    minHeight: '10vh'\n  },\n  linkDeleteStyle: {\n    \"float\": 'right',\n    color: '#aaa',\n    fontSize: '20px',\n    fontWeight: 'bold'\n  }\n};\n\nvar Task =\n/*#__PURE__*/\nfunction () {\n  function Task(numProgress, projectTitle, taskTitle, id) {\n    _classCallCheck(this, Task);\n\n    this.numProgress = numProgress;\n    this.projectTitle = projectTitle;\n    this.taskTitle = taskTitle;\n    this.id = id;\n  }\n\n  _createClass(Task, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var taskEl = document.createElement('div');\n      var linkDelete = document.createElement('a');\n      taskEl.style = style.taskStyle;\n      taskEl.textContent = \"[\" + this.numProgress + \"%] Project Title: \" + this.projectTitle + '\\n Task Name: ' + this.taskTitle + '\\n';\n\n      taskEl.onclick = function () {\n        window.open('/k/2/show#record=' + _this.id);\n      };\n\n      linkDelete.style = style.linkDeleteStyle;\n      linkDelete.textContent = 'X';\n\n      linkDelete.onclick = function () {\n        // this.onDelete(this.id);\n        console.log(\"Delete task \" + _this.id);\n      };\n\n      taskEl.append('hr');\n      taskEl.append(linkDelete);\n      return taskEl;\n    }\n  }]);\n\n  return Task;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n//# sourceURL=webpack:///./src/components/Task/components/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Task_components_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Task/components/Task */ \"./src/components/Task/components/Task.js\");\n\nvar task = new _components_Task_components_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nkintone.events.on('app.record.index.show', function (event) {\n  console.log(11111111111);\n  document.getElementById('app').appendChild(task.render());\n  return event;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });