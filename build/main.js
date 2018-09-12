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

/***/ "./src/js/AnimationsInterface.js":
/*!***************************************!*\
  !*** ./src/js/AnimationsInterface.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//@ts-check\r\n\r\n/** Animation classes should inherit from this class and override its methods. Simulates an Interface. */\r\nclass AnimationsInterface {\r\n    makeActive() {\r\n        throw new Error('Method not implemented!');\r\n    }\r\n\r\n    makeIdle() {\r\n        throw new Error('Method not implemented!');\r\n    }\r\n\r\n    killOtherActive() {\r\n        throw new Error('Method not implemented!');\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimationsInterface);\r\n\n\n//# sourceURL=webpack:///./src/js/AnimationsInterface.js?");

/***/ }),

/***/ "./src/js/AudioController.js":
/*!***********************************!*\
  !*** ./src/js/AudioController.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AudioController {\r\n    /** A controller that allows objects to interact with the Audio element. */\r\n    constructor() {\r\n        this.audio = document.querySelector('audio');\r\n        if (this.audio === null)\r\n            throw new Error('No Audio element found on the DOM.');\r\n    }\r\n\r\n    /** Loads and starts playback of a media resource.*/\r\n    play() {\r\n        return this.audio.play();\r\n    }\r\n\r\n    /** Pauses the current playback and sets paused to TRUE. */\r\n    pause() {\r\n        return this.audio.pause();\r\n    }\r\n\r\n    /** Sets the Audio element's source to the specified address or URL. */\r\n    set source(sourceURL) {\r\n        this.audio.src = sourceURL;\r\n    }\r\n    get source() {\r\n        return this.audio.src;\r\n    }\r\n\r\n    /** Stores the ID of the latest selected radio so that it can be accessed by other objects. */\r\n    set lastRadio(radioID) {\r\n        this.audio.dataset.lastRadio = radioID;\r\n    }\r\n    get lastRadio() {\r\n        return this.audio.dataset.lastRadio;\r\n    }\r\n\r\n    get volume(){\r\n        return this.audio.volume;\r\n    }\r\n    set volume(val){\r\n        this.audio.volume = val;\r\n    }\r\n\r\n    get muted(){\r\n        return this.audio.muted;\r\n    }\r\n    set muted(bool){\r\n        this.audio.muted = bool;\r\n    }\r\n\r\n    /** Gets a flag that specifies whether playback is paused. */\r\n    get paused(){\r\n        return this.audio.paused;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (AudioController);\r\n\n\n//# sourceURL=webpack:///./src/js/AudioController.js?");

/***/ }),

/***/ "./src/js/PlayButtonAnim.js":
/*!**********************************!*\
  !*** ./src/js/PlayButtonAnim.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AnimationsInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationsInterface */ \"./src/js/AnimationsInterface.js\");\n\r\n\r\n/** Creates an object with methods that handle the play button's animations.*/\r\nclass PlayButtonAnim extends _AnimationsInterface__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    /**Adds the '-active' className to apply the active button styles. */\r\n    makeActive() {\r\n        document.getElementById('play-button')\r\n            .classList.add('play-button-active');\r\n        document.getElementById('play-button-wrapper')\r\n            .classList.add('play-button-wrapper-active');\r\n    }\r\n\r\n    /**Strips the '-active' className to remove the active button styles. */\r\n    makeIdle() {\r\n        document.getElementById('play-button')\r\n            .classList.remove('play-button-active');\r\n        document.getElementById('play-button-wrapper')\r\n            .classList.remove('play-button-wrapper-active');\r\n    }\r\n\r\n    loading(){\r\n        // Display a loading circle.\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayButtonAnim);\n\n//# sourceURL=webpack:///./src/js/PlayButtonAnim.js?");

/***/ }),

/***/ "./src/js/RadioAnim.js":
/*!*****************************!*\
  !*** ./src/js/RadioAnim.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AnimationsInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationsInterface */ \"./src/js/AnimationsInterface.js\");\n//@ts-check\r\n\r\n\r\nclass RadioAnim extends _AnimationsInterface__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    /** \r\n     * Creates an object with methods that handle a radioItem's animations.\r\n     * @param {String} radioID Target radioItem ID. Provide initially in the \r\n     * constructor or later by setting radioAnim.id = radioItem.id */\r\n    constructor(radioID = '') {\r\n        super();\r\n        this._id = radioID;\r\n    }\r\n\r\n    /**Adds the radio-item-active className to apply the active radio styles. */\r\n    makeActive() {\r\n        this.hasID();\r\n        document.getElementById(this.id)\r\n            .classList.add('radio-item-active');\r\n    }\r\n\r\n    /** Strips the radio-item-active className to remove the active styles. */\r\n    makeIdle() {\r\n        this.hasID();\r\n        document.getElementById(this.id)\r\n            .classList.remove('radio-item-active');\r\n    }\r\n\r\n    /** Strips the radio-item-active className from every other radioItem. */\r\n    killOtherActive() {\r\n        this.hasID();\r\n        [...document.getElementsByClassName('radio-item-active')]\r\n            .forEach(radio => radio.classList.remove('radio-item-active'));\r\n    }\r\n\r\n    /** Checks if the radioAnim's id property has been set. */\r\n    hasID() {\r\n        if (this.id === '')\r\n            throw new Error('Set radioAnim.id equal to target radioItem.id first.');\r\n    }\r\n\r\n    /**@param {String} id Set equal to the ID of target radioItem. */\r\n    set id(id) {\r\n        this._id = id; // Ugly :(\r\n    }\r\n    get id() {\r\n        return this._id;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RadioAnim);\n\n//# sourceURL=webpack:///./src/js/RadioAnim.js?");

/***/ }),

/***/ "./src/js/RadioItem.js":
/*!*****************************!*\
  !*** ./src/js/RadioItem.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RadioAnim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioAnim */ \"./src/js/RadioAnim.js\");\n/* harmony import */ var _AudioController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioController */ \"./src/js/AudioController.js\");\n/* harmony import */ var _PlayButtonAnim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayButtonAnim */ \"./src/js/PlayButtonAnim.js\");\n/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast */ \"./src/js/toast.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass RadioItem {\r\n    /** \r\n     * Creates a radioItem composing of several objects, loads it to the DOM and assigns event listeners to it.\r\n     * @param {RadioProps} radioProps An object containing radio specific properties.\r\n     * @param {RadioAnim} radioAnim Contains methods that handle the radioItem animations.\r\n     * @param {AudioController} audioController Contains methods that allow interaction with the <audio>.\r\n     * @param {PlayButtonAnim} playButtonAnim Contains methods that affect the play button's animations.\r\n     * @param {String} type Used to render the radio item under a certain parent <ul> element.\r\n     */\r\n    constructor(radioProps, radioAnim, audioController, playButtonAnim, type) {\r\n        this.setProps(radioProps);\r\n        this.radioAnim = radioAnim;\r\n        this.audio = audioController;\r\n        this.buttonAnim = playButtonAnim;\r\n        this.type = type;\r\n        this.render()\r\n            .addEventListeners();\r\n    }\r\n\r\n    setProps(radioProps) {\r\n        if (this.isValid(radioProps)) {\r\n            this.id = radioProps.id;\r\n            this.name = radioProps.name;\r\n            this.source = radioProps.source;\r\n            this.img = radioProps.img;\r\n        } else\r\n            throw new Error('A radioProps object must have .id, .name, .source and .img properties.');\r\n    }\r\n\r\n    /** Checks if the object containing the radio info has the right properties. */\r\n    isValid(props) {\r\n        return props.hasOwnProperty('id') &&\r\n            props.hasOwnProperty('name') &&\r\n            props.hasOwnProperty('img') &&\r\n            props.hasOwnProperty('source');\r\n    }\r\n\r\n    /** Loads the radioItem to the DOM and converts its properties into Element attributes. */\r\n    render() {\r\n        // Creates a <div> which holds the radio image.\r\n        const img = document.createElement('div');\r\n        img.setAttribute('class', 'radio-image');\r\n        img.style.backgroundImage = `url(${this.img})`;\r\n\r\n        // Creates a <li> element which represents the radioItem.\r\n        const radioItem = document.createElement('li');\r\n        radioItem.setAttribute('class', 'radio-item');\r\n        radioItem.setAttribute('id', this.id);\r\n        radioItem.setAttribute('data-name', this.name);\r\n        radioItem.appendChild(img);\r\n\r\n        // Appends the radioItem to the parent <ul>.\r\n        document.getElementById(`${this.type}-radios`).appendChild(radioItem);\r\n\r\n        // Returns 'this' so that another method can be chained.\r\n        return this;\r\n    }\r\n\r\n    /** Finds the radioItem on the DOM and assigns Event Listeners to it. */\r\n    addEventListeners() {\r\n        document.getElementById(this.id).addEventListener('mousedown', () => {\r\n            this.handleClick();\r\n        });\r\n    }\r\n\r\n    /** Updates the audio source, toggles play/pause and playbtn animations */\r\n    handleClick() {\r\n        this.updateAudioSource();\r\n\r\n        if (this.audio.paused)\r\n            this.startAudio();\r\n        else\r\n            this.pauseAudio();\r\n\r\n        console.log(`Player paused? ${this.audio.paused}`);\r\n    }\r\n\r\n    /** Updates the audio source if different. If so, also makes other radios idle. */\r\n    // BUG: If a radio can't be loaded, responds only once to the user and then does nothing onclick, because it checks\r\n    // if the audio source has changed.\r\n    updateAudioSource() {\r\n        if (this.audio.source !== this.source) {\r\n            console.log(`Loading ${this.name}...`);\r\n            this.audio.source = this.source;\r\n            this.radioAnim.killOtherActive();\r\n        }\r\n    }\r\n\r\n    /** Starts the audio and changes the radioItem's styles to active. */\r\n    startAudio() {\r\n        this.radioAnim.makeActive();\r\n        this.buttonAnim.makeActive();\r\n        this.audio.lastRadio = this.id;\r\n\r\n        this.audio.play()\r\n            .then(() => {\r\n                console.log(`Playing ${this.name}...`);\r\n                this.buttonAnim.makeActive();\r\n            })\r\n            .catch(error => {\r\n                console.log(`Failed to load radio... ${error}.`);\r\n                this.radioAnim.makeIdle();\r\n                this.buttonAnim.makeIdle();\r\n                Object(_toast__WEBPACK_IMPORTED_MODULE_3__[\"displayToast\"])(`Failed to load ${this.name}`);\r\n            });\r\n    }\r\n\r\n    /** Pauses the audio and changes the radioItem's styles to idle. */\r\n    pauseAudio() {\r\n        this.radioAnim.makeIdle();\r\n        this.audio.pause();\r\n        this.buttonAnim.makeIdle();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RadioItem);\r\n\r\n\r\n/** @typedef {Object} RadioProps An object with data about a specific radio. \r\n * @property {string} id Unique radio ID.\r\n * @property {string} name Radio name that will be displayed.\r\n * @property {string} source Stream URL.\r\n * @property {string} img Image source URL.\r\n */\r\n\n\n//# sourceURL=webpack:///./src/js/RadioItem.js?");

/***/ }),

/***/ "./src/js/helper.js":
/*!**************************!*\
  !*** ./src/js/helper.js ***!
  \**************************/
/*! exports provided: getAttributeByClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAttributeByClassName\", function() { return getAttributeByClassName; });\n/**\r\n * Finds Elements by their className and returns an array of each Element's requested attribute.\r\n * @param {string} className The class name by which Elements will be collected.\r\n * @param {string} attr The requested attribute.\r\n * @returns {Array<string>} An array of attribute values as strings.\r\n */\r\nfunction getAttributeByClassName(className, attr) {\r\n    return [...document.getElementsByClassName(className)]\r\n        .map(el => el.getAttribute(attr).toString());\r\n}\r\n\r\n/* function validateRequest(collection) {\r\n    if (collection.length < 1) {\r\n        throw new Error(`No elements of class '${className}' found.`);\r\n    }\r\n\r\n    for (let radio of collection) {\r\n        if (!radio.hasAttribute(attr))\r\n            throw new Error(`No ${attr} assigned to this element.`);\r\n    }\r\n} */\n\n//# sourceURL=webpack:///./src/js/helper.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/js/helper.js\");\n/* harmony import */ var _populateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateDOM */ \"./src/js/populateDOM.js\");\n/* harmony import */ var _playButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playButton */ \"./src/js/playButton.js\");\n/* harmony import */ var _volume_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volume-bar */ \"./src/js/volume-bar.js\");\n//@ts-check\r\n\r\n\r\n\r\n\r\n\r\n\r\n// WORKING WITH JSON\r\nObject(_populateDOM__WEBPACK_IMPORTED_MODULE_1__[\"requestJSON\"])();\r\n\r\n\r\n// A useless array of all the Radio IDs loaded in the DOM.\r\n// Call the fn async, after the radios are loaded, then save the array \r\n// to use later for right-left arrow key navigation.\r\nsetTimeout(() => {\r\n    const radioIDs = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"getAttributeByClassName\"])('radio-item', 'id');\r\n    console.log(`Radio IDs: ${radioIDs}`);\r\n}, 5000); \r\n\r\n// Play button function. Temporary.\r\nObject(_playButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nObject(_volume_bar__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/playButton.js":
/*!******************************!*\
  !*** ./src/js/playButton.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PlayButtonAnim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayButtonAnim */ \"./src/js/PlayButtonAnim.js\");\n/* harmony import */ var _AudioController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioController */ \"./src/js/AudioController.js\");\n/* harmony import */ var _RadioAnim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RadioAnim */ \"./src/js/RadioAnim.js\");\n/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast */ \"./src/js/toast.js\");\n//@ts-check\r\n\r\n\r\n\r\n\r\n\r\nconst buttonAnim = new _PlayButtonAnim__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst audio = new _AudioController__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst radioAnim = new _RadioAnim__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\nfunction controlPlayPause() {\r\n    document.getElementById('play-button').addEventListener('mousedown', () => {\r\n        // ID provided on function call because it changes dynamically.\r\n        radioAnim.id = audio.lastRadio;\r\n\r\n        if (audio.source === '')\r\n            return Object(_toast__WEBPACK_IMPORTED_MODULE_3__[\"displayToast\"])('Select a radio first!');\r\n        if (audio.paused)\r\n            turnOn();\r\n        else\r\n            turnOff();\r\n    });\r\n}\r\n\r\nfunction turnOn() {\r\n    buttonAnim.makeActive();\r\n    radioAnim.makeActive();\r\n    audio.play()\r\n        .catch(error => {\r\n            turnOff();\r\n            console.log(error);\r\n            Object(_toast__WEBPACK_IMPORTED_MODULE_3__[\"displayToast\"])(`Can't load ${audio.lastRadio}...`);\r\n        });\r\n}\r\n\r\nfunction turnOff() {\r\n    audio.pause();\r\n    buttonAnim.makeIdle();\r\n    radioAnim.makeIdle();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlPlayPause);\n\n//# sourceURL=webpack:///./src/js/playButton.js?");

/***/ }),

/***/ "./src/js/populateDOM.js":
/*!*******************************!*\
  !*** ./src/js/populateDOM.js ***!
  \*******************************/
/*! exports provided: requestJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestJSON\", function() { return requestJSON; });\n/* harmony import */ var _RadioItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioItem */ \"./src/js/RadioItem.js\");\n/* harmony import */ var _RadioAnim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioAnim */ \"./src/js/RadioAnim.js\");\n/* harmony import */ var _AudioController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioController */ \"./src/js/AudioController.js\");\n/* harmony import */ var _PlayButtonAnim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayButtonAnim */ \"./src/js/PlayButtonAnim.js\");\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Sends an HTTP Request to get the radios.json file.\r\n * When the response object is returned, calls a function that handles the json data.\r\n */\r\nfunction requestJSON() {\r\n    // const requestURL = \"http://127.0.0.1:5500/src/radios.json\";\r\n    const requestURL = 'https://kostaslib.github.io/chillout/src/radios.json';\r\n    const request = new XMLHttpRequest();\r\n    request.open('GET', requestURL);\r\n    request.responseType = 'json';\r\n    request.send();\r\n\r\n    request.onload = () => renderRadios(request);\r\n}\r\n\r\n/**\r\n * Parses the response object and creates RadioItem objects using its data.\r\n * RadioItems load themselves to the DOM automatically when created.\r\n * @param {XMLHttpRequest} request A XMLHttpRequest object which has a response property.\r\n */\r\nfunction renderRadios(request) {\r\n    const radioData = request.response;\r\n    \r\n    for (let radio of radioData.music) {\r\n        new _RadioItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](radio, new _RadioAnim__WEBPACK_IMPORTED_MODULE_1__[\"default\"](radio.id), new _AudioController__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), new _PlayButtonAnim__WEBPACK_IMPORTED_MODULE_3__[\"default\"](), 'music');\r\n        console.log(`Loaded ${radio.name}`);\r\n    }\r\n    for (let radio of radioData.news) {\r\n        new _RadioItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](radio, new _RadioAnim__WEBPACK_IMPORTED_MODULE_1__[\"default\"](radio.id), new _AudioController__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), new _PlayButtonAnim__WEBPACK_IMPORTED_MODULE_3__[\"default\"](), 'news');\r\n        console.log(`Loaded ${radio.name}`);\r\n    }\r\n}\r\n\r\nfunction renderRadioSection(request) {\r\n    // Takes the response and creates a <section></section> for each array (i.e. radio type) in JSON.\r\n    // Then populate the section with an <h2>${type} Radios</h2>. First letter capitalized.\r\n    // Also add an Unorder List and populate it with radio items using renderRadios().\r\n}\n\n//# sourceURL=webpack:///./src/js/populateDOM.js?");

/***/ }),

/***/ "./src/js/toast.js":
/*!*************************!*\
  !*** ./src/js/toast.js ***!
  \*************************/
/*! exports provided: displayToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayToast\", function() { return displayToast; });\n//@ts-check\r\nfunction displayToast(message = '') {\r\n    const toast = document.getElementById('toast');\r\n    toast.innerHTML = message;\r\n    toast.classList.add('show');\r\n    setTimeout(() => toast.classList.remove('show'), 2900);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/toast.js?");

/***/ }),

/***/ "./src/js/volume-bar.js":
/*!******************************!*\
  !*** ./src/js/volume-bar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AudioController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioController */ \"./src/js/AudioController.js\");\n\r\n\r\nconst audio = new _AudioController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nfunction changeVolume() {\r\n    audio.volume = this.value / 100;\r\n}\r\n\r\nfunction addVolumeControls() {\r\n    const volumeBar = document.getElementById('volume-bar');\r\n\r\n    audio.volume = 0.2;\r\n    volumeBar.addEventListener('change', changeVolume);\r\n    volumeBar.addEventListener('input', changeVolume);\r\n    mute();\r\n}\r\n\r\nfunction mute() {\r\n    const volBtn = document.getElementById('volume-icon');\r\n\r\n    document.getElementById('volume-icon')\r\n        .addEventListener('click', () => {\r\n            if (audio.muted) {\r\n                audio.muted = false;\r\n                volBtn.innerHTML = 'volume_up';\r\n            } else {\r\n                audio.muted = true;\r\n                volBtn.innerHTML = 'volume_off';\r\n            }\r\n        });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (addVolumeControls);\n\n//# sourceURL=webpack:///./src/js/volume-bar.js?");

/***/ })

/******/ });