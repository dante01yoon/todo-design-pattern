/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mvc_controller_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mvc/controller/index */ \"./src/mvc/controller/index.js\");\n\n\n(0,_mvc_controller_index__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://vanilla-mvc/./src/app.js?");

/***/ }),

/***/ "./src/mvc/controller/index.js":
/*!*************************************!*\
  !*** ./src/mvc/controller/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _view_List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/List */ \"./src/mvc/view/List.js\");\n/* harmony import */ var _model_listModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/listModel */ \"./src/mvc/model/listModel.js\");\n\n\n\n\nconst events = {\n  addItem: (index) => {\n    _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.addList(index);\n    _view_List__WEBPACK_IMPORTED_MODULE_0__.default.render({ state: _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.getState() })\n  },\n  removeItem: (index) => {\n    _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.removeList(index)\n    _view_List__WEBPACK_IMPORTED_MODULE_0__.default.render({ state: _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.getState() })\n\n  },\n  completeAll: () => {\n    _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.completeListAll();\n    _view_List__WEBPACK_IMPORTED_MODULE_0__.default.render({ state: _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.getState() })\n  },\n  toggleItem: (idx) => {\n    _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.toggleList(idx);\n    _view_List__WEBPACK_IMPORTED_MODULE_0__.default.render({ state: _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.getState() })\n  },\n  resetAll: () => {\n    _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.unCompleteListAll();\n    _view_List__WEBPACK_IMPORTED_MODULE_0__.default.render({ state: _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.getState() })\n\n  }\n}\n\nconst renderRoot = () => {\n  _view_List__WEBPACK_IMPORTED_MODULE_0__.default.init({\n    state: _model_listModel__WEBPACK_IMPORTED_MODULE_1__.default.getState(),\n    events,\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderRoot);\n\n//# sourceURL=webpack://vanilla-mvc/./src/mvc/controller/index.js?");

/***/ }),

/***/ "./src/mvc/model/listModel.js":
/*!************************************!*\
  !*** ./src/mvc/model/listModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst state =\n  [\n    {\n      title: \"title 1\",\n      completed: false,\n    },\n    {\n      title: \"title 2\",\n      completed: false,\n    },\n    {\n      title: \"title 3\",\n      completed: false,\n    },\n    {\n      title: \"title 4\",\n      completed: false,\n    }\n    ,\n    {\n      title: \"title 5\",\n      completed: false,\n    }\n  ]\n\nconst getState = () => state;\n\nconst addList = (item) => {\n  return state.concat(item);\n}\n\nconst removeList = (idx) => {\n  return state.splice(idx, 1);\n}\n\nconst completeListAll = () => {\n  return state.map(list => list.completed = true);\n}\n\nconst unCompleteListAll = () => {\n  return state.map(list => list.completed = false);\n}\n\nconst toggleList = (idx) => {\n  if (state[idx]) {\n    const newItem = state[idx];\n    console.log(newItem);\n    newItem.completed = !newItem.completed;\n    return [...state].splice(idx, 1, newItem);\n  }\n\n  return state;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getState,\n  addList,\n  removeList,\n  completeListAll,\n  unCompleteListAll,\n  toggleList,\n});\n\n//# sourceURL=webpack://vanilla-mvc/./src/mvc/model/listModel.js?");

/***/ }),

/***/ "./src/mvc/view/List.js":
/*!******************************!*\
  !*** ./src/mvc/view/List.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst getListContainer = () => {\n  return document.querySelector(\"#listContainer\");\n}\n\n/**\n * @param { {title, completed}[]} state \n * @returns {string}\n */\nconst paintView = (state) => {\n  return `\n    <ul>\n      ${state.map(({ title, completed }, idx) => {\n    return (\n      `\n      <li data-idx=${idx} class=${completed ? \"completed\" : \"not-completed\"}>\n      <span>${title}</span>\n      <button class=\"delete-item\">X</button>\n      </li >\n      `\n    )\n  }).join()\n    }\n    </ul>\n  `\n}\n\nconst addEvent = ({\n  addItem,\n  deleteItem,\n  toggleItem,\n  completeAll,\n}) => {\n  const ul = getListContainer()\n    .querySelector(\"ul\");\n\n  document.addEventListener(\"click\", e => {\n    if (!e.target.classList.contains(\"delete-item\")) {\n      toggleItem(e.target.dataset.idx)\n    }\n\n    if (e.target.classList.contains(\"delete-item\")) {\n    }\n  })\n\n};\n\nfunction render({ state }) {\n  const $container = getListContainer();\n  $container.innerHTML = paintView(state);\n}\n\nfunction init({ state, events }) {\n  render({ state });\n  addEvent(events);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getListContainer,\n  paintView,\n  render,\n  init,\n});\n\n//# sourceURL=webpack://vanilla-mvc/./src/mvc/view/List.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;