/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/bgimg1.jpg */ "./src/images/bgimg1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --bg-fill: #555;\r\n  --white-color: rgba(255, 255, 255, 0.75);\r\n  --width: 90%;\r\n  --transition: all 0.2s linear;\r\n  --scale: scale(1.1);\r\n  --font-600: 600;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 15px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #5212c9;\r\n}\r\n\r\n.header-wrapper {\r\n  width: var(--width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.imgCardcontainer {\r\n  min-height: 320px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  overflow: hidden;\r\n}\r\n\r\n.imgCardcontainer img {\r\n  width: 150%;\r\n  height: 350px;\r\n  margin-bottom: 5%;\r\n  transition: var(--transition);\r\n}\r\n\r\n.logo img {\r\n  width: 80px;\r\n  transition: var(--transition);\r\n}\r\n\r\n.imgCardcontainer img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\n.logo img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\nnav {\r\n  width: 50%;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-link {\r\n  transition: var(--transition);\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--white-color);\r\n  font-weight: var(--font-600);\r\n}\r\n\r\n#addDynamicCards {\r\n  width: var(--width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.cardContainer {\r\n  width: 30%;\r\n  height: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5% 0;\r\n  padding: 20px 20px;\r\n  background-color: rgba(41, 41, 41);\r\n  border-radius: 10px;\r\n  transition: var(--transition);\r\n  position: relative;\r\n}\r\n\r\n.cardContainer:before,\r\n.cardContainer:after,\r\n.popupContainer:before,\r\n.popupContainer:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -2px;\r\n  top: -2px;\r\n  border-radius: 10px;\r\n  background: linear-gradient(\r\n    45deg,\r\n    #382fe2,\r\n    #0404bf,\r\n    #5212c9,\r\n    #4d0bc0,\r\n    #740808,\r\n    #8d0b57,\r\n    #0000ff\r\n  );\r\n  background-size: 200%;\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  z-index: -1;\r\n  animation: steam 15s linear infinite;\r\n}\r\n\r\n@keyframes steam {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n  50% {\r\n    background-position: 300% 0;\r\n  }\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.cardContainer:after,\r\n.popupContainer:after {\r\n  filter: blur(50px);\r\n}\r\n\r\n.cardContainer .title {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin: 10% 0;\r\n  color: var(--white-color);\r\n}\r\n\r\n.title h2 {\r\n  margin-right: 5px;\r\n}\r\n\r\n.title h3 {\r\n  margin-right: 5px;\r\n}\r\n\r\n.fa-heart {\r\n  transition: var(--transition);\r\n}\r\n\r\n.fa-heart:hover {\r\n  transform: var(--scale);\r\n  color: red;\r\n}\r\n\r\n.fa-heart:focus {\r\n  background-color: #15418c;\r\n}\r\n\r\n.small-class {\r\n  align-self: flex-end;\r\n  margin-bottom: 5%;\r\n  color: var(--white-color);\r\n  font-weight: var(--font-600);\r\n  position: absolute;\r\n  right: 10px;\r\n  bottom: 60px;\r\n}\r\n\r\ninput[type=\"button\"] {\r\n  position: absolute;\r\n  bottom: 12px;\r\n  width: 60%;\r\n  margin-bottom: 5%;\r\n  padding: 10px 15px;\r\n  background-color: var(--white-color);\r\n  color: rgba(0, 0, 0, 0.75);\r\n  transition: var(--transition);\r\n  font-weight: var(--font-600);\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 3px;\r\n}\r\n\r\ninput[type=\"button\"]:hover {\r\n  transform: var(--scale);\r\n  color: var(--white-color);\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\nfooter {\r\n  bottom: 0;\r\n  background-color: var(--bg-fill);\r\n  width: 100%;\r\n}\r\n\r\n.popupContainer h2,\r\n.description {\r\n  color: var(--white-color);\r\n  padding: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.footer {\r\n  width: var(--width);\r\n  margin: 0 auto;\r\n  padding: 30px 10px;\r\n  color: var(--white-color);\r\n  font-weight: var(--font-600);\r\n}\r\n\r\n/* popup styles */\r\n.popupWindow {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 50;\r\n  overflow-y: scroll;\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.popupContainer {\r\n  position: relative;\r\n  width: 70%;\r\n  border: 1px solid #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(20, 17, 17, 1);\r\n  margin: 24px auto;\r\n  row-gap: 15px;\r\n}\r\n\r\n.header-popup {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.popup-image {\r\n  width: 100%;\r\n  padding: 20px;\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.popupContainer span {\r\n  align-self: flex-end;\r\n  padding: 20px;\r\n}\r\n\r\n#close {\r\n  color: var(--white-color);\r\n  font-weight: var(--font-600);\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\n\r\n.popupContainer form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40%;\r\n  margin: 20px auto;\r\n  height: 300px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\n::placeholder {\r\n  padding: 10px;\r\n}\r\n\r\n.popupContainer p {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 20px;\r\n  font-weight: 500;\r\n}\r\n\r\n#comment-link li {\r\n  color: var(--white-color);\r\n  padding: 5px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .cardContainer {\r\n    width: 45%;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .cardContainer {\r\n    width: 90%;\r\n    margin: 10px auto;\r\n  }\r\n\r\n  .header-wrapper {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n#light-house-avoid-error {\r\n  display: none;\r\n}\r\n\r\n#comment-box-id {\r\n  height: 50px;\r\n}\r\n\r\n#userName {\r\n  height: 50px;\r\n}\r\n\r\n#comment-box-id {\r\n  height: 500px;\r\n  margin-bottom: 120px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap\");\r\n\r\n:root {\r\n  --bg-fill: #555;\r\n  --white-color: rgba(255, 255, 255, 0.75);\r\n  --width: 90%;\r\n  --transition: all 0.2s linear;\r\n  --scale: scale(1.1);\r\n  --font-600: 600;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(/src/images/bgimg1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 15px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #5212c9;\r\n}\r\n\r\n.header-wrapper {\r\n  width: var(--width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.imgCardcontainer {\r\n  min-height: 320px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  overflow: hidden;\r\n}\r\n\r\n.imgCardcontainer img {\r\n  width: 150%;\r\n  height: 350px;\r\n  margin-bottom: 5%;\r\n  transition: var(--transition);\r\n}\r\n\r\n.logo img {\r\n  width: 80px;\r\n  transition: var(--transition);\r\n}\r\n\r\n.imgCardcontainer img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\n.logo img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\nnav {\r\n  width: 50%;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-link {\r\n  transition: var(--transition);\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--white-color);\r\n  font-weight: var(--font-600);\r\n}\r\n\r\n#addDynamicCards {\r\n  width: var(--width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.cardContainer {\r\n  width: 30%;\r\n  height: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5% 0;\r\n  padding: 20px 20px;\r\n  background-color: rgba(41, 41, 41);\r\n  border-radius: 10px;\r\n  transition: var(--transition);\r\n  position: relative;\r\n}\r\n\r\n.cardContainer:before,\r\n.cardContainer:after,\r\n.popupContainer:before,\r\n.popupContainer:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -2px;\r\n  top: -2px;\r\n  border-radius: 10px;\r\n  background: linear-gradient(\r\n    45deg,\r\n    #382fe2,\r\n    #0404bf,\r\n    #5212c9,\r\n    #4d0bc0,\r\n    #740808,\r\n    #8d0b57,\r\n    #0000ff\r\n  );\r\n  background-size: 200%;\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  z-index: -1;\r\n  animation: steam 15s linear infinite;\r\n}\r\n\r\n@keyframes steam {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n  50% {\r\n    background-position: 300% 0;\r\n  }\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.cardContainer:after,\r\n.popupContainer:after {\r\n  filter: blur(50px);\r\n}\r\n\r\n.cardContainer .title {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin: 10% 0;\r\n  color: var(--white-color);\r\n}\r\n\r\n.title h2 {\r\n  margin-right: 5px;\r\n}\r\n\r\n.title h3 {\r\n  margin-right: 5px;\r\n}\r\n\r\n.fa-heart {\r\n  transition: var(--transition);\r\n}\r\n\r\n.fa-heart:hover {\r\n  transform: var(--scale);\r\n  color: red;\r\n}\r\n\r\n.fa-heart:focus {\r\n  background-color: #15418c;\r\n}\r\n\r\n.small-class {\r\n  align-self: flex-end;\r\n  margin-bottom: 5%;\r\n  color: var(--white-color);\r\n  font-weight: var(--font-600);\r\n  position: absolute;\r\n  right: 10px;\r\n  bottom: 60px;\r\n}\r\n\r\ninput[type=\"button\"] {\r\n  position: absolute;\r\n  bottom: 12px;\r\n  width: 60%;\r\n  margin-bottom: 5%;\r\n  padding: 10px 15px;\r\n  background-color: var(--white-color);\r\n  color: rgba(0, 0, 0, 0.75);\r\n  transition: var(--transition);\r\n  font-weight: var(--font-600);\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 3px;\r\n}\r\n\r\ninput[type=\"button\"]:hover {\r\n  transform: var(--scale);\r\n  color: var(--white-color);\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\nfooter {\r\n  bottom: 0;\r\n  background-color: var(--bg-fill);\r\n  width: 100%;\r\n}\r\n\r\n.popupContainer h2,\r\n.description {\r\n  color: var(--white-color);\r\n  padding: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.footer {\r\n  width: var(--width);\r\n  margin: 0 auto;\r\n  padding: 30px 10px;\r\n  color: var(--white-color);\r\n  font-weight: var(--font-600);\r\n}\r\n\r\n/* popup styles */\r\n.popupWindow {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 50;\r\n  overflow-y: scroll;\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.popupContainer {\r\n  position: relative;\r\n  width: 70%;\r\n  border: 1px solid #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(20, 17, 17, 1);\r\n  margin: 24px auto;\r\n  row-gap: 15px;\r\n}\r\n\r\n.header-popup {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.popup-image {\r\n  width: 100%;\r\n  padding: 20px;\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.popupContainer span {\r\n  align-self: flex-end;\r\n  padding: 20px;\r\n}\r\n\r\n#close {\r\n  color: var(--white-color);\r\n  font-weight: var(--font-600);\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\n\r\n.popupContainer form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40%;\r\n  margin: 20px auto;\r\n  height: 300px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\n::placeholder {\r\n  padding: 10px;\r\n}\r\n\r\n.popupContainer p {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 20px;\r\n  font-weight: 500;\r\n}\r\n\r\n#comment-link li {\r\n  color: var(--white-color);\r\n  padding: 5px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .cardContainer {\r\n    width: 45%;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .cardContainer {\r\n    width: 90%;\r\n    margin: 10px auto;\r\n  }\r\n\r\n  .header-wrapper {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n#light-house-avoid-error {\r\n  display: none;\r\n}\r\n\r\n#comment-box-id {\r\n  height: 50px;\r\n}\r\n\r\n#userName {\r\n  height: 50px;\r\n}\r\n\r\n#comment-box-id {\r\n  height: 500px;\r\n  margin-bottom: 120px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/API-links.js":
/*!**********************************!*\
  !*** ./src/modules/API-links.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentLink": () => (/* binding */ commentLink),
/* harmony export */   "getDataDateImage": () => (/* binding */ getDataDateImage),
/* harmony export */   "getNasaApi": () => (/* binding */ getNasaApi),
/* harmony export */   "likeLink": () => (/* binding */ likeLink)
/* harmony export */ });
const getNasaApi =
  "https://api.nasa.gov/planetary/apod?api_key=yE5XwF3YBRu6RaMb2K328lXJabWCog5rzjaIR76N&start_date=2022-04-10&end_date=2022-04-21";
const datesForPopup = [
  "2022-04-10",
  "2022-04-11",
  "2022-04-12",
  "2022-04-13",
  "2022-04-14",
  "2022-04-15",
  "2022-04-16",
  "2022-04-17",
  "2022-04-18",
  "2022-04-19",
  "2022-04-20",
  "2022-04-21",
];
const getDataDateImage = (num) =>
  `https://api.nasa.gov/planetary/apod?api_key=yE5XwF3YBRu6RaMb2K328lXJabWCog5rzjaIR76N&date=${datesForPopup[num]}`;

const likeLink =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/likes";
const commentLink =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments";




/***/ }),

/***/ "./src/modules/funcComment.js":
/*!************************************!*\
  !*** ./src/modules/funcComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "countComments": () => (/* binding */ countComments),
/* harmony export */   "countElements": () => (/* binding */ countElements),
/* harmony export */   "displayComments": () => (/* binding */ displayComments),
/* harmony export */   "showComment": () => (/* binding */ showComment)
/* harmony export */ });
/* harmony import */ var _get_post_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-post-data.js */ "./src/modules/get-post-data.js");
/* harmony import */ var _API_links_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API-links.js */ "./src/modules/API-links.js");



function countElements(elem) {
  return elem.childElementCount;
}

// HERE

function countComments() {
  const commentCount = document.querySelector("#comment-link");
  commentCount.previousElementSibling.innerHTML = `Comments ${countElements(
    commentCount
  )}`;
}

function showComment(user, str) {
  const ulCont = document.querySelector("#comment-link");
  const li = document.createElement("li");
  li.innerHTML = `${user} : ${str}`;
  ulCont.appendChild(li);
}

function displayComments(id) {
  const showProper = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments?item_id=${id}`;
  (0,_get_post_data_js__WEBPACK_IMPORTED_MODULE_0__.getScores)(showProper)
    .then((data) =>
      data.forEach((elem) => showComment(elem.username, elem.comment))
    )
    .then(() => countComments())
    .catch(() => showComment("no", "comments yet"));
}

function addComment(id, user, str) {
  const data = {
    item_id: id,
    username: user,
    comment: str,
  };
  (0,_get_post_data_js__WEBPACK_IMPORTED_MODULE_0__.postScores)(_API_links_js__WEBPACK_IMPORTED_MODULE_1__.commentLink, data)
    .then((data) => {
      if (data.status === 201) {
        showComment(user, str);
      }
    })
    .catch(() => showComment("no", "comments yet"));
}




/***/ }),

/***/ "./src/modules/get-post-data.js":
/*!**************************************!*\
  !*** ./src/modules/get-post-data.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScores": () => (/* binding */ getScores),
/* harmony export */   "postScores": () => (/* binding */ postScores)
/* harmony export */ });
const getScores = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const postScores = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};




/***/ }),

/***/ "./src/modules/pop-up.js":
/*!*******************************!*\
  !*** ./src/modules/pop-up.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closePopup": () => (/* binding */ closePopup),
/* harmony export */   "containerDynamicCards": () => (/* binding */ containerDynamicCards),
/* harmony export */   "displayPopup": () => (/* binding */ displayPopup)
/* harmony export */ });
function closePopup(target) {
  target.parentElement.parentElement.parentElement.remove();
}

const containerDynamicCards = document.getElementById("addDynamicCards");

function displayPopup(img, title, description, id) {
  const popupDiv = document.createElement("div");
  popupDiv.classList.add("popupWindow");
  popupDiv.innerHTML = `
    <div class="popupContainer">
     <span><i class="fas fa-times" id="close"></i>
     </span>
     <div class="header-popup">
       <img src="${img}" class="popup-image" alt="close-icon">
     </div>
     <h2>${title}</h2>
     <p class="description">${description}</p>
     <div>
         <h2 class="comments">Comments</h2>
         <ul id="comment-link">
         </ul>
       </div>
       <form id="${id}form" action="post">
         <input type="text" placeholder="Your Name" id="userName">
         <textarea name="text" id="comment-box-id" cols="30" rows="10" placeholder="Your insights"></textarea>
         <input type="button" value="Comment" id="popupComment">
       </form>
     </div>
     </div>`;
  containerDynamicCards.appendChild(popupDiv);
}




/***/ }),

/***/ "./src/images/bgimg1.jpg":
/*!*******************************!*\
  !*** ./src/images/bgimg1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c81ebe93eb5dd385392e.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_funcComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/funcComment.js */ "./src/modules/funcComment.js");
/* harmony import */ var _modules_API_links_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/API-links.js */ "./src/modules/API-links.js");
/* harmony import */ var _modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/get-post-data.js */ "./src/modules/get-post-data.js");
/* harmony import */ var _modules_pop_up_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pop-up.js */ "./src/modules/pop-up.js");






function addCard(img, title, index) {
  const div = document.createElement("div");
  div.classList.add("cardContainer");
  div.innerHTML = `
        <div class="imgCardcontainer">
          <img src="${img}" alt="Image provided by Nasa's Api">
        </div>
        <div class="title">
          <h3>${title}</h3>
          <a href="#" id="${index}star" class="like"><i class="fas fa-heart"></i></a>
        </div>
        <small class='small-class'></small>
        <input type="button" value="Comments" id="${index}" class="comment">
        `;
  _modules_pop_up_js__WEBPACK_IMPORTED_MODULE_4__.containerDynamicCards.appendChild(div);
}

// HERE DISPLAYS THE DATA DESCRIPTION
function displayImage(id) {
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_3__.getScores)((0,_modules_API_links_js__WEBPACK_IMPORTED_MODULE_2__.getDataDateImage)(id))
    .then((data) => (0,_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_4__.displayPopup)(data.hdurl, data.title, data.explanation, id))
    .then(() => {
      (0,_modules_funcComment_js__WEBPACK_IMPORTED_MODULE_1__.displayComments)(id);
      const closeBtn = document.getElementById("close");
      closeBtn.addEventListener("click", () => {
        (0,_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_4__.closePopup)(closeBtn);
      });
    })
    .catch((error) => console.log(error));
}

const deployLikes = (id, likes) => {
  const small = document.getElementById(id);
  small.parentElement.nextElementSibling.innerHTML = `${likes} likes`;
};

function displayStars() {
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_3__.getScores)(_modules_API_links_js__WEBPACK_IMPORTED_MODULE_2__.likeLink)
    .then((data) =>
      data.forEach((elem, i) => {
        if (i < (0,_modules_funcComment_js__WEBPACK_IMPORTED_MODULE_1__.countElements)(_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_4__.containerDynamicCards)) {
          deployLikes(elem.item_id, elem.likes);
        }
      })
    )
    .catch((error) => console.log(error));
}

function displayScores() {
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_3__.getScores)(_modules_API_links_js__WEBPACK_IMPORTED_MODULE_2__.getNasaApi)
    .then((data) =>
      data.forEach((elem, index) => addCard(elem.hdurl, elem.title, index))
    )
    .then(() => {
      displayStars();
      countItems();
    })
    .catch((error) => console.log(error));
}

function likeIt(id, stars) {
  const data = { item_id: id };
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_3__.postScores)(_modules_API_links_js__WEBPACK_IMPORTED_MODULE_2__.likeLink, data)
    .then((data) => {
      if (data.status === 201) {
        deployLikes(id, stars);
      }
    })
    .catch((error) => console.log(error));
}

displayScores();

_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_4__.containerDynamicCards.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-heart")) {
    e.preventDefault();
    const sC = parseInt(
      e.target.parentElement.parentElement.nextElementSibling.textContent,
      10
    );
    const stars = sC + 1;
    likeIt(e.target.parentElement.id, stars);
  }
  if (e.target.classList.contains("comment")) {
    displayImage(parseInt(e.target.id, 10));
  }
  if (e.target.id === "popupComment") {
    e.preventDefault();
    const id = e.target.parentElement.id.match(/[0-9]/g);
    const userName = document.getElementById("userName");
    const comment = document.getElementById("comment-box-id");
    (0,_modules_funcComment_js__WEBPACK_IMPORTED_MODULE_1__.addComment)(id, userName.value, comment.value);
    userName.value = "";
    comment.value = "";
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxN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UDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG9FQUFTLENBQUMsNkRBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsRUFBRSxxRUFBVSxDQUFDLDJEQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUEsc0ZBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9tb2R1bGVzL0FQSS1saW5rcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9tb2R1bGVzL2Z1bmNDb21tZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL21vZHVsZXMvZ2V0LXBvc3QtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9tb2R1bGVzL3BvcC11cC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL2JnaW1nMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzEsMzAwOzEsNDAwOzEsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWJnLWZpbGw6ICM1NTU7XFxyXFxuICAtLXdoaXRlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcclxcbiAgLS13aWR0aDogOTAlO1xcclxcbiAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxyXFxuICAtLXNjYWxlOiBzY2FsZSgxLjEpO1xcclxcbiAgLS1mb250LTYwMDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjEyYzk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItd3JhcHBlciB7XFxyXFxuICB3aWR0aDogdmFyKC0td2lkdGgpO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0NhcmRjb250YWluZXIge1xcclxcbiAgbWluLWhlaWdodDogMzIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0NhcmRjb250YWluZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAxNTAlO1xcclxcbiAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nQ2FyZGNvbnRhaW5lciBpbWc6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGREeW5hbWljQ2FyZHMge1xcclxcbiAgd2lkdGg6IHZhcigtLXdpZHRoKTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDUlIDA7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQxLCA0MSwgNDEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZENvbnRhaW5lcjpiZWZvcmUsXFxyXFxuLmNhcmRDb250YWluZXI6YWZ0ZXIsXFxyXFxuLnBvcHVwQ29udGFpbmVyOmJlZm9yZSxcXHJcXG4ucG9wdXBDb250YWluZXI6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtMnB4O1xcclxcbiAgdG9wOiAtMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgNDVkZWcsXFxyXFxuICAgICMzODJmZTIsXFxyXFxuICAgICMwNDA0YmYsXFxyXFxuICAgICM1MjEyYzksXFxyXFxuICAgICM0ZDBiYzAsXFxyXFxuICAgICM3NDA4MDgsXFxyXFxuICAgICM4ZDBiNTcsXFxyXFxuICAgICMwMDAwZmZcXHJcXG4gICk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgYW5pbWF0aW9uOiBzdGVhbSAxNXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHN0ZWFtIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzAwJSAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXI6YWZ0ZXIsXFxyXFxuLnBvcHVwQ29udGFpbmVyOmFmdGVyIHtcXHJcXG4gIGZpbHRlcjogYmx1cig1MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXIgLnRpdGxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBtYXJnaW46IDEwJSAwO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIGgyIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDMge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTQxOGM7XFxyXFxufVxcclxcblxcclxcbi5zbWFsbC1jbGFzcyB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIGJvdHRvbTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAxMnB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1maWxsKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBDb250YWluZXIgaDIsXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS13aWR0aCk7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwb3B1cCBzdHlsZXMgKi9cXHJcXG4ucG9wdXBXaW5kb3cge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDUwO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBDb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDE3LCAxNywgMSk7XFxyXFxuICBtYXJnaW46IDI0cHggYXV0bztcXHJcXG4gIHJvdy1nYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcG9wdXAge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBDb250YWluZXIgc3BhbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZSB7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwQ29udGFpbmVyIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxyXFxudGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwQ29udGFpbmVyIHAge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1saW5rIGxpIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmNhcmRDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNDUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIC5jYXJkQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLXdyYXBwZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbGlnaHQtaG91c2UtYXZvaWQtZXJyb3Ige1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtYm94LWlkIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXJOYW1lIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtYm94LWlkIHtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMjBweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGVBQWU7RUFDZix3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5REFBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFX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YTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzEsMzAwOzEsNDAwOzEsNTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYmctZmlsbDogIzU1NTtcXHJcXG4gIC0td2hpdGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XFxyXFxuICAtLXdpZHRoOiA5MCU7XFxyXFxuICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXHJcXG4gIC0tc2NhbGU6IHNjYWxlKDEuMSk7XFxyXFxuICAtLWZvbnQtNjAwOiA2MDA7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9pbWFnZXMvYmdpbWcxLmpwZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTVweCAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTIxMmM5O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXdyYXBwZXIge1xcclxcbiAgd2lkdGg6IHZhcigtLXdpZHRoKTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogMTUwJTtcXHJcXG4gIGhlaWdodDogMzUwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0NhcmRjb250YWluZXIgaW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWc6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkRHluYW1pY0NhcmRzIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS13aWR0aCk7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZENvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiA1JSAwO1xcclxcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MSwgNDEsIDQxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXI6YmVmb3JlLFxcclxcbi5jYXJkQ29udGFpbmVyOmFmdGVyLFxcclxcbi5wb3B1cENvbnRhaW5lcjpiZWZvcmUsXFxyXFxuLnBvcHVwQ29udGFpbmVyOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogLTJweDtcXHJcXG4gIHRvcDogLTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDQ1ZGVnLFxcclxcbiAgICAjMzgyZmUyLFxcclxcbiAgICAjMDQwNGJmLFxcclxcbiAgICAjNTIxMmM5LFxcclxcbiAgICAjNGQwYmMwLFxcclxcbiAgICAjNzQwODA4LFxcclxcbiAgICAjOGQwYjU3LFxcclxcbiAgICAjMDAwMGZmXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDRweCk7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGFuaW1hdGlvbjogc3RlYW0gMTVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzdGVhbSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwMCUgMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyOmFmdGVyLFxcclxcbi5wb3B1cENvbnRhaW5lcjphZnRlciB7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNTBweCk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyIC50aXRsZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgbWFyZ2luOiAxMCUgMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBoMiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIGgzIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU0MThjO1xcclxcbn1cXHJcXG5cXHJcXG4uc21hbGwtY2xhc3Mge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBib3R0b206IDYwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTJweDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZmlsbCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwQ29udGFpbmVyIGgyLFxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICB3aWR0aDogdmFyKC0td2lkdGgpO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcG9wdXAgc3R5bGVzICovXFxyXFxuLnBvcHVwV2luZG93IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiA1MDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAxNywgMTcsIDEpO1xcclxcbiAgbWFyZ2luOiAyNHB4IGF1dG87XFxyXFxuICByb3ctZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXBvcHVwIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwQ29udGFpbmVyIHNwYW4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2Uge1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cENvbnRhaW5lciBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cENvbnRhaW5lciBwIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtbGluayBsaSB7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gIC5jYXJkQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAuY2FyZENvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlci13cmFwcGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2xpZ2h0LWhvdXNlLWF2b2lkLWVycm9yIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJveC1pZCB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiN1c2VyTmFtZSB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJveC1pZCB7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBnZXROYXNhQXBpID1cbiAgXCJodHRwczovL2FwaS5uYXNhLmdvdi9wbGFuZXRhcnkvYXBvZD9hcGlfa2V5PXlFNVh3RjNZQlJ1NlJhTWIySzMyOGxYSmFiV0NvZzVyemphSVI3Nk4mc3RhcnRfZGF0ZT0yMDIyLTA0LTEwJmVuZF9kYXRlPTIwMjItMDQtMjFcIjtcbmNvbnN0IGRhdGVzRm9yUG9wdXAgPSBbXG4gIFwiMjAyMi0wNC0xMFwiLFxuICBcIjIwMjItMDQtMTFcIixcbiAgXCIyMDIyLTA0LTEyXCIsXG4gIFwiMjAyMi0wNC0xM1wiLFxuICBcIjIwMjItMDQtMTRcIixcbiAgXCIyMDIyLTA0LTE1XCIsXG4gIFwiMjAyMi0wNC0xNlwiLFxuICBcIjIwMjItMDQtMTdcIixcbiAgXCIyMDIyLTA0LTE4XCIsXG4gIFwiMjAyMi0wNC0xOVwiLFxuICBcIjIwMjItMDQtMjBcIixcbiAgXCIyMDIyLTA0LTIxXCIsXG5dO1xuY29uc3QgZ2V0RGF0YURhdGVJbWFnZSA9IChudW0pID0+XG4gIGBodHRwczovL2FwaS5uYXNhLmdvdi9wbGFuZXRhcnkvYXBvZD9hcGlfa2V5PXlFNVh3RjNZQlJ1NlJhTWIySzMyOGxYSmFiV0NvZzVyemphSVI3Nk4mZGF0ZT0ke2RhdGVzRm9yUG9wdXBbbnVtXX1gO1xuXG5jb25zdCBsaWtlTGluayA9XG4gIFwiaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvclM5M1RZTWFXRlJjREhSMVJzOXUvbGlrZXNcIjtcbmNvbnN0IGNvbW1lbnRMaW5rID1cbiAgXCJodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9yUzkzVFlNYVdGUmNESFIxUnM5dS9jb21tZW50c1wiO1xuXG5leHBvcnQgeyBnZXROYXNhQXBpLCBnZXREYXRhRGF0ZUltYWdlLCBsaWtlTGluaywgY29tbWVudExpbmsgfTtcbiIsImltcG9ydCB7IGdldFNjb3JlcywgcG9zdFNjb3JlcyB9IGZyb20gXCIuL2dldC1wb3N0LWRhdGEuanNcIjtcbmltcG9ydCB7IGNvbW1lbnRMaW5rIH0gZnJvbSBcIi4vQVBJLWxpbmtzLmpzXCI7XG5cbmZ1bmN0aW9uIGNvdW50RWxlbWVudHMoZWxlbSkge1xuICByZXR1cm4gZWxlbS5jaGlsZEVsZW1lbnRDb3VudDtcbn1cblxuLy8gSEVSRVxuXG5mdW5jdGlvbiBjb3VudENvbW1lbnRzKCkge1xuICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnQtbGlua1wiKTtcbiAgY29tbWVudENvdW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gYENvbW1lbnRzICR7Y291bnRFbGVtZW50cyhcbiAgICBjb21tZW50Q291bnRcbiAgKX1gO1xufVxuXG5mdW5jdGlvbiBzaG93Q29tbWVudCh1c2VyLCBzdHIpIHtcbiAgY29uc3QgdWxDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tZW50LWxpbmtcIik7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5pbm5lckhUTUwgPSBgJHt1c2VyfSA6ICR7c3RyfWA7XG4gIHVsQ29udC5hcHBlbmRDaGlsZChsaSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDb21tZW50cyhpZCkge1xuICBjb25zdCBzaG93UHJvcGVyID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3JTOTNUWU1hV0ZSY0RIUjFSczl1L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gO1xuICBnZXRTY29yZXMoc2hvd1Byb3BlcilcbiAgICAudGhlbigoZGF0YSkgPT5cbiAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbSkgPT4gc2hvd0NvbW1lbnQoZWxlbS51c2VybmFtZSwgZWxlbS5jb21tZW50KSlcbiAgICApXG4gICAgLnRoZW4oKCkgPT4gY291bnRDb21tZW50cygpKVxuICAgIC5jYXRjaCgoKSA9PiBzaG93Q29tbWVudChcIm5vXCIsIFwiY29tbWVudHMgeWV0XCIpKTtcbn1cblxuZnVuY3Rpb24gYWRkQ29tbWVudChpZCwgdXNlciwgc3RyKSB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgaXRlbV9pZDogaWQsXG4gICAgdXNlcm5hbWU6IHVzZXIsXG4gICAgY29tbWVudDogc3RyLFxuICB9O1xuICBwb3N0U2NvcmVzKGNvbW1lbnRMaW5rLCBkYXRhKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICBzaG93Q29tbWVudCh1c2VyLCBzdHIpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHNob3dDb21tZW50KFwibm9cIiwgXCJjb21tZW50cyB5ZXRcIikpO1xufVxuXG5leHBvcnQge1xuICBjb3VudEVsZW1lbnRzLFxuICBjb3VudENvbW1lbnRzLFxuICBzaG93Q29tbWVudCxcbiAgZGlzcGxheUNvbW1lbnRzLFxuICBhZGRDb21tZW50LFxufTtcbiIsImNvbnN0IGdldFNjb3JlcyA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgcG9zdFNjb3JlcyA9IGFzeW5jICh1cmwsIGRhdGEpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgeyBnZXRTY29yZXMsIHBvc3RTY29yZXMgfTtcbiIsImZ1bmN0aW9uIGNsb3NlUG9wdXAodGFyZ2V0KSB7XG4gIHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbn1cblxuY29uc3QgY29udGFpbmVyRHluYW1pY0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGREeW5hbWljQ2FyZHNcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQb3B1cChpbWcsIHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQpIHtcbiAgY29uc3QgcG9wdXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwb3B1cERpdi5jbGFzc0xpc3QuYWRkKFwicG9wdXBXaW5kb3dcIik7XG4gIHBvcHVwRGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicG9wdXBDb250YWluZXJcIj5cbiAgICAgPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIiBpZD1cImNsb3NlXCI+PC9pPlxuICAgICA8L3NwYW4+XG4gICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItcG9wdXBcIj5cbiAgICAgICA8aW1nIHNyYz1cIiR7aW1nfVwiIGNsYXNzPVwicG9wdXAtaW1hZ2VcIiBhbHQ9XCJjbG9zZS1pY29uXCI+XG4gICAgIDwvZGl2PlxuICAgICA8aDI+JHt0aXRsZX08L2gyPlxuICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgIDxkaXY+XG4gICAgICAgICA8aDIgY2xhc3M9XCJjb21tZW50c1wiPkNvbW1lbnRzPC9oMj5cbiAgICAgICAgIDx1bCBpZD1cImNvbW1lbnQtbGlua1wiPlxuICAgICAgICAgPC91bD5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8Zm9ybSBpZD1cIiR7aWR9Zm9ybVwiIGFjdGlvbj1cInBvc3RcIj5cbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgaWQ9XCJ1c2VyTmFtZVwiPlxuICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ0ZXh0XCIgaWQ9XCJjb21tZW50LWJveC1pZFwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ29tbWVudFwiIGlkPVwicG9wdXBDb21tZW50XCI+XG4gICAgICAgPC9mb3JtPlxuICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+YDtcbiAgY29udGFpbmVyRHluYW1pY0NhcmRzLmFwcGVuZENoaWxkKHBvcHVwRGl2KTtcbn1cblxuZXhwb3J0IHsgY2xvc2VQb3B1cCwgZGlzcGxheVBvcHVwLCBjb250YWluZXJEeW5hbWljQ2FyZHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG4gIGNvdW50RWxlbWVudHMsXG4gIGRpc3BsYXlDb21tZW50cyxcbiAgYWRkQ29tbWVudCxcbn0gZnJvbSBcIi4vbW9kdWxlcy9mdW5jQ29tbWVudC5qc1wiO1xuaW1wb3J0IHsgZ2V0TmFzYUFwaSwgZ2V0RGF0YURhdGVJbWFnZSwgbGlrZUxpbmsgfSBmcm9tIFwiLi9tb2R1bGVzL0FQSS1saW5rcy5qc1wiO1xuaW1wb3J0IHsgZ2V0U2NvcmVzLCBwb3N0U2NvcmVzIH0gZnJvbSBcIi4vbW9kdWxlcy9nZXQtcG9zdC1kYXRhLmpzXCI7XG5pbXBvcnQge1xuICBjbG9zZVBvcHVwLFxuICBkaXNwbGF5UG9wdXAsXG4gIGNvbnRhaW5lckR5bmFtaWNDYXJkcyxcbn0gZnJvbSBcIi4vbW9kdWxlcy9wb3AtdXAuanNcIjtcblxuZnVuY3Rpb24gYWRkQ2FyZChpbWcsIHRpdGxlLCBpbmRleCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImNhcmRDb250YWluZXJcIik7XG4gIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWdDYXJkY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke2ltZ31cIiBhbHQ9XCJJbWFnZSBwcm92aWRlZCBieSBOYXNhJ3MgQXBpXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICA8aDM+JHt0aXRsZX08L2gzPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgaWQ9XCIke2luZGV4fXN0YXJcIiBjbGFzcz1cImxpa2VcIj48aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c21hbGwgY2xhc3M9J3NtYWxsLWNsYXNzJz48L3NtYWxsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ29tbWVudHNcIiBpZD1cIiR7aW5kZXh9XCIgY2xhc3M9XCJjb21tZW50XCI+XG4gICAgICAgIGA7XG4gIGNvbnRhaW5lckR5bmFtaWNDYXJkcy5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG4vLyBIRVJFIERJU1BMQVlTIFRIRSBEQVRBIERFU0NSSVBUSU9OXG5mdW5jdGlvbiBkaXNwbGF5SW1hZ2UoaWQpIHtcbiAgZ2V0U2NvcmVzKGdldERhdGFEYXRlSW1hZ2UoaWQpKVxuICAgIC50aGVuKChkYXRhKSA9PiBkaXNwbGF5UG9wdXAoZGF0YS5oZHVybCwgZGF0YS50aXRsZSwgZGF0YS5leHBsYW5hdGlvbiwgaWQpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGRpc3BsYXlDb21tZW50cyhpZCk7XG4gICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VcIik7XG4gICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjbG9zZVBvcHVwKGNsb3NlQnRuKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn1cblxuY29uc3QgZGVwbG95TGlrZXMgPSAoaWQsIGxpa2VzKSA9PiB7XG4gIGNvbnN0IHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBzbWFsbC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBgJHtsaWtlc30gbGlrZXNgO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheVN0YXJzKCkge1xuICBnZXRTY29yZXMobGlrZUxpbmspXG4gICAgLnRoZW4oKGRhdGEpID0+XG4gICAgICBkYXRhLmZvckVhY2goKGVsZW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGkgPCBjb3VudEVsZW1lbnRzKGNvbnRhaW5lckR5bmFtaWNDYXJkcykpIHtcbiAgICAgICAgICBkZXBsb3lMaWtlcyhlbGVtLml0ZW1faWQsIGVsZW0ubGlrZXMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2NvcmVzKCkge1xuICBnZXRTY29yZXMoZ2V0TmFzYUFwaSlcbiAgICAudGhlbigoZGF0YSkgPT5cbiAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IGFkZENhcmQoZWxlbS5oZHVybCwgZWxlbS50aXRsZSwgaW5kZXgpKVxuICAgIClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBkaXNwbGF5U3RhcnMoKTtcbiAgICAgIGNvdW50SXRlbXMoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIGxpa2VJdChpZCwgc3RhcnMpIHtcbiAgY29uc3QgZGF0YSA9IHsgaXRlbV9pZDogaWQgfTtcbiAgcG9zdFNjb3JlcyhsaWtlTGluaywgZGF0YSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgZGVwbG95TGlrZXMoaWQsIHN0YXJzKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cbmRpc3BsYXlTY29yZXMoKTtcblxuY29udGFpbmVyRHluYW1pY0NhcmRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmEtaGVhcnRcIikpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc0MgPSBwYXJzZUludChcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQsXG4gICAgICAxMFxuICAgICk7XG4gICAgY29uc3Qgc3RhcnMgPSBzQyArIDE7XG4gICAgbGlrZUl0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQsIHN0YXJzKTtcbiAgfVxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tbWVudFwiKSkge1xuICAgIGRpc3BsYXlJbWFnZShwYXJzZUludChlLnRhcmdldC5pZCwgMTApKTtcbiAgfVxuICBpZiAoZS50YXJnZXQuaWQgPT09IFwicG9wdXBDb21tZW50XCIpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkLm1hdGNoKC9bMC05XS9nKTtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlck5hbWVcIik7XG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudC1ib3gtaWRcIik7XG4gICAgYWRkQ29tbWVudChpZCwgdXNlck5hbWUudmFsdWUsIGNvbW1lbnQudmFsdWUpO1xuICAgIHVzZXJOYW1lLnZhbHVlID0gXCJcIjtcbiAgICBjb21tZW50LnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=