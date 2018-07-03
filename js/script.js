/**
 * The purpose of this script is to streamline the Event Listener assignment process.
 * The intention is to have a single function that accepts a DOM Element ID or array of IDs as a parameter,
 * then assigns the appropriate listeners and functions to the ID (i.e. the event target).
 * The fn should complete the assignment based on the target's purpose in the app and its animation complexity.
 */

//@ts-check

//Contains methods to be used as event handlers.
class AnimationTools {

    // Creates an object that holds data used by the event handlers.
    constructor(name = '', hasActiveHover = false) {
        this.idle = name;
        this.hover = `${name} ${name}-hover`;
        this.active = `${name} ${name}-active`;
        this.activeHover = `${name} ${name}-active-hover`;
        this.hasActiveHover = hasActiveHover;
    }

    // onMouseOver
    changeToHover(obj = {}) {
        if (obj.className === this.idle) {
            obj.className = this.hover;
        } else if (this.hasActiveHover) {
            obj.className = this.activeHover;
        }
    }

    // onMouseOut
    changeToIdle(obj = {}) {
        if (obj.className === this.hover) {
            obj.className = this.idle;
        } else if (this.hasActiveHover) {
            obj.className = this.active;
        }
    }

    // onClick
    changeToActive(obj = {}) {
        if (obj.className === this.hover || obj.className === this.idle) {
            if (!this.hasActiveHover) {
                // Change other active items (normally 1) to idle.
                let otherActive = document.getElementsByClassName(this.active); // HTMLCollection, indexable array-like object.
                for (let i = 0; i < otherActive.length; i++) {
                    otherActive[i].className = this.idle;
                    // Fail safe - could just use otherActive[0].
                }
            }
            obj.className = this.active;
        } else {
            obj.className = this.hover;
        }
    }
}

const radioIDs = ['offradio', 'best', 'enlefko', 'imagine', 'pepper']; // TODO: Fn that parses json or the DOM and returns array.

initializeAnimations(radioIDs);
initializeAnimations('play-button');
initializeAnimations(3); // Intentionally throws an error.

// Calls functions that add event listeners to the event target.
function initializeAnimations(eventTarget) {
    if (isValidEventTarget(eventTarget) && Array.isArray(eventTarget)) {
        eventTarget.forEach(addEventListenersToRadio); // Indexes the array of event targets and passes each target as arg to the callback fn.
    } else if (isValidEventTarget(eventTarget)) {
        addEventListenersToPlayButton();
    }
}

function addEventListenersToRadio(radioID) {
    const radio = document.getElementById(radioID); // Returns an Element object. This object already exists in the DOM.
    const radioState = new AnimationTools(radio.className);
    radio.onmousedown = () => {
        radioState.changeToActive(radio);
    };
    radio.onmouseover = () => {
        radioState.changeToHover(radio);
    };
    radio.onmouseout = () => {
        radioState.changeToIdle(radio);
    };
    /**
     * Javascript updates the returned object's properties to include Event Listeners.
     * After addEventListenersToRadio() finishes executing, the reference to the object is freed up.
     * The variables 'radio' and 'radioState' can now be redeclared and this allows the fn to be used repeatedly as a callback.
     */
}

function addEventListenersToPlayButton() {
    const playImage = document.getElementById('play-image');
    const playImageState = new AnimationTools(playImage.className, true);
    playImage.onmousedown = () => {
        playImageState.changeToActive(playImage);
    };
    playImage.onmouseover = () => {
        playImageState.changeToHover(playImage);
    };
    playImage.onmouseout = () => {
        playImageState.changeToIdle(playImage);
    };
    // TODO: Make it universal for all single string IDs, not play-button specific.
}

function isValidEventTarget(eventTarget) {
    if (Array.isArray(eventTarget)) {
        if (eventTarget.every((target) => { 
            return typeof target === 'string';
            // Similar to .forEach() but checks if every array element passes the test.
            // Test must return Boolean.
        })) {
            console.log('BINGO: Every array element is of type string.');
            return true;
        } else {
            console.error('Array elements must be of type string.');
            return false;
        }
    } else if (typeof eventTarget === 'string') {
        console.log('BINGO: Parameter is of type ' + typeof eventTarget + '.');
        return true;
    } else {
        console.error('Parameter must be string or array of strings.');
        return false;
    }
}