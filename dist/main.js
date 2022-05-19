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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --General-width: 90%;\r\n  --transition: all 0.2s linear;\r\n  --scale: scale(1.2);\r\n  --card-scale: scale(1.05);\r\n  --pop-600: 600;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 5px 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #320187;\r\n}\r\n\r\n.header-container {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.imgCardcontainer {\r\n  min-height: 318px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  overflow: hidden;\r\n}\r\n\r\n.imgCardcontainer img {\r\n  width: 148%;\r\n  height: 348px;\r\n  margin-bottom: 7%;\r\n  transition: var(--transition);\r\n}\r\n\r\n#addDynamicCards {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.cardContainer {\r\n  width: 30%;\r\n  height: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5% 0;\r\n  padding: 18px 18px;\r\n  background-color: rgb(16, 16, 16, 0.5);\r\n  border-radius: 10px;\r\n  transition: var(--transition);\r\n  position: relative;\r\n}\r\n\r\n.cardContainer .title {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin: 10% 0;\r\n  color: white;\r\n}\r\n\r\n.title h2 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.title h3 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.cardContainer:hover {\r\n  transform: var(--card-scale);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.logo img {\r\n  width: 80px;\r\n  transition: var(--transition);\r\n}\r\n\r\n.imgCardcontainer img:hover {\r\n  transform: var(--scale);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.logo img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\nnav {\r\n  width: 50%;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-link {\r\n  transition: var(--transition);\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: var(--scale);\r\n  text-decoration: underline;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n}\r\n\r\nfooter {\r\n  background-color: #320187;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  position: absolute;\r\n  height: 50px;\r\n}\r\n\r\n#light-house-avoid-error {\r\n  display: none;\r\n}\r\n\r\n.bigPopup h2,\r\n.description {\r\n  color: white;\r\n  padding: 32px;\r\n  text-align: center;\r\n}\r\n\r\n.popupWin {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 40;\r\n  overflow-y: scroll;\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.bigPopup {\r\n  position: relative;\r\n  width: 70%;\r\n  border: 1px solid #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(20, 17, 17, 1);\r\n  margin: 24px auto;\r\n  row-gap: 15px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-class-image {\r\n  width: 100%;\r\n  padding: 20px;\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.bigPopup span {\r\n  align-self: flex-end;\r\n  padding: 20px;\r\n}\r\n\r\n#closePopup {\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\n\r\n#userName,\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\ntextarea::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n::placeholder {\r\n  padding: 15px;\r\n}\r\n\r\n.bigPopup p {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 20px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n#ul-comment-dynamic-link li {\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n\r\n#item-count {\r\n  color: #fff;\r\n  font-weight: var(--pop-600);\r\n}\r\n\r\n.small-class {\r\n  align-self: flex-end;\r\n  margin-bottom: 7%;\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n  position: absolute;\r\n  right: 10px;\r\n  bottom: 60px;\r\n}\r\n\r\n#comentDynamicList {\r\n  height: 70px;\r\n  overflow-y: auto;\r\n}\r\n\r\n#comentDynamicList li {\r\n  color: #fff;\r\n}\r\n\r\n.comment,\r\n#popupComment {\r\n  position: absolute;\r\n  bottom: 12px;\r\n  width: 60%;\r\n  margin-bottom: 5%;\r\n  padding: 10px 15px;\r\n  background-color: white;\r\n  color: rgba(0, 0, 0, 0.75);\r\n  transition: var(--transition);\r\n  font-weight: var(--pop-600);\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n\r\n.comment:hover,\r\n#popupComment:hover {\r\n  transform: var(--scale);\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.bigPopup form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40%;\r\n  margin: 18px auto;\r\n  height: 300px;\r\n}\r\n\r\n#comment-box-id {\r\n  height: 500px;\r\n  margin-bottom: 120px;\r\n}\r\n\r\n.fa-heart:hover {\r\n  transform: var(--scale);\r\n  color: red;\r\n}\r\n\r\n#ul-header {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .cardContainer {\r\n    width: 44%;\r\n  }\r\n\r\n  .bigPopup p {\r\n    overflow-y: auto;\r\n    height: 200px;\r\n  }\r\n\r\n  .header-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .commentStyle {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  #comentDynamicList {\r\n    width: 70%;\r\n  }\r\n\r\n  #userName,\r\n  textarea {\r\n    width: 180%;\r\n  }\r\n\r\n  #ul-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  #ul-header .nav-link a {\r\n    width: 100%;\r\n  }\r\n\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .cardContainer {\r\n    width: 100%;\r\n  }\r\n\r\n  #ul-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n.cardContainer::before,\r\n.cardContainer::after,\r\n.bigPopup::before,\r\n.bigPopup::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -2px;\r\n  top: -2px;\r\n  border-radius: 10px;\r\n  background: linear-gradient(\r\n    45deg,\r\n    #382fe2,\r\n    #0404bf,\r\n    #5212c9,\r\n    #4d0bc0,\r\n    #740808,\r\n    #8d0b57,\r\n    #00f\r\n  );\r\n  background-size: 200%;\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  z-index: -1;\r\n  animation: steam 15s linear infinite;\r\n}\r\n\r\n@keyframes steam {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  50% {\r\n    background-position: 300% 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.cardContainer::after,\r\n.bigPopup::after {\r\n  filter: blur(50px);\r\n  border: 2px solid yellow;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap\");\r\n\r\n:root {\r\n  --General-width: 90%;\r\n  --transition: all 0.2s linear;\r\n  --scale: scale(1.2);\r\n  --card-scale: scale(1.05);\r\n  --pop-600: 600;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 5px 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #320187;\r\n}\r\n\r\n.header-container {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.imgCardcontainer {\r\n  min-height: 318px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  overflow: hidden;\r\n}\r\n\r\n.imgCardcontainer img {\r\n  width: 148%;\r\n  height: 348px;\r\n  margin-bottom: 7%;\r\n  transition: var(--transition);\r\n}\r\n\r\n#addDynamicCards {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.cardContainer {\r\n  width: 30%;\r\n  height: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5% 0;\r\n  padding: 18px 18px;\r\n  background-color: rgb(16, 16, 16, 0.5);\r\n  border-radius: 10px;\r\n  transition: var(--transition);\r\n  position: relative;\r\n}\r\n\r\n.cardContainer .title {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin: 10% 0;\r\n  color: white;\r\n}\r\n\r\n.title h2 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.title h3 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.cardContainer:hover {\r\n  transform: var(--card-scale);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.logo img {\r\n  width: 80px;\r\n  transition: var(--transition);\r\n}\r\n\r\n.imgCardcontainer img:hover {\r\n  transform: var(--scale);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.logo img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\nnav {\r\n  width: 50%;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-link {\r\n  transition: var(--transition);\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: var(--scale);\r\n  text-decoration: underline;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n}\r\n\r\nfooter {\r\n  background-color: #320187;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  position: absolute;\r\n  height: 50px;\r\n}\r\n\r\n#light-house-avoid-error {\r\n  display: none;\r\n}\r\n\r\n.bigPopup h2,\r\n.description {\r\n  color: white;\r\n  padding: 32px;\r\n  text-align: center;\r\n}\r\n\r\n.popupWin {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 40;\r\n  overflow-y: scroll;\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.bigPopup {\r\n  position: relative;\r\n  width: 70%;\r\n  border: 1px solid #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(20, 17, 17, 1);\r\n  margin: 24px auto;\r\n  row-gap: 15px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-class-image {\r\n  width: 100%;\r\n  padding: 20px;\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.bigPopup span {\r\n  align-self: flex-end;\r\n  padding: 20px;\r\n}\r\n\r\n#closePopup {\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\n\r\n#userName,\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\ntextarea::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n::placeholder {\r\n  padding: 15px;\r\n}\r\n\r\n.bigPopup p {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 20px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n#ul-comment-dynamic-link li {\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n\r\n#item-count {\r\n  color: #fff;\r\n  font-weight: var(--pop-600);\r\n}\r\n\r\n.small-class {\r\n  align-self: flex-end;\r\n  margin-bottom: 7%;\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n  position: absolute;\r\n  right: 10px;\r\n  bottom: 60px;\r\n}\r\n\r\n#comentDynamicList {\r\n  height: 70px;\r\n  overflow-y: auto;\r\n}\r\n\r\n#comentDynamicList li {\r\n  color: #fff;\r\n}\r\n\r\n.comment,\r\n#popupComment {\r\n  position: absolute;\r\n  bottom: 12px;\r\n  width: 60%;\r\n  margin-bottom: 5%;\r\n  padding: 10px 15px;\r\n  background-color: white;\r\n  color: rgba(0, 0, 0, 0.75);\r\n  transition: var(--transition);\r\n  font-weight: var(--pop-600);\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n\r\n.comment:hover,\r\n#popupComment:hover {\r\n  transform: var(--scale);\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.bigPopup form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40%;\r\n  margin: 18px auto;\r\n  height: 300px;\r\n}\r\n\r\n#comment-box-id {\r\n  height: 500px;\r\n  margin-bottom: 120px;\r\n}\r\n\r\n.fa-heart:hover {\r\n  transform: var(--scale);\r\n  color: red;\r\n}\r\n\r\n#ul-header {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .cardContainer {\r\n    width: 44%;\r\n  }\r\n\r\n  .bigPopup p {\r\n    overflow-y: auto;\r\n    height: 200px;\r\n  }\r\n\r\n  .header-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .commentStyle {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  #comentDynamicList {\r\n    width: 70%;\r\n  }\r\n\r\n  #userName,\r\n  textarea {\r\n    width: 180%;\r\n  }\r\n\r\n  #ul-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  #ul-header .nav-link a {\r\n    width: 100%;\r\n  }\r\n\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .cardContainer {\r\n    width: 100%;\r\n  }\r\n\r\n  #ul-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n.cardContainer::before,\r\n.cardContainer::after,\r\n.bigPopup::before,\r\n.bigPopup::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -2px;\r\n  top: -2px;\r\n  border-radius: 10px;\r\n  background: linear-gradient(\r\n    45deg,\r\n    #382fe2,\r\n    #0404bf,\r\n    #5212c9,\r\n    #4d0bc0,\r\n    #740808,\r\n    #8d0b57,\r\n    #00f\r\n  );\r\n  background-size: 200%;\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  z-index: -1;\r\n  animation: steam 15s linear infinite;\r\n}\r\n\r\n@keyframes steam {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  50% {\r\n    background-position: 300% 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.cardContainer::after,\r\n.bigPopup::after {\r\n  filter: blur(50px);\r\n  border: 2px solid yellow;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/images/47879.jpg":
/*!******************************!*\
  !*** ./src/images/47879.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8bd58a026ec2c5e8a87f820e787dcca2.jpg");

/***/ }),

/***/ "./src/images/6188270.png":
/*!********************************!*\
  !*** ./src/images/6188270.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "47d3299a2c8f53335ea12820e303a826.png");

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
/* harmony export */   "commentCounter": () => (/* binding */ commentCounter),
/* harmony export */   "countingElementsFunc": () => (/* binding */ countingElementsFunc),
/* harmony export */   "countingItems": () => (/* binding */ countingItems),
/* harmony export */   "postComment": () => (/* binding */ postComment),
/* harmony export */   "showComment": () => (/* binding */ showComment)
/* harmony export */ });
/* harmony import */ var _get_post_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-post-data.js */ "./src/modules/get-post-data.js");
/* harmony import */ var _API_links_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API-links.js */ "./src/modules/API-links.js");



const countingElementsFunc = (elem) => elem.childElementCount;

function countingItems() {
  const item = document.querySelector('#item-count');
  const DynamicSection = document.querySelector('#addDynamicCards');
  item.innerHTML = `Space Pictures (${countingElementsFunc(DynamicSection)})`;
}

const commentStructure = (userName, textCommentStr) => {
  const ulDynamicCont = document.querySelector('#comentDynamicList');
  const LIST = document.createElement('li');
  LIST.innerHTML = `${userName} : ${textCommentStr}`;
  ulDynamicCont.appendChild(LIST);
};

const commentCounter = () => {
  const commentContainerCount = document.querySelector('#comentDynamicList');
  commentContainerCount.previousElementSibling.innerHTML = `Comments (${countingElementsFunc(
    commentContainerCount,
  )})`;
};

const showComment = (id) => {
  const getCommentFromAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments?item_id=${id}`;
  (0,_get_post_data_js__WEBPACK_IMPORTED_MODULE_0__.getData)(getCommentFromAPI)
    .then((data) => data.forEach((comment) => commentStructure(comment.username, comment.comment)))
    .then(() => commentCounter())
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
    .then(() => commentCounter())
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
    <div class="commentStyle">
     <h2 class="comments">Comments</h2>
     <ul id="comentDynamicList"></ul>
    </div>
    <form id="${windowsId}form" action="post">
      <input type="text" placeholder="Enter your Name" id="userName" required  minlength="4">
      <textarea name="text" id="comment-box-id" cols="40" rows="15" placeholder="...and your comment." required  minlength="4"></textarea>
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

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-undef */
const userError = () => {
  userName.placeholder = 'Please enter your name';
  userName.style.backgroundColor = '#ffc0cb';
  userName.style.border = '2px solid #bd1212';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userError);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_6188270_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/6188270.png */ "./src/images/6188270.png");
/* harmony import */ var _images_47879_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/47879.jpg */ "./src/images/47879.jpg");
/* harmony import */ var _modules_validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation.js */ "./src/modules/validation.js");
/* harmony import */ var _modules_API_links_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/API-links.js */ "./src/modules/API-links.js");
/* harmony import */ var _modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/get-post-data.js */ "./src/modules/get-post-data.js");
/* harmony import */ var _modules_pop_up_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pop-up.js */ "./src/modules/pop-up.js");
/* harmony import */ var _modules_funcComments_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcComments.js */ "./src/modules/funcComments.js");









const logo = document.getElementById('headlogo');
logo.src = _images_6188270_png__WEBPACK_IMPORTED_MODULE_1__["default"];
const galaxy = document.getElementById('body');
galaxy.style = `background: url(${_images_47879_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]})`;

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
  _modules_pop_up_js__WEBPACK_IMPORTED_MODULE_6__.containerDynamicCards.appendChild(card);
};

const displayImage = (idImg) => {
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_5__.getData)((0,_modules_API_links_js__WEBPACK_IMPORTED_MODULE_4__.getDataDateImage)(idImg))
    .then((data) => (0,_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_6__.displayWindowPopup)(data.hdurl, data.title, data.explanation, idImg))
    .then(() => {
      (0,_modules_funcComments_js__WEBPACK_IMPORTED_MODULE_7__.showComment)(idImg);
      const closePopupBtn = document.getElementById('closePopup');
      closePopupBtn.addEventListener('click', () => {
        (0,_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_6__.closeWindowPopup)(closePopupBtn);
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
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_5__.getData)(_modules_API_links_js__WEBPACK_IMPORTED_MODULE_4__.likeLink)
    .then((data) => data.forEach((card, index) => {
      if (index < countingElementsFunc(_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_6__.containerDynamicCards)) {
        sendLikesDom(card.item_id, card.likes);
      }
    }))
    .catch((error) => console.log(error));
};

const showAmountOfLikes = () => {
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_5__.getData)(_modules_API_links_js__WEBPACK_IMPORTED_MODULE_4__.getNasaApi)
    .then((data) => data.forEach((card, ind) => addFirstInterfaceCard(card.hdurl, card.title, ind)))
    .then(() => {
      showFuncLikes();
      (0,_modules_funcComments_js__WEBPACK_IMPORTED_MODULE_7__.countingItems)();
    })
    .catch((error) => console.log(error));
};

const rawFunclike = (idLike, likes) => {
  const data = { item_id: idLike };
  (0,_modules_get_post_data_js__WEBPACK_IMPORTED_MODULE_5__.postData)(_modules_API_links_js__WEBPACK_IMPORTED_MODULE_4__.likeLink, data)
    .then((data) => {
      if (data.status === 201) {
        sendLikesDom(idLike, likes);
      }
    })
    .catch((error) => console.log(error));
};

showAmountOfLikes();
rawFunclike();

_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_6__.containerDynamicCards.addEventListener('click', (e) => {
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
    if (userName.value === '') {
      (0,_modules_validation_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } else {
      (0,_modules_funcComments_js__WEBPACK_IMPORTED_MODULE_7__.postComment)(idComment, userName.value, commentDom.value);
      userName.value = '';
      commentDom.value = '';
    }
  }
});

console.log(_modules_pop_up_js__WEBPACK_IMPORTED_MODULE_6__.containerDynamicCards);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8s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REFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0ZBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrRUFBUztBQUNmLE1BQU07QUFDTixNQUFNLHFFQUFXO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxZQUFZLHFFQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9pbWFnZXMvNDc4NzkuanBnIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL2ltYWdlcy82MTg4MjcwLnBuZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL21vZHVsZXMvQVBJLWxpbmtzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL21vZHVsZXMvZnVuY0NvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL21vZHVsZXMvZ2V0LXBvc3QtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9tb2R1bGVzL3BvcC11cC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9tb2R1bGVzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MSwzMDA7MSw0MDA7MSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1HZW5lcmFsLXdpZHRoOiA5MCU7XFxyXFxuICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXHJcXG4gIC0tc2NhbGU6IHNjYWxlKDEuMik7XFxyXFxuICAtLWNhcmQtc2NhbGU6IHNjYWxlKDEuMDUpO1xcclxcbiAgLS1wb3AtNjAwOiA2MDA7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNXB4IDEycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjAxODc7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS1HZW5lcmFsLXdpZHRoKTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMxOHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogMTQ4JTtcXHJcXG4gIGhlaWdodDogMzQ4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA3JTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkRHluYW1pY0NhcmRzIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS1HZW5lcmFsLXdpZHRoKTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDUlIDA7XFxyXFxuICBwYWRkaW5nOiAxOHB4IDE4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDE2LCAxNiwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXIgLnRpdGxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBtYXJnaW46IDEwJSAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDIge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBoMyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXI6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1jYXJkLXNjYWxlKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi5pbWdDYXJkY29udGFpbmVyIGltZzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1wb3AtNjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjAxODc7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNsaWdodC1ob3VzZS1hdm9pZC1lcnJvciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgaDIsXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFdpbiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogNDA7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5iaWdQb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMTcsIDE3LCAxKTtcXHJcXG4gIG1hcmdpbjogMjRweCBhdXRvO1xcclxcbiAgcm93LWdhcDogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jbGFzcy1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5iaWdQb3B1cCBzcGFuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlUG9wdXAge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXBvcC02MDApO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlck5hbWUsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ1BvcHVwIHAge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jdWwtY29tbWVudC1keW5hbWljLWxpbmsgbGkge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaXRlbS1jb3VudCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1wb3AtNjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNtYWxsLWNsYXNzIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNyU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tcG9wLTYwMCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIGJvdHRvbTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbWVudER5bmFtaWNMaXN0IHtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjb21lbnREeW5hbWljTGlzdCBsaSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQsXFxyXFxuI3BvcHVwQ29tbWVudCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEycHg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tcG9wLTYwMCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50OmhvdmVyLFxcclxcbiNwb3B1cENvbW1lbnQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDE4cHggYXV0bztcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJveC1pZCB7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiN1bC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcclxcbiAgLnNtYWxsLWNsYXNzIHtcXHJcXG4gICAgYm90dG9tOiA1MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gIC5jYXJkQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDQ0JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iaWdQb3B1cCBwIHtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50U3R5bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb21lbnREeW5hbWljTGlzdCB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdXNlck5hbWUsXFxyXFxuICB0ZXh0YXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxODAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3VsLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN1bC1oZWFkZXIgLm5hdi1saW5rIGEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbWFsbC1jbGFzcyB7XFxyXFxuICAgIGJvdHRvbTogNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAuY2FyZENvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3VsLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbWFsbC1jbGFzcyB7XFxyXFxuICAgIGJvdHRvbTogNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXI6OmJlZm9yZSxcXHJcXG4uY2FyZENvbnRhaW5lcjo6YWZ0ZXIsXFxyXFxuLmJpZ1BvcHVwOjpiZWZvcmUsXFxyXFxuLmJpZ1BvcHVwOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC0ycHg7XFxyXFxuICB0b3A6IC0ycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICA0NWRlZyxcXHJcXG4gICAgIzM4MmZlMixcXHJcXG4gICAgIzA0MDRiZixcXHJcXG4gICAgIzUyMTJjOSxcXHJcXG4gICAgIzRkMGJjMCxcXHJcXG4gICAgIzc0MDgwOCxcXHJcXG4gICAgIzhkMGI1NyxcXHJcXG4gICAgIzAwZlxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA0cHgpO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBhbmltYXRpb246IHN0ZWFtIDE1cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3RlYW0ge1xcclxcbiAgMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMDAlIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZENvbnRhaW5lcjo6YWZ0ZXIsXFxyXFxuLmJpZ1BvcHVwOjphZnRlciB7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNTBweCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFp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QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkI7Ozs7Ozs7OztHQVNDO0VBQ0QscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDsxLDMwMDsxLDQwMDsxLDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLUdlbmVyYWwtd2lkdGg6IDkwJTtcXHJcXG4gIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcclxcbiAgLS1zY2FsZTogc2NhbGUoMS4yKTtcXHJcXG4gIC0tY2FyZC1zY2FsZTogc2NhbGUoMS4wNSk7XFxyXFxuICAtLXBvcC02MDA6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMDE4NztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IHZhcigtLUdlbmVyYWwtd2lkdGgpO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0NhcmRjb250YWluZXIge1xcclxcbiAgbWluLWhlaWdodDogMzE4cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0NhcmRjb250YWluZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAxNDglO1xcclxcbiAgaGVpZ2h0OiAzNDhweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDclO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbiNhZGREeW5hbWljQ2FyZHMge1xcclxcbiAgd2lkdGg6IHZhcigtLUdlbmVyYWwtd2lkdGgpO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGhlaWdodDogNjAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNSUgMDtcXHJcXG4gIHBhZGRpbmc6IDE4cHggMThweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTYsIDE2LCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZENvbnRhaW5lciAudGl0bGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIG1hcmdpbjogMTAlIDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBoMiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIGgzIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZENvbnRhaW5lcjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLWNhcmQtc2NhbGUpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0NhcmRjb250YWluZXIgaW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWc6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXBvcC02MDApO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMDE4NztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xpZ2h0LWhvdXNlLWF2b2lkLWVycm9yIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5iaWdQb3B1cCBoMixcXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMzJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwV2luIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiA0MDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ1BvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAxNywgMTcsIDEpO1xcclxcbiAgbWFyZ2luOiAyNHB4IGF1dG87XFxyXFxuICByb3ctZ2FwOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNsYXNzLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ1BvcHVwIHNwYW4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2VQb3B1cCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tcG9wLTYwMCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiN1c2VyTmFtZSxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgcCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN1bC1jb21tZW50LWR5bmFtaWMtbGluayBsaSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNpdGVtLWNvdW50IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXBvcC02MDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc21hbGwtY2xhc3Mge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA3JTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1wb3AtNjAwKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgYm90dG9tOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tZW50RHluYW1pY0xpc3Qge1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbWVudER5bmFtaWNMaXN0IGxpIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCxcXHJcXG4jcG9wdXBDb21tZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTJweDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1wb3AtNjAwKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQ6aG92ZXIsXFxyXFxuI3BvcHVwQ29tbWVudDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5iaWdQb3B1cCBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbjogMThweCBhdXRvO1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtYm94LWlkIHtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3VsLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAuc21hbGwtY2xhc3Mge1xcclxcbiAgICBib3R0b206IDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmNhcmRDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNDQlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJpZ1BvcHVwIHAge1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRTdHlsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbWVudER5bmFtaWNMaXN0IHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN1c2VyTmFtZSxcXHJcXG4gIHRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDE4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdWwtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3VsLWhlYWRlciAubmF2LWxpbmsgYSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNtYWxsLWNsYXNzIHtcXHJcXG4gICAgYm90dG9tOiA1MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIC5jYXJkQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdWwtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNtYWxsLWNsYXNzIHtcXHJcXG4gICAgYm90dG9tOiA1MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZENvbnRhaW5lcjo6YmVmb3JlLFxcclxcbi5jYXJkQ29udGFpbmVyOjphZnRlcixcXHJcXG4uYmlnUG9wdXA6OmJlZm9yZSxcXHJcXG4uYmlnUG9wdXA6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogLTJweDtcXHJcXG4gIHRvcDogLTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDQ1ZGVnLFxcclxcbiAgICAjMzgyZmUyLFxcclxcbiAgICAjMDQwNGJmLFxcclxcbiAgICAjNTIxMmM5LFxcclxcbiAgICAjNGQwYmMwLFxcclxcbiAgICAjNzQwODA4LFxcclxcbiAgICAjOGQwYjU3LFxcclxcbiAgICAjMDBmXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDRweCk7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGFuaW1hdGlvbjogc3RlYW0gMTVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzdGVhbSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwMCUgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyOjphZnRlcixcXHJcXG4uYmlnUG9wdXA6OmFmdGVyIHtcXHJcXG4gIGZpbHRlcjogYmx1cig1MHB4KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4YmQ1OGEwMjZlYzJjNWU4YTg3ZjgyMGU3ODdkY2NhMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDdkMzI5OWEyYzhmNTMzMzVlYTEyODIwZTMwM2E4MjYucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGdldE5hc2FBcGkgPSAnaHR0cHM6Ly9hcGkubmFzYS5nb3YvcGxhbmV0YXJ5L2Fwb2Q/YXBpX2tleT15RTVYd0YzWUJSdTZSYU1iMkszMjhsWEphYldDb2c1cnpqYUlSNzZOJnN0YXJ0X2RhdGU9MjAyMi0wNC0xMCZlbmRfZGF0ZT0yMDIyLTA0LTE4JztcblxuY29uc3QgcmFuZG9tRGF0ZXNGb3JQb3B1cEltZ3MgPSBbXG4gICcyMDIyLTA0LTEwJyxcbiAgJzIwMjItMDQtMTEnLFxuICAnMjAyMi0wNC0xMicsXG4gICcyMDIyLTA0LTEzJyxcbiAgJzIwMjItMDQtMTQnLFxuICAnMjAyMi0wNC0xNScsXG4gICcyMDIyLTA0LTE2JyxcbiAgJzIwMjItMDQtMTcnLFxuICAnMjAyMi0wNC0xOCcsXG5dO1xuXG5jb25zdCBnZXREYXRhRGF0ZUltYWdlID0gKG51bSkgPT4gYGh0dHBzOi8vYXBpLm5hc2EuZ292L3BsYW5ldGFyeS9hcG9kP2FwaV9rZXk9eUU1WHdGM1lCUnU2UmFNYjJLMzI4bFhKYWJXQ29nNXJ6amFJUjc2TiZkYXRlPSR7cmFuZG9tRGF0ZXNGb3JQb3B1cEltZ3NbbnVtXX1gO1xuXG5jb25zdCBsaWtlTGluayA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9yUzkzVFlNYVdGUmNESFIxUnM5dS9saWtlcyc7XG5cbmNvbnN0IGNvbW1lbnRMaW5rID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3JTOTNUWU1hV0ZSY0RIUjFSczl1L2NvbW1lbnRzJztcblxuZXhwb3J0IHtcbiAgZ2V0TmFzYUFwaSwgZ2V0RGF0YURhdGVJbWFnZSwgbGlrZUxpbmssIGNvbW1lbnRMaW5rLFxufTtcbiIsImltcG9ydCB7IGdldERhdGEsIHBvc3REYXRhIH0gZnJvbSAnLi9nZXQtcG9zdC1kYXRhLmpzJztcbmltcG9ydCB7IGNvbW1lbnRMaW5rIH0gZnJvbSAnLi9BUEktbGlua3MuanMnO1xuXG5jb25zdCBjb3VudGluZ0VsZW1lbnRzRnVuYyA9IChlbGVtKSA9PiBlbGVtLmNoaWxkRWxlbWVudENvdW50O1xuXG5mdW5jdGlvbiBjb3VudGluZ0l0ZW1zKCkge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tY291bnQnKTtcbiAgY29uc3QgRHluYW1pY1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkRHluYW1pY0NhcmRzJyk7XG4gIGl0ZW0uaW5uZXJIVE1MID0gYFNwYWNlIFBpY3R1cmVzICgke2NvdW50aW5nRWxlbWVudHNGdW5jKER5bmFtaWNTZWN0aW9uKX0pYDtcbn1cblxuY29uc3QgY29tbWVudFN0cnVjdHVyZSA9ICh1c2VyTmFtZSwgdGV4dENvbW1lbnRTdHIpID0+IHtcbiAgY29uc3QgdWxEeW5hbWljQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21lbnREeW5hbWljTGlzdCcpO1xuICBjb25zdCBMSVNUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgTElTVC5pbm5lckhUTUwgPSBgJHt1c2VyTmFtZX0gOiAke3RleHRDb21tZW50U3RyfWA7XG4gIHVsRHluYW1pY0NvbnQuYXBwZW5kQ2hpbGQoTElTVCk7XG59O1xuXG5jb25zdCBjb21tZW50Q291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgY29tbWVudENvbnRhaW5lckNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbWVudER5bmFtaWNMaXN0Jyk7XG4gIGNvbW1lbnRDb250YWluZXJDb3VudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtjb3VudGluZ0VsZW1lbnRzRnVuYyhcbiAgICBjb21tZW50Q29udGFpbmVyQ291bnQsXG4gICl9KWA7XG59O1xuXG5jb25zdCBzaG93Q29tbWVudCA9IChpZCkgPT4ge1xuICBjb25zdCBnZXRDb21tZW50RnJvbUFQSSA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9yUzkzVFlNYVdGUmNESFIxUnM5dS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YDtcbiAgZ2V0RGF0YShnZXRDb21tZW50RnJvbUFQSSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiBjb21tZW50U3RydWN0dXJlKGNvbW1lbnQudXNlcm5hbWUsIGNvbW1lbnQuY29tbWVudCkpKVxuICAgIC50aGVuKCgpID0+IGNvbW1lbnRDb3VudGVyKCkpXG4gICAgLmNhdGNoKCgpID0+IGNvbW1lbnRTdHJ1Y3R1cmUoJ1RoaXMgaW1hZ2UgaGFzJywgJ25vIGNvbW1lbnRzIHlldCcpKTtcbn07XG5cbmNvbnN0IHBvc3RDb21tZW50ID0gKGlkQ29tbWVudCwgdXNlck5hbWUsIGNvbW1lbnRTdHIpID0+IHtcbiAgY29uc3QgZGF0YUNvbW1lbnQgPSB7XG4gICAgaXRlbV9pZDogaWRDb21tZW50LFxuICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcbiAgICBjb21tZW50OiBjb21tZW50U3RyLFxuICB9O1xuICBwb3N0RGF0YShjb21tZW50TGluaywgZGF0YUNvbW1lbnQpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIGNvbW1lbnRTdHJ1Y3R1cmUodXNlck5hbWUsIGNvbW1lbnRTdHIpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gY29tbWVudENvdW50ZXIoKSlcbiAgICAuY2F0Y2goKCkgPT4gY29tbWVudFN0cnVjdHVyZSgnVGhpcyBpbWFnZSBoYXMnLCAnbm8gY29tbWVudHMgeWV0JykpO1xufTtcblxuZXhwb3J0IHtcbiAgc2hvd0NvbW1lbnQsXG4gIHBvc3RDb21tZW50LFxuICBjb3VudGluZ0l0ZW1zLFxuICBjb3VudGluZ0VsZW1lbnRzRnVuYyxcbiAgY29tbWVudENvdW50ZXIsXG59O1xuIiwiY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmxBcGkpID0+IHtcbiAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2godXJsQXBpKTtcbiAgcmV0dXJuIHJlc3BvbnNlRGF0YS5qc29uKCk7XG59O1xuXG5jb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmxBcGksIGRhdGEpID0+IHtcbiAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2godXJsQXBpLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbn07XG5cbmV4cG9ydCB7IGdldERhdGEsIHBvc3REYXRhIH07XG4iLCJjb25zdCBjb250YWluZXJEeW5hbWljQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRHluYW1pY0NhcmRzJyk7XG5cbmNvbnN0IGRpc3BsYXlXaW5kb3dQb3B1cCA9IChpbWFnZSwgdGl0bGUsIGluZm9EZXNjcmlwLCB3aW5kb3dzSWQpID0+IHtcbiAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wdXBXaW4nKTtcbiAgcG9wdXBDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiYmlnUG9wdXBcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiIGlkPVwiY2xvc2VQb3B1cFwiPjwvaT48L3NwYW4+XG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXItcG9wdXBcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBjbGFzcz1cInBvcHVwLWNsYXNzLWltYWdlXCIgYWx0PVwiaW1hZ2UgZnJvbSBBUElcIj5cbiAgICA8L2Rpdj5cbiAgICA8aDI+JHt0aXRsZX08L2gyPlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2luZm9EZXNjcmlwfTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFN0eWxlXCI+XG4gICAgIDxoMiBjbGFzcz1cImNvbW1lbnRzXCI+Q29tbWVudHM8L2gyPlxuICAgICA8dWwgaWQ9XCJjb21lbnREeW5hbWljTGlzdFwiPjwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGZvcm0gaWQ9XCIke3dpbmRvd3NJZH1mb3JtXCIgYWN0aW9uPVwicG9zdFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIE5hbWVcIiBpZD1cInVzZXJOYW1lXCIgcmVxdWlyZWQgIG1pbmxlbmd0aD1cIjRcIj5cbiAgICAgIDx0ZXh0YXJlYSBuYW1lPVwidGV4dFwiIGlkPVwiY29tbWVudC1ib3gtaWRcIiBjb2xzPVwiNDBcIiByb3dzPVwiMTVcIiBwbGFjZWhvbGRlcj1cIi4uLmFuZCB5b3VyIGNvbW1lbnQuXCIgcmVxdWlyZWQgIG1pbmxlbmd0aD1cIjRcIj48L3RleHRhcmVhPlxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNvbW1lbnRcIiBpZD1cInBvcHVwQ29tbWVudFwiPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4gIGA7XG4gIGNvbnRhaW5lckR5bmFtaWNDYXJkcy5hcHBlbmRDaGlsZChwb3B1cENvbnRhaW5lcik7XG59O1xuXG5jb25zdCBjbG9zZVdpbmRvd1BvcHVwID0gKElEdGFyZ2V0KSA9PiB7XG4gIElEdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IHsgY29udGFpbmVyRHluYW1pY0NhcmRzLCBkaXNwbGF5V2luZG93UG9wdXAsIGNsb3NlV2luZG93UG9wdXAgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5jb25zdCB1c2VyRXJyb3IgPSAoKSA9PiB7XG4gIHVzZXJOYW1lLnBsYWNlaG9sZGVyID0gJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWUnO1xuICB1c2VyTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmYzBjYic7XG4gIHVzZXJOYW1lLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgI2JkMTIxMic7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyRXJyb3I7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzcGFjZW1hbiBmcm9tICcuL2ltYWdlcy82MTg4MjcwLnBuZyc7XG5pbXBvcnQgYmdHYWxheHkgZnJvbSAnLi9pbWFnZXMvNDc4NzkuanBnJztcbmltcG9ydCB1c2VyRXJyb3IgZnJvbSAnLi9tb2R1bGVzL3ZhbGlkYXRpb24uanMnO1xuaW1wb3J0IHsgZ2V0TmFzYUFwaSwgZ2V0RGF0YURhdGVJbWFnZSwgbGlrZUxpbmsgfSBmcm9tICcuL21vZHVsZXMvQVBJLWxpbmtzLmpzJztcbmltcG9ydCB7IGdldERhdGEsIHBvc3REYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2dldC1wb3N0LWRhdGEuanMnO1xuaW1wb3J0IHtcbiAgY29udGFpbmVyRHluYW1pY0NhcmRzLFxuICBkaXNwbGF5V2luZG93UG9wdXAsXG4gIGNsb3NlV2luZG93UG9wdXAsXG59IGZyb20gJy4vbW9kdWxlcy9wb3AtdXAuanMnO1xuaW1wb3J0IHtcbiAgcG9zdENvbW1lbnQsXG4gIHNob3dDb21tZW50LFxuICBjb3VudGluZ0l0ZW1zLFxufSBmcm9tICcuL21vZHVsZXMvZnVuY0NvbW1lbnRzLmpzJztcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkbG9nbycpO1xubG9nby5zcmMgPSBzcGFjZW1hbjtcbmNvbnN0IGdhbGF4eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XG5nYWxheHkuc3R5bGUgPSBgYmFja2dyb3VuZDogdXJsKCR7YmdHYWxheHl9KWA7XG5cbmNvbnN0IGFkZEZpcnN0SW50ZXJmYWNlQ2FyZCA9IChpbWFnZSwgdGl0bGVDYXJkLCBpbmRleENhcmQpID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmRDb250YWluZXInKTtcbiAgY2FyZC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJpbWdDYXJkY29udGFpbmVyXCI+XG4gIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhZGQ9XCJJbWFnZSBwcm92aWRlZCBieSBOYXNhJ3MgQXBpXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgPGgzPiR7dGl0bGVDYXJkfTwvaDM+XG4gIDxhIGhyZWY9XCIjXCIgaWQ9XCIke2luZGV4Q2FyZH1zdGFyXCIgY2xhc3M9XCJsaWtlXCI+PGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+PC9hPlxuICA8L2Rpdj5cbiAgPHNtYWxsIGNsYXNzPVwic21hbGwtY2xhc3NcIj48L3NtYWxsPlxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ29tbWVudHNcIiBpZD1cIiR7aW5kZXhDYXJkfVwiIGNsYXNzPVwiY29tbWVudFwiPlxuICBgO1xuICBjb250YWluZXJEeW5hbWljQ2FyZHMuYXBwZW5kQ2hpbGQoY2FyZCk7XG59O1xuXG5jb25zdCBkaXNwbGF5SW1hZ2UgPSAoaWRJbWcpID0+IHtcbiAgZ2V0RGF0YShnZXREYXRhRGF0ZUltYWdlKGlkSW1nKSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGlzcGxheVdpbmRvd1BvcHVwKGRhdGEuaGR1cmwsIGRhdGEudGl0bGUsIGRhdGEuZXhwbGFuYXRpb24sIGlkSW1nKSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBzaG93Q29tbWVudChpZEltZyk7XG4gICAgICBjb25zdCBjbG9zZVBvcHVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlUG9wdXAnKTtcbiAgICAgIGNsb3NlUG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlV2luZG93UG9wdXAoY2xvc2VQb3B1cEJ0bik7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59O1xuXG5jb25zdCBzZW5kTGlrZXNEb20gPSAoaWRMaWtlLCBsaWtlcykgPT4ge1xuICBjb25zdCBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkTGlrZSk7XG4gIHNtYWxsLnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IGAke2xpa2VzfSBsaWtlc2A7XG59O1xuXG5mdW5jdGlvbiBjb3VudGluZ0VsZW1lbnRzRnVuYyhlbGVtKSB7XG4gIHJldHVybiBlbGVtLmNoaWxkRWxlbWVudENvdW50O1xufVxuXG5jb25zdCBzaG93RnVuY0xpa2VzID0gKCkgPT4ge1xuICBnZXREYXRhKGxpa2VMaW5rKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPCBjb3VudGluZ0VsZW1lbnRzRnVuYyhjb250YWluZXJEeW5hbWljQ2FyZHMpKSB7XG4gICAgICAgIHNlbmRMaWtlc0RvbShjYXJkLml0ZW1faWQsIGNhcmQubGlrZXMpO1xuICAgICAgfVxuICAgIH0pKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59O1xuXG5jb25zdCBzaG93QW1vdW50T2ZMaWtlcyA9ICgpID0+IHtcbiAgZ2V0RGF0YShnZXROYXNhQXBpKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmZvckVhY2goKGNhcmQsIGluZCkgPT4gYWRkRmlyc3RJbnRlcmZhY2VDYXJkKGNhcmQuaGR1cmwsIGNhcmQudGl0bGUsIGluZCkpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHNob3dGdW5jTGlrZXMoKTtcbiAgICAgIGNvdW50aW5nSXRlbXMoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59O1xuXG5jb25zdCByYXdGdW5jbGlrZSA9IChpZExpa2UsIGxpa2VzKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7IGl0ZW1faWQ6IGlkTGlrZSB9O1xuICBwb3N0RGF0YShsaWtlTGluaywgZGF0YSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgc2VuZExpa2VzRG9tKGlkTGlrZSwgbGlrZXMpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn07XG5cbnNob3dBbW91bnRPZkxpa2VzKCk7XG5yYXdGdW5jbGlrZSgpO1xuXG5jb250YWluZXJEeW5hbWljQ2FyZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1oZWFydCcpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxpa2VDb3VudGVyID0gcGFyc2VJbnQoXG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50LFxuICAgICAgMTAsXG4gICAgKTtcbiAgICBjb25zdCBsaWtlcyA9IGxpa2VDb3VudGVyICsgMTtcbiAgICByYXdGdW5jbGlrZShlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkLCBsaWtlcyk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21tZW50JykpIHtcbiAgICBkaXNwbGF5SW1hZ2UocGFyc2VJbnQoZS50YXJnZXQuaWQsIDEwKSk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQuaWQgPT09ICdwb3B1cENvbW1lbnQnKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlkQ29tbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQubWF0Y2goL1swLTldL2cpO1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJOYW1lJyk7XG4gICAgY29uc3QgY29tbWVudERvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWJveC1pZCcpO1xuICAgIGlmICh1c2VyTmFtZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgIHVzZXJFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3N0Q29tbWVudChpZENvbW1lbnQsIHVzZXJOYW1lLnZhbHVlLCBjb21tZW50RG9tLnZhbHVlKTtcbiAgICAgIHVzZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgICBjb21tZW50RG9tLnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG59KTtcblxuY29uc29sZS5sb2coY29udGFpbmVyRHluYW1pY0NhcmRzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==