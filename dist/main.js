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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/47879.jpg */ "./src/images/47879.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --General-width: 90%;\r\n  --transition: all 0.2s linear;\r\n  --scale: scale(1.2);\r\n  --card-scale: scale(1.05);\r\n  --pop-600: 600;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 15px 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #5212c9;\r\n}\r\n\r\n.header-container {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.imgCardcontainer {\r\n  min-height: 318px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  overflow: hidden;\r\n}\r\n\r\n.imgCardcontainer img {\r\n  width: 148%;\r\n  height: 348px;\r\n  margin-bottom: 7%;\r\n  transition: var(--transition);\r\n}\r\n\r\n#addDynamicCards {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.cardContainer {\r\n  width: 30%;\r\n  height: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5% 0;\r\n  padding: 18px 18px;\r\n  background-color: rgb(16, 16, 16, 0.5);\r\n  border-radius: 10px;\r\n  transition: var(--transition);\r\n  position: relative;\r\n}\r\n\r\n.cardContainer .title {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin: 10% 0;\r\n  color: white;\r\n}\r\n\r\n.title h2 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.title h3 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.cardContainer:hover {\r\n  transform: var(--card-scale);\r\n}\r\n\r\n.logo img {\r\n  width: 80px;\r\n  transition: var(--transition);\r\n}\r\n\r\n.imgCardcontainer img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\n.logo img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\nnav {\r\n  width: 50%;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-link {\r\n  transition: var(--transition);\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n}\r\n\r\nfooter {\r\n  background-color: #5212c9;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: white;\r\n  position: absolute;\r\n}\r\n\r\n#light-house-avoid-error {\r\n  display: none;\r\n}\r\n\r\n.bigPopup h2,\r\n.description {\r\n  color: white;\r\n  padding: 32px;\r\n  text-align: center;\r\n}\r\n\r\n.popupWin {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 40;\r\n  overflow-y: scroll;\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.bigPopup {\r\n  position: relative;\r\n  width: 70%;\r\n  border: 1px solid #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(20, 17, 17, 1);\r\n  margin: 24px auto;\r\n  row-gap: 15px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-class-image {\r\n  width: 100%;\r\n  padding: 20px;\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.bigPopup span {\r\n  align-self: flex-end;\r\n  padding: 20px;\r\n}\r\n\r\n#closePopup {\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\n\r\n.bigPopup form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40%;\r\n  margin: 18px auto;\r\n  height: 300px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\n::placeholder {\r\n  padding: 15px;\r\n}\r\n\r\n.bigPopup p {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 20px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n#ul-comment-dynamic-link li {\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,oBAAoB;EACpB,6BAA6B;EAC7B,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;;AAEA;EACE,yDAA4C;EAC5C,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,sCAAsC;EACtC,mBAAmB;EACnB,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,qCAAqC;EACrC,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,aAAa;AACf;;AAEA;;EAEE,WAAW;EACX,cAAc;EACd,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap\");\r\n\r\n:root {\r\n  --General-width: 90%;\r\n  --transition: all 0.2s linear;\r\n  --scale: scale(1.2);\r\n  --card-scale: scale(1.05);\r\n  --pop-600: 600;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(/src/images/47879.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 15px 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #5212c9;\r\n}\r\n\r\n.header-container {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.imgCardcontainer {\r\n  min-height: 318px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  overflow: hidden;\r\n}\r\n\r\n.imgCardcontainer img {\r\n  width: 148%;\r\n  height: 348px;\r\n  margin-bottom: 7%;\r\n  transition: var(--transition);\r\n}\r\n\r\n#addDynamicCards {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.cardContainer {\r\n  width: 30%;\r\n  height: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5% 0;\r\n  padding: 18px 18px;\r\n  background-color: rgb(16, 16, 16, 0.5);\r\n  border-radius: 10px;\r\n  transition: var(--transition);\r\n  position: relative;\r\n}\r\n\r\n.cardContainer .title {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin: 10% 0;\r\n  color: white;\r\n}\r\n\r\n.title h2 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.title h3 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.cardContainer:hover {\r\n  transform: var(--card-scale);\r\n}\r\n\r\n.logo img {\r\n  width: 80px;\r\n  transition: var(--transition);\r\n}\r\n\r\n.imgCardcontainer img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\n.logo img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\nnav {\r\n  width: 50%;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-link {\r\n  transition: var(--transition);\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n}\r\n\r\nfooter {\r\n  background-color: #5212c9;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: white;\r\n  position: absolute;\r\n}\r\n\r\n#light-house-avoid-error {\r\n  display: none;\r\n}\r\n\r\n.bigPopup h2,\r\n.description {\r\n  color: white;\r\n  padding: 32px;\r\n  text-align: center;\r\n}\r\n\r\n.popupWin {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 40;\r\n  overflow-y: scroll;\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.bigPopup {\r\n  position: relative;\r\n  width: 70%;\r\n  border: 1px solid #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(20, 17, 17, 1);\r\n  margin: 24px auto;\r\n  row-gap: 15px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-class-image {\r\n  width: 100%;\r\n  padding: 20px;\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.bigPopup span {\r\n  align-self: flex-end;\r\n  padding: 20px;\r\n}\r\n\r\n#closePopup {\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\n\r\n.bigPopup form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40%;\r\n  margin: 18px auto;\r\n  height: 300px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\n::placeholder {\r\n  padding: 15px;\r\n}\r\n\r\n.bigPopup p {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 20px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n#ul-comment-dynamic-link li {\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n"],"sourceRoot":""}]);
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
const getNasaApi = 'https://api.nasa.gov/planetary/apod?api_key=yE5XwF3YBRu6RaMb2K328lXJabWCog5rzjaIR76N&start_date=2022-04-10&end_date=2022-04-18';

const randomDatesForPopupImgs = [
  '2022-04-10',
  '2022-04-11',
  '2022-04-12',
  '2022-04-13',
  '2022-04-14',
  '2022-04-15',
  '2022-04-16',
  '2022-04-17',
  '2022-04-18',
];

const getDataDateImage = (num) => `https://api.nasa.gov/planetary/apod?api_key=yE5XwF3YBRu6RaMb2K328lXJabWCog5rzjaIR76N&date=${randomDatesForPopupImgs[num]}`;

const likeLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/likes';

const commentLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments';




/***/ }),

/***/ "./src/modules/funcComments.js":
/*!*************************************!*\
  !*** ./src/modules/funcComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postComment": () => (/* binding */ postComment),
/* harmony export */   "showComment": () => (/* binding */ showComment)
/* harmony export */ });
/* harmony import */ var _get_post_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-post-data.js */ "./src/modules/get-post-data.js");
/* harmony import */ var _API_links_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API-links.js */ "./src/modules/API-links.js");



const commentStructure = (userName, textCommentStr) => {
  const ulDynamicCont = document.querySelector('#ul-comment-dynamic-link');
  const LIST = document.createElement('li');
  LIST.innerHTML = `${userName} : ${textCommentStr}`;
  ulDynamicCont.appendChild(LIST);
};

const showComment = (id) => {
  const getCommentFromAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments?item_id=${id}`;
  (0,_get_post_data_js__WEBPACK_IMPORTED_MODULE_0__.getData)(getCommentFromAPI)
    .then((data) => data.forEach((comment) => commentStructure(comment.username, comment.comment)))
    .catch(() => commentStructure('This image has', 'no comments yet'));
};

const postComment = (idComment, userName, commentStr) => {
  const dataComment = {
    item_id: idComment,
    username: userName,
    comment: commentStr,
  };
  (0,_get_post_data_js__WEBPACK_IMPORTED_MODULE_0__.postData)(_API_links_js__WEBPACK_IMPORTED_MODULE_1__.commentLink, dataComment)
    .then((data) => {
      if (data.status === 201) {
        commentStructure(userName, commentStr);
      }
    })
    .catch(() => commentStructure('This image has', 'no comments yet'));
};




/***/ }),

/***/ "./src/modules/get-post-data.js":
/*!**************************************!*\
  !*** ./src/modules/get-post-data.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const getData = async (urlApi) => {
  const responseData = await fetch(urlApi);
  return responseData.json();
};

const postData = async (urlApi, data) => {
  const responseData = await fetch(urlApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return responseData;
};




/***/ }),

/***/ "./src/modules/pop-up.js":
/*!*******************************!*\
  !*** ./src/modules/pop-up.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeWindowPopup": () => (/* binding */ closeWindowPopup),
/* harmony export */   "containerDynamicCards": () => (/* binding */ containerDynamicCards),
/* harmony export */   "displayWindowPopup": () => (/* binding */ displayWindowPopup)
/* harmony export */ });
const containerDynamicCards = document.getElementById('addDynamicCards');

const displayWindowPopup = (image, title, infoDescrip, windowsId) => {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popupWin');
  popupContainer.innerHTML = `
  <div class="bigPopup">
    <span><i class="fas fa-times" id="closePopup"></i></span>
    <div class="img-container-popup">
      <img src="${image}" class="popup-class-image" alt="image from API">
    </div>
    <h2>${title}</h2>
    <p class="description">${infoDescrip}</p>
    <div>
     <h2 class="comments">Comments</h2>
     <ul id="comentDynamicList"></ul>
    </div>
    <form id="${windowsId}form" action="post">
      <input type="text" placeholder="Enter your Name" id="userName">
      <textarea name="text" id="comment-box-id" cols="40" rows="15" placeholder="...and your comment."></textarea>
      <input type="button" value="Comment" id="popupComment">
    </form>
  </div>
  `;
  containerDynamicCards.appendChild(popupContainer);
};

const closeWindowPopup = (IDtarget) => {
  IDtarget.parentElement.parentElement.parentElement.remove();
};



/***/ }),

/***/ "./src/images/47879.jpg":
/*!******************************!*\
  !*** ./src/images/47879.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bd58a026ec2c5e8a87f.jpg";

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
/* harmony import */ var _modules_API_links_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/API-links.js */ "./src/modules/API-links.js");
/* harmony import */ var _modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get-post-data.js */ "./src/modules/get-post-data.js");
/* harmony import */ var _modules_pop_up_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pop-up.js */ "./src/modules/pop-up.js");
/* harmony import */ var _modules_funcComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/funcComments.js */ "./src/modules/funcComments.js");






const addFirstInterfaceCard = (image, titleCard, indexCard) => {
  const card = document.createElement('div');
  card.classList.add('cardContainer');
  card.innerHTML = `
  <div class="imgCardcontainer">
  <img src="${image}" add="Image provided by Nasa's Api">
  </div>
  <div class="title">
  <h3>${titleCard}</h3>
  <a href="#" id="${indexCard}star" class="like"><i class="fas fa-heart"></i></a>
  </div>
  <small class="small-class"></small>
  <input type="button" value="Comments" id="${indexCard}" class="comment">
  `;
  _modules_pop_up_js__WEBPACK_IMPORTED_MODULE_3__.containerDynamicCards.appendChild(card);
};

const displayImage = (idImg) => {
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_2__.getData)((0,_modules_API_links_js__WEBPACK_IMPORTED_MODULE_1__.getDataDateImage)(idImg))
    .then((data) => (0,_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_3__.displayWindowPopup)(data.hdurl, data.title, data.explanation, idImg))
    .then(() => {
      (0,_modules_funcComments_js__WEBPACK_IMPORTED_MODULE_4__.showComment)(idImg);
      const closePopupBtn = document.getElementById('closePopup');
      closePopupBtn.addEventListener('click', () => {
        (0,_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_3__.closeWindowPopup)(closePopupBtn);
      });
    })
    .catch((error) => console.log(error));
};

const sendLikesDom = (idLike, likes) => {
  const small = document.getElementById(idLike);
  small.parentElement.nextElementSibling.innerHTML = `${likes} likes`;
};

function countingElementsFunc(elem) {
  return elem.childElementCount;
}

const showFuncLikes = () => {
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_2__.getData)(_modules_API_links_js__WEBPACK_IMPORTED_MODULE_1__.likeLink)
    .then((data) => data.forEach((card, index) => {
      if (index < countingElementsFunc(_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_3__.containerDynamicCards)) {
        sendLikesDom(card.item_id, card.likes);
      }
    }))
    .catch((error) => console.log(error));
};

const showAmountOfLikes = () => {
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_2__.getData)(_modules_API_links_js__WEBPACK_IMPORTED_MODULE_1__.getNasaApi)
    .then((data) => data.forEach((card, ind) => addFirstInterfaceCard(card.hdurl, card.title, ind)))
    .then(() => {
      showFuncLikes();
    })
    .catch((error) => console.log(error));
};

const rawFunclike = (idLike, likes) => {
  const data = { item_id: idLike };
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_2__.postData)(_modules_API_links_js__WEBPACK_IMPORTED_MODULE_1__.likeLink, data)
    .then((data) => {
      if (data.status === 201) {
        sendLikesDom(idLike, likes);
      }
    })
    .catch((error) => console.log(error));
};

showAmountOfLikes();
rawFunclike();

_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_3__.containerDynamicCards.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-heart')) {
    e.preventDefault();
    const likeCounter = parseInt(
      e.target.parentElement.parentElement.nextElementSibling.textContent,
      10,
    );
    const likes = likeCounter + 1;
    rawFunclike(e.target.parentElement.id, likes);
  }

  if (e.target.classList.contains('comment')) {
    displayImage(parseInt(e.target.id, 10));
  }
  if (e.target.id === 'popupComment') {
    e.preventDefault();
    const idComment = e.target.parentElement.id.match(/[0-9]/g);
    const userName = document.getElementById('userName');
    const commentDom = document.getElementById('comment-box-id');
    (0,_modules_funcComments_js__WEBPACK_IMPORTED_MODULE_4__.postComment)(idComment, userName.value, commentDom.value);
    userName.value = '';
    commentDom.value = '';
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbEI7QUFDQSx1Q0FBdUMscUVBQXFCO0FBQzVEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEVBQUUsa0VBQU8sQ0FBQyw2REFBVTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixFQUFFLG1FQUFRLENBQUMsMkRBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNGQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL21vZHVsZXMvQVBJLWxpbmtzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL21vZHVsZXMvZnVuY0NvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL21vZHVsZXMvZ2V0LXBvc3QtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9tb2R1bGVzL3BvcC11cC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzLzQ3ODc5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MSwzMDA7MSw0MDA7MSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tR2VuZXJhbC13aWR0aDogOTAlO1xcclxcbiAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxyXFxuICAtLXNjYWxlOiBzY2FsZSgxLjIpO1xcclxcbiAgLS1jYXJkLXNjYWxlOiBzY2FsZSgxLjA1KTtcXHJcXG4gIC0tcG9wLTYwMDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDEycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjEyYzk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS1HZW5lcmFsLXdpZHRoKTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMxOHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogMTQ4JTtcXHJcXG4gIGhlaWdodDogMzQ4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA3JTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkRHluYW1pY0NhcmRzIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS1HZW5lcmFsLXdpZHRoKTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDUlIDA7XFxyXFxuICBwYWRkaW5nOiAxOHB4IDE4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDE2LCAxNiwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXIgLnRpdGxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBtYXJnaW46IDEwJSAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDIge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBoMyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXI6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1jYXJkLXNjYWxlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIGltZzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tcG9wLTYwMCk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTIxMmM5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbiNsaWdodC1ob3VzZS1hdm9pZC1lcnJvciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgaDIsXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFdpbiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogNDA7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5iaWdQb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMTcsIDE3LCAxKTtcXHJcXG4gIG1hcmdpbjogMjRweCBhdXRvO1xcclxcbiAgcm93LWdhcDogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jbGFzcy1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5iaWdQb3B1cCBzcGFuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlUG9wdXAge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXBvcC02MDApO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDE4cHggYXV0bztcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgcCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN1bC1jb21tZW50LWR5bmFtaWMtbGluayBsaSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5REFBNEM7RUFDNUMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MSwzMDA7MSw0MDA7MSw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1HZW5lcmFsLXdpZHRoOiA5MCU7XFxyXFxuICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXHJcXG4gIC0tc2NhbGU6IHNjYWxlKDEuMik7XFxyXFxuICAtLWNhcmQtc2NhbGU6IHNjYWxlKDEuMDUpO1xcclxcbiAgLS1wb3AtNjAwOiA2MDA7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9pbWFnZXMvNDc4NzkuanBnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDEycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjEyYzk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS1HZW5lcmFsLXdpZHRoKTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMxOHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogMTQ4JTtcXHJcXG4gIGhlaWdodDogMzQ4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA3JTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkRHluYW1pY0NhcmRzIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS1HZW5lcmFsLXdpZHRoKTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDUlIDA7XFxyXFxuICBwYWRkaW5nOiAxOHB4IDE4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDE2LCAxNiwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXIgLnRpdGxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBtYXJnaW46IDEwJSAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDIge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBoMyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXI6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1jYXJkLXNjYWxlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIGltZzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tcG9wLTYwMCk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTIxMmM5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbiNsaWdodC1ob3VzZS1hdm9pZC1lcnJvciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgaDIsXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFdpbiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogNDA7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5iaWdQb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMTcsIDE3LCAxKTtcXHJcXG4gIG1hcmdpbjogMjRweCBhdXRvO1xcclxcbiAgcm93LWdhcDogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jbGFzcy1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5iaWdQb3B1cCBzcGFuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlUG9wdXAge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXBvcC02MDApO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDE4cHggYXV0bztcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgcCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN1bC1jb21tZW50LWR5bmFtaWMtbGluayBsaSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBnZXROYXNhQXBpID0gJ2h0dHBzOi8vYXBpLm5hc2EuZ292L3BsYW5ldGFyeS9hcG9kP2FwaV9rZXk9eUU1WHdGM1lCUnU2UmFNYjJLMzI4bFhKYWJXQ29nNXJ6amFJUjc2TiZzdGFydF9kYXRlPTIwMjItMDQtMTAmZW5kX2RhdGU9MjAyMi0wNC0xOCc7XHJcblxyXG5jb25zdCByYW5kb21EYXRlc0ZvclBvcHVwSW1ncyA9IFtcclxuICAnMjAyMi0wNC0xMCcsXHJcbiAgJzIwMjItMDQtMTEnLFxyXG4gICcyMDIyLTA0LTEyJyxcclxuICAnMjAyMi0wNC0xMycsXHJcbiAgJzIwMjItMDQtMTQnLFxyXG4gICcyMDIyLTA0LTE1JyxcclxuICAnMjAyMi0wNC0xNicsXHJcbiAgJzIwMjItMDQtMTcnLFxyXG4gICcyMDIyLTA0LTE4JyxcclxuXTtcclxuXHJcbmNvbnN0IGdldERhdGFEYXRlSW1hZ2UgPSAobnVtKSA9PiBgaHR0cHM6Ly9hcGkubmFzYS5nb3YvcGxhbmV0YXJ5L2Fwb2Q/YXBpX2tleT15RTVYd0YzWUJSdTZSYU1iMkszMjhsWEphYldDb2c1cnpqYUlSNzZOJmRhdGU9JHtyYW5kb21EYXRlc0ZvclBvcHVwSW1nc1tudW1dfWA7XHJcblxyXG5jb25zdCBsaWtlTGluayA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9yUzkzVFlNYVdGUmNESFIxUnM5dS9saWtlcyc7XHJcblxyXG5jb25zdCBjb21tZW50TGluayA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9yUzkzVFlNYVdGUmNESFIxUnM5dS9jb21tZW50cyc7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldE5hc2FBcGksIGdldERhdGFEYXRlSW1hZ2UsIGxpa2VMaW5rLCBjb21tZW50TGluayxcclxufTtcclxuIiwiaW1wb3J0IHsgZ2V0RGF0YSwgcG9zdERhdGEgfSBmcm9tICcuL2dldC1wb3N0LWRhdGEuanMnO1xyXG5pbXBvcnQgeyBjb21tZW50TGluayB9IGZyb20gJy4vQVBJLWxpbmtzLmpzJztcclxuXHJcbmNvbnN0IGNvbW1lbnRTdHJ1Y3R1cmUgPSAodXNlck5hbWUsIHRleHRDb21tZW50U3RyKSA9PiB7XHJcbiAgY29uc3QgdWxEeW5hbWljQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bC1jb21tZW50LWR5bmFtaWMtbGluaycpO1xyXG4gIGNvbnN0IExJU1QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIExJU1QuaW5uZXJIVE1MID0gYCR7dXNlck5hbWV9IDogJHt0ZXh0Q29tbWVudFN0cn1gO1xyXG4gIHVsRHluYW1pY0NvbnQuYXBwZW5kQ2hpbGQoTElTVCk7XHJcbn07XHJcblxyXG5jb25zdCBzaG93Q29tbWVudCA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IGdldENvbW1lbnRGcm9tQVBJID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3JTOTNUWU1hV0ZSY0RIUjFSczl1L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gO1xyXG4gIGdldERhdGEoZ2V0Q29tbWVudEZyb21BUEkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiBjb21tZW50U3RydWN0dXJlKGNvbW1lbnQudXNlcm5hbWUsIGNvbW1lbnQuY29tbWVudCkpKVxyXG4gICAgLmNhdGNoKCgpID0+IGNvbW1lbnRTdHJ1Y3R1cmUoJ1RoaXMgaW1hZ2UgaGFzJywgJ25vIGNvbW1lbnRzIHlldCcpKTtcclxufTtcclxuXHJcbmNvbnN0IHBvc3RDb21tZW50ID0gKGlkQ29tbWVudCwgdXNlck5hbWUsIGNvbW1lbnRTdHIpID0+IHtcclxuICBjb25zdCBkYXRhQ29tbWVudCA9IHtcclxuICAgIGl0ZW1faWQ6IGlkQ29tbWVudCxcclxuICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcclxuICAgIGNvbW1lbnQ6IGNvbW1lbnRTdHIsXHJcbiAgfTtcclxuICBwb3N0RGF0YShjb21tZW50TGluaywgZGF0YUNvbW1lbnQpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGNvbW1lbnRTdHJ1Y3R1cmUodXNlck5hbWUsIGNvbW1lbnRTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKCgpID0+IGNvbW1lbnRTdHJ1Y3R1cmUoJ1RoaXMgaW1hZ2UgaGFzJywgJ25vIGNvbW1lbnRzIHlldCcpKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHNob3dDb21tZW50LCBwb3N0Q29tbWVudCB9O1xyXG4iLCJjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybEFwaSkgPT4ge1xuICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBmZXRjaCh1cmxBcGkpO1xuICByZXR1cm4gcmVzcG9uc2VEYXRhLmpzb24oKTtcbn07XG5cbmNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybEFwaSwgZGF0YSkgPT4ge1xuICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBmZXRjaCh1cmxBcGksIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2VEYXRhO1xufTtcblxuZXhwb3J0IHsgZ2V0RGF0YSwgcG9zdERhdGEgfTtcbiIsImNvbnN0IGNvbnRhaW5lckR5bmFtaWNDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGREeW5hbWljQ2FyZHMnKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlXaW5kb3dQb3B1cCA9IChpbWFnZSwgdGl0bGUsIGluZm9EZXNjcmlwLCB3aW5kb3dzSWQpID0+IHtcclxuICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcHVwV2luJyk7XHJcbiAgcG9wdXBDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJiaWdQb3B1cFwiPlxyXG4gICAgPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIiBpZD1cImNsb3NlUG9wdXBcIj48L2k+PC9zcGFuPlxyXG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXItcG9wdXBcIj5cclxuICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGNsYXNzPVwicG9wdXAtY2xhc3MtaW1hZ2VcIiBhbHQ9XCJpbWFnZSBmcm9tIEFQSVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aDI+JHt0aXRsZX08L2gyPlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7aW5mb0Rlc2NyaXB9PC9wPlxyXG4gICAgPGRpdj5cclxuICAgICA8aDIgY2xhc3M9XCJjb21tZW50c1wiPkNvbW1lbnRzPC9oMj5cclxuICAgICA8dWwgaWQ9XCJjb21lbnREeW5hbWljTGlzdFwiPjwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxmb3JtIGlkPVwiJHt3aW5kb3dzSWR9Zm9ybVwiIGFjdGlvbj1cInBvc3RcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIE5hbWVcIiBpZD1cInVzZXJOYW1lXCI+XHJcbiAgICAgIDx0ZXh0YXJlYSBuYW1lPVwidGV4dFwiIGlkPVwiY29tbWVudC1ib3gtaWRcIiBjb2xzPVwiNDBcIiByb3dzPVwiMTVcIiBwbGFjZWhvbGRlcj1cIi4uLmFuZCB5b3VyIGNvbW1lbnQuXCI+PC90ZXh0YXJlYT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNvbW1lbnRcIiBpZD1cInBvcHVwQ29tbWVudFwiPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgY29udGFpbmVyRHluYW1pY0NhcmRzLmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlV2luZG93UG9wdXAgPSAoSUR0YXJnZXQpID0+IHtcclxuICBJRHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNvbnRhaW5lckR5bmFtaWNDYXJkcywgZGlzcGxheVdpbmRvd1BvcHVwLCBjbG9zZVdpbmRvd1BvcHVwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdldE5hc2FBcGksIGdldERhdGFEYXRlSW1hZ2UsIGxpa2VMaW5rIH0gZnJvbSAnLi9tb2R1bGVzL0FQSS1saW5rcy5qcyc7XG5pbXBvcnQgeyBnZXREYXRhLCBwb3N0RGF0YSB9IGZyb20gJy4vbW9kdWxlcy9nZXQtcG9zdC1kYXRhLmpzJztcbmltcG9ydCB7XG4gIGNvbnRhaW5lckR5bmFtaWNDYXJkcyxcbiAgZGlzcGxheVdpbmRvd1BvcHVwLFxuICBjbG9zZVdpbmRvd1BvcHVwLFxufSBmcm9tICcuL21vZHVsZXMvcG9wLXVwLmpzJztcbmltcG9ydCB7IHBvc3RDb21tZW50LCBzaG93Q29tbWVudCB9IGZyb20gJy4vbW9kdWxlcy9mdW5jQ29tbWVudHMuanMnO1xuXG5jb25zdCBhZGRGaXJzdEludGVyZmFjZUNhcmQgPSAoaW1hZ2UsIHRpdGxlQ2FyZCwgaW5kZXhDYXJkKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkQ29udGFpbmVyJyk7XG4gIGNhcmQuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiaW1nQ2FyZGNvbnRhaW5lclwiPlxuICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgYWRkPVwiSW1hZ2UgcHJvdmlkZWQgYnkgTmFzYSdzIEFwaVwiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gIDxoMz4ke3RpdGxlQ2FyZH08L2gzPlxuICA8YSBocmVmPVwiI1wiIGlkPVwiJHtpbmRleENhcmR9c3RhclwiIGNsYXNzPVwibGlrZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWhlYXJ0XCI+PC9pPjwvYT5cbiAgPC9kaXY+XG4gIDxzbWFsbCBjbGFzcz1cInNtYWxsLWNsYXNzXCI+PC9zbWFsbD5cbiAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNvbW1lbnRzXCIgaWQ9XCIke2luZGV4Q2FyZH1cIiBjbGFzcz1cImNvbW1lbnRcIj5cbiAgYDtcbiAgY29udGFpbmVyRHluYW1pY0NhcmRzLmFwcGVuZENoaWxkKGNhcmQpO1xufTtcblxuY29uc3QgZGlzcGxheUltYWdlID0gKGlkSW1nKSA9PiB7XG4gIGdldERhdGEoZ2V0RGF0YURhdGVJbWFnZShpZEltZykpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRpc3BsYXlXaW5kb3dQb3B1cChkYXRhLmhkdXJsLCBkYXRhLnRpdGxlLCBkYXRhLmV4cGxhbmF0aW9uLCBpZEltZykpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgc2hvd0NvbW1lbnQoaWRJbWcpO1xuICAgICAgY29uc3QgY2xvc2VQb3B1cEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZVBvcHVwJyk7XG4gICAgICBjbG9zZVBvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZVdpbmRvd1BvcHVwKGNsb3NlUG9wdXBCdG4pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufTtcblxuY29uc3Qgc2VuZExpa2VzRG9tID0gKGlkTGlrZSwgbGlrZXMpID0+IHtcbiAgY29uc3Qgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZExpa2UpO1xuICBzbWFsbC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBgJHtsaWtlc30gbGlrZXNgO1xufTtcblxuZnVuY3Rpb24gY291bnRpbmdFbGVtZW50c0Z1bmMoZWxlbSkge1xuICByZXR1cm4gZWxlbS5jaGlsZEVsZW1lbnRDb3VudDtcbn1cblxuY29uc3Qgc2hvd0Z1bmNMaWtlcyA9ICgpID0+IHtcbiAgZ2V0RGF0YShsaWtlTGluaylcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4IDwgY291bnRpbmdFbGVtZW50c0Z1bmMoY29udGFpbmVyRHluYW1pY0NhcmRzKSkge1xuICAgICAgICBzZW5kTGlrZXNEb20oY2FyZC5pdGVtX2lkLCBjYXJkLmxpa2VzKTtcbiAgICAgIH1cbiAgICB9KSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufTtcblxuY29uc3Qgc2hvd0Ftb3VudE9mTGlrZXMgPSAoKSA9PiB7XG4gIGdldERhdGEoZ2V0TmFzYUFwaSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5mb3JFYWNoKChjYXJkLCBpbmQpID0+IGFkZEZpcnN0SW50ZXJmYWNlQ2FyZChjYXJkLmhkdXJsLCBjYXJkLnRpdGxlLCBpbmQpKSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBzaG93RnVuY0xpa2VzKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufTtcblxuY29uc3QgcmF3RnVuY2xpa2UgPSAoaWRMaWtlLCBsaWtlcykgPT4ge1xuICBjb25zdCBkYXRhID0geyBpdGVtX2lkOiBpZExpa2UgfTtcbiAgcG9zdERhdGEobGlrZUxpbmssIGRhdGEpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHNlbmRMaWtlc0RvbShpZExpa2UsIGxpa2VzKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59O1xuXG5zaG93QW1vdW50T2ZMaWtlcygpO1xucmF3RnVuY2xpa2UoKTtcblxuY29udGFpbmVyRHluYW1pY0NhcmRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtaGVhcnQnKSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsaWtlQ291bnRlciA9IHBhcnNlSW50KFxuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCxcbiAgICAgIDEwLFxuICAgICk7XG4gICAgY29uc3QgbGlrZXMgPSBsaWtlQ291bnRlciArIDE7XG4gICAgcmF3RnVuY2xpa2UoZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCwgbGlrZXMpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tbWVudCcpKSB7XG4gICAgZGlzcGxheUltYWdlKHBhcnNlSW50KGUudGFyZ2V0LmlkLCAxMCkpO1xuICB9XG4gIGlmIChlLnRhcmdldC5pZCA9PT0gJ3BvcHVwQ29tbWVudCcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaWRDb21tZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZC5tYXRjaCgvWzAtOV0vZyk7XG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKTtcbiAgICBjb25zdCBjb21tZW50RG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtYm94LWlkJyk7XG4gICAgcG9zdENvbW1lbnQoaWRDb21tZW50LCB1c2VyTmFtZS52YWx1ZSwgY29tbWVudERvbS52YWx1ZSk7XG4gICAgdXNlck5hbWUudmFsdWUgPSAnJztcbiAgICBjb21tZW50RG9tLnZhbHVlID0gJyc7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9