/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.scss */ \"./style.scss\");\n//define variable\n // import \"core-js/stable\";\n// import \"regenerator-runtime/runtime\";\n\nvar imgList = document.getElementById(\"slider\");\nvar childrenImg = [].slice.call(imgList.children);\nvar btnNext = document.getElementById(\"next\");\nvar btnPrev = document.getElementById(\"prev\");\nvar thumbnails = document.getElementById(\"thumbnails\");\nvar sliderContainer = document.getElementById(\"slider-container\");\nvar timeContainer = document.getElementById(\"time\");\nvar counter = 1;\nvar time = 0;\nvar setPause = false; //copy image to display thumbnails\n\nfor (var i = 0; i < imgList.children.length; i++) {\n  var itm = imgList.children[i];\n  var cln = itm.cloneNode(true);\n  cln.classList.remove(\"first-element\");\n  cln.classList.remove(\"second-element\");\n  cln.classList.remove(\"slider-element\");\n  thumbnails.appendChild(cln);\n}\n\nvar childrenThumbnails = [].slice.call(thumbnails.children);\nthumbnails.children[0].classList.add(\"frame\");\n\nthumbnails.onclick = function (e) {\n  imgList.classList.remove(\"next\");\n  imgList.classList.remove(\"prev\");\n  imgList.classList.remove(\"default\");\n  imgList.classList.add(\"default\");\n  var tgt = e.target,\n      i = 0,\n      items;\n  if (tgt === this) return;\n  items = childrenFunc(this);\n\n  while (tgt.parentNode !== this) {\n    tgt = tgt.parentNode;\n  }\n\n  while (items[i] !== tgt) {\n    i++;\n  }\n\n  if (i < imgList.children.length - 1) {\n    changeSlide(i, i + 1);\n    counter = i + 1;\n  } else {\n    changeSlide(i, 0);\n    counter = 0;\n  }\n\n  addFrame(i);\n};\n\nfunction childrenFunc(el) {\n  var i = 0,\n      children = [],\n      child;\n\n  while (child = el.childNodes[i++]) {\n    if (child.nodeType === 1) children.push(child);\n  }\n\n  return children;\n}\n\nbtnNext.onclick = function () {\n  nextElement();\n};\n\nbtnPrev.onclick = function () {\n  prevElement();\n};\n\nvar nextElement = function nextElement() {\n  imgList.classList.remove(\"next\");\n  imgList.classList.remove(\"prev\");\n  imgList.classList.remove(\"default\");\n  imgList.classList.add(\"next\");\n  var nextSlide1 = null;\n  var nextSlide = document.getElementsByClassName(\"first-default-element\");\n\n  if (nextSlide.length !== 2) {\n    nextSlide1 = document.getElementsByClassName(\"first-element\");\n  } else {\n    nextSlide1 = nextSlide;\n  }\n\n  nextSlide1[0].classList.add(\"next-slide\");\n  setTimeout(function () {\n    var nextSlide2 = document.getElementsByClassName(\"next-slide\");\n    nextSlide2[0].classList.remove(\"next-slide\");\n  }, 500);\n\n  if (counter < imgList.children.length - 1) {\n    changeSlide(counter, counter + 1);\n    counter = counter + 1;\n  } else {\n    changeSlide(counter, 0);\n    counter = 0;\n  }\n};\n\nvar prevElement = function prevElement() {\n  imgList.classList.remove(\"next\");\n  imgList.classList.remove(\"prev\");\n  imgList.classList.remove(\"default\");\n  imgList.classList.add(\"prev\");\n  var prevSlide1 = null;\n  var prevSlide = document.getElementsByClassName(\"second-default-element\");\n\n  if (prevSlide.length !== 2) {\n    prevSlide1 = document.getElementsByClassName(\"second-element\");\n  } else {\n    prevSlide1 = prevSlide;\n  }\n\n  prevSlide1[0].classList.add(\"prev-slide\");\n  setTimeout(function () {\n    var prevSlide2 = document.getElementsByClassName(\"prev-slide\");\n    prevSlide2[0].classList.remove(\"prev-slide\");\n  }, 500);\n  var lastIndex = imgList.children.length - 1;\n\n  if (counter > 1) {\n    changeSlide(counter - 2, counter - 1);\n    counter = counter - 1;\n  } else if (counter === 1) {\n    changeSlide(lastIndex, counter - 1);\n    counter = 0;\n  } else {\n    changeSlide(lastIndex - 1, lastIndex);\n    counter = imgList.children.length - 1;\n  }\n};\n\nvar changeSlide = function changeSlide(index1, index2) {\n  time = 0;\n  childrenImg.forEach(function (slide) {\n    slide.classList.remove(\"first-element\");\n    slide.classList.remove(\"second-element\");\n    slide.classList.remove(\"first-default-element\");\n    slide.classList.remove(\"second-default-element\");\n  });\n  addFrame(index1);\n  imgList.children[index1].classList.add(\"first-element\");\n  imgList.children[index2].classList.add(\"second-element\");\n}; //add border to clicked thumbnails\n\n\nvar addFrame = function addFrame(index) {\n  childrenThumbnails.forEach(function (slide) {\n    slide.classList.remove(\"frame\");\n  });\n  thumbnails.children[index].classList.add(\"frame\");\n}; //interval function\n\n\nwindow.setInterval(function () {\n  if (!setPause) {\n    time++;\n    timeContainer.innerHTML = 5 - time;\n\n    if (time === 5) {\n      nextElement();\n      time = 0;\n    }\n  }\n}, 1000);\n\nif (screen && screen.width > 768) {\n  //stop timer when mouse is hover on element\n  sliderContainer.addEventListener(\"mouseover\", function () {\n    setPause = true; // time = 0;\n  }, false);\n  sliderContainer.addEventListener(\"mouseleave\", function () {\n    setPause = false;\n  }, false);\n}\n\nsliderContainer.addEventListener(\"touchstart\", handleTouchStart, false);\nsliderContainer.addEventListener(\"touchmove\", handleTouchMove, false);\nsliderContainer.addEventListener(\"mousedown\", handleTouchStart, false);\nsliderContainer.addEventListener(\"mousemove\", handleTouchMove, false);\nvar xDown = null;\nvar yDown = null;\n\nfunction handleTouchStart(evt) {\n  if (evt.type === \"touchstart\") {\n    xDown = evt.touches[0].clientX;\n    yDown = evt.touches[0].clientY;\n  } else {\n    xDown = evt.clientX;\n    yDown = evt.clientY;\n  }\n}\n\nfunction handleTouchMove(evt) {\n  if (!xDown || !yDown) {\n    return;\n  }\n\n  var xUp = null;\n  var yUp = null;\n\n  if (evt.type === \"touchmove\") {\n    xUp = evt.touches[0].clientX;\n    yUp = evt.touches[0].clientY;\n  } else {\n    xUp = evt.clientX;\n    yUp = evt.clientY;\n  }\n\n  var xDiff = xDown - xUp;\n  var yDiff = yDown - yUp;\n  var value1 = 0;\n  var value2 = 0;\n\n  if (screen && screen.width > 768) {\n    value1 = 1;\n    value2 = -3;\n  } else {\n    value1 = 0;\n    value2 = 0;\n  }\n\n  if (Math.abs(xDiff) > Math.abs(yDiff)) {\n    if (xDiff > value1) {\n      nextElement();\n    } else if (xDiff < value2) {\n      prevElement();\n    }\n  }\n\n  xDown = null;\n  yDown = null;\n}\n\n//# sourceURL=webpack://carousel-project/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss ***!
  \*************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n:after,\\n:before {\\n  box-sizing: border-box;\\n}\\n\\nhtml button:focus {\\n  outline: 0;\\n}\\n\\nbody {\\n  margin: 0;\\n  width: 100%;\\n}\\n\\nhtml main {\\n  width: 100%;\\n}\\n\\n#slider {\\n  z-index: -1;\\n  position: relative;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  margin: auto;\\n  height: 100%;\\n}\\n#slider div {\\n  top: 0;\\n  display: none;\\n  filter: opacity(0.8);\\n}\\n#slider div img {\\n  width: 50vw;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n.next .first-element {\\n  animation-duration: 0.5s;\\n  animation-name: slideinNext;\\n}\\n\\n.prev .first-element {\\n  animation-duration: 0.5s;\\n  animation-name: slideinPrevFirst;\\n}\\n.prev .second-element {\\n  animation-duration: 0.5s;\\n  animation-name: slideinPrevSecond;\\n}\\n\\n.slider-container {\\n  position: relative;\\n  height: 100vh;\\n  width: 100%;\\n}\\n\\n.first-default-element {\\n  left: 0;\\n  order: 1;\\n  display: block !important;\\n}\\n\\n.second-default-element {\\n  order: 2;\\n  display: block !important;\\n}\\n\\n.first-element {\\n  left: 0;\\n  order: 1;\\n  display: block !important;\\n}\\n\\n.second-element {\\n  order: 2;\\n  display: block !important;\\n}\\n\\n.prev-slide {\\n  animation-duration: 0.5s;\\n  animation-name: slideinPrevSlide;\\n  display: block !important;\\n  order: 3;\\n}\\n\\n.next-slide {\\n  animation-duration: 0.5s;\\n  animation-name: slideinNextSlide;\\n  display: block !important;\\n  margin-left: -50%;\\n}\\n\\n@keyframes slideinNext {\\n  from {\\n    margin-left: 0%;\\n  }\\n  to {\\n    margin-left: 0%;\\n  }\\n}\\n@keyframes slideinPrevFirst {\\n  from {\\n    margin-left: -50%;\\n  }\\n  to {\\n    margin-left: 0%;\\n  }\\n}\\n@keyframes slideinPrevSecond {\\n  from {\\n    margin-left: 0%;\\n  }\\n  to {\\n    margin-left: 0%;\\n  }\\n}\\n@keyframes slideinPrevSlide {\\n  from {\\n    margin-left: 0%;\\n  }\\n  to {\\n    margin-left: 0%;\\n  }\\n}\\n@keyframes slideinNextSlide {\\n  from {\\n    margin-left: 0%;\\n  }\\n  to {\\n    margin-left: -50%;\\n  }\\n}\\n.img-fluid {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n#thumbnails {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: fit-content;\\n  width: -moz-fit-content;\\n  margin: auto;\\n  padding: 5px 0;\\n}\\n#thumbnails div img {\\n  max-width: 80px;\\n  padding: 10px;\\n}\\n\\n.arrows-container {\\n  top: 50%;\\n  width: 100%;\\n  position: absolute;\\n  -ms-transform: translateY(-50%);\\n  transform: translateY(-50%);\\n  display: flex;\\n  z-index: 99999;\\n}\\n.arrows-container button {\\n  background-color: transparent;\\n  border: none;\\n  font-size: 86px;\\n  font-weight: lighter;\\n  color: white;\\n}\\n.arrows-container :last-child {\\n  margin-left: auto;\\n}\\n\\n.frame {\\n  border: 1px solid black;\\n}\\n\\n.time-container {\\n  width: 100%;\\n  margin: auto;\\n  bottom: 5px;\\n  background-color: rgba(41, 41, 41, 0.37);\\n}\\n\\n.thumbnails-container {\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n  background-color: #6a6a6a6b;\\n}\\n\\n#time {\\n  font-size: 15px;\\n  color: white;\\n  width: fit-content;\\n  width: -moz-fit-content;\\n  margin: auto;\\n  padding: 1px;\\n}\\n\\n.example-content {\\n  margin: 50px auto;\\n  max-width: 70%;\\n  display: block;\\n}\\n\\n.hero-container {\\n  top: 50%;\\n  width: 100%;\\n  position: absolute;\\n  -ms-transform: translateY(-50%);\\n  transform: translateY(-50%);\\n  text-align: center;\\n  color: white;\\n}\\n.hero-container .hero__child___text {\\n  margin: 0 auto;\\n  width: fit-content;\\n  width: -moz-fit-content;\\n}\\n.hero-container .hero__child___text h1 {\\n  text-transform: uppercase;\\n  font-size: 42px;\\n  font-weight: 900;\\n}\\n.hero-container .hero__child___text p {\\n  font-size: 16px;\\n}\\n.hero-container .hero__child___button {\\n  width: fit-content;\\n  width: -moz-fit-content;\\n  margin: 0 auto;\\n}\\n.hero-container .hero__child___button button {\\n  background-color: transparent;\\n  border: 2px solid white;\\n  padding: 10px;\\n  width: 200px;\\n  text-transform: uppercase;\\n  margin: 0 10px;\\n  font-weight: 600;\\n  color: white;\\n}\\n.hero-container .hero__child___button button:hover {\\n  cursor: pointer;\\n  background-color: white;\\n  color: black;\\n}\\n\\n@media (max-width: 768px) {\\n  #slider .second-element,\\n#slider .second-default-element {\\n    display: none !important;\\n  }\\n  #slider div img {\\n    width: 100vw;\\n  }\\n\\n  #thumbnails div img {\\n    max-width: 60px;\\n    padding: 5px;\\n  }\\n\\n  .arrows-container {\\n    display: none;\\n  }\\n\\n  .next .first-element,\\n.next .second-element {\\n    animation-duration: 0.1s;\\n  }\\n\\n  .hero-container .hero__child___button button {\\n    margin: 10px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://carousel-project/./style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://carousel-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://carousel-project/./style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://carousel-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;