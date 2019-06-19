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

/***/ "./src/components/App/components/CreateTaskModal.js":
/*!**********************************************************!*\
  !*** ./src/components/App/components/CreateTaskModal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/style */ \"./src/util/style.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar style = {\n  modalStyle: _defineProperty({\n    display: 'none',\n    position: 'fixed',\n    zIndex: '1',\n    left: '0',\n    top: '0',\n    width: '100%',\n    height: '100%',\n    overflow: 'auto',\n    backgroundColor: 'rgb(0, 0, 0)'\n  }, \"backgroundColor\", 'rgba(0, 0, 0, 0.4)'),\n  modalContentStyle: {\n    backgroundColor: '#fefefe',\n    margin: '15% auto',\n    padding: '20px',\n    border: '1px solid #888',\n    width: '20%'\n  },\n  btnSumbitCreateStyle: {\n    backgroundColor: 'brown',\n    border: '1px solid white',\n    color: 'white',\n    height: '50px'\n  },\n  btnCancelStyle: {\n    backgroundColor: 'gray',\n    border: '1px solid white',\n    color: 'white',\n    height: '50px'\n  },\n  closeSpanStyle: {\n    color: '#aaa',\n    \"float\": 'right',\n    fontSize: '28px',\n    fontWeight: 'bold'\n  },\n  closeSpanStyleHover: {\n    color: 'black',\n    textDecoration: 'none',\n    cursor: 'pointer'\n  },\n  modalHideStyle: {\n    display: 'none'\n  },\n  modalShowStyle: {\n    display: 'block'\n  }\n};\n\nvar CreateTaskModal =\n/*#__PURE__*/\nfunction () {\n  function CreateTaskModal(status) {\n    _classCallCheck(this, CreateTaskModal);\n\n    this.status = status;\n  }\n\n  _createClass(CreateTaskModal, [{\n    key: \"processCreateTask\",\n    value: function processCreateTask(inputProjectName, inputTaskName, modal) {\n      this.createTaskFromAPI(inputProjectName, inputTaskName).then(function (resp) {\n        swal({\n          title: \"Success!\",\n          text: \"Your task added in todo list\",\n          icon: \"success\",\n          button: \"Close\"\n        }).then(function (value) {\n          modal.style = style.modalHideStyle;\n          window.location.reload(true);\n        });\n      })[\"catch\"](function (err) {\n        swal({\n          title: \"Fail!\",\n          text: \"Check task information and try again!\",\n          icon: \"error\",\n          button: \"Close\"\n        });\n      });\n    }\n  }, {\n    key: \"createTaskFromAPI\",\n    value: function createTaskFromAPI(projectTitle, taskTitle) {\n      var body = {\n        app: 2,\n        record: {\n          txt_projectTitle: {},\n          txt_taskTitle: {},\n          rb_status: {},\n          num_progress: {},\n          rich_text_description: {},\n          user_selection_assignee: {}\n        }\n      };\n      body.record.txt_projectTitle.value = projectTitle;\n      body.record.txt_taskTitle.value = taskTitle;\n      body.record.rb_status.value = \"Todo\";\n      body.record.num_progress.value = 1;\n      body.record.rich_text_description.value = '<p>aa</p>';\n      body.record.user_selection_assignee.value = [{}];\n      body.record.user_selection_assignee.value[0].code = kintone.getLoginUser().code;\n      return kintone.api(kintone.api.url('/k/v1/record', true), 'POST', body);\n    }\n  }, {\n    key: \"isVisible\",\n    value: function isVisible(_isVisible) {\n      if (_isVisible) {\n        Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(this.modal, style.modalShowStyle);\n      } else {\n        Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(this.modal, style.modalHideStyle);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var modal = document.createElement('div');\n      var modalContent = document.createElement('div');\n      var closeSpan = document.createElement('span');\n      var btnCreateTask = document.createElement('button');\n      var btnCancelCreateTask = document.createElement('button');\n      var titleAddTask = document.createElement('h1');\n      var titleTask = document.createElement('p');\n      var inputTaskName = document.createElement('input');\n      var titleProject = document.createElement('p');\n      var inputProjectName = document.createElement('input'); // btnCreateTask.id = 'btnOpenModalNewTask';\n      // modal.id = 'modalNewTask';\n      // closeSpan.className = 'close-modal';\n      // btnCancelCreateTask.className = 'close-modal';\n\n      Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(modal, style.modalStyle);\n      Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(modalContent, style.modalContentStyle);\n      Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(btnCancelCreateTask, style.btnCancelCreateTask);\n      Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(btnCreateTask, style.btnSumbitCreateStyle);\n      Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(closeSpan, style.closeSpanStyle);\n      closeSpan.textContent = 'X';\n      titleAddTask.textContent = 'Add New Task';\n      titleProject.textContent = 'Project Title:';\n      inputProjectName.name = 'txtProjectTitle';\n      inputProjectName.type = 'text';\n      titleTask.textContent = 'Task Title:';\n      inputTaskName.name = 'txtTaskTitle';\n      inputTaskName.type = 'text';\n      btnCancelCreateTask.textContent = 'Cancel';\n      btnCreateTask.textContent = 'Submit';\n\n      closeSpan.onmouseover = function () {\n        Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(closeSpan, style.closeSpanStyleHover);\n      };\n\n      closeSpan.onfocus = function () {\n        Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(closeSpan, style.closeSpanStyleHover);\n      };\n\n      closeSpan.onclick = function () {\n        Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(modal, style.modalHideStyle);\n      };\n\n      btnCancelCreateTask.onclick = function () {\n        Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(modal, style.modalHideStyle);\n      };\n\n      window.onclick = function (event) {\n        if (event.target === modal) Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(modal, style.modalHideStyle);\n      };\n\n      btnCreateTask.onclick = function () {\n        _this.processCreateTask(inputProjectName.value, inputTaskName.value, modal);\n      };\n\n      modalContent.append(closeSpan);\n      modalContent.append(titleAddTask);\n      modalContent.append(titleProject);\n      modalContent.append(inputProjectName);\n      modalContent.append(titleTask);\n      modalContent.append(inputTaskName);\n      modalContent.append(btnCreateTask);\n      modal.append(modalContent);\n      this.modal = modal;\n      return modal;\n    }\n  }]);\n\n  return CreateTaskModal;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateTaskModal);\n\n//# sourceURL=webpack:///./src/components/App/components/CreateTaskModal.js?");

/***/ }),

/***/ "./src/components/App/components/ListBoards.js":
/*!*****************************************************!*\
  !*** ./src/components/App/components/ListBoards.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Board/container */ \"./src/components/Board/container.js\");\n/* harmony import */ var _util_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/style */ \"./src/util/style.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar style = {\n  listBoardsStyle: {\n    display: 'flex',\n    width: '100%',\n    alignItems: 'stretch'\n  }\n};\n\nvar ListBoards =\n/*#__PURE__*/\nfunction () {\n  function ListBoards(listBoards, triggerModal, status) {\n    _classCallCheck(this, ListBoards);\n\n    this.listBoards = listBoards;\n    this.triggerModal = triggerModal;\n    this.status = status;\n  }\n\n  _createClass(ListBoards, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var listBoardEl = document.createElement('div');\n      Object(_util_style__WEBPACK_IMPORTED_MODULE_1__[\"setStyle\"])(listBoardEl, style.listBoardsStyle);\n      this.status.forEach(function (state, index) {\n        var board = new _Board_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this.listBoards[index].records, state, _this.triggerModal);\n        listBoardEl.append(board.render());\n      });\n      return listBoardEl;\n    }\n  }]);\n\n  return ListBoards;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListBoards);\n\n//# sourceURL=webpack:///./src/components/App/components/ListBoards.js?");

/***/ }),

/***/ "./src/components/App/container.js":
/*!*****************************************!*\
  !*** ./src/components/App/container.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ListBoards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ListBoards */ \"./src/components/App/components/ListBoards.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ListBoardContainer =\n/*#__PURE__*/\nfunction () {\n  function ListBoardContainer(listBoards, triggerModal, status) {\n    _classCallCheck(this, ListBoardContainer);\n\n    this.listBoards = listBoards;\n    this.triggerModal = triggerModal;\n    this.status = status;\n    this.listBoardsApp = new _components_ListBoards__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.listBoards, this.triggerModal, this.status);\n  }\n\n  _createClass(ListBoardContainer, [{\n    key: \"render\",\n    value: function render() {\n      return this.listBoardsApp.render();\n    }\n  }]);\n\n  return ListBoardContainer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListBoardContainer);\n\n//# sourceURL=webpack:///./src/components/App/container.js?");

/***/ }),

/***/ "./src/components/Board/components/Board.js":
/*!**************************************************!*\
  !*** ./src/components/Board/components/Board.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/components/Board/components/Header.js\");\n/* harmony import */ var _ListTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListTasks */ \"./src/components/Board/components/ListTasks.js\");\n/* harmony import */ var _App_components_CreateTaskModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App/components/CreateTaskModal */ \"./src/components/App/components/CreateTaskModal.js\");\n/* harmony import */ var _util_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/style */ \"./src/util/style.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar style = {\n  boardStyle: {\n    border: '1px solid black',\n    padding: '5px',\n    marginLeft: '1%',\n    width: '22%',\n    marginTop: '10px',\n    textAlign: 'center',\n    minHeight: '30vh'\n  }\n};\n\nvar Board =\n/*#__PURE__*/\nfunction () {\n  function Board(listTasks, header, openModal) {\n    _classCallCheck(this, Board);\n\n    this.listTasks = listTasks;\n    this.header = header;\n    this.openModal = openModal;\n  }\n\n  _createClass(Board, [{\n    key: \"onClick\",\n    value: function onClick() {\n      if (!this.model) {\n        var model = new _App_components_CreateTaskModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.stateName);\n        this.model = model;\n        document.getElementById('app').appendChild(this.model.render());\n      }\n\n      this.model.isVisible(true);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var board = document.createElement('div');\n      Object(_util_style__WEBPACK_IMPORTED_MODULE_3__[\"setStyle\"])(board, style.boardStyle);\n      var headerEl = new _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.listTasks.length, this.header, this.onClick);\n      var listTasks = new _ListTasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.listTasks);\n      board.append(headerEl.render());\n      board.append(listTasks.render());\n      return board;\n    }\n  }]);\n\n  return Board;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./src/components/Board/components/Board.js?");

/***/ }),

/***/ "./src/components/Board/components/Header.js":
/*!***************************************************!*\
  !*** ./src/components/Board/components/Header.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/style */ \"./src/util/style.js\");\n/* harmony import */ var _App_components_CreateTaskModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/components/CreateTaskModal */ \"./src/components/App/components/CreateTaskModal.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar style = {\n  btnNewTaskStyle: {\n    \"float\": 'right',\n    backgroundColor: 'grey',\n    border: '1px solid white',\n    color: 'white',\n    width: '30px',\n    height: '30px'\n  }\n};\n\nvar Header =\n/*#__PURE__*/\nfunction () {\n  function Header(totalCount, stateName, onClickOpenModal) {\n    _classCallCheck(this, Header);\n\n    this.totalCount = totalCount;\n    this.stateName = stateName;\n    this.onClickOpenModal = onClickOpenModal;\n    this.headerEl = document.createElement('div');\n  }\n\n  _createClass(Header, [{\n    key: \"onClick\",\n    value: function onClick() {\n      this.onClickOpenModal();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var headerEl = document.createElement('div');\n\n      if (this.stateName === 'Todo') {\n        var btnNewTaskEl = document.createElement('button');\n        Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(btnNewTaskEl, style.btnNewTaskStyle);\n        btnNewTaskEl.innerText = '+';\n        btnNewTaskEl.onclick = this.onClick.bind(this);\n        headerEl.append(btnNewTaskEl);\n      }\n\n      var titleContentEl = document.createElement('h1');\n      titleContentEl.textContent = this.stateName + ' (' + this.totalCount + ')';\n      headerEl.append(titleContentEl);\n      headerEl.append(document.createElement('hr'));\n      this.headerEl = headerEl;\n      return headerEl;\n    }\n  }]);\n\n  return Header;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Board/components/Header.js?");

/***/ }),

/***/ "./src/components/Board/components/ListTasks.js":
/*!******************************************************!*\
  !*** ./src/components/Board/components/ListTasks.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Task_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Task/container */ \"./src/components/Task/container.js\");\n/* harmony import */ var _util_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/style */ \"./src/util/style.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar style = {\n  listTasksStyle: {\n    display: 'grid',\n    width: '100%',\n    maxHeight: '30vh',\n    overflowY: 'scroll',\n    textAlign: 'left'\n  }\n};\n\nvar ListTasks =\n/*#__PURE__*/\nfunction () {\n  function ListTasks(listTasks) {\n    _classCallCheck(this, ListTasks);\n\n    this.listTasks = listTasks;\n  }\n\n  _createClass(ListTasks, [{\n    key: \"render\",\n    value: function render() {\n      var listTasks = document.createElement('div');\n      Object(_util_style__WEBPACK_IMPORTED_MODULE_1__[\"setStyle\"])(listTasks, style.listTasksStyle);\n      this.listTasks.forEach(function (objTask) {\n        var task = new _Task_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"](objTask.num_progress.value, objTask.txt_projectTitle.value, objTask.txt_taskTitle.value, objTask.$id.value);\n        listTasks.append(task.render());\n      });\n      return listTasks;\n    }\n  }]);\n\n  return ListTasks;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasks);\n\n//# sourceURL=webpack:///./src/components/Board/components/ListTasks.js?");

/***/ }),

/***/ "./src/components/Board/container.js":
/*!*******************************************!*\
  !*** ./src/components/Board/container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Board */ \"./src/components/Board/components/Board.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar BoardContainer =\n/*#__PURE__*/\nfunction () {\n  function BoardContainer(listTasks, header, onClick) {\n    _classCallCheck(this, BoardContainer);\n\n    this.listTasks = listTasks;\n    this.header = header;\n    this.onClick = onClick;\n    this.board = new _components_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.listTasks, this.header, this.onClick);\n  }\n\n  _createClass(BoardContainer, [{\n    key: \"render\",\n    value: function render() {\n      return this.board.render();\n    }\n  }]);\n\n  return BoardContainer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardContainer);\n\n//# sourceURL=webpack:///./src/components/Board/container.js?");

/***/ }),

/***/ "./src/components/Task/components/Task.js":
/*!************************************************!*\
  !*** ./src/components/Task/components/Task.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/style */ \"./src/util/style.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar style = {\n  taskStyle: {\n    border: '1px solid black',\n    width: '80%',\n    padding: '2%',\n    margin: '2%',\n    marginLeft: '8%',\n    minHeight: '10vh'\n  },\n  linkDeleteStyle: {\n    \"float\": 'right',\n    color: '#aaa',\n    fontSize: '20px',\n    fontWeight: 'bold'\n  }\n};\n\nvar Task =\n/*#__PURE__*/\nfunction () {\n  function Task(numProgress, projectTitle, taskTitle, id) {\n    _classCallCheck(this, Task);\n\n    this.numProgress = numProgress;\n    this.projectTitle = projectTitle;\n    this.taskTitle = taskTitle;\n    this.id = id;\n  }\n\n  _createClass(Task, [{\n    key: \"deleteTaskFromAPI\",\n    value: function deleteTaskFromAPI(recordId) {\n      var body = {\n        app: 2,\n        ids: [recordId]\n      };\n      return kintone.api(kintone.api.url('/k/v1/records', true), 'DELETE', body);\n    }\n  }, {\n    key: \"processDeleteTask\",\n    value: function processDeleteTask(recordId) {\n      window.event.stopImmediatePropagation();\n      swal({\n        title: \"Are you sure?\",\n        text: \"Do you want to delete this task\",\n        icon: \"warning\",\n        buttons: true,\n        dangerMode: true\n      }).then(function (isDelete) {\n        if (isDelete) {\n          deleteTaskFromAPI(recordId);\n          swal(\"Your task has been deleted!\", {\n            icon: \"success\"\n          }).then(function (value) {\n            window.location.reload(true);\n          });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var taskEl = document.createElement('div');\n      var linkDelete = document.createElement('a');\n      Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(taskEl, style.taskStyle);\n      taskEl.id = this.id;\n      taskEl.innerText = '[' + this.numProgress + '%] Project Title: ' + this.projectTitle + '\\n Task Name: ' + this.taskTitle + '\\n';\n\n      taskEl.onclick = function () {\n        window.open('/k/2/show#record=' + _this.id);\n      };\n\n      taskEl.addEventListener('dragstart', function (event) {\n        event.dataTransfer.setData('text', event.target.id);\n      });\n      Object(_util_style__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])(linkDelete, style.linkDeleteStyle);\n      linkDelete.textContent = 'X';\n\n      linkDelete.onclick = function () {\n        processDeleteTask(_this.id);\n      };\n\n      taskEl.append(document.createElement('br'));\n      taskEl.append(linkDelete);\n      return taskEl;\n    }\n  }]);\n\n  return Task;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n//# sourceURL=webpack:///./src/components/Task/components/Task.js?");

/***/ }),

/***/ "./src/components/Task/container.js":
/*!******************************************!*\
  !*** ./src/components/Task/container.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Task */ \"./src/components/Task/components/Task.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar TaskContainer =\n/*#__PURE__*/\nfunction () {\n  function TaskContainer(numProgress, projectTitle, taskTitle, id) {\n    _classCallCheck(this, TaskContainer);\n\n    this.numProgress = numProgress;\n    this.projectTitle = projectTitle;\n    this.taskTitle = taskTitle;\n    this.id = id;\n    this.task = new _components_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.numProgress, this.projectTitle, this.taskTitle, this.id);\n  }\n\n  _createClass(TaskContainer, [{\n    key: \"render\",\n    value: function render() {\n      return this.task.render();\n    }\n  }]);\n\n  return TaskContainer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskContainer);\n\n//# sourceURL=webpack:///./src/components/Task/container.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App/container */ \"./src/components/App/container.js\");\n\n\nfunction getRecordsByStatus(status) {\n  var queryStatus = 'rb_status in (\"' + status + '\")';\n  var body = {\n    app: 2,\n    query: queryStatus,\n    totalCount: true\n  };\n  return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body);\n}\n\nvar url = window.location.href;\n\nif (url.includes('view=2062')) {\n  kintone.events.on('app.record.index.show', function () {\n    var states = [\"Todo\", \"Implement\", \"Testing\", \"Done\"];\n    var boards = states.map(function (status) {\n      return getRecordsByStatus(status);\n    });\n    Promise.all(boards).then(function (resp) {\n      console.log(resp);\n      var listBoards = new _components_App_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"](resp, false, states);\n      document.getElementById('app').append(listBoards.render());\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util/style.js":
/*!***************************!*\
  !*** ./src/util/style.js ***!
  \***************************/
/*! exports provided: setStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setStyle\", function() { return setStyle; });\nfunction setStyle(el, styles) {\n  for (var property in styles) {\n    el.style[property] = styles[property];\n  }\n}\n\n//# sourceURL=webpack:///./src/util/style.js?");

/***/ })

/******/ });