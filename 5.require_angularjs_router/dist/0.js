(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/common.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/common.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"*{\\n    padding: 0;\\n    margin: 0;\\n    border: 0;\\n    list-style: 0;\\n}\\n\\nhtml,body{\\n    width: 100%;\\n    height: 100%;\\n}\\n\\nbody{\\n    position: relative;\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n.header{\\n    position: relative;\\n    display: flex;\\n    height: 60px;\\n    width: 100%;\\n    background-color: black;\\n}\\n\\n.body{\\n    position: relative;\\n    display: flex;\\n    flex-direction: row;\\n    width: 100%;\\n    flex-grow: 1;\\n}\\n\\n.body>.left-menu{\\n    position: relative;\\n    display: flex;\\n    width: 280px;\\n    box-sizing: border-box;\\n    height: 100%;\\n    flex-direction: column;\\n    box-shadow: 0 2px 0 #ccc;\\n    background-color: white;\\n}\\n\\n.content{\\n    position: relative;\\n    display: flex;\\n    height: 100%;\\n    flex-grow: 1;\\n    background-color: rgba(137, 43, 226, 0.3);\\n}\\n\\n\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".left-menu{\\n    padding-top: 40px;\\n}\\n.menu-item{\\n    position: relative;\\n    display: flex;\\n    height: 36px;\\n    width: 100%;\\n    box-sizing: border-box;\\n    border:1px solid #ddd;\\n    border-left: 2px solid transparent;\\n    align-items: center;\\n    padding-left: 20px;\\n    color:black\\n}\\n.menu-item:hover{\\n    background-color: rgb(74, 171, 250);\\n}\\n\\n.menu-item.active{\\n    border-left-color: blue;\\n    box-shadow: inset 0 0 3px blue;\\n    background-color: rgb(68, 134, 255);\\n    color:white;\\n}\\nui-view{\\n    position: relative;\\n    display: flex;\\n    width: 100%;\\n    height: 100%;\\n    \\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/common.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/common.css?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/js/about/about.html":
/*!*********************************!*\
  !*** ./src/js/about/about.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div>\\n    <h2>{{greeting}}</h2>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/js/about/about.html?");

/***/ }),

/***/ "./src/js/ctrl.module.js":
/*!*******************************!*\
  !*** ./src/js/ctrl.module.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! angular */ \"./node_modules/angular/angular.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(angular){\n    return  angular.module(\"common.mod\",[]);\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/js/ctrl.module.js?");

/***/ }),

/***/ "./src/js/home/home.html":
/*!*******************************!*\
  !*** ./src/js/home/home.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div>\\n    {{greeting}}\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/js/home/home.html?");

/***/ }),

/***/ "./src/js/view/view.html":
/*!*******************************!*\
  !*** ./src/js/view/view.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div>\\n    {{greeting}}\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/js/view/view.html?");

/***/ })

}]);