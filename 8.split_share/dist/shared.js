(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared"],{

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/*! exports provided: Math */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Math\", function() { return Math; });\n/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help */ \"./src/help.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Math = /*#__PURE__*/function () {\n  function Math() {\n    _classCallCheck(this, Math);\n\n    this.help = new _help__WEBPACK_IMPORTED_MODULE_0__[\"Help\"]();\n  }\n\n  _createClass(Math, [{\n    key: \"calcTwo\",\n    value: function calcTwo(a, b) {\n      return this.help.add(a, b);\n    }\n  }, {\n    key: \"calcMinus\",\n    value: function calcMinus(c, d) {\n      return this.help.minus(c, d);\n    }\n  }]);\n\n  return Math;\n}();\n\n\n\n//# sourceURL=webpack:///./src/a.js?");

/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help */ \"./src/help.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (str) {\n  new _help__WEBPACK_IMPORTED_MODULE_0__[\"Help\"]().log(str);\n});\n\n//# sourceURL=webpack:///./src/b.js?");

/***/ }),

/***/ "./src/help.js":
/*!*********************!*\
  !*** ./src/help.js ***!
  \*********************/
/*! exports provided: Help */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Help\", function() { return Help; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Help = /*#__PURE__*/function () {\n  function Help() {\n    _classCallCheck(this, Help);\n  }\n\n  _createClass(Help, [{\n    key: \"add\",\n    value: function add(nu1, nu2) {\n      return nu1 + nu2;\n    }\n  }, {\n    key: \"minus\",\n    value: function minus(nu1, nu2) {\n      return nu1 - nu2;\n    }\n  }, {\n    key: \"log\",\n    value: function log(str) {\n      console.log();\n    }\n  }]);\n\n  return Help;\n}();\n\n\n\n//# sourceURL=webpack:///./src/help.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ \"./src/a.js\");\n/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b */ \"./src/b.js\");\n\n\nwindow.addEventListener(\"load\", function () {\n  var add = document.getElementById(\"hello\");\n  var minus = document.getElementById(\"alo\");\n  add.innerHTML = \"1 + 2 = \".concat(new _a__WEBPACK_IMPORTED_MODULE_0__[\"Math\"]().calcTwo(1, 2));\n  Object(_b__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"通过引用计算 1 + 2的值\");\n  minus.innerHTML = \"10 - 9 = \".concat(new _a__WEBPACK_IMPORTED_MODULE_0__[\"Math\"]().calcMinus(10, 9));\n  Object(_b__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"通过引用计算 10 - 9的值\");\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

}]);