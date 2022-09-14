/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/click.js":
/*!**********************!*\
  !*** ./src/click.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function click() {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (click);

/***/ }),

/***/ "./src/enter.js":
/*!**********************!*\
  !*** ./src/enter.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function enter() {
  // button variables
  var inputResultWrapper = document.querySelector('.inputResultContainer'); // textbox & warning variables 

  var textInput = document.querySelector('input.textBox');
  var link = document.querySelector('input.textBox');
  var errorMessage = document.querySelector('.warning');
  var errorMessageP = document.querySelector('.warningMessage');
  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // api request
      var fetchRequest = function fetchRequest() {
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
          }); // removing warning errors

          link.classList.remove('active');
          errorMessage.classList.remove('active'); // input set to nothing once callback achieved 

          textInput.value = '';
        })["catch"](function (err) {
          textInput.value = '';
          console.log(err);
          console.error('failed to log link');
          errorMessageP.innerHTML = 'Please enter a valid link';
          link.classList.add('active');
          errorMessage.classList.add('active');
          linkPlaceholder.classList.add('active');
        });
      };

      console.log('enter'); // removing warning message 

      link.classList.remove('active');
      errorMessage.classList.remove('active');
      fetchRequest();
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enter);

/***/ }),

/***/ "./src/footerIcons.js":
/*!****************************!*\
  !*** ./src/footerIcons.js ***!
  \****************************/
/***/ (() => {

function footerIcons() {
  var instagramIcon = document.querySelector('.instagram');
  var facebookIcon = document.querySelector('.facebook');
  var twitterIcon = document.querySelector('.twitter');
  var pinterestIcon = document.querySelector('.pinterest');
  instagramIcon.addEventListener('click', function () {
    instagramIcon.classList.toggle('active');
    facebookIcon.classList.remove('active');
    twitterIcon.classList.remove('active');
    pinterestIcon.classList.remove('active');
  });
  facebookIcon.addEventListener('click', function () {
    instagramIcon.classList.remove('active');
    facebookIcon.classList.toggle('active');
    twitterIcon.classList.remove('active');
    pinterestIcon.classList.remove('active');
  });
  twitterIcon.addEventListener('click', function () {
    instagramIcon.classList.remove('active');
    facebookIcon.classList.remove('active');
    twitterIcon.classList.toggle('active');
    pinterestIcon.classList.remove('active');
  });
  pinterestIcon.addEventListener('click', function () {
    instagramIcon.classList.remove('active');
    facebookIcon.classList.remove('active');
    twitterIcon.classList.remove('active');
    pinterestIcon.classList.toggle('active');
  });
}

footerIcons();

/***/ }),

/***/ "./src/mobileMenu.js":
/*!***************************!*\
  !*** ./src/mobileMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mobileMenu() {
  console.log('clicked');
  var nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileMenu);

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/assets/logo copy.svg":
/*!**********************************!*\
  !*** ./src/assets/logo copy.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "logo copy.svg";

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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _footerIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footerIcons */ "./src/footerIcons.js");
/* harmony import */ var _footerIcons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footerIcons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click */ "./src/click.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter */ "./src/enter.js");
/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobileMenu */ "./src/mobileMenu.js");
/* harmony import */ var _assets_bg_boost_desktop_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/bg-boost-desktop.svg */ "./src/assets/bg-boost-desktop.svg");
/* harmony import */ var _assets_bg_boost_mobile_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/bg-boost-mobile.svg */ "./src/assets/bg-boost-mobile.svg");
/* harmony import */ var _assets_bg_shorten_desktop_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/bg-shorten-desktop.svg */ "./src/assets/bg-shorten-desktop.svg");
/* harmony import */ var _assets_bg_shorten_mobile_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/bg-shorten-mobile.svg */ "./src/assets/bg-shorten-mobile.svg");
/* harmony import */ var _assets_icon_brand_recognition_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/icon-brand-recognition.svg */ "./src/assets/icon-brand-recognition.svg");
/* harmony import */ var _assets_icon_detailed_records_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/icon-detailed-records.svg */ "./src/assets/icon-detailed-records.svg");
/* harmony import */ var _assets_icon_fully_customizable_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/icon-fully-customizable.svg */ "./src/assets/icon-fully-customizable.svg");
/* harmony import */ var _assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/icon-facebook.svg */ "./src/assets/icon-facebook.svg");
/* harmony import */ var _assets_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/icon-instagram.svg */ "./src/assets/icon-instagram.svg");
/* harmony import */ var _assets_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/icon-pinterest.svg */ "./src/assets/icon-pinterest.svg");
/* harmony import */ var _assets_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/icon-twitter.svg */ "./src/assets/icon-twitter.svg");
/* harmony import */ var _assets_illustration_working_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/illustration-working.svg */ "./src/assets/illustration-working.svg");
/* harmony import */ var _assets_logo_copy_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/logo copy.svg */ "./src/assets/logo copy.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
// documents




 // images














 // images to src

var logoImg = document.getElementById('logoImg');
logoImg.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_18__;
var iconOne = document.querySelector('.iconOne');
iconOne.src = _assets_icon_brand_recognition_svg__WEBPACK_IMPORTED_MODULE_9__;
var iconTwo = document.querySelector('.iconTwo');
iconTwo.src = _assets_icon_detailed_records_svg__WEBPACK_IMPORTED_MODULE_10__;
var iconThree = document.querySelector('.iconThree');
iconThree.src = _assets_icon_fully_customizable_svg__WEBPACK_IMPORTED_MODULE_11__;
var facebook = document.querySelector('.facebook');
facebook.src = _assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_12__;
var instagram = document.querySelector('.instagram');
instagram.src = _assets_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_13__;
var pinterest = document.querySelector('.pinterest');
pinterest.src = _assets_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_14__;
var twitter = document.querySelector('.twitter');
twitter.src = _assets_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_15__;
var illustration = document.querySelector('.illustration');
illustration.src = _assets_illustration_working_svg__WEBPACK_IMPORTED_MODULE_16__;
var footerLogo = document.querySelector('.footerLogo');
footerLogo.src = _assets_logo_copy_svg__WEBPACK_IMPORTED_MODULE_17__; // modules

var btn = document.querySelector('.shortenIt');
btn.addEventListener('click', _click__WEBPACK_IMPORTED_MODULE_2__["default"]);
(0,_enter__WEBPACK_IMPORTED_MODULE_3__["default"])();
var hamburger = document.querySelector('.hamburgerTrigger');
hamburger.addEventListener('click', _mobileMenu__WEBPACK_IMPORTED_MODULE_4__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=bundle66fc43f1e72fd1a79ab0.js.map