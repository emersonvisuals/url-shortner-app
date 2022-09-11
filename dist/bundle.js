/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.js */ \"./src/input.js\");\n/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning.js */ \"./src/warning.js\");\n/* harmony import */ var _warning_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_warning_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_bg_boost_desktop_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/bg-boost-desktop.svg */ \"./src/assets/bg-boost-desktop.svg\");\n/* harmony import */ var _assets_bg_boost_mobile_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/bg-boost-mobile.svg */ \"./src/assets/bg-boost-mobile.svg\");\n/* harmony import */ var _assets_bg_shorten_desktop_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/bg-shorten-desktop.svg */ \"./src/assets/bg-shorten-desktop.svg\");\n/* harmony import */ var _assets_bg_shorten_mobile_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/bg-shorten-mobile.svg */ \"./src/assets/bg-shorten-mobile.svg\");\n/* harmony import */ var _assets_icon_brand_recognition_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icon-brand-recognition.svg */ \"./src/assets/icon-brand-recognition.svg\");\n/* harmony import */ var _assets_icon_detailed_records_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icon-detailed-records.svg */ \"./src/assets/icon-detailed-records.svg\");\n/* harmony import */ var _assets_icon_fully_customizable_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/icon-fully-customizable.svg */ \"./src/assets/icon-fully-customizable.svg\");\n/* harmony import */ var _assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/icon-facebook.svg */ \"./src/assets/icon-facebook.svg\");\n/* harmony import */ var _assets_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/icon-instagram.svg */ \"./src/assets/icon-instagram.svg\");\n/* harmony import */ var _assets_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/icon-pinterest.svg */ \"./src/assets/icon-pinterest.svg\");\n/* harmony import */ var _assets_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/icon-twitter.svg */ \"./src/assets/icon-twitter.svg\");\n/* harmony import */ var _assets_illustration_working_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/illustration-working.svg */ \"./src/assets/illustration-working.svg\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var _assets_logo_copy_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/logo copy.svg */ \"./src/assets/logo copy.svg\");\n\n\n\n\n\n\n\n\nvar brandRecognitionSrc = document.querySelector('.iconOne');\nbrandRecognitionSrc.src = _assets_icon_brand_recognition_svg__WEBPACK_IMPORTED_MODULE_7__;\n\nvar detailedRecordsSrc = document.querySelector('.iconTwo');\ndetailedRecordsSrc.src = _assets_icon_detailed_records_svg__WEBPACK_IMPORTED_MODULE_8__;\n\nvar fullyCustomizableSrc = document.querySelector('.iconThree');\nfullyCustomizableSrc.src = _assets_icon_fully_customizable_svg__WEBPACK_IMPORTED_MODULE_9__;\n\nvar facebookSrc = document.querySelector('.facebook');\nfacebookSrc.src = _assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_10__;\n\nvar instagramSrc = document.querySelector('.instagram');\ninstagramSrc.src = _assets_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_11__;\n\nvar pinterestSrc = document.querySelector('.pinterest');\npinterestSrc.src = _assets_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_12__;\n\nvar twitterSrc = document.querySelector('.twitter');\ntwitterSrc.src = _assets_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_13__;\n\nvar illustrationSrc = document.querySelector('.illustration');\nillustrationSrc.src = _assets_illustration_working_svg__WEBPACK_IMPORTED_MODULE_14__;\n\n\nvar logo = document.getElementById('logo');\nvar logoFooterSrc = document.querySelector('.footerLogo');\nlogo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_15__;\nlogoFooterSrc.src = _assets_logo_copy_svg__WEBPACK_IMPORTED_MODULE_16__;\n\n//# sourceURL=webpack://url-shortening-api-master/./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/***/ (() => {

eval("// button variables\nvar shortenItBtn = document.querySelector('button.shortenIt');\nvar inputResultWrapper = document.querySelector('.inputResultContainer'); // textbox & warning variables \n\nvar textInput = document.querySelector('input.textBox');\nvar link = document.querySelector('input.textBox');\nvar errorMessage = document.querySelector('.warning');\nvar errorMessageP = document.querySelector('.warningMessage');\nvar linkPlaceholder = document.querySelector('input.textBox::placeholder');\nshortenItBtn.addEventListener('click', function () {\n  // api request\n  function fetchRequest() {\n    fetch(\"https://api.shrtco.de/v2/shorten?url=\".concat(textInput.value)).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      console.log(data.result.short_link); // defining structure for URl clicks\n\n      var ul = inputResultWrapper.appendChild(document.createElement('ul'));\n      ul.classList.add('inputUl');\n      var li = ul.appendChild(document.createElement('li'));\n      li.classList.add('inputLi');\n      var pOne = li.appendChild(document.createElement('p'));\n      pOne.classList.add('inputValue');\n      pOne.innerText = \"\".concat(textInput.value);\n      var div = li.appendChild(document.createElement('div'));\n      div.classList.add('inputContents');\n      var result = div.appendChild(document.createElement('p'));\n      result.classList.add('result');\n      result.innerText = \"\".concat(data.result.short_link);\n      var btnResult = div.appendChild(document.createElement('button'));\n      btnResult.classList.add('btnResult');\n      btnResult.innerText = 'copy'; // clicked btn style functionality \n\n      var copyAllBtns = document.querySelectorAll('.btnResult');\n      var finalOutcome = \"\".concat(data.result.short_link);\n      copyAllBtns.forEach(function (item) {\n        item.addEventListener('click', function () {\n          console.log('clicked');\n          item.innerHTML = 'Clicked!';\n          item.classList.add('active');\n          navigator.clipboard.writeText(finalOutcome);\n        });\n      });\n      textInput.value = '';\n    })[\"catch\"](function (err) {\n      textInput.value = '';\n      console.log(err);\n      console.error('failed to log link');\n      errorMessageP.innerHTML = 'Please enter a valid link';\n      link.classList.add('active');\n      errorMessage.classList.add('active');\n      linkPlaceholder.classList.add('active');\n    });\n  }\n\n  fetchRequest();\n});\ndocument.addEventListener('keypress', function (e) {\n  if (e.key === 'Enter') {\n    // api request\n    var fetchRequest = function fetchRequest() {\n      fetch(\"https://api.shrtco.de/v2/shorten?url=\".concat(textInput.value)).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        console.log(data.result.short_link); // defining structure for URl clicks\n\n        var ul = inputResultWrapper.appendChild(document.createElement('ul'));\n        ul.classList.add('inputUl');\n        var li = ul.appendChild(document.createElement('li'));\n        li.classList.add('inputLi');\n        var pOne = li.appendChild(document.createElement('p'));\n        pOne.classList.add('inputValue');\n        pOne.innerText = \"\".concat(textInput.value);\n        var div = li.appendChild(document.createElement('div'));\n        div.classList.add('inputContents');\n        var result = div.appendChild(document.createElement('p'));\n        result.classList.add('result');\n        result.innerText = \"\".concat(data.result.short_link);\n        var btnResult = div.appendChild(document.createElement('button'));\n        btnResult.classList.add('btnResult');\n        btnResult.innerText = 'copy'; // clicked btn style functionality \n\n        var copyAllBtns = document.querySelectorAll('.btnResult');\n        var finalOutcome = \"\".concat(data.result.short_link);\n        copyAllBtns.forEach(function (item) {\n          item.addEventListener('click', function () {\n            console.log('clicked');\n            item.innerHTML = 'Clicked!';\n            item.classList.add('active');\n            navigator.clipboard.writeText(finalOutcome);\n          });\n        }); // removing warning errors\n\n        link.classList.remove('active');\n        errorMessage.classList.remove('active'); // input set to nothing once callback achieved \n\n        textInput.value = '';\n      })[\"catch\"](function (err) {\n        textInput.value = '';\n        console.log(err);\n        console.error('failed to log link');\n        errorMessageP.innerHTML = 'Please enter a valid link';\n        link.classList.add('active');\n        errorMessage.classList.add('active');\n        linkPlaceholder.classList.add('active');\n      });\n    };\n\n    console.log('enter'); // removing warning message \n\n    link.classList.remove('active');\n    errorMessage.classList.remove('active');\n    fetchRequest();\n  }\n});\n\n//# sourceURL=webpack://url-shortening-api-master/./src/input.js?");

/***/ }),

/***/ "./src/warning.js":
/*!************************!*\
  !*** ./src/warning.js ***!
  \************************/
/***/ (() => {

eval("var link = document.querySelector('input.textBox');\nvar errorMessage = document.querySelector('.warning');\nvar btn = document.querySelector('button.shortenIt');\nbtn.addEventListener('click', function () {\n  console.log('test');\n  var linkPlaceholder = document.querySelector('input.textBox::placeholder');\n\n  if (link.value === '') {\n    link.classList.add('active');\n    errorMessage.classList.add('active');\n    linkPlaceholder.classList.add('active');\n  } else {\n    link.classList.remove('active');\n    errorMessage.classList.remove('active');\n    linkPlaceholder.classList.remove('active');\n  }\n});\n\n//# sourceURL=webpack://url-shortening-api-master/./src/warning.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/bg-boost-desktop.svg */ \"./src/assets/bg-boost-desktop.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: poppins;\\n  margin: 0;\\n  padding: 0;\\n  overflow-x: hidden;\\n}\\n\\nheader {\\n  height: 10vh;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 2rem 8rem;\\n}\\nheader .boxOne {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\nheader .boxOne ul.list {\\n  display: flex;\\n}\\nheader .boxOne ul.list li {\\n  padding: 0 1rem;\\n  list-style: none;\\n}\\nheader .boxOne ul.list li a {\\n  text-decoration: none;\\n  color: hsl(257deg, 7%, 63%);\\n  text-transform: capitalize;\\n}\\nheader .boxOne ul.list li a:hover {\\n  transition: 0.25s all;\\n  color: hsl(257deg, 27%, 26%);\\n}\\nheader .boxTwo {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\nheader .boxTwo button.login {\\n  background-color: hsl(180deg, 66%, 49%);\\n  border: none;\\n  color: white;\\n  text-transform: capitalize;\\n  font-size: 15px;\\n  font-family: poppins;\\n  font-weight: 500;\\n  padding: 0.75rem 1.5rem;\\n  border-radius: 2rem;\\n  cursor: pointer;\\n  background-color: transparent;\\n  color: hsl(257deg, 7%, 63%);\\n  padding: 0 2rem;\\n}\\nheader .boxTwo button.login:hover {\\n  transition: 0.25s all;\\n  color: hsl(257deg, 27%, 26%);\\n}\\nheader .boxTwo button.signUp {\\n  background-color: hsl(180deg, 66%, 49%);\\n  border: none;\\n  color: white;\\n  text-transform: capitalize;\\n  font-size: 15px;\\n  font-family: poppins;\\n  font-weight: 500;\\n  padding: 0.75rem 1.5rem;\\n  border-radius: 2rem;\\n  cursor: pointer;\\n}\\nheader .hamburgerTrigger {\\n  display: none;\\n}\\nheader .hamburgerTrigger .hamburger {\\n  display: none;\\n}\\n\\nmain section.one {\\n  height: 80vh;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-start;\\n  padding: 2rem 8rem;\\n}\\nmain section.one .contentsContainer {\\n  width: 35rem;\\n  transform: translateY(-5rem);\\n  position: relative;\\n  z-index: 1;\\n}\\nmain section.one .contentsContainer h1 {\\n  font-family: poppins;\\n  font-size: 75px;\\n  font-weight: 700;\\n  line-height: 1.2;\\n  margin: 0;\\n  padding: 0;\\n}\\nmain section.one .contentsContainer p {\\n  font-family: poppins;\\n  font-size: 18px;\\n  font-weight: 500;\\n  color: hsl(257deg, 7%, 63%);\\n  margin: 0;\\n  padding: 0;\\n  z-index: -1;\\n}\\nmain section.one .contentsContainer button.getStarted {\\n  background-color: hsl(180deg, 66%, 49%);\\n  border: none;\\n  color: white;\\n  text-transform: capitalize;\\n  font-size: 15px;\\n  font-family: poppins;\\n  font-weight: 500;\\n  padding: 0.75rem 1.5rem;\\n  border-radius: 2rem;\\n  cursor: pointer;\\n  margin: 2rem 0 0 0;\\n}\\nmain section.one img.illustration {\\n  position: absolute;\\n  top: 10rem;\\n  left: 60vw;\\n}\\nmain section.two {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  background-color: #eff1f7;\\n  padding: 2rem 8rem;\\n}\\nmain section.two .inputContainer {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: hsl(257deg, 27%, 26%);\\n  background-size: cover;\\n  width: 100%;\\n  padding: 2rem 0 0 0;\\n  border-radius: 0.5rem;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  transform: translateY(-7rem);\\n}\\nmain section.two .inputContainer .inputContents {\\n  display: grid;\\n  grid-template-columns: 80% 20%;\\n  grid-template-rows: 1fr;\\n  margin: 2rem;\\n  width: 100%;\\n}\\nmain section.two .inputContainer .inputContents input.textBox {\\n  padding: 0.75rem 0 0.75rem 1rem;\\n  font-family: poppins;\\n  font-size: 15px;\\n  border-radius: 0.5rem;\\n  margin: 0 1rem 0 0;\\n}\\nmain section.two .inputContainer .inputContents input.textBox.active::placeholder {\\n  color: red;\\n}\\nmain section.two .inputContainer .inputContents input.textBox.active {\\n  padding: 0.75rem 0 0.75rem 1rem;\\n  font-family: poppins;\\n  font-size: 15px;\\n  border-radius: 0.5rem;\\n  color: hsl(0deg, 87%, 67%);\\n  margin: 0 1rem 0 0;\\n  border: 3px solid hsl(0deg, 87%, 67%);\\n}\\nmain section.two .inputContainer .inputContents button.shortenIt {\\n  background-color: hsl(180deg, 66%, 49%);\\n  border: none;\\n  color: white;\\n  text-transform: capitalize;\\n  font-size: 15px;\\n  font-family: poppins;\\n  font-weight: 500;\\n  padding: 0.75rem 1.5rem;\\n  border-radius: 2rem;\\n  cursor: pointer;\\n  border-radius: 0.5rem;\\n}\\nmain section.two .inputContainer .inputContents .warning {\\n  visibility: hidden;\\n}\\nmain section.two .inputContainer .inputContents .warning p {\\n  margin: 0;\\n  padding: 0;\\n  transform: translateY(1rem);\\n  color: hsl(0deg, 87%, 67%);\\n  text-transform: capitalize;\\n  font-style: italic;\\n}\\nmain section.two .inputContainer .inputContents .warning.active {\\n  visibility: visible;\\n}\\nmain section.two .inputResultContainer {\\n  width: 100%;\\n  transform: translateY(-7rem);\\n}\\nmain section.two .inputResultContainer ul.inputUl {\\n  text-decoration: none;\\n  list-style: none;\\n  background-color: white;\\n  -webkit-box-shadow: 0px 3px 5px 5px rgba(0, 0, 0, 0.05);\\n  box-shadow: 0px 3px 5px 5px rgba(0, 0, 0, 0.05);\\n  padding: 1rem;\\n  border-radius: 0.75rem;\\n}\\nmain section.two .inputResultContainer ul.inputUl li.inputLi {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  justify-content: space-between;\\n  text-decoration: none;\\n  list-style: none;\\n}\\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents .result {\\n  color: hsl(180deg, 66%, 49%);\\n}\\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents button.btnResult {\\n  background-color: hsl(180deg, 66%, 49%);\\n  border: none;\\n  color: white;\\n  text-transform: capitalize;\\n  font-size: 15px;\\n  font-family: poppins;\\n  font-weight: 500;\\n  padding: 0.75rem 1.5rem;\\n  border-radius: 2rem;\\n  cursor: pointer;\\n  border-radius: 0.5rem;\\n  margin: 0 0 0 1rem;\\n}\\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents button.btnResult.active {\\n  background-color: hsl(180deg, 66%, 49%);\\n  border: none;\\n  color: white;\\n  text-transform: capitalize;\\n  font-size: 15px;\\n  font-family: poppins;\\n  font-weight: 500;\\n  padding: 0.75rem 1.5rem;\\n  border-radius: 2rem;\\n  cursor: pointer;\\n  background-color: hsl(255deg, 11%, 22%);\\n  color: white;\\n  border-radius: 0.5rem;\\n}\\nmain section.three {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  padding: 8rem;\\n  background-color: #eff1f7;\\n  height: 75vh;\\n}\\nmain section.three .subheading {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  text-align: center;\\n  align-items: center;\\n  width: 30rem;\\n  margin: 0 0 15rem 0;\\n}\\nmain section.three .subheading h2 {\\n  font-family: poppins;\\n  font-size: 75px;\\n  font-weight: 700;\\n  line-height: 1.2;\\n  margin: 0;\\n  padding: 0;\\n  text-transform: capitalize;\\n  font-size: 40px;\\n  color: hsl(257deg, 27%, 26%);\\n  margin: 0 0 2rem 0;\\n}\\nmain section.three .subheading p {\\n  font-family: poppins;\\n  font-size: 15px;\\n  font-weight: 500;\\n  color: hsl(0deg, 0%, 75%);\\n  margin: 0;\\n  padding: 0;\\n  font-weight: 500;\\n}\\nmain section.three .boxes {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-template-rows: 1fr;\\n  grid-gap: 2%;\\n  position: relative;\\n  z-index: 1;\\n  margin: 0 0 10rem 0;\\n}\\nmain section.three .boxes .brandRecognition {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: flex-start;\\n  flex-direction: column;\\n  background-color: white;\\n  padding: 5rem 2rem;\\n  border-radius: 0.5rem;\\n  transform: translateY(-9rem);\\n}\\nmain section.three .boxes .brandRecognition .iconOneBackCircle {\\n  background-color: hsl(257deg, 27%, 26%);\\n  border-radius: 4rem;\\n  width: 75px;\\n  height: 75px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n  top: -7.4rem;\\n}\\nmain section.three .boxes .brandRecognition h3 {\\n  font-family: poppins;\\n  font-size: 75px;\\n  font-weight: 700;\\n  line-height: 1.2;\\n  margin: 0;\\n  padding: 0;\\n  text-transform: capitalize;\\n  font-size: 25px;\\n  color: hsl(257deg, 27%, 26%);\\n  margin: -3rem 0 1rem 0;\\n}\\nmain section.three .boxes .brandRecognition p {\\n  font-family: poppins;\\n  font-size: 15px;\\n  font-weight: 500;\\n  color: hsl(0deg, 0%, 75%);\\n  margin: 0;\\n  padding: 0;\\n}\\nmain section.three .boxes .detailedRecords {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: flex-start;\\n  flex-direction: column;\\n  background-color: white;\\n  padding: 5rem 2rem;\\n  border-radius: 0.5rem;\\n  transform: translateY(-6rem);\\n}\\nmain section.three .boxes .detailedRecords .iconTwoBackCircle {\\n  background-color: hsl(257deg, 27%, 26%);\\n  border-radius: 4rem;\\n  width: 75px;\\n  height: 75px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n  top: -7.4rem;\\n}\\nmain section.three .boxes .detailedRecords h3 {\\n  font-family: poppins;\\n  font-size: 75px;\\n  font-weight: 700;\\n  line-height: 1.2;\\n  margin: 0;\\n  padding: 0;\\n  text-transform: capitalize;\\n  font-size: 25px;\\n  color: hsl(257deg, 27%, 26%);\\n  margin: -3rem 0 1rem 0;\\n}\\nmain section.three .boxes .detailedRecords p {\\n  font-family: poppins;\\n  font-size: 15px;\\n  font-weight: 500;\\n  color: hsl(0deg, 0%, 75%);\\n  margin: 0;\\n  padding: 0;\\n}\\nmain section.three .boxes .fullyCustomizable {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: flex-start;\\n  flex-direction: column;\\n  background-color: white;\\n  padding: 5rem 2rem;\\n  border-radius: 0.5rem;\\n  transform: translateY(-3rem);\\n}\\nmain section.three .boxes .fullyCustomizable .iconThreeBackCircle {\\n  background-color: hsl(257deg, 27%, 26%);\\n  border-radius: 4rem;\\n  width: 75px;\\n  height: 75px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n  top: -7.4rem;\\n}\\nmain section.three .boxes .fullyCustomizable h3 {\\n  font-family: poppins;\\n  font-size: 75px;\\n  font-weight: 700;\\n  line-height: 1.2;\\n  margin: 0;\\n  padding: 0;\\n  text-transform: capitalize;\\n  font-size: 25px;\\n  color: hsl(257deg, 27%, 26%);\\n  margin: -3rem 0 1rem 0;\\n}\\nmain section.three .boxes .fullyCustomizable p {\\n  font-family: poppins;\\n  font-size: 15px;\\n  font-weight: 500;\\n  color: hsl(0deg, 0%, 75%);\\n  margin: 0;\\n  padding: 0;\\n}\\nmain section.three::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: calc(100vw - 18rem);\\n  height: 10px;\\n  background-color: hsl(180deg, 66%, 49%);\\n  z-index: 0;\\n}\\nmain section.four {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  width: 100vw;\\n  height: 15rem;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-color: hsl(257deg, 27%, 26%);\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\nmain section.four h2 {\\n  font-family: poppins;\\n  font-size: 75px;\\n  font-weight: 700;\\n  line-height: 1.2;\\n  margin: 0;\\n  padding: 0;\\n  text-transform: capitalize;\\n  font-size: 40px;\\n  color: hsl(257deg, 27%, 26%);\\n  color: white;\\n  margin: 0 0 2rem 0;\\n}\\nmain section.four button.getStarted {\\n  background-color: hsl(180deg, 66%, 49%);\\n  border: none;\\n  color: white;\\n  text-transform: capitalize;\\n  font-size: 15px;\\n  font-family: poppins;\\n  font-weight: 500;\\n  padding: 0.75rem 1.5rem;\\n  border-radius: 2rem;\\n  cursor: pointer;\\n}\\n\\nfooter {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  flex-direction: row;\\n  background-color: rgb(0, 0, 0);\\n  height: 15rem;\\n  padding: 0 8rem;\\n  padding-top: 3rem;\\n}\\nfooter img.footerLogo {\\n  transform: translateY(0.5rem);\\n}\\nfooter .footerContents {\\n  display: flex;\\n  align-items: flex-start;\\n  flex-direction: row;\\n  justify-content: center;\\n  position: relative;\\n  top: 0;\\n}\\nfooter .footerContents .footerList {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-template-rows: 1fr;\\n  padding: 0;\\n  margin: 0;\\n  position: relative;\\n  top: 0;\\n}\\nfooter .footerContents .footerList ul.one {\\n  list-style: none;\\n  text-decoration: none;\\n  font-size: 15px;\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\nfooter .footerContents .footerList ul.one li.header {\\n  list-style: none;\\n  text-decoration: none;\\n  color: white;\\n  text-transform: capitalize;\\n  font-weight: 700;\\n  margin: 0 0 0.5rem 0;\\n}\\nfooter .footerContents .footerList ul.one li {\\n  padding: 0.25rem 0;\\n}\\nfooter .footerContents .footerList ul.one li a {\\n  color: hsl(0deg, 0%, 75%);\\n  text-transform: capitalize;\\n  text-decoration: none;\\n  font-weight: 500;\\n}\\nfooter .footerContents .footerList ul.two {\\n  list-style: none;\\n  text-decoration: none;\\n  font-size: 15px;\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\nfooter .footerContents .footerList ul.two li.header {\\n  list-style: none;\\n  text-decoration: none;\\n  color: white;\\n  text-transform: capitalize;\\n  font-weight: 700;\\n  margin: 0 0 0.5rem 0;\\n}\\nfooter .footerContents .footerList ul.two li {\\n  padding: 0.25rem 0;\\n}\\nfooter .footerContents .footerList ul.two li a {\\n  color: hsl(0deg, 0%, 75%);\\n  text-transform: capitalize;\\n  text-decoration: none;\\n  font-weight: 500;\\n}\\nfooter .footerContents .footerList ul.three {\\n  list-style: none;\\n  text-decoration: none;\\n  font-size: 15px;\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\nfooter .footerContents .footerList ul.three li.header {\\n  list-style: none;\\n  text-decoration: none;\\n  color: white;\\n  text-transform: capitalize;\\n  font-weight: 700;\\n  margin: 0 0 0.5rem 0;\\n}\\nfooter .footerContents .footerList ul.three li {\\n  padding: 0.25rem 0;\\n}\\nfooter .footerContents .footerList ul.three li a {\\n  color: hsl(0deg, 0%, 75%);\\n  text-transform: capitalize;\\n  text-decoration: none;\\n  font-weight: 500;\\n}\\nfooter .footerContents .socials {\\n  transform: translateY(0.5rem);\\n}\\nfooter .footerContents .socials img {\\n  padding: 0 0.5rem;\\n  cursor: pointer;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  header {\\n    padding: 2rem 5rem;\\n  }\\n  main section.one {\\n    padding: 2rem 5rem;\\n  }\\n  main section.two {\\n    padding: 2rem 5rem;\\n  }\\n}\\n@media only screen and (max-width: 750px) {\\n  header {\\n    padding: 1rem 2rem;\\n  }\\n  header .boxOne ul.list {\\n    display: none;\\n  }\\n  header .boxTwo button {\\n    display: none;\\n  }\\n  header .hamburgerTrigger {\\n    display: initial;\\n    position: absolute;\\n    top: 2rem;\\n    right: 2rem;\\n    content: \\\"\\\";\\n    width: 30px;\\n    height: 30px;\\n    background-color: transparent;\\n    cursor: pointer;\\n    z-index: 0;\\n  }\\n  header .hamburgerTrigger .hamburger {\\n    position: absolute;\\n    display: initial;\\n    content: \\\"\\\";\\n    top: 1rem;\\n    width: 30px;\\n    height: 3px;\\n    background-color: hsl(0deg, 0%, 75%);\\n    z-index: 1;\\n  }\\n  header .hamburgerTrigger .hamburger::after {\\n    position: absolute;\\n    display: initial;\\n    content: \\\"\\\";\\n    top: 1rem;\\n    width: 30px;\\n    height: 3px;\\n    background-color: hsl(0deg, 0%, 75%);\\n    z-index: 1;\\n    transform: translateY(-0.5rem);\\n  }\\n  header .hamburgerTrigger .hamburger::before {\\n    position: absolute;\\n    display: initial;\\n    content: \\\"\\\";\\n    top: 1rem;\\n    width: 30px;\\n    height: 3px;\\n    background-color: hsl(0deg, 0%, 75%);\\n    z-index: 1;\\n    transform: translateY(-1.5rem);\\n  }\\n  main section.one {\\n    display: flex;\\n    flex-direction: column-reverse;\\n    height: 60rem;\\n    padding: 0 2rem;\\n  }\\n  main section.one .contentsContainer {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    text-align: center;\\n    width: auto;\\n  }\\n  main section.one .contentsContainer h1 {\\n    font-family: poppins;\\n    font-size: 75px;\\n    font-weight: 700;\\n    line-height: 1.2;\\n    margin: 0;\\n    padding: 0;\\n    font-size: 55px;\\n  }\\n  main section.one .contentsContainer p {\\n    font-family: poppins;\\n    font-size: 18px;\\n    font-weight: 500;\\n    color: hsl(257deg, 7%, 63%);\\n    margin: 0;\\n    padding: 0;\\n    z-index: -1;\\n    font-size: 15px;\\n    padding: 1rem 0;\\n  }\\n  main section.one .contentsContainer button.getStarted {\\n    margin: 0 0 2rem 0;\\n  }\\n  main section.one img.illustration {\\n    left: 3rem;\\n  }\\n  main section.two {\\n    padding: 0 2rem;\\n    padding-top: 2rem;\\n  }\\n  main section.two .inputContainer .inputContents {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    margin: 1rem;\\n  }\\n  main section.two .inputContainer .inputContents input.textBox {\\n    margin: 0;\\n  }\\n  main section.two .inputContainer .inputContents input.textBox.active {\\n    margin: 0;\\n  }\\n  main section.two .inputContainer .inputContents button.shortenIt {\\n    margin: 1rem 0 0 0;\\n  }\\n  main section.two .inputContainer .inputContents p.warningMessage {\\n    transform: translateY(0.5rem);\\n  }\\n  main section.two .inputResultContainer {\\n    margin: 0 0 4rem 0;\\n  }\\n  main section.three {\\n    padding: 8rem 2rem;\\n    height: 65rem;\\n  }\\n  main section.three .subheading {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    text-align: center;\\n    width: auto;\\n  }\\n  main section.three .subheading h2 {\\n    font-family: poppins;\\n    font-size: 75px;\\n    font-weight: 700;\\n    line-height: 1.2;\\n    margin: 0;\\n    padding: 0;\\n    font-size: 45px;\\n  }\\n  main section.three .subheading p {\\n    font-family: poppins;\\n    font-size: 18px;\\n    font-weight: 500;\\n    color: hsl(257deg, 7%, 63%);\\n    margin: 0;\\n    padding: 0;\\n    z-index: -1;\\n    font-size: 15px;\\n    z-index: 0;\\n  }\\n  main section.three .boxes {\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr 1fr;\\n    height: auto;\\n    text-align: center;\\n    padding: 0 0 3rem 0;\\n  }\\n  main section.three .boxes .brandRecognition {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  main section.three .boxes .detailedRecords {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  main section.three .boxes .fullyCustomizable {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  main section.three::after {\\n    height: 1000px;\\n    width: 10px;\\n  }\\n  main section.four {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    text-align: center;\\n  }\\n  main section.four h2 {\\n    font-family: poppins;\\n    font-size: 75px;\\n    font-weight: 700;\\n    line-height: 1.2;\\n    margin: 0;\\n    padding: 0;\\n    font-size: 30px;\\n    margin-bottom: 1rem;\\n  }\\n  footer {\\n    height: auto;\\n    padding: 0 2rem;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n  }\\n  footer .footerLogo {\\n    padding: 5rem 0 3rem 0;\\n  }\\n  footer .footerContents {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n  }\\n  footer .footerContents .footerList {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 1fr 1fr 1fr;\\n    align-items: center;\\n    justify-content: center;\\n    text-align: center;\\n  }\\n  footer .footerContents .footerList ul {\\n    padding: 0;\\n    margin: 0;\\n  }\\n  footer .footerContents .socials {\\n    margin: 0;\\n    padding: 0;\\n    transform: translateY(-5rem);\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://url-shortening-api-master/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://url-shortening-api-master/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://url-shortening-api-master/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://url-shortening-api-master/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://url-shortening-api-master/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://url-shortening-api-master/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://url-shortening-api-master/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://url-shortening-api-master/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://url-shortening-api-master/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://url-shortening-api-master/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://url-shortening-api-master/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/bg-boost-desktop.svg":
/*!*****************************************!*\
  !*** ./src/assets/bg-boost-desktop.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"772154c9b0e451733f5e.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/bg-boost-desktop.svg?");

/***/ }),

/***/ "./src/assets/bg-boost-mobile.svg":
/*!****************************************!*\
  !*** ./src/assets/bg-boost-mobile.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4b04bd89ea775da3deff.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/bg-boost-mobile.svg?");

/***/ }),

/***/ "./src/assets/bg-shorten-desktop.svg":
/*!*******************************************!*\
  !*** ./src/assets/bg-shorten-desktop.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0d9742f433f4b0d8752b.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/bg-shorten-desktop.svg?");

/***/ }),

/***/ "./src/assets/bg-shorten-mobile.svg":
/*!******************************************!*\
  !*** ./src/assets/bg-shorten-mobile.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"41c34b33a14a3077e506.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/bg-shorten-mobile.svg?");

/***/ }),

/***/ "./src/assets/icon-brand-recognition.svg":
/*!***********************************************!*\
  !*** ./src/assets/icon-brand-recognition.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c349d3b69f7442e5ac35.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/icon-brand-recognition.svg?");

/***/ }),

/***/ "./src/assets/icon-detailed-records.svg":
/*!**********************************************!*\
  !*** ./src/assets/icon-detailed-records.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"265c8aea77b546e08ba3.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/icon-detailed-records.svg?");

/***/ }),

/***/ "./src/assets/icon-facebook.svg":
/*!**************************************!*\
  !*** ./src/assets/icon-facebook.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"229c75a01827343aef31.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/icon-facebook.svg?");

/***/ }),

/***/ "./src/assets/icon-fully-customizable.svg":
/*!************************************************!*\
  !*** ./src/assets/icon-fully-customizable.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a1532a74fa781f6fde32.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/icon-fully-customizable.svg?");

/***/ }),

/***/ "./src/assets/icon-instagram.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-instagram.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"df5873287e1c06a0fe74.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/icon-instagram.svg?");

/***/ }),

/***/ "./src/assets/icon-pinterest.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-pinterest.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a2d25ab4c70b78c4028f.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/icon-pinterest.svg?");

/***/ }),

/***/ "./src/assets/icon-twitter.svg":
/*!*************************************!*\
  !*** ./src/assets/icon-twitter.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1d5c6d5e6ab1717a500a.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/icon-twitter.svg?");

/***/ }),

/***/ "./src/assets/illustration-working.svg":
/*!*********************************************!*\
  !*** ./src/assets/illustration-working.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c9b5ef5452363d8be3df.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/illustration-working.svg?");

/***/ }),

/***/ "./src/assets/logo copy.svg":
/*!**********************************!*\
  !*** ./src/assets/logo copy.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0da929e690bef4b59420.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/logo_copy.svg?");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"834643034343520f3b4d.svg\";\n\n//# sourceURL=webpack://url-shortening-api-master/./src/assets/logo.svg?");

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
/******/ 			"bundle": 0
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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