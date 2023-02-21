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

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessageBox\": () => (/* binding */ MessageBox),\n/* harmony export */   \"MessageForm\": () => (/* binding */ MessageForm),\n/* harmony export */   \"StatusBox\": () => (/* binding */ StatusBox),\n/* harmony export */   \"UsernameForm\": () => (/* binding */ UsernameForm)\n/* harmony export */ });\nvar getFormData = function getFormData(event) {\n  event.preventDefault();\n  return new FormData(event.target);\n};\nvar MessageForm = function MessageForm(socket) {\n  var form = $(\"<form></form>\").submit(function (event) {\n    var formData = getFormData(event);\n    socket.emit(\"add_message\", formData.get(\"message\"));\n  });\n  $(\"<input/>\").attr(\"name\", \"message\").appendTo(form);\n  return form;\n};\nvar UsernameForm = function UsernameForm(socket) {\n  var form = $(\"<form></form>\").submit(function (event) {\n    var formData = getFormData(event);\n    socket.emit(\"username\", formData.get(\"username\"));\n  });\n  $(\"<input/>\").attr(\"name\", \"username\").appendTo(form);\n  return form;\n};\nvar StatusBox = function StatusBox(username, status) {\n  return $(\"<div></div>\").text(\"\".concat(username, \" is \").concat(status));\n};\nvar MessageBox = function MessageBox(message) {\n  return $(\"<div></div>\").text(message.sender + \" writes \" + message.text);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n$(document).ready(function () {\n  var socket = io();\n  var username = \"anonymous\";\n  var root = $(\"#root\");\n  var messagesContainer = $(\"<div></div>\").appendTo(root);\n  socket.on(\"connect\", function () {\n    socket.emit(\"username\", username);\n    socket.emit(\"get_messages\");\n  });\n  socket.on(\"all_messages\", function (messages) {\n    messagesContainer.append(messages.map(_elements__WEBPACK_IMPORTED_MODULE_0__.MessageBox));\n  });\n  socket.on(\"connected\", function (user) {\n    messagesContainer.append((0,_elements__WEBPACK_IMPORTED_MODULE_0__.StatusBox)(user, \"connected\"));\n  });\n  socket.on(\"new_message\", function (message) {\n    messagesContainer.append((0,_elements__WEBPACK_IMPORTED_MODULE_0__.MessageBox)(message));\n  });\n  socket.on(\"disconnected\", function (user) {\n    messagesContainer.append((0,_elements__WEBPACK_IMPORTED_MODULE_0__.StatusBox)(user, \"disconnected\"));\n  });\n  root.append((0,_elements__WEBPACK_IMPORTED_MODULE_0__.MessageForm)(socket, username));\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;