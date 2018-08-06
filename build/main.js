/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/animate.js":
/*!***************************!*\
  !*** ./src/js/animate.js ***!
  \***************************/
/*! exports provided: Animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animate\", function() { return Animate; });\n//@ts-check\r\n\r\n// Contains static methods, used as Event Handlers.\r\nclass Animate {\r\n\r\n    // Assigns the appropriate Event Handlers to a DOM Element, based on its type.\r\n    static makeActive(element = {}) {\r\n        let myClass = element.classList.item(0);\r\n        const type = eventTargets.find(object => object.baseClass === myClass).type;\r\n        console.log(type);\r\n\r\n        if (type === 'radio') {\r\n            Animate.makeRadioActive(element.getAttribute('id'));\r\n        }\r\n    }\r\n\r\n    // Applies the radio-item-active styles.\r\n    static makeRadioActive(radioID) {\r\n        let radio = document.getElementById(radioID);\r\n\r\n        if (!radio.classList.contains('radio-item-active')) {\r\n            Animate.killOtherActive(radio);\r\n            radio.classList.add('radio-item-active');\r\n            Animate.makeButtonActive();\r\n        } else {\r\n            radio.classList.remove('radio-item-active');\r\n            Animate.makeButtonIdle();\r\n        }\r\n    }\r\n\r\n    // Deactivates other items of the same type.\r\n    static killOtherActive(element = {}) {\r\n        let myClassList = element.classList;\r\n        let myClass = element.classList.item(0);\r\n\r\n        if (!myClassList.contains(`${myClass}-active`)) {\r\n            let otherActive = document.getElementsByClassName(`${myClass}-active`);\r\n            for (let i = 0; i < otherActive.length; i++) {\r\n                otherActive[i].classList.remove(`${myClass}-active`);\r\n            }\r\n        }\r\n    }\r\n\r\n    static makeButtonActive() {\r\n        let playButton = document.getElementById('play-button');\r\n        let buttonWrapper = document.getElementById('play-button-wrapper');\r\n\r\n        playButton.classList.add('play-button-active');\r\n        buttonWrapper.classList.add('play-button-wrapper-active');\r\n    }\r\n\r\n    static makeButtonIdle() {\r\n        let playButton = document.getElementById('play-button');\r\n        let buttonWrapper = document.getElementById('play-button-wrapper');\r\n\r\n        playButton.classList.remove('play-button-active');\r\n        buttonWrapper.classList.remove('play-button-wrapper-active');\r\n    }\r\n}\r\n\r\nconst eventTargets = [{\r\n    type: 'radio',\r\n    baseClass: 'radio-item'\r\n},\r\n{\r\n    type: 'play-button',\r\n    baseClass: 'play-button'\r\n}\r\n];\n\n//# sourceURL=webpack:///./src/js/animate.js?");

/***/ }),

/***/ "./src/js/helper.js":
/*!**************************!*\
  !*** ./src/js/helper.js ***!
  \**************************/
/*! exports provided: getAttributeByClassName, assignEvHandlersToRadios, assignListenersToRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAttributeByClassName\", function() { return getAttributeByClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignEvHandlersToRadios\", function() { return assignEvHandlersToRadios; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignListenersToRadio\", function() { return assignListenersToRadio; });\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./src/js/animate.js\");\n//@ts-check\r\n\r\n\r\n/**\r\n * Collects Elements by their className and returns an array of each element's requested attribute.\r\n * @param {string} className The class name by which Elements will be collected.\r\n * @param {string} attr The requested attribute.\r\n * @returns {Array<string>} An array of attribute values as strings.\r\n */\r\nfunction getAttributeByClassName(className, attr) {\r\n    const radioCollection = document.getElementsByClassName(className);\r\n    let arrayOfAttributes = [];\r\n\r\n    if (radioCollection.length < 1) {\r\n        throw new Error(`No elements of class '${className}' found.`);\r\n    }\r\n    for (let i = 0; i < radioCollection.length; i++) {\r\n        if (!radioCollection[i].hasAttribute(attr)) {\r\n            throw new Error(`No ${attr} assigned to this element.`);\r\n        }\r\n        arrayOfAttributes.push(radioCollection[i].getAttribute(attr));\r\n    }\r\n    return arrayOfAttributes;\r\n}\r\n\r\n/**\r\n * Takes an array of radio IDs and calls a callback fn on each radio respectively.\r\n * The callback assigns event listeners.\r\n * @param {Array<string>} arrayOfTargets An array of radio IDs.\r\n */\r\nfunction assignEvHandlersToRadios(arrayOfTargets) {\r\n    let isValidTarget = arrayOfTargets => Array.isArray(arrayOfTargets) ?\r\n        arrayOfTargets.every(target => typeof target === 'string') : false;\r\n\r\n    if (!isValidTarget) throw new Error('Parameter must be an array of radioID strings');\r\n    arrayOfTargets.forEach(assignListenersToRadio);\r\n}\r\n\r\n/**\r\n * Assigns event listeners to a radio item.\r\n * @param {string} radioID The ID string used to find the radio item.\r\n */\r\nfunction assignListenersToRadio(radioID) {\r\n    const radio = document.getElementById(radioID);\r\n    // radio.addEventListener('mousedown', () => Animate.makeRadioActive(radioID));\r\n    radio.addEventListener('mousedown', () => _animate__WEBPACK_IMPORTED_MODULE_0__[\"Animate\"].makeActive(radio));\r\n}\n\n//# sourceURL=webpack:///./src/js/helper.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate */ \"./src/js/animate.js\");\n/* harmony import */ var _populateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateDOM */ \"./src/js/populateDOM.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ \"./src/js/helper.js\");\n//@ts-check\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// WORKING WITH JSON\r\nrequestJSON();\r\n\r\nfunction requestJSON() {\r\n    const requestURL = 'http://127.0.0.1:5500/src/radios.json';\r\n    const request = new XMLHttpRequest();\r\n    request.open('GET', requestURL);\r\n    request.responseType = 'json';\r\n    request.send();\r\n    request.onload = () => {\r\n        const radioData = request.response;\r\n        console.log(radioData);\r\n        for (let radio of radioData.music) {\r\n            console.log(radio);\r\n            new _populateDOM__WEBPACK_IMPORTED_MODULE_2__[\"RadioItem\"](radio.name, radio.id, 'music').render();\r\n\r\n        }\r\n        for (const radio of radioData.news) {\r\n            console.log(radio);\r\n            new _populateDOM__WEBPACK_IMPORTED_MODULE_2__[\"RadioItem\"](radio.name, radio.id, 'news').render();\r\n        }\r\n\r\n    };\r\n}\r\n\r\n// new CreateRadio('testRadio', 'testRadio').render();\r\n// const newRadioItem = new CreateRadio('testRadio', 'testRadio');\r\n// newRadioItem.render();\r\n\r\n// RADIO.JS\r\nconst radioSources = [\r\n    // {name: 'offradio', source: 'FAIL-http://46.28.53.118:7062/stream?1529011397134'},\r\n    // {name: 'enlefko', source: 'http://stream.radiojar.com/enlefko877'},\r\n    // {name: 'parapolitika', source: 'http://netradio.live24.gr/athinaradio'},\r\n    // {name: 'best', source: 'http://best.live24.gr:80/best1222'},\r\n    // {name: 'imagine', source: 'http://37.59.32.115:6224/stream'},\r\n    // {name: 'pepper', source: 'http://pepper966.live24.gr:80/pepperorigin'},\r\n    // {name: 'skai', source: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8'}\r\n];\r\n\r\n\r\nconst player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"Player\"]();\r\nconsole.log(`Paused flag: ${player.paused}. Source = ${player.src}`);\r\nplayer.src = 'http://stream.radiojar.com/enlefko877';\r\nconsole.log(`Paused flag: ${player.paused}. Source = ${player.src}`);\r\n\r\nplayer.addEventListener('play', () => console.log(`Trying to play... Paused Flag : ${player.paused}`));\r\nplayer.addEventListener('pause', () => console.log(`Paused... Flag: ${player.paused}`));\r\n\r\n\r\n\r\nfunction assignAudioSource(radioID, source) {\r\n    let radio = document.getElementById(radioID);\r\n    // const source = radioSources.find(element => element.name === radio.id).source;\r\n\r\n    radio.addEventListener('mousedown', () => player.loadRadio(source));\r\n}\r\n\r\nassignAudioSource('offradio');\r\nassignAudioSource('enlefko', 'http://stream.radiojar.com/enlefko877');\r\nassignAudioSource('best', 'http://netradio.live24.gr/athinaradio');\r\nassignAudioSource('imagine');\r\nassignAudioSource('pepper');\r\n\r\n\r\ncontrolPlayPause();\r\nfunction controlPlayPause() {\r\n    const playButton = document.getElementById('play-button');\r\n    const playButtonWrapper = document.getElementById('play-button-wrapper');\r\n\r\n    playButton.addEventListener('mousedown', () => {\r\n        if (player.src === '') {\r\n            alert('Select a radio first!');\r\n        } else {\r\n            if (player.paused) {\r\n                // Play audio and make the radio item active(animation).\r\n                player.play();\r\n                let lastRadio = radioSources.find(element => element.source === player.src).name;\r\n                document.getElementById(lastRadio).classList.add('radio-item-active');\r\n                playButton.classList.add('play-button-active');\r\n                playButtonWrapper.classList.add('play-button-wrapper-active');\r\n\r\n            } else {\r\n                player.pause();\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\n// ANIMATE.JS\r\n\r\n\r\n\r\n/* ----RADIO ITEM FUNCTIONS---- */\r\n// const radioIDs = getAttributeByClassName('radio-item', 'id'); // An array of all the Radio IDs loaded in the DOM.\r\n// assignEvHandlersToRadios(radioIDs);\r\nObject(_helper__WEBPACK_IMPORTED_MODULE_3__[\"assignEvHandlersToRadios\"])(Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"getAttributeByClassName\"])('radio-item', 'id'));\r\n\r\n\r\n/* ----PLAY BUTTON FUNCTIONS---- */\r\nassignListenersToPlayButton();\r\n\r\nfunction assignListenersToPlayButton() {\r\n    const playButton = document.getElementById('play-button');\r\n\r\n    playButton.addEventListener('mousedown', function () {\r\n        if (playButton.classList.contains('play-button-active')) {\r\n            let activeRadio = document.querySelector('.radio-item.radio-item-active');\r\n            activeRadio.classList.remove('radio-item-active');\r\n            _animate__WEBPACK_IMPORTED_MODULE_1__[\"Animate\"].makeButtonIdle();\r\n        }\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n//@ts-check\r\nclass Player extends Audio {\r\n    constructor() {\r\n        super();\r\n    }\r\n\r\n    /**\r\n     * Accepts a url string as a source and starts playing the audio.\r\n     * @param {String} source \r\n     */\r\n    loadRadio(source) {\r\n        if (this.src !== source) this.src = source;\r\n        if (this.paused) {\r\n            console.log(`Source: ${this.src}`);\r\n            this.play()\r\n                .then(() => console.log(`Audio loaded successfully!`))\r\n                .catch( e => console.log(`Failed to load radio... :( ${e}`) );\r\n        } else this.pause();\r\n    }\r\n\r\n    playPauseLoad(radioID) {\r\n        const radio = document.getElementById(radioID);\r\n\r\n        if (this.src === source && !this.paused) this.pause();\r\n        else if (this.src === source) this.play();\r\n        // else this.load(source);\r\n    }\r\n}\r\n\r\nconst radioSources = [\r\n    { name: 'offradio', source: 'FAIL-http://46.28.53.118:7062/stream?1529011397134' },\r\n    { name: 'enlefko', source: 'http://stream.radiojar.com/enlefko877' },\r\n    { name: 'parapolitika', source: 'http://netradio.live24.gr/athinaradio' },\r\n    { name: 'best', source: 'http://best.live24.gr:80/best1222' },\r\n    { name: 'imagine', source: 'http://37.59.32.115:6224/stream' },\r\n    { name: 'pepper', source: 'http://pepper966.live24.gr:80/pepperorigin' },\r\n    { name: 'skai', source: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8' }\r\n];\n\n//# sourceURL=webpack:///./src/js/player.js?");

/***/ }),

/***/ "./src/js/populateDOM.js":
/*!*******************************!*\
  !*** ./src/js/populateDOM.js ***!
  \*******************************/
/*! exports provided: RadioItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RadioItem\", function() { return RadioItem; });\n//@ts-check\r\nclass RadioItem{\r\n    /**\r\n     * Assign attribute values to the radio item.\r\n     * @param {String} name \r\n     * @param {String} id \r\n     */\r\n    constructor(name, id, type){\r\n        this.name = name;\r\n        this.id = id;\r\n        this.type = type;\r\n    }\r\n\r\n    render(){\r\n        const img = document.createElement('div');\r\n        img.setAttribute('class', 'radio-image');\r\n\r\n        const radioItem = document.createElement('li');\r\n        radioItem.setAttribute('class', 'radio-item');\r\n        radioItem.setAttribute('id', this.id);\r\n        radioItem.setAttribute('data-name', this.name);\r\n        radioItem.appendChild(img);\r\n\r\n        const parent = document.getElementById(`${this.type}-radios`);\r\n        parent.appendChild(radioItem);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/populateDOM.js?");

/***/ })

/******/ });