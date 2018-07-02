//@ts-check

// Contains methods to be used as event handlers.
class AnimationTools {

    // Creates an object with data used by the event handlers.
    constructor(name = '') {
        this.active = `${name} ${name}-active`;
        this.hover = `${name} ${name}-hover`;
        this.activeHover = `${name} ${name}-active-hover`;
        this.idle = name;
    }

    makeRadioHover(obj = {}) {
        if (obj.className === this.idle) {
            obj.className = this.hover;
        }
    }
    makeRadioActive(obj = {}) {
        // Change other active items (normally 1) to idle, then change current item to active.
        if (obj.className !== this.active) {
            let otherActive = document.getElementsByClassName(this.active); // HTMLCollection, indexable array-like object.
            for (let i = 0; i < otherActive.length; i++) { // Fail safe. Could just use otherActive[0].
                otherActive[i].className = this.idle;
            }
            obj.className = this.active;
        } else {
            obj.className = this.hover;
        }
    }
    makeRadioIdle(obj = {}) {
        if (obj.className !== this.active) {
            obj.className = this.idle;
        }
    }

    makeImgHover(obj = {}) {
        if (obj.className === this.idle) {
            obj.className = this.hover;
        } else {
            obj.className = this.activeHover;
        }
    }
    makeImgActive(obj = {}) {
        if (obj.className === this.hover || obj.className === this.idle) {
            obj.className = this.active;
        } else {
            obj.className = this.hover;
        }
    }
    makeImgIdle(obj = {}) {
        if (obj.className === this.hover) {
            obj.className = this.idle;
        } else if (obj.className == this.activeHover) {
            obj.className = this.active;
        }
    }
}

const radioState = new AnimationTools('radio-item');
const radioIDs = ['offradio', 'best', 'enlefko', 'imagine', 'pepper']; // TODO: Fn that parses json or the DOM and returns array.
initializeRadioAnimation(radioIDs);

// Calls addEventHandlers() for each element in the array (i.e. event target).
function initializeRadioAnimation(arrayOfIDs) {
    if (!Array.isArray(arrayOfIDs)) {
        console.error('Parameter must be an array');
    } else {
        arrayOfIDs.forEach(addEventHandlers);
    }
}

// A callback fn. Adds event handlers to the event target.
function addEventHandlers(radioID) {
    const radio = document.getElementById(radioID); // Returns an Element object. This object already exists in the DOM.
    radio.onmousedown = () => {radioState.makeRadioActive(radio);};
    radio.onmouseover = () => {radioState.makeRadioHover(radio);};
    radio.onmouseout = () => {radioState.makeRadioIdle(radio);};
    /**
     * Javascript finds the declarations for the functions referenced above and updates the object's properties.
     * After addEvenetHandlers() finishes executing, the reference to the object is freed up.
     * As a result, the variable 'radio' can be redeclared and this allows the fn to be used repeatedly as a callback by initializeRadioAnimation().
     */
}

const playImageState = new AnimationTools('play-image');
initializePlayButtonAnimation();

function initializePlayButtonAnimation() {
    const playImage = document.getElementById('play-image');
    playImage.onmousedown = () => {playImageState.makeImgActive(playImage);};
    playImage.onmouseover = () => {playImageState.makeImgHover(playImage);};
    playImage.onmouseout = () => {playImageState.makeImgIdle(playImage);};
}
