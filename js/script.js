/**
 * Event target: an Element object that is targeted by an event. Event listener: responds to the event with a function.
 * The purpose of this script is to streamline the Event Listener assignment process.
 * Each Element will have its own set of listeners, so we need to refer to it by ID.
 * The intention is to have a single function that accepts a DOM Element ID or array of IDs as a parameter,
 * then assigns the appropriate listeners and functions to the target.
 * The fn should complete the assignment based on the target's purpose in the app and its animation complexity.
 */
//@ts-check

/**
 * ElementAnimationState constructor accepts a DOM Element as a parameter and creates an object that holds data
 * related to that Element. We'll refer to this object as "state" object, because it dynamically matches the animation states
 * with the related className strings for an Element. ElementAnimationState methods accept the same DOM Element as a parameter,
 * to provide event handler functions. These functions rely on our "state" object's ability to provide the necessary className strings.
 * This way, specialized event handlers can be dynamically generated for each specific Element's event listeners.
 */
class ElementAnimationState {

    // Creates an object that holds data used by the event handlers.
    constructor(element = {}, hasActiveHover = false) {
        this.idle = element.className;
        this.hover = `${element.className} ${element.className}-hover`;
        this.active = `${element.className} ${element.className}-active`;
        this.activeHover = `${element.className} ${element.className}-active-hover`;
        this.hasActiveHover = hasActiveHover;
    }


    // onMouseOver
    changeToHover(element = {}) {
        if (element.className === this.idle) {
            element.className = this.hover;
        } else if (this.hasActiveHover) {
            element.className = this.activeHover;
        }
    }

    // onMouseOut
    changeToIdle(element = {}) {
        if (element.className === this.hover) {
            element.className = this.idle;
        } else if (this.hasActiveHover) {
            element.className = this.active;
        }
    }

    // onClick
    changeToActive(element = {}) {
        if (element.className === this.hover || element.className === this.idle) {
            if (!this.hasActiveHover) {
                // Change other active items (normally 1) to idle.
                let otherActive = document.getElementsByClassName(this.active); // HTMLCollection, indexable array-like object.
                for (let i = 0; i < otherActive.length; i++) {
                    otherActive[i].className = this.idle;
                    // Fail safe - could just use otherActive[0].
                }
            }
            element.className = this.active;
        } else {
            element.className = this.hover;
        }
    }
}

let radioIDs = populateArray();

function populateArray(){
    let radioItems = document.getElementsByClassName('radio-item');
    let array = [];
    for (let i = 0; i < radioItems.length; i++) {
        array.push(radioItems[i].id);        
    }
    return array;
}

assignEventListeners(radioIDs);
assignEventListeners('play-button');
assignEventListeners(3); // Intentionally throws an error.

// Calls functions that add event listeners to the event target.
function assignEventListeners(eventTarget) {
    if (isValidEventTarget(eventTarget)) {
        if (Array.isArray(eventTarget)) {
            eventTarget.forEach(addEventListenersToRadio);
        } else {
            addEventListenersToPlayButton();
        }
    }
}

function addEventListenersToRadio(radioID) {
    const radio = document.getElementById(radioID); // Returns an Element object that exists in the DOM.
    const radioState = new ElementAnimationState(radio);
    
    radio.addEventListener('click', () => radioState.changeToActive(radio));
    radio.addEventListener('mouseover', () => radioState.changeToHover(radio));
    radio.addEventListener('mouseout', () => radioState.changeToIdle(radio));
 
    // After addEventListenersToRadio() finishes executing, the reference to the objects is freed up.
    // The variables 'radio' and 'radioState' can now be redeclared and this allows the fn to be used repeatedly as a callback.
}

function addEventListenersToPlayButton() {
    const playImage = document.getElementById('play-image');
    const playImageState = new ElementAnimationState(playImage, true);
    playImage.onmousedown = () => {
        playImageState.changeToActive(playImage);
    };
    playImage.onmouseover = () => {
        playImageState.changeToHover(playImage);
    };
    playImage.onmouseout = () => {
        playImageState.changeToIdle(playImage);
    };
    // TODO: Make fn universal for all single string IDs, not play-button specific.
}

function isValidEventTarget(eventTarget) {
    if (Array.isArray(eventTarget)) {
        if (eventTarget.every((target) => {
            return typeof target === 'string';
            // Checks if every array element passes the test. Test must return Boolean.
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