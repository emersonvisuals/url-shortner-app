/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/***/ (() => {

var shortenItBtn = document.querySelector('button.shortenIt');
var inputResultWrapper = document.querySelector('.inputResultContainer');
shortenItBtn.addEventListener('click', function () {
  // api request
  var textInput = document.querySelector('input.textBox');

  function fetchRequest() {
    fetch("https://api.shrtco.de/v2/shorten?url=".concat(textInput.value)).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data.result.short_link); // defining structure for URl clicks

      var ul = inputResultWrapper.appendChild(document.createElement('ul'));
      ul.classList.add('inputUl');
      var li = ul.appendChild(document.createElement('li'));
      li.classList.add('inputLi');
      var pOne = li.appendChild(document.createElement('p'));
      pOne.classList.add('inputValue');
      pOne.innerText = "".concat(textInput.value);
      var div = li.appendChild(document.createElement('div'));
      div.classList.add('inputContents');
      var result = div.appendChild(document.createElement('p'));
      result.classList.add('result');
      result.innerText = "".concat(data.result.short_link);
      var btnResult = div.appendChild(document.createElement('button'));
      btnResult.classList.add('btnResult');
      btnResult.innerText = 'copy'; // clicked btn style functionality 

      var copyAllBtns = document.querySelectorAll('.btnResult');
      var finalOutcome = "".concat(data.result.short_link);
      copyAllBtns.forEach(function (item) {
        item.addEventListener('click', function () {
          console.log('clicked');
          item.innerHTML = 'Clicked!';
          item.classList.add('active');
          navigator.clipboard.writeText(finalOutcome);
        });
      });
      textInput.value = '';
    })["catch"](function (err) {
      textInput.value = '';
      console.log(err);
      console.error('failed to log link');
      var link = document.querySelector('input.textBox');
      var errorMessage = document.querySelector('.warning');
      var errorMessageP = document.querySelector('.warningMessage');
      var linkPlaceholder = document.querySelector('input.textBox::placeholder');
      errorMessageP.innerHTML = 'Please enter a valid link';
      link.classList.add('active');
      errorMessage.classList.add('active');
      linkPlaceholder.classList.add('active');
    });
  }

  fetchRequest();
});

/***/ }),

/***/ "./src/noLink.js":
/*!***********************!*\
  !*** ./src/noLink.js ***!
  \***********************/
/***/ (() => {

var link = document.querySelector('input.textBox');
var errorMessage = document.querySelector('.warning');
var btn = document.querySelector('button.shortenIt');
btn.addEventListener('click', function () {
  console.log('test');
  var linkPlaceholder = document.querySelector('input.textBox::placeholder');

  if (link.value === '') {
    link.classList.add('active');
    errorMessage.classList.add('active');
    linkPlaceholder.classList.add('active');
  } else {
    link.classList.remove('active');
    errorMessage.classList.remove('active');
    linkPlaceholder.classList.remove('active');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../dist/bg-boost-desktop.svg */ "./dist/bg-boost-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/bg-boost-desktop.svg */ "./src/assets/bg-boost-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: poppins;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n}\n\nheader {\n  height: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 8rem;\n}\nheader .boxOne {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader .boxOne ul.list {\n  display: flex;\n}\nheader .boxOne ul.list li {\n  padding: 0 1rem;\n  list-style: none;\n}\nheader .boxOne ul.list li a {\n  text-decoration: none;\n  color: hsl(257deg, 7%, 63%);\n  text-transform: capitalize;\n}\nheader .boxOne ul.list li a:hover {\n  transition: 0.25s all;\n  color: hsl(257deg, 27%, 26%);\n}\nheader .boxTwo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader .boxTwo button.login {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  background-color: transparent;\n  color: hsl(257deg, 7%, 63%);\n  padding: 0 2rem;\n}\nheader .boxTwo button.login:hover {\n  transition: 0.25s all;\n  color: hsl(257deg, 27%, 26%);\n}\nheader .boxTwo button.signUp {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\nmain section.one {\n  height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem 8rem;\n}\nmain section.one .contentsContainer {\n  width: 35rem;\n  transform: translateY(-5rem);\n}\nmain section.one .contentsContainer h1 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n}\nmain section.one .contentsContainer p {\n  font-family: poppins;\n  font-size: 18px;\n  font-weight: 500;\n  color: hsl(257deg, 7%, 63%);\n  margin: 0;\n  padding: 0;\n  z-index: -1;\n}\nmain section.one .contentsContainer button.getStarted {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  margin: 2rem 0 0 0;\n}\nmain section.one img.illustration {\n  position: absolute;\n  top: 10rem;\n  left: 60vw;\n}\nmain section.two {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #eff1f7;\n  padding: 2rem 8rem;\n}\nmain section.two .inputContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: hsl(257deg, 27%, 26%);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  width: 100%;\n  padding: 2rem 0 0 0;\n  border-radius: 0.5rem;\n  transform: translateY(-7rem);\n}\nmain section.two .inputContainer .inputContents {\n  display: grid;\n  grid-template-columns: 80% 20%;\n  grid-template-rows: 1fr;\n  margin: 2rem;\n  width: 100%;\n}\nmain section.two .inputContainer .inputContents input.textBox {\n  padding: 0.75rem 0 0.75rem 1rem;\n  font-family: poppins;\n  font-size: 15px;\n  border-radius: 0.5rem;\n  margin: 0 1rem 0 0;\n}\nmain section.two .inputContainer .inputContents input.textBox.active::placeholder {\n  color: red;\n}\nmain section.two .inputContainer .inputContents input.textBox.active {\n  padding: 0.75rem 0 0.75rem 1rem;\n  font-family: poppins;\n  font-size: 15px;\n  border-radius: 0.5rem;\n  color: hsl(0deg, 87%, 67%);\n  margin: 0 1rem 0 0;\n  border: 3px solid hsl(0deg, 87%, 67%);\n}\nmain section.two .inputContainer .inputContents button.shortenIt {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n}\nmain section.two .inputContainer .inputContents .warning {\n  visibility: hidden;\n}\nmain section.two .inputContainer .inputContents .warning p {\n  margin: 0;\n  padding: 0;\n  transform: translateY(1rem);\n  color: hsl(0deg, 87%, 67%);\n  text-transform: capitalize;\n  font-style: italic;\n}\nmain section.two .inputContainer .inputContents .warning.active {\n  visibility: visible;\n}\nmain section.two .inputResultContainer {\n  width: 100%;\n  transform: translateY(-7rem);\n}\nmain section.two .inputResultContainer ul.inputUl {\n  text-decoration: none;\n  list-style: none;\n  background-color: white;\n  -webkit-box-shadow: 0px 3px 5px 5px rgba(0, 0, 0, 0.05);\n  box-shadow: 0px 3px 5px 5px rgba(0, 0, 0, 0.05);\n  padding: 1rem;\n  border-radius: 0.75rem;\n}\nmain section.two .inputResultContainer ul.inputUl li.inputLi {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: space-between;\n  text-decoration: none;\n  list-style: none;\n}\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents .result {\n  color: hsl(180deg, 66%, 49%);\n}\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents button.btnResult {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  margin: 0 0 0 1rem;\n}\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents button.btnResult.active {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  background-color: hsl(255deg, 11%, 22%);\n  color: white;\n  border-radius: 0.5rem;\n}\nmain section.three {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 8rem;\n  background-color: #eff1f7;\n  height: 75vh;\n}\nmain section.three .subheading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  width: 30rem;\n  margin: 0 0 15rem 0;\n}\nmain section.three .subheading h2 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 40px;\n  color: hsl(257deg, 27%, 26%);\n  margin: 0 0 2rem 0;\n}\nmain section.three .subheading p {\n  font-family: poppins;\n  font-size: 15px;\n  font-weight: 500;\n  color: hsl(0deg, 0%, 75%);\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n}\nmain section.three .boxes {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-gap: 2%;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 10rem 0;\n}\nmain section.three .boxes .brandRecognition {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  background-color: white;\n  padding: 5rem 2rem;\n  border-radius: 0.5rem;\n  transform: translateY(-9rem);\n}\nmain section.three .boxes .brandRecognition .iconOneBackCircle {\n  background-color: hsl(257deg, 27%, 26%);\n  border-radius: 4rem;\n  width: 75px;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -7.4rem;\n}\nmain section.three .boxes .brandRecognition h3 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 25px;\n  color: hsl(257deg, 27%, 26%);\n  margin: -3rem 0 1rem 0;\n}\nmain section.three .boxes .brandRecognition p {\n  font-family: poppins;\n  font-size: 15px;\n  font-weight: 500;\n  color: hsl(0deg, 0%, 75%);\n  margin: 0;\n  padding: 0;\n}\nmain section.three .boxes .detailedRecords {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  background-color: white;\n  padding: 5rem 2rem;\n  border-radius: 0.5rem;\n  transform: translateY(-6rem);\n}\nmain section.three .boxes .detailedRecords .iconTwoBackCircle {\n  background-color: hsl(257deg, 27%, 26%);\n  border-radius: 4rem;\n  width: 75px;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -7.4rem;\n}\nmain section.three .boxes .detailedRecords h3 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 25px;\n  color: hsl(257deg, 27%, 26%);\n  margin: -3rem 0 1rem 0;\n}\nmain section.three .boxes .detailedRecords p {\n  font-family: poppins;\n  font-size: 15px;\n  font-weight: 500;\n  color: hsl(0deg, 0%, 75%);\n  margin: 0;\n  padding: 0;\n}\nmain section.three .boxes .fullyCustomizable {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  background-color: white;\n  padding: 5rem 2rem;\n  border-radius: 0.5rem;\n  transform: translateY(-3rem);\n}\nmain section.three .boxes .fullyCustomizable .iconThreeBackCircle {\n  background-color: hsl(257deg, 27%, 26%);\n  border-radius: 4rem;\n  width: 75px;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -7.4rem;\n}\nmain section.three .boxes .fullyCustomizable h3 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 25px;\n  color: hsl(257deg, 27%, 26%);\n  margin: -3rem 0 1rem 0;\n}\nmain section.three .boxes .fullyCustomizable p {\n  font-family: poppins;\n  font-size: 15px;\n  font-weight: 500;\n  color: hsl(0deg, 0%, 75%);\n  margin: 0;\n  padding: 0;\n}\nmain section.three::after {\n  content: \"\";\n  position: absolute;\n  width: calc(100vw - 16rem);\n  height: 10px;\n  background-color: hsl(180deg, 66%, 49%);\n  z-index: 0;\n}\nmain section.four {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100vw;\n  height: 15rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-color: hsl(257deg, 27%, 26%);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\nmain section.four h2 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 40px;\n  color: hsl(257deg, 27%, 26%);\n  color: white;\n  margin: 0 0 2rem 0;\n}\nmain section.four button.getStarted {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/__variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"./_variables\";\r\n\r\nbody {\r\n    font-family: $fontFamily;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n    height: 10vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: $desktopHeaderPadding;\r\n\r\n    .boxOne {\r\n        @include flexOne;\r\n\r\n        ul.list {\r\n            display: flex;\r\n\r\n            li {\r\n                padding: 0 1rem;\r\n                list-style: none;\r\n\r\n                a {\r\n                    text-decoration: none;\r\n                    color: $grayishViolet;\r\n                    text-transform: capitalize;\r\n                }\r\n\r\n                a:hover {\r\n                    @include hover;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .boxTwo {\r\n        @include flexOne;\r\n\r\n        button.login {\r\n            @include button;\r\n            background-color: transparent;\r\n            color: $grayishViolet;\r\n            padding: 0 2rem;\r\n        }\r\n\r\n        button.login:hover {\r\n            @include hover;\r\n        }\r\n\r\n        button.signUp {\r\n            @include button\r\n        }\r\n    }\r\n}\r\n\r\nmain {\r\n\r\n    section.one {\r\n        height: 80vh;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: flex-start;\r\n        padding: $desktopHeaderPadding;\r\n\r\n        .contentsContainer {\r\n            width: 35rem;\r\n            transform: translateY(-5rem);\r\n\r\n            h1 {\r\n                @include primaryHeading;\r\n            }\r\n\r\n            p {\r\n                @include paragraph;\r\n            }\r\n\r\n            button.getStarted {\r\n                @include button;\r\n                margin: 2rem 0 0 0;\r\n            }\r\n        }\r\n\r\n        img.illustration {\r\n            position: absolute;\r\n            top:10rem;\r\n            left: 60vw;\r\n        }\r\n    \r\n    }\r\n\r\n    section.two {\r\n        @include flexOne;\r\n        flex-direction: column;\r\n        background-color: $veryGray;\r\n        padding: $desktopHeaderPadding;\r\n\r\n        .inputContainer {\r\n            @include inputBackdrop;\r\n            transform: translateY(-7rem);\r\n\r\n            .inputContents {\r\n                display: grid;\r\n                grid-template-columns: 80% 20%;\r\n                grid-template-rows: 1fr;\r\n                margin: 2rem;\r\n                width: 100%;\r\n\r\n                input.textBox {\r\n                    @include inputTextbox;\r\n                }\r\n\r\n                input.textBox.active::placeholder {\r\n                    color: red;\r\n                }\r\n\r\n                input.textBox.active {\r\n                    @include inputTextboxActive;\r\n                }\r\n    \r\n                button.shortenIt {\r\n                    @include buttonTwo;\r\n                }\r\n\r\n                .warning {\r\n                    visibility: hidden;\r\n\r\n                    p {\r\n                        margin: 0;\r\n                        padding: 0;\r\n                        transform: translateY(1rem);\r\n                        color: $red;\r\n                        text-transform: capitalize;\r\n                        font-style: italic;\r\n                    }\r\n                }\r\n\r\n                .warning.active {\r\n                    visibility: visible;\r\n                }\r\n\r\n            }\r\n        }\r\n\r\n        .inputResultContainer {\r\n            width: 100%;\r\n            transform: translateY(-7rem);\r\n\r\n            ul.inputUl {\r\n                @include inputWrapper;\r\n\r\n                li.inputLi {\r\n                    @include flexOne;\r\n                    justify-content: space-between;\r\n                    text-decoration: none;\r\n                    list-style: none;\r\n\r\n                    .inputContents {\r\n                        @include flexOne;\r\n\r\n                        .result {\r\n                            color: $cyan;\r\n                        }\r\n\r\n                        button.btnResult {\r\n                            @include buttonTwo;\r\n                            margin: 0 0 0 1rem;\r\n                        }\r\n\r\n                        button.btnResult.active {\r\n                            @include buttonThree;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    section.three {\r\n        @include flexOne;\r\n        flex-direction: column;\r\n        padding: 8rem;\r\n        background-color: $veryGray;\r\n        height: 75vh;\r\n\r\n        .subheading {\r\n            @include flexOne;\r\n            flex-direction: column;\r\n            text-align: center;\r\n            align-items: center;\r\n            width: 30rem;\r\n            margin: 0 0 15rem 0;\r\n\r\n            h2 {\r\n                @include secondaryHeading;\r\n                margin: 0 0 2rem 0;\r\n            }\r\n\r\n            p {\r\n                @include paragraphTwo;\r\n                font-weight: 500;\r\n            }\r\n        }\r\n\r\n        .boxes {\r\n            display: grid;\r\n            grid-template-columns: 1fr 1fr 1fr;\r\n            grid-template-rows: 1fr;\r\n            grid-gap: 2%;\r\n            position: relative;\r\n            z-index: 1;\r\n            margin: 0 0 10rem 0;\r\n\r\n            .brandRecognition {\r\n                @include parentDiv;\r\n                transform: translateY(-9rem);\r\n\r\n                .iconOneBackCircle {\r\n                    @include iconBackground;\r\n                }\r\n\r\n                h3 {\r\n                    @include iconHeader;\r\n                }\r\n\r\n                p {\r\n                    @include iconParagraph;\r\n                }\r\n            }\r\n\r\n            .detailedRecords {\r\n                @include parentDiv;\r\n                transform: translateY(-6rem);\r\n\r\n                .iconTwoBackCircle {\r\n                    @include iconBackground;\r\n                }\r\n\r\n                h3 {\r\n                    @include iconHeader;\r\n                }\r\n\r\n                p {\r\n                    @include iconParagraph;\r\n                }\r\n            }\r\n            \r\n            .fullyCustomizable {\r\n                @include parentDiv;\r\n                transform: translateY(-3rem);\r\n\r\n                .iconThreeBackCircle {\r\n                    @include iconBackground;\r\n                }\r\n\r\n                h3 {\r\n                    @include iconHeader;\r\n                }\r\n\r\n                p {\r\n                    @include iconParagraph;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    section.three::after {\r\n        content: '';\r\n        position: absolute;\r\n        width: calc(100vw - 16rem);\r\n        height: 10px;\r\n        background-color: $cyan;\r\n        z-index: 0;\r\n    }\r\n\r\n    section.four {\r\n        @include flexOne;\r\n        flex-direction: column;\r\n        width: 100vw;\r\n        height: 15rem;\r\n        background-image: url('/src/assets/bg-boost-desktop.svg');\r\n        background-color: $darkViolet;\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n\r\n        h2 {\r\n            @include secondaryHeading;\r\n            color: $white;\r\n            margin: 0 0 2rem 0;\r\n        }\r\n\r\n        button.getStarted {\r\n            @include button;\r\n        }\r\n    }\r\n}","$cyan: hsl(180, 66%, 49%);\r\n$darkViolet: hsl(257, 27%, 26%);\r\n$red: hsl(0, 87%, 67%);\r\n$gray: hsl(0, 0%, 75%);\r\n$veryGray: #eff1f7;\r\n$grayishViolet: hsl(257, 7%, 63%);\r\n$veryDarkBlue: hsl(255, 11%, 22%);\r\n$veryDarkViolet: hsl(260, 8%, 14%);\r\n$white: #ffff;\r\n\r\n$fontSize: 18px; \r\n$fontSizeTwo: 11px;\r\n$fontSizeThree: 15px;\r\n$fontSizePrimaryHeading: 75px;\r\n$fontSizeSecondaryHeading: 40px;\r\n$fontSizeThirdHeading: 25px;\r\n$fontFamily: poppins; \r\n\r\n$desktopSidePadding: 0 8rem;\r\n$desktopHeaderPadding: 2rem 8rem;\r\n\r\n@mixin button {\r\n    background-color: $cyan;\r\n    border: none;\r\n    color: $white;\r\n    text-transform: capitalize;\r\n    font-size: $fontSizeThree;\r\n    font-family: $fontFamily;\r\n    font-weight: 500;\r\n    padding: 0.75rem 1.5rem;\r\n    border-radius: 2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n@mixin buttonTwo {\r\n    @include button;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@mixin buttonThree {\r\n    @include button;\r\n    background-color: $veryDarkBlue;\r\n    color: $white;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@mixin flexOne {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@mixin primaryHeading {\r\n    font-family: $fontFamily;\r\n    font-size: $fontSizePrimaryHeading;\r\n    font-weight: 700;\r\n    line-height: 1.2;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n@mixin secondaryHeading {\r\n    @include primaryHeading;\r\n    text-transform: capitalize;\r\n    font-size: $fontSizeSecondaryHeading;\r\n    color: $darkViolet;\r\n}\r\n\r\n@mixin thirdHeading {\r\n    @include primaryHeading;\r\n    text-transform: capitalize;\r\n    font-size: $fontSizeThirdHeading;\r\n    color: $darkViolet;\r\n}\r\n\r\n@mixin paragraph {\r\n    font-family: $fontFamily;\r\n    font-size: $fontSize;\r\n    font-weight: 500;\r\n    color: $grayishViolet;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: -1;\r\n}\r\n\r\n@mixin paragraphTwo {\r\n    font-family: $fontFamily;\r\n    font-size: $fontSizeThree;\r\n    font-weight: 500;\r\n    color: $gray;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n@mixin paragraphThree {\r\n    font-family: $fontFamily;\r\n    font-size: $fontSizeThree;\r\n    font-weight: 500;\r\n    color: $gray;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n@mixin inputBackdrop {\r\n    @include flexOne;\r\n    background-color: $darkViolet;\r\n    background-image: url('/dist/bg-boost-desktop.svg');\r\n    background-size: cover;\r\n    width: 100%;\r\n    padding: 2rem 0 0 0;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@mixin inputTextbox {\r\n    padding: 0.75rem 0 0.75rem 1rem;\r\n    font-family: $fontFamily;\r\n    font-size: $fontSizeThree;\r\n    border-radius: 0.5rem;\r\n    margin: 0 1rem 0 0;\r\n}\r\n\r\n@mixin inputTextboxActive {\r\n    padding: 0.75rem 0 0.75rem 1rem;\r\n    font-family: $fontFamily;\r\n    font-size: $fontSizeThree;\r\n    border-radius: 0.5rem;\r\n    color: $red;\r\n    margin: 0 1rem 0 0;\r\n    border: 3px solid $red;\r\n}\r\n\r\n@mixin hover {\r\n    transition: 0.25s all;\r\n    color: $darkViolet;\r\n}\r\n\r\n@mixin boxShadow {\r\n    -webkit-box-shadow: 0px 3px 5px 5px rgba(0,0,0,0.05); \r\n    box-shadow: 0px 3px 5px 5px rgba(0,0,0,0.05);\r\n}\r\n\r\n@mixin inputWrapper {\r\n    text-decoration: none;\r\n    list-style: none;\r\n    background-color: $white;\r\n    @include  boxShadow;\r\n    padding: 1rem;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\n\r\n\r\n\r\n// 3 icon containers\r\n@mixin parentDiv {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    background-color: $white;\r\n    padding: 5rem 2rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@mixin iconBackground {\r\n    background-color: $darkViolet;\r\n    border-radius: 4rem;\r\n    width: 75px;\r\n    height: 75px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    top: -7.4rem;\r\n}\r\n\r\n@mixin iconHeader {\r\n    @include thirdHeading;\r\n    margin: -3rem 0 1rem 0;\r\n}\r\n\r\n@mixin iconParagraph {\r\n    @include paragraphThree;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./dist/bg-boost-desktop.svg":
/*!***********************************!*\
  !*** ./dist/bg-boost-desktop.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bg-boost-desktop.svg";

/***/ }),

/***/ "./src/assets/bg-boost-desktop.svg":
/*!*****************************************!*\
  !*** ./src/assets/bg-boost-desktop.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bg-boost-desktop.svg";

/***/ }),

/***/ "./src/assets/bg-boost-mobile.svg":
/*!****************************************!*\
  !*** ./src/assets/bg-boost-mobile.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bg-boost-mobile.svg";

/***/ }),

/***/ "./src/assets/bg-shorten-desktop.svg":
/*!*******************************************!*\
  !*** ./src/assets/bg-shorten-desktop.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bg-shorten-desktop.svg";

/***/ }),

/***/ "./src/assets/bg-shorten-mobile.svg":
/*!******************************************!*\
  !*** ./src/assets/bg-shorten-mobile.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bg-shorten-mobile.svg";

/***/ }),

/***/ "./src/assets/icon-brand-recognition.svg":
/*!***********************************************!*\
  !*** ./src/assets/icon-brand-recognition.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-brand-recognition.svg";

/***/ }),

/***/ "./src/assets/icon-detailed-records.svg":
/*!**********************************************!*\
  !*** ./src/assets/icon-detailed-records.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-detailed-records.svg";

/***/ }),

/***/ "./src/assets/icon-facebook.svg":
/*!**************************************!*\
  !*** ./src/assets/icon-facebook.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-facebook.svg";

/***/ }),

/***/ "./src/assets/icon-fully-customizable.svg":
/*!************************************************!*\
  !*** ./src/assets/icon-fully-customizable.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-fully-customizable.svg";

/***/ }),

/***/ "./src/assets/icon-instagram.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-instagram.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-instagram.svg";

/***/ }),

/***/ "./src/assets/icon-pinterest.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-pinterest.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-pinterest.svg";

/***/ }),

/***/ "./src/assets/icon-twitter.svg":
/*!*************************************!*\
  !*** ./src/assets/icon-twitter.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-twitter.svg";

/***/ }),

/***/ "./src/assets/illustration-working.svg":
/*!*********************************************!*\
  !*** ./src/assets/illustration-working.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "illustration-working.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "logo.svg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.js */ "./src/input.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _noLink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noLink.js */ "./src/noLink.js");
/* harmony import */ var _noLink_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_noLink_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_bg_boost_desktop_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/bg-boost-desktop.svg */ "./src/assets/bg-boost-desktop.svg");
/* harmony import */ var _assets_bg_boost_mobile_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/bg-boost-mobile.svg */ "./src/assets/bg-boost-mobile.svg");
/* harmony import */ var _assets_bg_shorten_desktop_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/bg-shorten-desktop.svg */ "./src/assets/bg-shorten-desktop.svg");
/* harmony import */ var _assets_bg_shorten_mobile_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/bg-shorten-mobile.svg */ "./src/assets/bg-shorten-mobile.svg");
/* harmony import */ var _assets_icon_brand_recognition_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icon-brand-recognition.svg */ "./src/assets/icon-brand-recognition.svg");
/* harmony import */ var _assets_icon_detailed_records_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icon-detailed-records.svg */ "./src/assets/icon-detailed-records.svg");
/* harmony import */ var _assets_icon_fully_customizable_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/icon-fully-customizable.svg */ "./src/assets/icon-fully-customizable.svg");
/* harmony import */ var _assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/icon-facebook.svg */ "./src/assets/icon-facebook.svg");
/* harmony import */ var _assets_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/icon-instagram.svg */ "./src/assets/icon-instagram.svg");
/* harmony import */ var _assets_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/icon-pinterest.svg */ "./src/assets/icon-pinterest.svg");
/* harmony import */ var _assets_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/icon-twitter.svg */ "./src/assets/icon-twitter.svg");
/* harmony import */ var _assets_illustration_working_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/illustration-working.svg */ "./src/assets/illustration-working.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");








var brandRecognitionSrc = document.querySelector('.iconOne');
brandRecognitionSrc.src = _assets_icon_brand_recognition_svg__WEBPACK_IMPORTED_MODULE_7__;

var detailedRecordsSrc = document.querySelector('.iconTwo');
detailedRecordsSrc.src = _assets_icon_detailed_records_svg__WEBPACK_IMPORTED_MODULE_8__;

var fullyCustomizableSrc = document.querySelector('.iconThree');
fullyCustomizableSrc.src = _assets_icon_fully_customizable_svg__WEBPACK_IMPORTED_MODULE_9__;

var facebookSrc = document.querySelector('.facebook');
facebookSrc.src = _assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_10__;

var instagramSrc = document.querySelector('.instagram');
instagramSrc.src = _assets_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_11__;

var pinterestSrc = document.querySelector('.pinterest');
pinterestSrc.src = _assets_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_12__;

var twitterSrc = document.querySelector('.twitter');
twitterSrc.src = _assets_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_13__;

var illustrationSrc = document.querySelector('.illustration');
illustrationSrc.src = _assets_illustration_working_svg__WEBPACK_IMPORTED_MODULE_14__;

var logoSrc = document.querySelector('.logo');
var logoFooterSrc = document.querySelector('.footerLogo');
logoSrc.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_15__;
logoFooterSrc.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_15__;
})();

/******/ })()
;
//# sourceMappingURL=bundle85729c6e2e7777f9ebf1.js.map