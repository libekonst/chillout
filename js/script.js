//@ts-check

// Contains methods to be used as event handlers.
class AnimationTools {

    // Creates an object with data used by the event handlers.
    constructor(name = '', bool = false) {
        this.active = `${name} ${name}-active`;
        this.hover = `${name} ${name}-hover`;
        this.activeHover = `${name} ${name}-active-hover`;
        this.idle = name;
        this.hasActiveHover = bool;
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
                for (let i = 0; i < otherActive.length; i++) { // Fail safe - could just use otherActive[0].
                    otherActive[i].className = this.idle;
                }
            }
            obj.className = this.active;
        } else {
            obj.className = this.hover;
        }
    }
}

const radioState = new AnimationTools('radio-item');
const radioIDs = ['offradio', 'best', 'enlefko', 'imagine', 'pepper']; // TODO: Fn that parses json or the DOM and returns array.
initializeRadioAnimation(radioIDs);

// Calls addEventListenersToRadio() for each element in the array (i.e. event target).
function initializeRadioAnimation(arrayOfIDs) {
    if (!Array.isArray(arrayOfIDs)) {
        console.error('Parameter must be an array');
    } else {
        arrayOfIDs.forEach(addEventListenersToRadio);
    }
}

// A callback fn. Adds event listeners to the event target.
function addEventListenersToRadio(radioID) {
    const radio = document.getElementById(radioID); // Returns an Element object. This object already exists in the DOM.
    radio.onmousedown = () => {
        radioState.changeToActive(radio);
    };
    radio.onmouseover = () => {
        radioState.changeToHover(radio);
    };
    radio.onmouseout = () => {
        radioState.changeToIdle(radio);
    };
    /* Javascript finds the declarations for the functions referenced above and updates the returned object's properties.
     * After addEventListenersToRadio() finishes executing, the reference to the object is freed up.
     * As a result, the variable 'radio' can be redeclared and this allows the fn to be used repeatedly as a callback by initializeRadioAnimation().
     */
}


const playImageState = new AnimationTools('play-image', true);
initializePlayButtonAnimation();

function initializePlayButtonAnimation() {
    const playImage = document.getElementById('play-image');
    playImage.onmousedown = () => {
        playImageState.changeToActive(playImage);
    };
    playImage.onmouseover = () => {
        playImageState.changeToHover(playImage);
    };
    playImage.onmouseout = () => {
        playImageState.changeToIdle(playImage);
    };
}
