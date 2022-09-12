/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function input() {
  // button variables
  var inputResultWrapper = document.querySelector('.inputResultContainer'); // textbox & warning variables 

  var textInput = document.querySelector('input.textBox');
  var link = document.querySelector('input.textBox');
  var errorMessage = document.querySelector('.warning');
  var errorMessageP = document.querySelector('.warningMessage');

  if (link.value === '') {
    link.classList.add('active');
    errorMessage.classList.add('active');
  } else {
    link.classList.remove('active');
    errorMessage.classList.remove('active');
  } // api request


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
      errorMessageP.innerHTML = 'Please enter a valid link';
      link.classList.add('active');
      errorMessage.classList.add('active');
    });
  }

  fetchRequest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (input);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/bg-boost-desktop.svg */ "./src/assets/bg-boost-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  overflow-x: hidden;\n}\n\nbody {\n  font-family: poppins;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  width: 100%;\n}\n\nheader {\n  height: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 8rem;\n}\nheader .boxOne {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader .boxOne ul.list {\n  display: flex;\n}\nheader .boxOne ul.list li {\n  padding: 0 1rem;\n  list-style: none;\n}\nheader .boxOne ul.list li a {\n  text-decoration: none;\n  color: hsl(257deg, 7%, 63%);\n  text-transform: capitalize;\n}\nheader .boxOne ul.list li a:hover {\n  transition: 0.25s all;\n  color: hsl(257deg, 27%, 26%);\n}\nheader .boxTwo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader .boxTwo button.login {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  background-color: transparent;\n  color: hsl(257deg, 7%, 63%);\n  padding: 0 2rem;\n}\nheader .boxTwo button.login:hover {\n  transition: 0.25s all;\n  color: hsl(257deg, 27%, 26%);\n}\nheader .boxTwo button.signUp {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n}\nheader .hamburgerTrigger {\n  display: none;\n}\nheader .hamburgerTrigger .hamburger {\n  display: none;\n}\n\nmain section.one {\n  height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem 8rem;\n}\nmain section.one .contentsContainer {\n  width: 35rem;\n  transform: translateY(-5rem);\n  position: relative;\n  z-index: 1;\n}\nmain section.one .contentsContainer h1 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n}\nmain section.one .contentsContainer p {\n  font-family: poppins;\n  font-size: 18px;\n  font-weight: 500;\n  color: hsl(257deg, 7%, 63%);\n  margin: 0;\n  padding: 0;\n  z-index: -1;\n}\nmain section.one .contentsContainer button.getStarted {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  margin: 2rem 0 0 0;\n}\nmain section.one img.illustration {\n  position: absolute;\n  top: 10rem;\n  left: 60vw;\n}\nmain section.two {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #eff1f7;\n  padding: 2rem 8rem;\n}\nmain section.two .inputContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: hsl(257deg, 27%, 26%);\n  background-size: cover;\n  width: 100%;\n  padding: 2rem 0 0 0;\n  border-radius: 0.5rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  transform: translateY(-7rem);\n}\nmain section.two .inputContainer .inputContents {\n  display: grid;\n  grid-template-columns: 80% 20%;\n  grid-template-rows: 1fr;\n  margin: 2rem;\n  width: 100%;\n}\nmain section.two .inputContainer .inputContents input.textBox {\n  padding: 0.75rem 0 0.75rem 1rem;\n  font-family: poppins;\n  font-size: 15px;\n  border-radius: 0.5rem;\n  margin: 0 1rem 0 0;\n}\nmain section.two .inputContainer .inputContents input.textBox.active::placeholder {\n  color: red;\n}\nmain section.two .inputContainer .inputContents input.textBox.active {\n  padding: 0.75rem 0 0.75rem 1rem;\n  font-family: poppins;\n  font-size: 15px;\n  border-radius: 0.5rem;\n  color: hsl(0deg, 87%, 67%);\n  margin: 0 1rem 0 0;\n  border: 3px solid hsl(0deg, 87%, 67%);\n}\nmain section.two .inputContainer .inputContents button.shortenIt {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n}\nmain section.two .inputContainer .inputContents .warning {\n  visibility: hidden;\n}\nmain section.two .inputContainer .inputContents .warning p {\n  margin: 0;\n  padding: 0;\n  transform: translateY(1rem);\n  color: hsl(0deg, 87%, 67%);\n  text-transform: capitalize;\n  font-style: italic;\n}\nmain section.two .inputContainer .inputContents .warning.active {\n  visibility: visible;\n}\nmain section.two .inputResultContainer {\n  width: 100%;\n  transform: translateY(-7rem);\n}\nmain section.two .inputResultContainer ul.inputUl {\n  text-decoration: none;\n  list-style: none;\n  background-color: white;\n  -webkit-box-shadow: 0px 3px 5px 5px rgba(0, 0, 0, 0.05);\n  box-shadow: 0px 3px 5px 5px rgba(0, 0, 0, 0.05);\n  padding: 1rem;\n  border-radius: 0.75rem;\n}\nmain section.two .inputResultContainer ul.inputUl li.inputLi {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: space-between;\n  text-decoration: none;\n  list-style: none;\n}\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents .result {\n  color: hsl(180deg, 66%, 49%);\n}\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents button.btnResult {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  margin: 0 0 0 1rem;\n}\nmain section.two .inputResultContainer ul.inputUl li.inputLi .inputContents button.btnResult.active {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  background-color: hsl(255deg, 11%, 22%);\n  color: white;\n  border-radius: 0.5rem;\n}\nmain section.three {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 8rem;\n  background-color: #eff1f7;\n  height: 75vh;\n}\nmain section.three .subheading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  width: 30rem;\n  margin: 0 0 15rem 0;\n}\nmain section.three .subheading h2 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 40px;\n  color: hsl(257deg, 27%, 26%);\n  margin: 0 0 2rem 0;\n}\nmain section.three .subheading p {\n  font-family: poppins;\n  font-size: 15px;\n  font-weight: 500;\n  color: hsl(0deg, 0%, 75%);\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n}\nmain section.three .boxes {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-gap: 2%;\n  position: relative;\n  z-index: 1;\n  margin: 0 0 10rem 0;\n}\nmain section.three .boxes .brandRecognition {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  background-color: white;\n  padding: 5rem 2rem;\n  border-radius: 0.5rem;\n  transform: translateY(-9rem);\n}\nmain section.three .boxes .brandRecognition .iconOneBackCircle {\n  background-color: hsl(257deg, 27%, 26%);\n  border-radius: 4rem;\n  width: 75px;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -7.4rem;\n}\nmain section.three .boxes .brandRecognition h3 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 25px;\n  color: hsl(257deg, 27%, 26%);\n  margin: -3rem 0 1rem 0;\n}\nmain section.three .boxes .brandRecognition p {\n  font-family: poppins;\n  font-size: 15px;\n  font-weight: 500;\n  color: hsl(0deg, 0%, 75%);\n  margin: 0;\n  padding: 0;\n}\nmain section.three .boxes .detailedRecords {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  background-color: white;\n  padding: 5rem 2rem;\n  border-radius: 0.5rem;\n  transform: translateY(-6rem);\n}\nmain section.three .boxes .detailedRecords .iconTwoBackCircle {\n  background-color: hsl(257deg, 27%, 26%);\n  border-radius: 4rem;\n  width: 75px;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -7.4rem;\n}\nmain section.three .boxes .detailedRecords h3 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 25px;\n  color: hsl(257deg, 27%, 26%);\n  margin: -3rem 0 1rem 0;\n}\nmain section.three .boxes .detailedRecords p {\n  font-family: poppins;\n  font-size: 15px;\n  font-weight: 500;\n  color: hsl(0deg, 0%, 75%);\n  margin: 0;\n  padding: 0;\n}\nmain section.three .boxes .fullyCustomizable {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  background-color: white;\n  padding: 5rem 2rem;\n  border-radius: 0.5rem;\n  transform: translateY(-3rem);\n}\nmain section.three .boxes .fullyCustomizable .iconThreeBackCircle {\n  background-color: hsl(257deg, 27%, 26%);\n  border-radius: 4rem;\n  width: 75px;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -7.4rem;\n}\nmain section.three .boxes .fullyCustomizable h3 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 25px;\n  color: hsl(257deg, 27%, 26%);\n  margin: -3rem 0 1rem 0;\n}\nmain section.three .boxes .fullyCustomizable p {\n  font-family: poppins;\n  font-size: 15px;\n  font-weight: 500;\n  color: hsl(0deg, 0%, 75%);\n  margin: 0;\n  padding: 0;\n}\nmain section.three::after {\n  content: \"\";\n  position: absolute;\n  width: calc(100vw - 18rem);\n  height: 10px;\n  background-color: hsl(180deg, 66%, 49%);\n  z-index: 0;\n}\nmain section.four {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100vw;\n  height: 15rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: hsl(257deg, 27%, 26%);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\nmain section.four h2 {\n  font-family: poppins;\n  font-size: 75px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 40px;\n  color: hsl(257deg, 27%, 26%);\n  color: white;\n  margin: 0 0 2rem 0;\n}\nmain section.four button.getStarted {\n  background-color: hsl(180deg, 66%, 49%);\n  border: none;\n  color: white;\n  text-transform: capitalize;\n  font-size: 15px;\n  font-family: poppins;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\nfooter {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: row;\n  background-color: rgb(0, 0, 0);\n  height: 15rem;\n  padding: 0 8rem;\n  padding-top: 3rem;\n}\nfooter img.footerLogo {\n  transform: translateY(0.5rem);\n}\nfooter .footerContents {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: row;\n  justify-content: center;\n  position: relative;\n  top: 0;\n}\nfooter .footerContents .footerList {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  top: 0;\n}\nfooter .footerContents .footerList ul.one {\n  list-style: none;\n  text-decoration: none;\n  font-size: 15px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nfooter .footerContents .footerList ul.one li.header {\n  list-style: none;\n  text-decoration: none;\n  color: white;\n  text-transform: capitalize;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n}\nfooter .footerContents .footerList ul.one li {\n  padding: 0.25rem 0;\n}\nfooter .footerContents .footerList ul.one li a {\n  color: hsl(0deg, 0%, 75%);\n  text-transform: capitalize;\n  text-decoration: none;\n  font-weight: 500;\n}\nfooter .footerContents .footerList ul.two {\n  list-style: none;\n  text-decoration: none;\n  font-size: 15px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nfooter .footerContents .footerList ul.two li.header {\n  list-style: none;\n  text-decoration: none;\n  color: white;\n  text-transform: capitalize;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n}\nfooter .footerContents .footerList ul.two li {\n  padding: 0.25rem 0;\n}\nfooter .footerContents .footerList ul.two li a {\n  color: hsl(0deg, 0%, 75%);\n  text-transform: capitalize;\n  text-decoration: none;\n  font-weight: 500;\n}\nfooter .footerContents .footerList ul.three {\n  list-style: none;\n  text-decoration: none;\n  font-size: 15px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nfooter .footerContents .footerList ul.three li.header {\n  list-style: none;\n  text-decoration: none;\n  color: white;\n  text-transform: capitalize;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n}\nfooter .footerContents .footerList ul.three li {\n  padding: 0.25rem 0;\n}\nfooter .footerContents .footerList ul.three li a {\n  color: hsl(0deg, 0%, 75%);\n  text-transform: capitalize;\n  text-decoration: none;\n  font-weight: 500;\n}\nfooter .footerContents .socials {\n  transform: translateY(0.5rem);\n}\nfooter .footerContents .socials img {\n  padding: 0 0.5rem;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 1000px) {\n  header {\n    padding: 2rem 5rem;\n  }\n  main section.one {\n    padding: 2rem 5rem;\n  }\n  main section.two {\n    padding: 2rem 5rem;\n  }\n}\n@media only screen and (max-width: 750px) {\n  header {\n    padding: 1rem 2rem;\n  }\n  header .boxOne ul.list {\n    display: none;\n  }\n  header .boxTwo button {\n    display: none;\n  }\n  header .hamburgerTrigger {\n    display: initial;\n    position: absolute;\n    top: 2rem;\n    right: 2rem;\n    content: \"\";\n    width: 30px;\n    height: 30px;\n    background-color: transparent;\n    cursor: pointer;\n    z-index: 0;\n  }\n  header .hamburgerTrigger .hamburger {\n    position: absolute;\n    display: initial;\n    content: \"\";\n    top: 1rem;\n    width: 30px;\n    height: 3px;\n    background-color: hsl(0deg, 0%, 75%);\n    z-index: 1;\n  }\n  header .hamburgerTrigger .hamburger::after {\n    position: absolute;\n    display: initial;\n    content: \"\";\n    top: 1rem;\n    width: 30px;\n    height: 3px;\n    background-color: hsl(0deg, 0%, 75%);\n    z-index: 1;\n    transform: translateY(-0.5rem);\n  }\n  header .hamburgerTrigger .hamburger::before {\n    position: absolute;\n    display: initial;\n    content: \"\";\n    top: 1rem;\n    width: 30px;\n    height: 3px;\n    background-color: hsl(0deg, 0%, 75%);\n    z-index: 1;\n    transform: translateY(-1.5rem);\n  }\n  main section.one {\n    display: flex;\n    flex-direction: column-reverse;\n    height: 60rem;\n    padding: 0 2rem;\n    overflow-x: hidden;\n  }\n  main section.one .contentsContainer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    width: auto;\n  }\n  main section.one .contentsContainer h1 {\n    font-family: poppins;\n    font-size: 75px;\n    font-weight: 700;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    font-size: 55px;\n  }\n  main section.one .contentsContainer p {\n    font-family: poppins;\n    font-size: 18px;\n    font-weight: 500;\n    color: hsl(257deg, 7%, 63%);\n    margin: 0;\n    padding: 0;\n    z-index: -1;\n    font-size: 15px;\n    padding: 1rem 0;\n  }\n  main section.one .contentsContainer button.getStarted {\n    margin: 0 0 2rem 0;\n  }\n  main section.one img.illustration {\n    left: 3rem;\n  }\n  main section.two {\n    padding: 0 2rem;\n    padding-top: 2rem;\n  }\n  main section.two .inputContainer .inputContents {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: 1rem;\n  }\n  main section.two .inputContainer .inputContents input.textBox {\n    margin: 0;\n  }\n  main section.two .inputContainer .inputContents input.textBox.active {\n    margin: 0;\n  }\n  main section.two .inputContainer .inputContents button.shortenIt {\n    margin: 1rem 0 0 0;\n  }\n  main section.two .inputContainer .inputContents p.warningMessage {\n    transform: translateY(0.5rem);\n  }\n  main section.two .inputResultContainer {\n    margin: 0 0 4rem 0;\n  }\n  main section.two .inputResultContainer ul.inputUl li.inputLi {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  main section.two .inputResultContainer ul.inputUl li.inputLi .inputValue {\n    padding: 0.5rem 0 1rem 0;\n    margin: 0;\n  }\n  main section.two .inputResultContainer ul.inputUl li.inputLi .inputContents {\n    align-items: flex-start;\n    flex-direction: column;\n    width: 100%;\n    border-top: solid 3px #eff1f7;\n  }\n  main section.two .inputResultContainer ul.inputUl li.inputLi .inputContents p.inputValue {\n    margin: 0;\n    padding: 0;\n  }\n  main section.two .inputResultContainer ul.inputUl li.inputLi .inputContents button.btnResult {\n    margin: 0;\n    width: 100%;\n  }\n  main section.three {\n    padding: 8rem 2rem;\n    height: 65rem;\n  }\n  main section.three .subheading {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    width: auto;\n  }\n  main section.three .subheading h2 {\n    font-family: poppins;\n    font-size: 75px;\n    font-weight: 700;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    font-size: 45px;\n  }\n  main section.three .subheading p {\n    font-family: poppins;\n    font-size: 18px;\n    font-weight: 500;\n    color: hsl(257deg, 7%, 63%);\n    margin: 0;\n    padding: 0;\n    z-index: -1;\n    font-size: 15px;\n    z-index: 0;\n  }\n  main section.three .boxes {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    height: auto;\n    text-align: center;\n    padding: 0 0 3rem 0;\n  }\n  main section.three .boxes .brandRecognition {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  main section.three .boxes .detailedRecords {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  main section.three .boxes .fullyCustomizable {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  main section.three::after {\n    height: 1000px;\n    width: 10px;\n  }\n  main section.four {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n  }\n  main section.four h2 {\n    font-family: poppins;\n    font-size: 75px;\n    font-weight: 700;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    font-size: 30px;\n    margin-bottom: 1rem;\n  }\n  footer {\n    height: auto;\n    padding: 0 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  footer .footerLogo {\n    padding: 5rem 0 3rem 0;\n  }\n  footer .footerContents {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  footer .footerContents .footerList {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  footer .footerContents .footerList ul {\n    padding: 0;\n    margin: 0;\n  }\n  footer .footerContents .socials {\n    margin: 0;\n    padding: 0;\n    transform: translateY(-5rem);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/__variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"./_variables\";\r\n\r\nhtml {\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n    font-family: $fontFamily;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow-x: hidden;\r\n    width: 100%;\r\n}\r\n\r\nheader {\r\n    height: 10vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: $desktopHeaderPadding;\r\n\r\n    .boxOne {\r\n        @include flexOne;\r\n\r\n        ul.list {\r\n            display: flex;\r\n\r\n            li {\r\n                padding: 0 1rem;\r\n                list-style: none;\r\n\r\n                a {\r\n                    text-decoration: none;\r\n                    color: $grayishViolet;\r\n                    text-transform: capitalize;\r\n                }\r\n\r\n                a:hover {\r\n                    @include hover;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .boxTwo {\r\n        @include flexOne;\r\n\r\n        button.login {\r\n            @include button;\r\n            background-color: transparent;\r\n            color: $grayishViolet;\r\n            padding: 0 2rem;\r\n        }\r\n\r\n        button.login:hover {\r\n            @include hover;\r\n        }\r\n\r\n        button.signUp {\r\n            @include button\r\n        }\r\n    }\r\n\r\n\r\n    .hamburgerTrigger {\r\n        display: none;\r\n\r\n        .hamburger {\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n\r\nmain {\r\n\r\n    section.one {\r\n        height: 80vh;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: flex-start;\r\n        padding: $desktopHeaderPadding;\r\n\r\n        .contentsContainer {\r\n            width: 35rem;\r\n            transform: translateY(-5rem);\r\n            position: relative;\r\n            z-index: 1;\r\n\r\n            h1 {\r\n                @include primaryHeading;\r\n            }\r\n\r\n            p {\r\n                @include paragraph;\r\n            }\r\n\r\n            button.getStarted {\r\n                @include button;\r\n                margin: 2rem 0 0 0;\r\n            }\r\n        }\r\n\r\n        img.illustration {\r\n            position: absolute;\r\n            top:10rem;\r\n            left: 60vw;\r\n        }\r\n    \r\n    }\r\n\r\n    section.two {\r\n        @include flexOne;\r\n        flex-direction: column;\r\n        background-color: $veryGray;\r\n        padding: $desktopHeaderPadding;\r\n\r\n        .inputContainer {\r\n            @include inputBackdrop;\r\n            background-image: url('/src/assets/bg-boost-desktop.svg');\r\n            transform: translateY(-7rem);\r\n\r\n            .inputContents {\r\n                display: grid;\r\n                grid-template-columns: 80% 20%;\r\n                grid-template-rows: 1fr;\r\n                margin: 2rem;\r\n                width: 100%;\r\n\r\n                input.textBox {\r\n                    @include inputTextbox;\r\n                }\r\n\r\n                input.textBox.active::placeholder {\r\n                    color: red;\r\n                }\r\n\r\n                input.textBox.active {\r\n                    @include inputTextboxActive;\r\n                }\r\n    \r\n                button.shortenIt {\r\n                    @include buttonTwo;\r\n                }\r\n\r\n                .warning {\r\n                    visibility: hidden;\r\n\r\n                    p {\r\n                        margin: 0;\r\n                        padding: 0;\r\n                        transform: translateY(1rem);\r\n                        color: $red;\r\n                        text-transform: capitalize;\r\n                        font-style: italic;\r\n                    }\r\n                }\r\n\r\n                .warning.active {\r\n                    visibility: visible;\r\n                }\r\n\r\n            }\r\n        }\r\n\r\n        .inputResultContainer {\r\n            width: 100%;\r\n            transform: translateY(-7rem);\r\n\r\n            ul.inputUl {\r\n                @include inputWrapper;\r\n\r\n                li.inputLi {\r\n                    @include flexOne;\r\n                    justify-content: space-between;\r\n                    text-decoration: none;\r\n                    list-style: none;\r\n\r\n                    .inputContents {\r\n                        @include flexOne;\r\n\r\n                        .result {\r\n                            color: $cyan;\r\n                        }\r\n\r\n                        button.btnResult {\r\n                            @include buttonTwo;\r\n                            margin: 0 0 0 1rem;\r\n                        }\r\n\r\n                        button.btnResult.active {\r\n                            @include buttonThree;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    section.three {\r\n        @include flexOne;\r\n        flex-direction: column;\r\n        padding: 8rem;\r\n        background-color: $veryGray;\r\n        height: 75vh;\r\n\r\n        .subheading {\r\n            @include flexOne;\r\n            flex-direction: column;\r\n            text-align: center;\r\n            align-items: center;\r\n            width: 30rem;\r\n            margin: 0 0 15rem 0;\r\n\r\n            h2 {\r\n                @include secondaryHeading;\r\n                margin: 0 0 2rem 0;\r\n            }\r\n\r\n            p {\r\n                @include paragraphTwo;\r\n                font-weight: 500;\r\n            }\r\n        }\r\n\r\n        .boxes {\r\n            display: grid;\r\n            grid-template-columns: 1fr 1fr 1fr;\r\n            grid-template-rows: 1fr;\r\n            grid-gap: 2%;\r\n            position: relative;\r\n            z-index: 1;\r\n            margin: 0 0 10rem 0;\r\n\r\n            .brandRecognition {\r\n                @include parentDiv;\r\n                transform: translateY(-9rem);\r\n\r\n                .iconOneBackCircle {\r\n                    @include iconBackground;\r\n                }\r\n\r\n                h3 {\r\n                    @include iconHeader;\r\n                }\r\n\r\n                p {\r\n                    @include iconParagraph;\r\n                }\r\n            }\r\n\r\n            .detailedRecords {\r\n                @include parentDiv;\r\n                transform: translateY(-6rem);\r\n\r\n                .iconTwoBackCircle {\r\n                    @include iconBackground;\r\n                }\r\n\r\n                h3 {\r\n                    @include iconHeader;\r\n                }\r\n\r\n                p {\r\n                    @include iconParagraph;\r\n                }\r\n            }\r\n            \r\n            .fullyCustomizable {\r\n                @include parentDiv;\r\n                transform: translateY(-3rem);\r\n\r\n                .iconThreeBackCircle {\r\n                    @include iconBackground;\r\n                }\r\n\r\n                h3 {\r\n                    @include iconHeader;\r\n                }\r\n\r\n                p {\r\n                    @include iconParagraph;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    section.three::after {\r\n        content: '';\r\n        position: absolute;\r\n        width: calc(100vw - 18rem);\r\n        height: 10px;\r\n        background-color: $cyan;\r\n        z-index: 0;\r\n    }\r\n\r\n    section.four {\r\n        @include flexOne;\r\n        flex-direction: column;\r\n        width: 100vw;\r\n        height: 15rem;\r\n        background-image: url('/src/assets/bg-boost-desktop.svg');\r\n        background-color: $darkViolet;\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n\r\n        h2 {\r\n            @include secondaryHeading;\r\n            color: $white;\r\n            margin: 0 0 2rem 0;\r\n        }\r\n\r\n        button.getStarted {\r\n            @include button;\r\n        }\r\n    }\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    background-color: $black;\r\n    height: 15rem;\r\n    padding: $desktopSidePadding;\r\n    padding-top: 3rem;\r\n\r\n    img.footerLogo {\r\n        transform: translateY(0.5rem);\r\n    }\r\n\r\n    .footerContents {\r\n        display: flex;\r\n        align-items: flex-start;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        position: relative;\r\n        top: 0;\r\n\r\n        .footerList {\r\n            display: grid;\r\n            grid-template-columns: 1fr 1fr 1fr;\r\n            grid-template-rows: 1fr;\r\n            padding: 0;\r\n            margin: 0;\r\n            position: relative;\r\n            top:0;\r\n        \r\n\r\n            ul.one {\r\n                @include footerUl;\r\n\r\n                li.header {\r\n                    @include footerHeader;\r\n                }\r\n\r\n                li {\r\n                    @include footerLi;\r\n\r\n                    a {\r\n                        @include footerA;\r\n                    }\r\n                }\r\n\r\n            }\r\n\r\n            ul.two {\r\n                @include footerUl;\r\n\r\n                li.header {\r\n                    @include footerHeader;\r\n                }\r\n\r\n                li {\r\n                    @include footerLi;\r\n\r\n                    a {\r\n                        @include footerA;\r\n                    }\r\n                }\r\n\r\n            }\r\n\r\n            ul.three {\r\n                @include footerUl;\r\n\r\n                li.header {\r\n                    @include footerHeader;\r\n                }\r\n\r\n                li {\r\n                    @include footerLi;\r\n\r\n                    a {\r\n                        @include footerA;\r\n                    }\r\n                }\r\n\r\n            }\r\n        }\r\n\r\n        .socials {\r\n            transform: translateY(0.5rem);\r\n\r\n            img {\r\n                padding: 0 0.5rem;\r\n                cursor: pointer;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n    header {\r\n        padding: $tabletPadding;\r\n    }\r\n\r\n    main {\r\n        \r\n        section.one {\r\n            padding: $tabletPadding;\r\n        }\r\n\r\n        section.two {\r\n            padding: $tabletPadding;\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 750px) {\r\n    \r\n    header {\r\n        padding: $mobileHeaderPadding;\r\n\r\n        .boxOne {\r\n\r\n            ul.list {\r\n                display: none;\r\n            }\r\n        }\r\n\r\n        .boxTwo {\r\n\r\n            button {\r\n                display: none;\r\n            }\r\n        }\r\n\r\n        .hamburgerTrigger {\r\n            display: initial;\r\n            position: absolute;\r\n            top: 2rem;\r\n            right: 2rem;\r\n            content: '';\r\n            width: 30px;\r\n            height: 30px;\r\n            background-color: transparent;\r\n            cursor: pointer;\r\n            z-index: 0;\r\n\r\n            \r\n            .hamburger {\r\n                @include defaultHamburgerStroke;\r\n            }\r\n\r\n            .hamburger::after {\r\n                @include defaultHamburgerStroke;\r\n                transform: translateY(-0.5rem);\r\n            }\r\n\r\n            .hamburger::before {\r\n                @include defaultHamburgerStroke;\r\n                transform: translateY(-1.5rem);\r\n            }\r\n        }\r\n    }\r\n\r\n    main {\r\n\r\n        section.one {\r\n            display: flex;\r\n            flex-direction: column-reverse;\r\n            height: 60rem;\r\n            padding: $mobileSidePadding;\r\n            overflow-x: hidden;\r\n\r\n            .contentsContainer {\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                flex-direction: column;\r\n                text-align: center;\r\n                width: auto;\r\n\r\n                h1 {\r\n                    @include primaryHeadingMobile;\r\n                }\r\n\r\n                p {\r\n                    @include paragraphMobileOne;\r\n                    padding: 1rem 0;\r\n                }\r\n\r\n                button.getStarted {\r\n                    margin: 0 0 2rem 0;\r\n                }\r\n            }\r\n\r\n            img.illustration {\r\n                left: 3rem;\r\n            }\r\n\r\n\r\n        }\r\n\r\n        section.two {\r\n            padding: $mobileSidePadding;\r\n            padding-top: 2rem;\r\n\r\n            .inputContainer {\r\n\r\n                .inputContents {\r\n                    grid-template-columns: 1fr;\r\n                    grid-template-rows: 1fr 1fr;\r\n                    margin: 1rem;\r\n\r\n                    input.textBox {\r\n                        margin: 0;\r\n                    }\r\n\r\n                    input.textBox.active {\r\n                        margin: 0;\r\n                    }\r\n\r\n                    button.shortenIt {\r\n                        margin: 1rem 0 0 0;\r\n                    }\r\n                    \r\n                    p.warningMessage {\r\n                        transform: translateY(0.5rem);\r\n                    }\r\n                }\r\n            }\r\n\r\n            .inputResultContainer {\r\n                margin: 0 0 4rem 0;\r\n\r\n                ul.inputUl {\r\n\r\n                    li.inputLi {\r\n                        flex-direction: column;\r\n                        align-items: flex-start;\r\n\r\n                        .inputValue {\r\n                            padding: 0.5rem 0 1rem 0;\r\n                            margin: 0;\r\n                        }\r\n\r\n                        .inputContents {\r\n                            align-items: flex-start;\r\n                            flex-direction: column;\r\n                            width: 100%;\r\n                            border-top: solid 3px $veryGray;\r\n\r\n                            p.inputValue {\r\n                                margin: 0;\r\n                                padding: 0;\r\n                            }\r\n\r\n                            button.btnResult {\r\n                                margin: 0;\r\n                                width: 100%;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        section.three {\r\n            padding: $mobileSidePaddingSectionThree;\r\n            height: 65rem;\r\n            \r\n\r\n            .subheading {\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                flex-direction: column;\r\n                text-align: center;\r\n                width: auto;\r\n\r\n                h2 {\r\n                    @include secondaryHeadingMobile;\r\n                }\r\n\r\n                p {\r\n                    @include paragraphMobileOne;\r\n                    z-index: 0;\r\n                }\r\n            }\r\n\r\n            .boxes {\r\n                grid-template-columns: 1fr;\r\n                grid-template-rows: 1fr 1fr 1fr;\r\n                height: auto;\r\n                text-align: center;\r\n                padding: 0 0 3rem 0;\r\n\r\n                .brandRecognition {\r\n                    @include flexOne;\r\n                }\r\n\r\n                .detailedRecords {\r\n                    @include flexOne;\r\n                }\r\n\r\n                .fullyCustomizable {\r\n                    @include flexOne;\r\n                }\r\n            }\r\n        }\r\n\r\n        section.three::after {\r\n            height: 1000px;\r\n            width: 10px;\r\n        }\r\n        \r\n        section.four {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            flex-direction: column;\r\n            text-align: center;\r\n\r\n            h2 {\r\n                @include secondaryHeadingMobileTwo;\r\n                margin-bottom: 1rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    footer {\r\n        height: auto;\r\n        padding: $mobileSidePadding;\r\n        @include flexOne;\r\n        flex-direction: column;\r\n\r\n        .footerLogo {\r\n            padding: 5rem 0 3rem 0;\r\n        }\r\n\r\n        .footerContents {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            flex-direction: column;\r\n\r\n            .footerList {\r\n                display: grid;\r\n                grid-template-columns: 1fr;\r\n                grid-template-rows: 1fr 1fr 1fr 1fr;\r\n                align-items: center;\r\n                justify-content: center;\r\n                text-align: center;\r\n\r\n                ul {\r\n                    padding: 0;\r\n                    margin: 0;\r\n                }\r\n            }\r\n\r\n            .socials {\r\n                margin: 0;\r\n                padding: 0;\r\n                transform: translateY(-5rem);\r\n            }\r\n        }\r\n    }\r\n}","$cyan: hsl(180, 66%, 49%);\r\n$darkViolet: hsl(257, 27%, 26%);\r\n$red: hsl(0, 87%, 67%);\r\n$gray: hsl(0, 0%, 75%);\r\n$veryGray: #eff1f7;\r\n$grayishViolet: hsl(257, 7%, 63%);\r\n$veryDarkBlue: hsl(255, 11%, 22%);\r\n$veryDarkViolet: hsl(260, 8%, 14%);\r\n$white: #ffff;\r\n$black: rgb(0, 0, 0);\r\n\r\n$fontSize: 18px; \r\n$fontSizeTwo: 11px;\r\n$fontSizeThree: 15px;\r\n$fontSizePrimaryHeading: 75px;\r\n$fontSizeSecondaryHeading: 40px;\r\n$fontSizeThirdHeading: 25px;\r\n$fontFamily: poppins; \r\n\r\n$fontHeaderOneMobile: 55px;\r\n$fontHeaderTwoMobile: 45px;\r\n$fontHeaderThreeMobile: 30px;\r\n\r\n\r\n$desktopSidePadding: 0 8rem;\r\n$desktopHeaderPadding: 2rem 8rem;\r\n$tabletPadding: 2rem 5rem;\r\n$mobileHeaderPadding: 1rem 2rem;\r\n$mobileSidePadding: 0 2rem; \r\n$mobileSidePaddingSectionThree: 8rem 2rem; \r\n\r\n\r\n@mixin button {\r\n    background-color: $cyan;\r\n    border: none;\r\n    color: $white;\r\n    text-transform: capitalize;\r\n    font-size: $fontSizeThree;\r\n    font-family: $fontFamily;\r\n    font-weight: 500;\r\n    padding: 0.75rem 1.5rem;\r\n    border-radius: 2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n@mixin buttonTwo {\r\n    @include button;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@mixin buttonThree {\r\n    @include button;\r\n    background-color: $veryDarkBlue;\r\n    color: $white;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@mixin flexOne {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n@mixin primaryHeading {\r\n    font-family: $fontFamily;\r\n    font-size: $fontSizePrimaryHeading;\r\n    font-weight: 700;\r\n    line-height: 1.2;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n@mixin secondaryHeading {\r\n    @include primaryHeading;\r\n    text-transform: capitalize;\r\n    font-size: $fontSizeSecondaryHeading;\r\n    color: $darkViolet;\r\n}\r\n\r\n@mixin thirdHeading {\r\n    @include primaryHeading;\r\n    text-transform: capitalize;\r\n    font-size: $fontSizeThirdHeading;\r\n    color: $darkViolet;\r\n}\r\n\r\n@mixin paragraph {\r\n    font-family: $fontFamily;\r\n    font-size: $fontSize;\r\n    font-weight: 500;\r\n    color: $grayishViolet;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: -1;\r\n}\r\n\r\n@mixin paragraphTwo {\r\n    font-family: $fontFamily;\r\n    font-size: $fontSizeThree;\r\n    font-weight: 500;\r\n    color: $gray;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n@mixin paragraphThree {\r\n    font-family: $fontFamily;\r\n    font-size: $fontSizeThree;\r\n    font-weight: 500;\r\n    color: $gray;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\n// mobile fonts\r\n\r\n@mixin primaryHeadingMobile {\r\n    @include primaryHeading; \r\n    font-size: $fontHeaderOneMobile;\r\n}\r\n\r\n@mixin paragraphMobileOne {\r\n    @include paragraph;\r\n    font-size: $fontSizeThree;\r\n}\r\n\r\n@mixin secondaryHeadingMobile {\r\n    @include primaryHeading; \r\n    font-size: $fontHeaderTwoMobile;\r\n}\r\n\r\n\r\n@mixin secondaryHeadingMobileTwo {\r\n    @include primaryHeading; \r\n    font-size: $fontHeaderThreeMobile;\r\n}\r\n\r\n\r\n\r\n@mixin inputBackdrop {\r\n    @include flexOne;\r\n    background-color: $darkViolet;\r\n    background-size: cover;\r\n    width: 100%;\r\n    padding: 2rem 0 0 0;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@mixin inputTextbox {\r\n    padding: 0.75rem 0 0.75rem 1rem;\r\n    font-family: $fontFamily;\r\n    font-size: $fontSizeThree;\r\n    border-radius: 0.5rem;\r\n    margin: 0 1rem 0 0;\r\n}\r\n\r\n@mixin inputTextboxActive {\r\n    padding: 0.75rem 0 0.75rem 1rem;\r\n    font-family: $fontFamily;\r\n    font-size: $fontSizeThree;\r\n    border-radius: 0.5rem;\r\n    color: $red;\r\n    margin: 0 1rem 0 0;\r\n    border: 3px solid $red;\r\n}\r\n\r\n@mixin hover {\r\n    transition: 0.25s all;\r\n    color: $darkViolet;\r\n}\r\n\r\n@mixin boxShadow {\r\n    -webkit-box-shadow: 0px 3px 5px 5px rgba(0,0,0,0.05); \r\n    box-shadow: 0px 3px 5px 5px rgba(0,0,0,0.05);\r\n}\r\n\r\n@mixin inputWrapper {\r\n    text-decoration: none;\r\n    list-style: none;\r\n    background-color: $white;\r\n    @include  boxShadow;\r\n    padding: 1rem;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\n\r\n\r\n\r\n// 3 icon containers\r\n@mixin parentDiv {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    background-color: $white;\r\n    padding: 5rem 2rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n@mixin iconBackground {\r\n    background-color: $darkViolet;\r\n    border-radius: 4rem;\r\n    width: 75px;\r\n    height: 75px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    top: -7.4rem;\r\n}\r\n\r\n@mixin iconHeader {\r\n    @include thirdHeading;\r\n    margin: -3rem 0 1rem 0;\r\n}\r\n\r\n@mixin iconParagraph {\r\n    @include paragraphThree;\r\n}\r\n\r\n\r\n\r\n// footer styles \r\n\r\n@mixin footerUl {\r\n    list-style: none;\r\n    text-decoration: none;\r\n    font-size: $fontSizeThree;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\n@mixin footerHeader {\r\n    list-style: none;\r\n    text-decoration: none;\r\n    color: $white;\r\n    text-transform: capitalize;\r\n    font-weight: 700;\r\n    margin: 0 0 0.5rem 0;\r\n}\r\n\r\n@mixin footerLi {\r\n    padding: 0.25rem 0;\r\n}\r\n\r\n@mixin footerA {\r\n    color: $gray;\r\n    text-transform: capitalize;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n}\r\n\r\n\r\n\r\n// hamburger menu \r\n@mixin hamburgerTrigger {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n    content: '';\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    z-index: 0;\r\n}\r\n\r\n@mixin defaultHamburgerStroke {\r\n    position: absolute;\r\n    display: initial;\r\n    content: '';\r\n    top:1rem;\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color: $gray;\r\n    z-index: 1;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/assets/bg-boost-desktop.svg":
/*!*****************************************!*\
  !*** ./src/assets/bg-boost-desktop.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg-boost-desktop.svg";

/***/ }),

/***/ "./src/assets/bg-boost-mobile.svg":
/*!****************************************!*\
  !*** ./src/assets/bg-boost-mobile.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg-boost-mobile.svg";

/***/ }),

/***/ "./src/assets/bg-shorten-desktop.svg":
/*!*******************************************!*\
  !*** ./src/assets/bg-shorten-desktop.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg-shorten-desktop.svg";

/***/ }),

/***/ "./src/assets/bg-shorten-mobile.svg":
/*!******************************************!*\
  !*** ./src/assets/bg-shorten-mobile.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg-shorten-mobile.svg";

/***/ }),

/***/ "./src/assets/icon-brand-recognition.svg":
/*!***********************************************!*\
  !*** ./src/assets/icon-brand-recognition.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-brand-recognition.svg";

/***/ }),

/***/ "./src/assets/icon-detailed-records.svg":
/*!**********************************************!*\
  !*** ./src/assets/icon-detailed-records.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-detailed-records.svg";

/***/ }),

/***/ "./src/assets/icon-facebook.svg":
/*!**************************************!*\
  !*** ./src/assets/icon-facebook.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-facebook.svg";

/***/ }),

/***/ "./src/assets/icon-fully-customizable.svg":
/*!************************************************!*\
  !*** ./src/assets/icon-fully-customizable.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-fully-customizable.svg";

/***/ }),

/***/ "./src/assets/icon-instagram.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-instagram.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-instagram.svg";

/***/ }),

/***/ "./src/assets/icon-pinterest.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-pinterest.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-pinterest.svg";

/***/ }),

/***/ "./src/assets/icon-twitter.svg":
/*!*************************************!*\
  !*** ./src/assets/icon-twitter.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-twitter.svg";

/***/ }),

/***/ "./src/assets/illustration-working.svg":
/*!*********************************************!*\
  !*** ./src/assets/illustration-working.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "illustration-working.svg";

/***/ }),

/***/ "./src/assets/logo copy.svg":
/*!**********************************!*\
  !*** ./src/assets/logo copy.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo copy.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/input.js");
/* harmony import */ var _assets_bg_boost_desktop_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/bg-boost-desktop.svg */ "./src/assets/bg-boost-desktop.svg");
/* harmony import */ var _assets_bg_boost_mobile_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/bg-boost-mobile.svg */ "./src/assets/bg-boost-mobile.svg");
/* harmony import */ var _assets_bg_shorten_desktop_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/bg-shorten-desktop.svg */ "./src/assets/bg-shorten-desktop.svg");
/* harmony import */ var _assets_bg_shorten_mobile_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/bg-shorten-mobile.svg */ "./src/assets/bg-shorten-mobile.svg");
/* harmony import */ var _assets_icon_brand_recognition_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icon-brand-recognition.svg */ "./src/assets/icon-brand-recognition.svg");
/* harmony import */ var _assets_icon_detailed_records_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icon-detailed-records.svg */ "./src/assets/icon-detailed-records.svg");
/* harmony import */ var _assets_icon_fully_customizable_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icon-fully-customizable.svg */ "./src/assets/icon-fully-customizable.svg");
/* harmony import */ var _assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/icon-facebook.svg */ "./src/assets/icon-facebook.svg");
/* harmony import */ var _assets_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/icon-instagram.svg */ "./src/assets/icon-instagram.svg");
/* harmony import */ var _assets_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/icon-pinterest.svg */ "./src/assets/icon-pinterest.svg");
/* harmony import */ var _assets_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/icon-twitter.svg */ "./src/assets/icon-twitter.svg");
/* harmony import */ var _assets_illustration_working_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/illustration-working.svg */ "./src/assets/illustration-working.svg");
/* harmony import */ var _assets_logo_copy_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/logo copy.svg */ "./src/assets/logo copy.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
















var logoImg = document.getElementById('logoImg');
logoImg.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_15__;
var iconOne = document.querySelector('.iconOne');
iconOne.src = _assets_icon_brand_recognition_svg__WEBPACK_IMPORTED_MODULE_6__;
var iconTwo = document.querySelector('.iconTwo');
iconTwo.src = _assets_icon_detailed_records_svg__WEBPACK_IMPORTED_MODULE_7__;
var iconThree = document.querySelector('.iconThree');
iconThree.src = _assets_icon_fully_customizable_svg__WEBPACK_IMPORTED_MODULE_8__;
var facebook = document.querySelector('.facebook');
facebook.src = _assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_9__;
var instagram = document.querySelector('.instagram');
instagram.src = _assets_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_10__;
var pinterest = document.querySelector('.pinterest');
pinterest.src = _assets_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_11__;
var twitter = document.querySelector('.twitter');
twitter.src = _assets_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_12__;
var illustration = document.querySelector('.illustration');
illustration.src = _assets_illustration_working_svg__WEBPACK_IMPORTED_MODULE_13__;
var footerLogo = document.querySelector('.footerLogo');
footerLogo.src = _assets_logo_copy_svg__WEBPACK_IMPORTED_MODULE_14__;
var btn = document.querySelector('.shortenIt');
btn.addEventListener('click', _input__WEBPACK_IMPORTED_MODULE_1__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=bundle1bc5d849813cfad1907f.js.map