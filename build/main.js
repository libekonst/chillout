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

/***/ "./src/js/RadioItem.js":
/*!*****************************!*\
  !*** ./src/js/RadioItem.js ***!
  \*****************************/
/*! exports provided: RadioItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RadioItem\", function() { return RadioItem; });\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./src/js/animate.js\");\n\r\n\r\n//@ts-check\r\nclass RadioItem {\r\n\r\n    /** \r\n     * Bundles properties together to create a radio item, load it to the DOM and assign event listeners to it.\r\n     * @param {String} name The value used as the \"data-name\" attribute.\r\n     * @param {String} id The value used as the \"id\" attribute.\r\n     * @param {String} imgURL The source for the background image of the child div.\r\n     * @param {String} src The radio's stream source\r\n     * @param {String} type Used to render the radio item under a certain parent <ul> element, based on its place in the JSON file.\r\n     */\r\n    constructor(name, id, imgURL, src, type) {\r\n        this.name = name;\r\n        this.id = id;\r\n        this.img = imgURL;\r\n        this.src = src;\r\n        this.type = type;\r\n        this.render();\r\n        console.log(this);\r\n        document.getElementById(this.id).addEventListener('mousedown', () => {\r\n            this.play();\r\n        });\r\n    }\r\n\r\n    /** Loads a RadioItem object into the DOM and converts its properties into Element attributes. */\r\n    render() {\r\n        const img = document.createElement('div');\r\n        img.setAttribute('class', 'radio-image');\r\n        img.style.backgroundImage = `url(${this.img})`;\r\n\r\n        const radioItem = document.createElement('li');\r\n        radioItem.setAttribute('class', 'radio-item');\r\n        radioItem.setAttribute('id', this.id);\r\n        radioItem.setAttribute('data-name', this.name);\r\n        radioItem.setAttribute('data-content', 'pause');\r\n        radioItem.appendChild(img);\r\n\r\n        const parent = document.getElementById(`${this.type}-radios`);\r\n        parent.appendChild(radioItem);\r\n    }\r\n\r\n    /** Finds the <audio> element in the DOM, changes its source, calls its play() or pause() methods and handles the radio item's animations.*/\r\n    play() {\r\n        const player = document.getElementsByTagName('audio')[0];\r\n        console.log(`Loading ${this.name}...`); //Replace with a function that reads this.name and displays info to the user.\r\n        \r\n        this.setAudioSource(player);\r\n        if (player.paused)\r\n            this.startAudio(player);\r\n        else \r\n            this.stopAudio(player);\r\n\r\n        console.log(`Player paused? ${player.paused}`);\r\n    }\r\n\r\n    /**\r\n     * Checks if audio source is the same as the radio item's source.\r\n     * If not, it updates the source and changes other radios to idle.\r\n     * @param {HTMLAudioElement} audio The Audio Element responsible for playing the sound content.\r\n     */\r\n    setAudioSource(audio) {\r\n        if (audio.src !== this.src) {\r\n            audio.src = this.src;\r\n            _animate__WEBPACK_IMPORTED_MODULE_0__[\"Animate\"].killOtherActive(document.getElementById(this.id));\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Starts the audio and changes the radio item's styles to active.\r\n     * @param {HTMLAudioElement} audio \r\n     */\r\n    startAudio(audio) {\r\n        _animate__WEBPACK_IMPORTED_MODULE_0__[\"Animate\"].makeRadioActive(this);\r\n        audio.play()\r\n            .then(() => console.log(`Playing ${this.name}...`)) //Replace with a function that reads this.name and displays info to the user.\r\n            .catch(error => {\r\n                console.log(`Failed to load radio... :( ${error}.`); //Replace with a function that reads e and displays info to the user.\r\n                console.log(this);\r\n                _animate__WEBPACK_IMPORTED_MODULE_0__[\"Animate\"].makeRadioIdle(this);\r\n            });\r\n    }\r\n\r\n    /**\r\n     * Pauses the audio and changes the radio item's styles to idle.\r\n     * @param {HTMLAudioElement} audio \r\n     */\r\n    stopAudio(audio) {\r\n        _animate__WEBPACK_IMPORTED_MODULE_0__[\"Animate\"].makeRadioIdle(this);\r\n        audio.pause();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/RadioItem.js?");

/***/ }),

/***/ "./src/js/animate.js":
/*!***************************!*\
  !*** ./src/js/animate.js ***!
  \***************************/
/*! exports provided: Animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animate\", function() { return Animate; });\n//@ts-check\r\n\r\n/** Contains static methods used as Event Handlers for animations.*/\r\nclass Animate {\r\n\r\n    // Assigns the appropriate Event Handlers to a DOM Element, based on its type.\r\n    // Probably remove.\r\n    static makeActive(element = {}) {\r\n        const myClass = element.classList.item(0);\r\n        const type = eventTargets.find(object => object.baseClass === myClass).type;\r\n        console.log(type);\r\n\r\n        if (type === 'radio') {\r\n            Animate.makeRadioActive(element.getAttribute('id'));\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Applies the radio-item-active styles and activates the play button.\r\n     * @param {Element} element CURRENTLY USING WITH OTHER OBJECTS TOO\r\n     */\r\n    static makeRadioActive(element) {\r\n        const radio = document.getElementById(element.id);\r\n\r\n        if (!radio.classList.contains('radio-item-active')) {\r\n            radio.classList.add('radio-item-active');\r\n            Animate.makeButtonActive();\r\n        } \r\n\r\n    }\r\n\r\n    /**\r\n     * Removes the radio-item-active styles and deactivates the play button.\r\n     * @param {Element} element \r\n     */\r\n    static makeRadioIdle(element){\r\n        const radio = document.getElementById(element.id);\r\n\r\n        radio.classList.remove('radio-item-active');\r\n        Animate.makeButtonIdle();\r\n    }\r\n    \r\n    /**\r\n     * Removes the '-active' styles from other items of the same type, making them display idle.\r\n     * @param {Element} element\r\n     */\r\n    static killOtherActive(element) {\r\n        const myClassList = element.classList;\r\n        const myClass = element.classList.item(0);\r\n\r\n        if (!myClassList.contains(`${myClass}-active`)) {\r\n            const otherActive = document.getElementsByClassName(`${myClass}-active`);\r\n            for (const activeItem of otherActive) {\r\n                activeItem.classList.remove(`${myClass}-active`);\r\n            }\r\n        }\r\n    }\r\n    \r\n    /** Applies the play-button-active and play-button-wrapper-active styles. */\r\n    static makeButtonActive() {\r\n        const playButton = document.getElementById('play-button');\r\n        const buttonWrapper = document.getElementById('play-button-wrapper');\r\n\r\n        playButton.classList.add('play-button-active');\r\n        buttonWrapper.classList.add('play-button-wrapper-active');\r\n    }\r\n\r\n    /** Removes the play-button-active and play-button-wrapper-active styles. */\r\n    static makeButtonIdle() {\r\n        const playButton = document.getElementById('play-button');\r\n        const buttonWrapper = document.getElementById('play-button-wrapper');\r\n\r\n        playButton.classList.remove('play-button-active');\r\n        buttonWrapper.classList.remove('play-button-wrapper-active');\r\n    }\r\n}\r\n\r\nconst eventTargets = [{\r\n    type: 'radio',\r\n    baseClass: 'radio-item'\r\n},\r\n{\r\n    type: 'play-button',\r\n    baseClass: 'play-button'\r\n}\r\n];\n\n//# sourceURL=webpack:///./src/js/animate.js?");

/***/ }),

/***/ "./src/js/helper.js":
/*!**************************!*\
  !*** ./src/js/helper.js ***!
  \**************************/
/*! exports provided: getAttributeByClassName, assignEvHandlersToRadios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAttributeByClassName\", function() { return getAttributeByClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignEvHandlersToRadios\", function() { return assignEvHandlersToRadios; });\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./src/js/animate.js\");\n//@ts-check\r\n\r\n\r\n/**\r\n * Retrieves an HTMLCollection of Elements by their className and returns an array of each Element's requested attribute.\r\n * @param {string} className The class name by which Elements will be collected.\r\n * @param {string} attr The requested attribute.\r\n * @returns {Array<string>} An array of attribute values as strings.\r\n */\r\nfunction getAttributeByClassName(className, attr) {\r\n    const radioCollection = document.getElementsByClassName(className);\r\n    let arrayOfAttributes = [];\r\n    \r\n    validateRequest();\r\n    for (let radio of radioCollection) {\r\n        arrayOfAttributes.push(radio.getAttribute(attr));\r\n    }\r\n    return arrayOfAttributes;\r\n\r\n    function validateRequest() {\r\n        if (radioCollection.length < 1){\r\n            throw new Error(`No elements of class '${className}' found.`);\r\n        }\r\n        \r\n        for (let radio of radioCollection) {\r\n            if (!radio.hasAttribute(attr))\r\n                throw new Error(`No ${attr} assigned to this element.`);\r\n        }\r\n    }\r\n}\r\n\r\n/**\r\n * Takes an array of radio IDs and calls a callback fn on each radio respectively.\r\n * @param {Array<string>} arrayOfTargets An array of radio IDs.\r\n */\r\nfunction assignEvHandlersToRadios(arrayOfTargets) {\r\n    let isValidTarget = arrayOfTargets => Array.isArray(arrayOfTargets) ?\r\n        arrayOfTargets.every(target => typeof target === 'string') : false;\r\n\r\n    if (!isValidTarget) throw new Error('Parameter must be an array of radioID strings');\r\n    arrayOfTargets.forEach(assignListenersToRadio);\r\n}\r\n\r\n/**\r\n * Assigns event listeners to a radio item.\r\n * @param {string} radioID The ID string used to find the radio item.\r\n */\r\nfunction assignListenersToRadio(radioID) {\r\n    const radio = document.getElementById(radioID);\r\n    // radio.addEventListener('mousedown', () => Animate.makeRadioActive(radioID));\r\n    radio.addEventListener('mousedown', () => _animate__WEBPACK_IMPORTED_MODULE_0__[\"Animate\"].makeActive(radio));\r\n}\n\n//# sourceURL=webpack:///./src/js/helper.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/js/helper.js\");\n/* harmony import */ var _populateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateDOM */ \"./src/js/populateDOM.js\");\n/* harmony import */ var _playButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playButton */ \"./src/js/playButton.js\");\n//@ts-check\r\n\r\n\r\n\r\n\r\n\r\n// WORKING WITH JSON\r\nObject(_populateDOM__WEBPACK_IMPORTED_MODULE_1__[\"requestJSON\"])();\r\n\r\n\r\n/**\r\n * One file with functions for play button functionality.\r\n * One file for radio item functionality(RadioItem.js).\r\n * One file for animations.\r\n * Combine them all here.\r\n */\r\n\r\n /**\r\n  * OR handle each component individually and combine here those that intertwine?\r\n  * OR have an Animations module that adds animations to everything and import it to each component. \r\n  */\r\n\r\n\r\n\r\n\r\n\r\n// player.addEventListener('play', () => console.log(`Trying to play... Paused Flag : ${player.paused}`));\r\n// player.addEventListener('pause', () => console.log(`Paused... Flag: ${player.paused}`));\r\n\r\n\r\n// function assignAudioSource(radioID, source) {\r\n//     let radio = document.getElementById(radioID);\r\n//     // const source = radioSources.find(element => element.name === radio.id).source;\r\n\r\n//     radio.addEventListener('mousedown', () => player.loadRadio(source));\r\n// }\r\n\r\n// assignAudioSource('offradio', 'FAIL-http://46.28.53.118:7062/stream?1529011397134');\r\n// assignAudioSource('enlefko', 'http://stream.radiojar.com/enlefko877');\r\n// assignAudioSource('best', 'http://best.live24.gr:80/best1222');\r\n// assignAudioSource('imagine', 'http://37.59.32.115:6224/stream');\r\n// assignAudioSource('pepper', 'http://pepper966.live24.gr:80/pepperorigin');\r\n// assignAudioSource('parapolitika', 'http://netradio.live24.gr/athinaradio');\r\n\r\n\r\n// ANIMATE.JS\r\n\r\n/* ----RADIO ITEM FUNCTIONS---- */\r\nconst radioIDs = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"getAttributeByClassName\"])('radio-item', 'id'); // An array of all the Radio IDs loaded in the DOM.\r\nconsole.log(`Radio IDs: ${radioIDs}`);\r\n// assignEvHandlersToRadios(radioIDs);\r\n// assignEvHandlersToRadios(getAttributeByClassName('radio-item', 'id'));\r\n\r\n\r\n/* ----PLAY BUTTON FUNCTIONS---- */\r\nObject(_playButton__WEBPACK_IMPORTED_MODULE_2__[\"assignListenersToPlayButton\"])();\r\n\r\n\r\n\r\nObject(_playButton__WEBPACK_IMPORTED_MODULE_2__[\"controlPlayPause\"])();\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/playButton.js":
/*!******************************!*\
  !*** ./src/js/playButton.js ***!
  \******************************/
/*! exports provided: assignListenersToPlayButton, controlPlayPause */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignListenersToPlayButton\", function() { return assignListenersToPlayButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controlPlayPause\", function() { return controlPlayPause; });\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./src/js/animate.js\");\n\r\n\r\n//@ts-check\r\n\r\nfunction assignListenersToPlayButton() {\r\n    const playButton = document.getElementById('play-button');\r\n\r\n    playButton.addEventListener('mousedown', function () {\r\n        if (playButton.classList.contains('play-button-active')) {\r\n            let activeRadio = document.querySelector('.radio-item.radio-item-active');\r\n            activeRadio.classList.remove('radio-item-active');\r\n            _animate__WEBPACK_IMPORTED_MODULE_0__[\"Animate\"].makeButtonIdle();\r\n        }\r\n    });\r\n}\r\n\r\nfunction controlPlayPause() {\r\n    const playButton = document.getElementById('play-button');\r\n    const playButtonWrapper = document.getElementById('play-button-wrapper');\r\n    const audio = document.getElementsByTagName('audio')[0];\r\n\r\n    playButton.addEventListener('mousedown', () => {\r\n        if (audio.src === \"\") {\r\n            alert('Select a radio first!');\r\n            return;\r\n        }\r\n\r\n        if (audio.paused) {\r\n            audio.play();\r\n            playButton.classList.add('play-button-active');\r\n            playButtonWrapper.classList.add('play-button-wrapper-active');\r\n\r\n            let lastRadio = radioSources.find(element => element.source === audio.src).name;\r\n            document.getElementById(lastRadio).classList.add('radio-item-active');\r\n        } else {\r\n            audio.pause();\r\n            playButton.classList.remove('play-button-active');\r\n            playButtonWrapper.classList.remove('play-button-wrapper-active');\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/js/playButton.js?");

/***/ }),

/***/ "./src/js/populateDOM.js":
/*!*******************************!*\
  !*** ./src/js/populateDOM.js ***!
  \*******************************/
/*! exports provided: requestJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestJSON\", function() { return requestJSON; });\n/* harmony import */ var _RadioItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioItem */ \"./src/js/RadioItem.js\");\n\r\n\r\n//@ts-check\r\n/**\r\n * Sends an HTTP Request to get the radios.json file.\r\n * When the response property is implemented with the response object, \r\n * calls a function that handles the json data from the response.\r\n */\r\nfunction requestJSON() {\r\n    const requestURL = '../src/radios.json';\r\n    const request = new XMLHttpRequest();\r\n    request.open('GET', requestURL);\r\n    request.responseType = 'json';\r\n    request.send();\r\n    \r\n    request.onload = () => {\r\n        renderRadios(request);\r\n    };\r\n}\r\n\r\nfunction renderRadioSection(request){\r\n    // Takes the response and creates a <section></section> for each array (i.e. radio type) in JSON.\r\n    // Then populate the section with an <h2>${type} Radios</h2>. First letter capitalized.\r\n    // Also add an Unorder List and populate it with radio items using RenderRadios().\r\n\r\n    const radioTypes = request.response;\r\n\r\n    for (let type in radioTypes){\r\n        // ...\r\n    }\r\n}\r\n\r\n/**\r\n * Parses the response object and creates RadioItem objects using its data.\r\n * Each RadioItem object loads itself to the DOM when it gets created.\r\n * @param {XMLHttpRequest} request A XMLHttpRequest object which has a response property.\r\n */\r\nfunction renderRadios(request) {\r\n    const radioData = request.response;\r\n    console.log(`Radio data: ${radioData}`);\r\n    for (let radio of radioData.music) {\r\n        // The created object is not stored in a var because we don't need it anymore. We can access the Element directly from the DOM.\r\n        new _RadioItem__WEBPACK_IMPORTED_MODULE_0__[\"RadioItem\"](radio.name, radio.id, radio.img, radio.source, 'music');\r\n    }\r\n    for (const radio of radioData.news) {\r\n        new _RadioItem__WEBPACK_IMPORTED_MODULE_0__[\"RadioItem\"](radio.name, radio.id, radio.img, radio.source, 'news');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/populateDOM.js?");

/***/ })

/******/ });