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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --General-width: 90%;\r\n  --transition: all 0.2s linear;\r\n  --scale: scale(1.2);\r\n  --card-scale: scale(1.05);\r\n  --pop-600: 600;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 15px 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #320187;\r\n}\r\n\r\n.header-container {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.imgCardcontainer {\r\n  min-height: 318px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  overflow: hidden;\r\n}\r\n\r\n.imgCardcontainer img {\r\n  width: 148%;\r\n  height: 348px;\r\n  margin-bottom: 7%;\r\n  transition: var(--transition);\r\n}\r\n\r\n#addDynamicCards {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.cardContainer {\r\n  width: 30%;\r\n  height: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5% 0;\r\n  padding: 18px 18px;\r\n  background-color: rgb(16, 16, 16, 0.5);\r\n  border-radius: 10px;\r\n  transition: var(--transition);\r\n  position: relative;\r\n}\r\n\r\n.cardContainer .title {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin: 10% 0;\r\n  color: white;\r\n}\r\n\r\n.title h2 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.title h3 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.cardContainer:hover {\r\n  transform: var(--card-scale);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.logo img {\r\n  width: 80px;\r\n  transition: var(--transition);\r\n}\r\n\r\n.imgCardcontainer img:hover {\r\n  transform: var(--scale);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.logo img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\nnav {\r\n  width: 50%;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-link {\r\n  transition: var(--transition);\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: var(--scale);\r\n  text-decoration: underline;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n}\r\n\r\nfooter {\r\n  background-color: #320187;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  position: absolute;\r\n  height: 50px;\r\n}\r\n\r\n#light-house-avoid-error {\r\n  display: none;\r\n}\r\n\r\n.bigPopup h2,\r\n.description {\r\n  color: white;\r\n  padding: 32px;\r\n  text-align: center;\r\n}\r\n\r\n.popupWin {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 40;\r\n  overflow-y: scroll;\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.bigPopup {\r\n  position: relative;\r\n  width: 70%;\r\n  border: 1px solid #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(20, 17, 17, 1);\r\n  margin: 24px auto;\r\n  row-gap: 15px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-class-image {\r\n  width: 100%;\r\n  padding: 20px;\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.bigPopup span {\r\n  align-self: flex-end;\r\n  padding: 20px;\r\n}\r\n\r\n#closePopup {\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\n\r\n#userName,\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\ntextarea::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n::placeholder {\r\n  padding: 15px;\r\n}\r\n\r\n.bigPopup p {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 20px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n#ul-comment-dynamic-link li {\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n\r\n#item-count {\r\n  color: #fff;\r\n  font-weight: var(--pop-600);\r\n}\r\n\r\n.small-class {\r\n  align-self: flex-end;\r\n  margin-bottom: 7%;\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n  position: absolute;\r\n  right: 10px;\r\n  bottom: 60px;\r\n}\r\n\r\n#comentDynamicList {\r\n  height: 70px;\r\n  overflow-y: auto;\r\n}\r\n\r\n#comentDynamicList li {\r\n  color: #fff;\r\n}\r\n\r\n.comment,\r\n#popupComment {\r\n  position: absolute;\r\n  bottom: 12px;\r\n  width: 60%;\r\n  margin-bottom: 5%;\r\n  padding: 10px 15px;\r\n  background-color: white;\r\n  color: rgba(0, 0, 0, 0.75);\r\n  transition: var(--transition);\r\n  font-weight: var(--pop-600);\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n\r\n.comment:hover,\r\n#popupComment:hover {\r\n  transform: var(--scale);\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.bigPopup form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40%;\r\n  margin: 18px auto;\r\n  height: 300px;\r\n}\r\n\r\n#comment-box-id {\r\n  height: 500px;\r\n  margin-bottom: 120px;\r\n}\r\n\r\n.fa-heart:hover {\r\n  transform: var(--scale);\r\n  color: red;\r\n}\r\n\r\n#ul-header {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .cardContainer {\r\n    width: 44%;\r\n  }\r\n\r\n  .bigPopup p {\r\n    overflow-y: auto;\r\n    height: 200px;\r\n  }\r\n\r\n  .header-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .commentStyle {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  #comentDynamicList {\r\n    width: 70%;\r\n  }\r\n\r\n  #userName,\r\n  textarea {\r\n    width: 180%;\r\n  }\r\n\r\n  #ul-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  #ul-header .nav-link a {\r\n    width: 100%;\r\n  }\r\n\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .cardContainer {\r\n    width: 100%;\r\n  }\r\n\r\n  #ul-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n.cardContainer::before,\r\n.cardContainer::after,\r\n.bigPopup::before,\r\n.bigPopup::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -2px;\r\n  top: -2px;\r\n  border-radius: 10px;\r\n  background: linear-gradient(\r\n    45deg,\r\n    #382fe2,\r\n    #0404bf,\r\n    #5212c9,\r\n    #4d0bc0,\r\n    #740808,\r\n    #8d0b57,\r\n    #00f\r\n  );\r\n  background-size: 200%;\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  z-index: -1;\r\n  animation: steam 15s linear infinite;\r\n}\r\n\r\n@keyframes steam {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  50% {\r\n    background-position: 300% 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.cardContainer::after,\r\n.bigPopup::after {\r\n  filter: blur(50px);\r\n  border: 2px solid yellow;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap\");\r\n\r\n:root {\r\n  --General-width: 90%;\r\n  --transition: all 0.2s linear;\r\n  --scale: scale(1.2);\r\n  --card-scale: scale(1.05);\r\n  --pop-600: 600;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 15px 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #320187;\r\n}\r\n\r\n.header-container {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.imgCardcontainer {\r\n  min-height: 318px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  overflow: hidden;\r\n}\r\n\r\n.imgCardcontainer img {\r\n  width: 148%;\r\n  height: 348px;\r\n  margin-bottom: 7%;\r\n  transition: var(--transition);\r\n}\r\n\r\n#addDynamicCards {\r\n  width: var(--General-width);\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.cardContainer {\r\n  width: 30%;\r\n  height: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5% 0;\r\n  padding: 18px 18px;\r\n  background-color: rgb(16, 16, 16, 0.5);\r\n  border-radius: 10px;\r\n  transition: var(--transition);\r\n  position: relative;\r\n}\r\n\r\n.cardContainer .title {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin: 10% 0;\r\n  color: white;\r\n}\r\n\r\n.title h2 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.title h3 {\r\n  margin-right: 7px;\r\n}\r\n\r\n.cardContainer:hover {\r\n  transform: var(--card-scale);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.logo img {\r\n  width: 80px;\r\n  transition: var(--transition);\r\n}\r\n\r\n.imgCardcontainer img:hover {\r\n  transform: var(--scale);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.logo img:hover {\r\n  transform: var(--scale);\r\n}\r\n\r\nnav {\r\n  width: 50%;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-link {\r\n  transition: var(--transition);\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: var(--scale);\r\n  text-decoration: underline;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n}\r\n\r\nfooter {\r\n  background-color: #320187;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  position: absolute;\r\n  height: 50px;\r\n}\r\n\r\n#light-house-avoid-error {\r\n  display: none;\r\n}\r\n\r\n.bigPopup h2,\r\n.description {\r\n  color: white;\r\n  padding: 32px;\r\n  text-align: center;\r\n}\r\n\r\n.popupWin {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 40;\r\n  overflow-y: scroll;\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.bigPopup {\r\n  position: relative;\r\n  width: 70%;\r\n  border: 1px solid #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(20, 17, 17, 1);\r\n  margin: 24px auto;\r\n  row-gap: 15px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-class-image {\r\n  width: 100%;\r\n  padding: 20px;\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.bigPopup span {\r\n  align-self: flex-end;\r\n  padding: 20px;\r\n}\r\n\r\n#closePopup {\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\n\r\n#userName,\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  padding: 20px;\r\n}\r\n\r\ntextarea::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n::placeholder {\r\n  padding: 15px;\r\n}\r\n\r\n.bigPopup p {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 20px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n#ul-comment-dynamic-link li {\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n\r\n#item-count {\r\n  color: #fff;\r\n  font-weight: var(--pop-600);\r\n}\r\n\r\n.small-class {\r\n  align-self: flex-end;\r\n  margin-bottom: 7%;\r\n  color: white;\r\n  font-weight: var(--pop-600);\r\n  position: absolute;\r\n  right: 10px;\r\n  bottom: 60px;\r\n}\r\n\r\n#comentDynamicList {\r\n  height: 70px;\r\n  overflow-y: auto;\r\n}\r\n\r\n#comentDynamicList li {\r\n  color: #fff;\r\n}\r\n\r\n.comment,\r\n#popupComment {\r\n  position: absolute;\r\n  bottom: 12px;\r\n  width: 60%;\r\n  margin-bottom: 5%;\r\n  padding: 10px 15px;\r\n  background-color: white;\r\n  color: rgba(0, 0, 0, 0.75);\r\n  transition: var(--transition);\r\n  font-weight: var(--pop-600);\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n\r\n.comment:hover,\r\n#popupComment:hover {\r\n  transform: var(--scale);\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n  border: 2px solid yellow;\r\n}\r\n\r\n.bigPopup form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40%;\r\n  margin: 18px auto;\r\n  height: 300px;\r\n}\r\n\r\n#comment-box-id {\r\n  height: 500px;\r\n  margin-bottom: 120px;\r\n}\r\n\r\n.fa-heart:hover {\r\n  transform: var(--scale);\r\n  color: red;\r\n}\r\n\r\n#ul-header {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .cardContainer {\r\n    width: 44%;\r\n  }\r\n\r\n  .bigPopup p {\r\n    overflow-y: auto;\r\n    height: 200px;\r\n  }\r\n\r\n  .header-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .commentStyle {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  #comentDynamicList {\r\n    width: 70%;\r\n  }\r\n\r\n  #userName,\r\n  textarea {\r\n    width: 180%;\r\n  }\r\n\r\n  #ul-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  #ul-header .nav-link a {\r\n    width: 100%;\r\n  }\r\n\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .cardContainer {\r\n    width: 100%;\r\n  }\r\n\r\n  #ul-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  .small-class {\r\n    bottom: 50px;\r\n  }\r\n}\r\n\r\n.cardContainer::before,\r\n.cardContainer::after,\r\n.bigPopup::before,\r\n.bigPopup::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -2px;\r\n  top: -2px;\r\n  border-radius: 10px;\r\n  background: linear-gradient(\r\n    45deg,\r\n    #382fe2,\r\n    #0404bf,\r\n    #5212c9,\r\n    #4d0bc0,\r\n    #740808,\r\n    #8d0b57,\r\n    #00f\r\n  );\r\n  background-size: 200%;\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  z-index: -1;\r\n  animation: steam 15s linear infinite;\r\n}\r\n\r\n@keyframes steam {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  50% {\r\n    background-position: 300% 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.cardContainer::after,\r\n.bigPopup::after {\r\n  filter: blur(50px);\r\n  border: 2px solid yellow;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8s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REFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0ZBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrRUFBUztBQUNmLE1BQU07QUFDTixNQUFNLHFFQUFXO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxZQUFZLHFFQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9pbWFnZXMvNDc4NzkuanBnIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL2ltYWdlcy82MTg4MjcwLnBuZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL21vZHVsZXMvQVBJLWxpbmtzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL21vZHVsZXMvZnVuY0NvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL21vZHVsZXMvZ2V0LXBvc3QtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9tb2R1bGVzL3BvcC11cC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9tb2R1bGVzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MSwzMDA7MSw0MDA7MSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1HZW5lcmFsLXdpZHRoOiA5MCU7XFxyXFxuICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXHJcXG4gIC0tc2NhbGU6IHNjYWxlKDEuMik7XFxyXFxuICAtLWNhcmQtc2NhbGU6IHNjYWxlKDEuMDUpO1xcclxcbiAgLS1wb3AtNjAwOiA2MDA7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTVweCAxMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIwMTg3O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogdmFyKC0tR2VuZXJhbC13aWR0aCk7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nQ2FyZGNvbnRhaW5lciB7XFxyXFxuICBtaW4taGVpZ2h0OiAzMThweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nQ2FyZGNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IDE0OCU7XFxyXFxuICBoZWlnaHQ6IDM0OHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNyU7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZER5bmFtaWNDYXJkcyB7XFxyXFxuICB3aWR0aDogdmFyKC0tR2VuZXJhbC13aWR0aCk7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZENvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiA1JSAwO1xcclxcbiAgcGFkZGluZzogMThweCAxOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2LCAxNiwgMTYsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyIC50aXRsZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgbWFyZ2luOiAxMCUgMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIGgyIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDMge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tY2FyZC1zY2FsZSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nQ2FyZGNvbnRhaW5lciBpbWc6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tcG9wLTYwMCk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIwMTg3O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlnaHQtaG91c2UtYXZvaWQtZXJyb3Ige1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ1BvcHVwIGgyLFxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBXaW4ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDQwO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDE3LCAxNywgMSk7XFxyXFxuICBtYXJnaW46IDI0cHggYXV0bztcXHJcXG4gIHJvdy1nYXA6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY2xhc3MtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgc3BhbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZVBvcHVwIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1wb3AtNjAwKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXJOYW1lLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxyXFxudGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5iaWdQb3B1cCBwIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3VsLWNvbW1lbnQtZHluYW1pYy1saW5rIGxpIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2l0ZW0tY291bnQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tcG9wLTYwMCk7XFxyXFxufVxcclxcblxcclxcbi5zbWFsbC1jbGFzcyB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDclO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXBvcC02MDApO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBib3R0b206IDYwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb21lbnREeW5hbWljTGlzdCB7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tZW50RHluYW1pY0xpc3QgbGkge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LFxcclxcbiNwb3B1cENvbW1lbnQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAxMnB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXBvcC02MDApO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudDpob3ZlcixcXHJcXG4jcG9wdXBDb21tZW50OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ1BvcHVwIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAxOHB4IGF1dG87XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1ib3gtaWQge1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jdWwtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIC5zbWFsbC1jbGFzcyB7XFxyXFxuICAgIGJvdHRvbTogNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAuY2FyZENvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA0NCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmlnUG9wdXAgcCB7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudFN0eWxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29tZW50RHluYW1pY0xpc3Qge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3VzZXJOYW1lLFxcclxcbiAgdGV4dGFyZWEge1xcclxcbiAgICB3aWR0aDogMTgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN1bC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdWwtaGVhZGVyIC5uYXYtbGluayBhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc21hbGwtY2xhc3Mge1xcclxcbiAgICBib3R0b206IDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgLmNhcmRDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN1bC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc21hbGwtY2xhc3Mge1xcclxcbiAgICBib3R0b206IDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyOjpiZWZvcmUsXFxyXFxuLmNhcmRDb250YWluZXI6OmFmdGVyLFxcclxcbi5iaWdQb3B1cDo6YmVmb3JlLFxcclxcbi5iaWdQb3B1cDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtMnB4O1xcclxcbiAgdG9wOiAtMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgNDVkZWcsXFxyXFxuICAgICMzODJmZTIsXFxyXFxuICAgICMwNDA0YmYsXFxyXFxuICAgICM1MjEyYzksXFxyXFxuICAgICM0ZDBiYzAsXFxyXFxuICAgICM3NDA4MDgsXFxyXFxuICAgICM4ZDBiNTcsXFxyXFxuICAgICMwMGZcXHJcXG4gICk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgYW5pbWF0aW9uOiBzdGVhbSAxNXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHN0ZWFtIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzAwJSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXI6OmFmdGVyLFxcclxcbi5iaWdQb3B1cDo6YWZ0ZXIge1xcclxcbiAgZmlsdGVyOiBibHVyKDUwcHgpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFB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aEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25COzs7Ozs7Ozs7R0FTQztFQUNELHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MSwzMDA7MSw0MDA7MSw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1HZW5lcmFsLXdpZHRoOiA5MCU7XFxyXFxuICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXHJcXG4gIC0tc2NhbGU6IHNjYWxlKDEuMik7XFxyXFxuICAtLWNhcmQtc2NhbGU6IHNjYWxlKDEuMDUpO1xcclxcbiAgLS1wb3AtNjAwOiA2MDA7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTVweCAxMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIwMTg3O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogdmFyKC0tR2VuZXJhbC13aWR0aCk7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nQ2FyZGNvbnRhaW5lciB7XFxyXFxuICBtaW4taGVpZ2h0OiAzMThweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nQ2FyZGNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IDE0OCU7XFxyXFxuICBoZWlnaHQ6IDM0OHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNyU7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZER5bmFtaWNDYXJkcyB7XFxyXFxuICB3aWR0aDogdmFyKC0tR2VuZXJhbC13aWR0aCk7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZENvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiA1JSAwO1xcclxcbiAgcGFkZGluZzogMThweCAxOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2LCAxNiwgMTYsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyIC50aXRsZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgbWFyZ2luOiAxMCUgMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIGgyIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDMge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tY2FyZC1zY2FsZSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nQ2FyZGNvbnRhaW5lciBpbWc6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tcG9wLTYwMCk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIwMTg3O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlnaHQtaG91c2UtYXZvaWQtZXJyb3Ige1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ1BvcHVwIGgyLFxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBXaW4ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDQwO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDE3LCAxNywgMSk7XFxyXFxuICBtYXJnaW46IDI0cHggYXV0bztcXHJcXG4gIHJvdy1nYXA6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY2xhc3MtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnUG9wdXAgc3BhbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZVBvcHVwIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1wb3AtNjAwKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXJOYW1lLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxyXFxudGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5iaWdQb3B1cCBwIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3VsLWNvbW1lbnQtZHluYW1pYy1saW5rIGxpIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2l0ZW0tY291bnQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tcG9wLTYwMCk7XFxyXFxufVxcclxcblxcclxcbi5zbWFsbC1jbGFzcyB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDclO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXBvcC02MDApO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBib3R0b206IDYwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb21lbnREeW5hbWljTGlzdCB7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tZW50RHluYW1pY0xpc3QgbGkge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LFxcclxcbiNwb3B1cENvbW1lbnQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAxMnB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXBvcC02MDApO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudDpob3ZlcixcXHJcXG4jcG9wdXBDb21tZW50OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ1BvcHVwIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAxOHB4IGF1dG87XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1ib3gtaWQge1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jdWwtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIC5zbWFsbC1jbGFzcyB7XFxyXFxuICAgIGJvdHRvbTogNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAuY2FyZENvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA0NCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmlnUG9wdXAgcCB7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudFN0eWxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29tZW50RHluYW1pY0xpc3Qge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3VzZXJOYW1lLFxcclxcbiAgdGV4dGFyZWEge1xcclxcbiAgICB3aWR0aDogMTgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN1bC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdWwtaGVhZGVyIC5uYXYtbGluayBhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc21hbGwtY2xhc3Mge1xcclxcbiAgICBib3R0b206IDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgLmNhcmRDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN1bC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc21hbGwtY2xhc3Mge1xcclxcbiAgICBib3R0b206IDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGFpbmVyOjpiZWZvcmUsXFxyXFxuLmNhcmRDb250YWluZXI6OmFmdGVyLFxcclxcbi5iaWdQb3B1cDo6YmVmb3JlLFxcclxcbi5iaWdQb3B1cDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtMnB4O1xcclxcbiAgdG9wOiAtMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgNDVkZWcsXFxyXFxuICAgICMzODJmZTIsXFxyXFxuICAgICMwNDA0YmYsXFxyXFxuICAgICM1MjEyYzksXFxyXFxuICAgICM0ZDBiYzAsXFxyXFxuICAgICM3NDA4MDgsXFxyXFxuICAgICM4ZDBiNTcsXFxyXFxuICAgICMwMGZcXHJcXG4gICk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgYW5pbWF0aW9uOiBzdGVhbSAxNXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHN0ZWFtIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzAwJSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXI6OmFmdGVyLFxcclxcbi5iaWdQb3B1cDo6YWZ0ZXIge1xcclxcbiAgZmlsdGVyOiBibHVyKDUwcHgpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhiZDU4YTAyNmVjMmM1ZThhODdmODIwZTc4N2RjY2EyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0N2QzMjk5YTJjOGY1MzMzNWVhMTI4MjBlMzAzYTgyNi5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2V0TmFzYUFwaSA9ICdodHRwczovL2FwaS5uYXNhLmdvdi9wbGFuZXRhcnkvYXBvZD9hcGlfa2V5PXlFNVh3RjNZQlJ1NlJhTWIySzMyOGxYSmFiV0NvZzVyemphSVI3Nk4mc3RhcnRfZGF0ZT0yMDIyLTA0LTEwJmVuZF9kYXRlPTIwMjItMDQtMTgnO1xuXG5jb25zdCByYW5kb21EYXRlc0ZvclBvcHVwSW1ncyA9IFtcbiAgJzIwMjItMDQtMTAnLFxuICAnMjAyMi0wNC0xMScsXG4gICcyMDIyLTA0LTEyJyxcbiAgJzIwMjItMDQtMTMnLFxuICAnMjAyMi0wNC0xNCcsXG4gICcyMDIyLTA0LTE1JyxcbiAgJzIwMjItMDQtMTYnLFxuICAnMjAyMi0wNC0xNycsXG4gICcyMDIyLTA0LTE4Jyxcbl07XG5cbmNvbnN0IGdldERhdGFEYXRlSW1hZ2UgPSAobnVtKSA9PiBgaHR0cHM6Ly9hcGkubmFzYS5nb3YvcGxhbmV0YXJ5L2Fwb2Q/YXBpX2tleT15RTVYd0YzWUJSdTZSYU1iMkszMjhsWEphYldDb2c1cnpqYUlSNzZOJmRhdGU9JHtyYW5kb21EYXRlc0ZvclBvcHVwSW1nc1tudW1dfWA7XG5cbmNvbnN0IGxpa2VMaW5rID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3JTOTNUWU1hV0ZSY0RIUjFSczl1L2xpa2VzJztcblxuY29uc3QgY29tbWVudExpbmsgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvclM5M1RZTWFXRlJjREhSMVJzOXUvY29tbWVudHMnO1xuXG5leHBvcnQge1xuICBnZXROYXNhQXBpLCBnZXREYXRhRGF0ZUltYWdlLCBsaWtlTGluaywgY29tbWVudExpbmssXG59O1xuIiwiaW1wb3J0IHsgZ2V0RGF0YSwgcG9zdERhdGEgfSBmcm9tICcuL2dldC1wb3N0LWRhdGEuanMnO1xuaW1wb3J0IHsgY29tbWVudExpbmsgfSBmcm9tICcuL0FQSS1saW5rcy5qcyc7XG5cbmNvbnN0IGNvdW50aW5nRWxlbWVudHNGdW5jID0gKGVsZW0pID0+IGVsZW0uY2hpbGRFbGVtZW50Q291bnQ7XG5cbmZ1bmN0aW9uIGNvdW50aW5nSXRlbXMoKSB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1jb3VudCcpO1xuICBjb25zdCBEeW5hbWljU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGREeW5hbWljQ2FyZHMnKTtcbiAgaXRlbS5pbm5lckhUTUwgPSBgU3BhY2UgUGljdHVyZXMgKCR7Y291bnRpbmdFbGVtZW50c0Z1bmMoRHluYW1pY1NlY3Rpb24pfSlgO1xufVxuXG5jb25zdCBjb21tZW50U3RydWN0dXJlID0gKHVzZXJOYW1lLCB0ZXh0Q29tbWVudFN0cikgPT4ge1xuICBjb25zdCB1bER5bmFtaWNDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbWVudER5bmFtaWNMaXN0Jyk7XG4gIGNvbnN0IExJU1QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBMSVNULmlubmVySFRNTCA9IGAke3VzZXJOYW1lfSA6ICR7dGV4dENvbW1lbnRTdHJ9YDtcbiAgdWxEeW5hbWljQ29udC5hcHBlbmRDaGlsZChMSVNUKTtcbn07XG5cbmNvbnN0IGNvbW1lbnRDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBjb21tZW50Q29udGFpbmVyQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tZW50RHluYW1pY0xpc3QnKTtcbiAgY29tbWVudENvbnRhaW5lckNvdW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2NvdW50aW5nRWxlbWVudHNGdW5jKFxuICAgIGNvbW1lbnRDb250YWluZXJDb3VudCxcbiAgKX0pYDtcbn07XG5cbmNvbnN0IHNob3dDb21tZW50ID0gKGlkKSA9PiB7XG4gIGNvbnN0IGdldENvbW1lbnRGcm9tQVBJID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3JTOTNUWU1hV0ZSY0RIUjFSczl1L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gO1xuICBnZXREYXRhKGdldENvbW1lbnRGcm9tQVBJKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmZvckVhY2goKGNvbW1lbnQpID0+IGNvbW1lbnRTdHJ1Y3R1cmUoY29tbWVudC51c2VybmFtZSwgY29tbWVudC5jb21tZW50KSkpXG4gICAgLnRoZW4oKCkgPT4gY29tbWVudENvdW50ZXIoKSlcbiAgICAuY2F0Y2goKCkgPT4gY29tbWVudFN0cnVjdHVyZSgnVGhpcyBpbWFnZSBoYXMnLCAnbm8gY29tbWVudHMgeWV0JykpO1xufTtcblxuY29uc3QgcG9zdENvbW1lbnQgPSAoaWRDb21tZW50LCB1c2VyTmFtZSwgY29tbWVudFN0cikgPT4ge1xuICBjb25zdCBkYXRhQ29tbWVudCA9IHtcbiAgICBpdGVtX2lkOiBpZENvbW1lbnQsXG4gICAgdXNlcm5hbWU6IHVzZXJOYW1lLFxuICAgIGNvbW1lbnQ6IGNvbW1lbnRTdHIsXG4gIH07XG4gIHBvc3REYXRhKGNvbW1lbnRMaW5rLCBkYXRhQ29tbWVudClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgY29tbWVudFN0cnVjdHVyZSh1c2VyTmFtZSwgY29tbWVudFN0cik7XG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBjb21tZW50Q291bnRlcigpKVxuICAgIC5jYXRjaCgoKSA9PiBjb21tZW50U3RydWN0dXJlKCdUaGlzIGltYWdlIGhhcycsICdubyBjb21tZW50cyB5ZXQnKSk7XG59O1xuXG5leHBvcnQge1xuICBzaG93Q29tbWVudCxcbiAgcG9zdENvbW1lbnQsXG4gIGNvdW50aW5nSXRlbXMsXG4gIGNvdW50aW5nRWxlbWVudHNGdW5jLFxuICBjb21tZW50Q291bnRlcixcbn07XG4iLCJjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybEFwaSkgPT4ge1xuICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBmZXRjaCh1cmxBcGkpO1xuICByZXR1cm4gcmVzcG9uc2VEYXRhLmpzb24oKTtcbn07XG5cbmNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybEFwaSwgZGF0YSkgPT4ge1xuICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBmZXRjaCh1cmxBcGksIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2VEYXRhO1xufTtcblxuZXhwb3J0IHsgZ2V0RGF0YSwgcG9zdERhdGEgfTtcbiIsImNvbnN0IGNvbnRhaW5lckR5bmFtaWNDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGREeW5hbWljQ2FyZHMnKTtcblxuY29uc3QgZGlzcGxheVdpbmRvd1BvcHVwID0gKGltYWdlLCB0aXRsZSwgaW5mb0Rlc2NyaXAsIHdpbmRvd3NJZCkgPT4ge1xuICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3B1cFdpbicpO1xuICBwb3B1cENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJiaWdQb3B1cFwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCIgaWQ9XCJjbG9zZVBvcHVwXCI+PC9pPjwvc3Bhbj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lci1wb3B1cFwiPlxuICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGNsYXNzPVwicG9wdXAtY2xhc3MtaW1hZ2VcIiBhbHQ9XCJpbWFnZSBmcm9tIEFQSVwiPlxuICAgIDwvZGl2PlxuICAgIDxoMj4ke3RpdGxlfTwvaDI+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7aW5mb0Rlc2NyaXB9PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50U3R5bGVcIj5cbiAgICAgPGgyIGNsYXNzPVwiY29tbWVudHNcIj5Db21tZW50czwvaDI+XG4gICAgIDx1bCBpZD1cImNvbWVudER5bmFtaWNMaXN0XCI+PC91bD5cbiAgICA8L2Rpdj5cbiAgICA8Zm9ybSBpZD1cIiR7d2luZG93c0lkfWZvcm1cIiBhY3Rpb249XCJwb3N0XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgTmFtZVwiIGlkPVwidXNlck5hbWVcIiByZXF1aXJlZCAgbWlubGVuZ3RoPVwiNFwiPlxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJ0ZXh0XCIgaWQ9XCJjb21tZW50LWJveC1pZFwiIGNvbHM9XCI0MFwiIHJvd3M9XCIxNVwiIHBsYWNlaG9sZGVyPVwiLi4uYW5kIHlvdXIgY29tbWVudC5cIiByZXF1aXJlZCAgbWlubGVuZ3RoPVwiNFwiPjwvdGV4dGFyZWE+XG4gICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ29tbWVudFwiIGlkPVwicG9wdXBDb21tZW50XCI+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgYDtcbiAgY29udGFpbmVyRHluYW1pY0NhcmRzLmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGNsb3NlV2luZG93UG9wdXAgPSAoSUR0YXJnZXQpID0+IHtcbiAgSUR0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG59O1xuXG5leHBvcnQgeyBjb250YWluZXJEeW5hbWljQ2FyZHMsIGRpc3BsYXlXaW5kb3dQb3B1cCwgY2xvc2VXaW5kb3dQb3B1cCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmNvbnN0IHVzZXJFcnJvciA9ICgpID0+IHtcbiAgdXNlck5hbWUucGxhY2Vob2xkZXIgPSAnUGxlYXNlIGVudGVyIHlvdXIgbmFtZSc7XG4gIHVzZXJOYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZjMGNiJztcbiAgdXNlck5hbWUuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCAjYmQxMjEyJztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJFcnJvcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNwYWNlbWFuIGZyb20gJy4vaW1hZ2VzLzYxODgyNzAucG5nJztcbmltcG9ydCBiZ0dhbGF4eSBmcm9tICcuL2ltYWdlcy80Nzg3OS5qcGcnO1xuaW1wb3J0IHVzZXJFcnJvciBmcm9tICcuL21vZHVsZXMvdmFsaWRhdGlvbi5qcyc7XG5pbXBvcnQgeyBnZXROYXNhQXBpLCBnZXREYXRhRGF0ZUltYWdlLCBsaWtlTGluayB9IGZyb20gJy4vbW9kdWxlcy9BUEktbGlua3MuanMnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgcG9zdERhdGEgfSBmcm9tICcuL21vZHVsZXMvZ2V0LXBvc3QtZGF0YS5qcyc7XG5pbXBvcnQge1xuICBjb250YWluZXJEeW5hbWljQ2FyZHMsXG4gIGRpc3BsYXlXaW5kb3dQb3B1cCxcbiAgY2xvc2VXaW5kb3dQb3B1cCxcbn0gZnJvbSAnLi9tb2R1bGVzL3BvcC11cC5qcyc7XG5pbXBvcnQge1xuICBwb3N0Q29tbWVudCxcbiAgc2hvd0NvbW1lbnQsXG4gIGNvdW50aW5nSXRlbXMsXG59IGZyb20gJy4vbW9kdWxlcy9mdW5jQ29tbWVudHMuanMnO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRsb2dvJyk7XG5sb2dvLnNyYyA9IHNwYWNlbWFuO1xuY29uc3QgZ2FsYXh5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcbmdhbGF4eS5zdHlsZSA9IGBiYWNrZ3JvdW5kOiB1cmwoJHtiZ0dhbGF4eX0pYDtcblxuY29uc3QgYWRkRmlyc3RJbnRlcmZhY2VDYXJkID0gKGltYWdlLCB0aXRsZUNhcmQsIGluZGV4Q2FyZCkgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZENvbnRhaW5lcicpO1xuICBjYXJkLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImltZ0NhcmRjb250YWluZXJcIj5cbiAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGFkZD1cIkltYWdlIHByb3ZpZGVkIGJ5IE5hc2EncyBBcGlcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICA8aDM+JHt0aXRsZUNhcmR9PC9oMz5cbiAgPGEgaHJlZj1cIiNcIiBpZD1cIiR7aW5kZXhDYXJkfXN0YXJcIiBjbGFzcz1cImxpa2VcIj48aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT48L2E+XG4gIDwvZGl2PlxuICA8c21hbGwgY2xhc3M9XCJzbWFsbC1jbGFzc1wiPjwvc21hbGw+XG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDb21tZW50c1wiIGlkPVwiJHtpbmRleENhcmR9XCIgY2xhc3M9XCJjb21tZW50XCI+XG4gIGA7XG4gIGNvbnRhaW5lckR5bmFtaWNDYXJkcy5hcHBlbmRDaGlsZChjYXJkKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlJbWFnZSA9IChpZEltZykgPT4ge1xuICBnZXREYXRhKGdldERhdGFEYXRlSW1hZ2UoaWRJbWcpKVxuICAgIC50aGVuKChkYXRhKSA9PiBkaXNwbGF5V2luZG93UG9wdXAoZGF0YS5oZHVybCwgZGF0YS50aXRsZSwgZGF0YS5leHBsYW5hdGlvbiwgaWRJbWcpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHNob3dDb21tZW50KGlkSW1nKTtcbiAgICAgIGNvbnN0IGNsb3NlUG9wdXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VQb3B1cCcpO1xuICAgICAgY2xvc2VQb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VXaW5kb3dQb3B1cChjbG9zZVBvcHVwQnRuKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn07XG5cbmNvbnN0IHNlbmRMaWtlc0RvbSA9IChpZExpa2UsIGxpa2VzKSA9PiB7XG4gIGNvbnN0IHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRMaWtlKTtcbiAgc21hbGwucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gYCR7bGlrZXN9IGxpa2VzYDtcbn07XG5cbmZ1bmN0aW9uIGNvdW50aW5nRWxlbWVudHNGdW5jKGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0uY2hpbGRFbGVtZW50Q291bnQ7XG59XG5cbmNvbnN0IHNob3dGdW5jTGlrZXMgPSAoKSA9PiB7XG4gIGdldERhdGEobGlrZUxpbmspXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA8IGNvdW50aW5nRWxlbWVudHNGdW5jKGNvbnRhaW5lckR5bmFtaWNDYXJkcykpIHtcbiAgICAgICAgc2VuZExpa2VzRG9tKGNhcmQuaXRlbV9pZCwgY2FyZC5saWtlcyk7XG4gICAgICB9XG4gICAgfSkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn07XG5cbmNvbnN0IHNob3dBbW91bnRPZkxpa2VzID0gKCkgPT4ge1xuICBnZXREYXRhKGdldE5hc2FBcGkpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuZm9yRWFjaCgoY2FyZCwgaW5kKSA9PiBhZGRGaXJzdEludGVyZmFjZUNhcmQoY2FyZC5oZHVybCwgY2FyZC50aXRsZSwgaW5kKSkpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgc2hvd0Z1bmNMaWtlcygpO1xuICAgICAgY291bnRpbmdJdGVtcygpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn07XG5cbmNvbnN0IHJhd0Z1bmNsaWtlID0gKGlkTGlrZSwgbGlrZXMpID0+IHtcbiAgY29uc3QgZGF0YSA9IHsgaXRlbV9pZDogaWRMaWtlIH07XG4gIHBvc3REYXRhKGxpa2VMaW5rLCBkYXRhKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICBzZW5kTGlrZXNEb20oaWRMaWtlLCBsaWtlcyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufTtcblxuc2hvd0Ftb3VudE9mTGlrZXMoKTtcbnJhd0Z1bmNsaWtlKCk7XG5cbmNvbnRhaW5lckR5bmFtaWNDYXJkcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWhlYXJ0JykpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGlrZUNvdW50ZXIgPSBwYXJzZUludChcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQsXG4gICAgICAxMCxcbiAgICApO1xuICAgIGNvbnN0IGxpa2VzID0gbGlrZUNvdW50ZXIgKyAxO1xuICAgIHJhd0Z1bmNsaWtlKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQsIGxpa2VzKTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbW1lbnQnKSkge1xuICAgIGRpc3BsYXlJbWFnZShwYXJzZUludChlLnRhcmdldC5pZCwgMTApKTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldC5pZCA9PT0gJ3BvcHVwQ29tbWVudCcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaWRDb21tZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZC5tYXRjaCgvWzAtOV0vZyk7XG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKTtcbiAgICBjb25zdCBjb21tZW50RG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtYm94LWlkJyk7XG4gICAgaWYgKHVzZXJOYW1lLnZhbHVlID09PSAnJykge1xuICAgICAgdXNlckVycm9yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc3RDb21tZW50KGlkQ29tbWVudCwgdXNlck5hbWUudmFsdWUsIGNvbW1lbnREb20udmFsdWUpO1xuICAgICAgdXNlck5hbWUudmFsdWUgPSAnJztcbiAgICAgIGNvbW1lbnREb20udmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zb2xlLmxvZyhjb250YWluZXJEeW5hbWljQ2FyZHMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9