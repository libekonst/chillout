//@ts-check

// Contains static methods to be used as event handlers.
class AnimationTools {

    // Creates an object with data used by the event handlers.
    constructor(name = '') {
        this.active = `${name} ${name}-active`;
        this.hover = `${name} ${name}-hover`;
        this.activeHover = `${name} ${name}-active-hover`;
        this.idle = name;
    }

    static makeRadioHover(obj = {}) {
        if (obj.className === radioState.idle) {
            obj.className = radioState.hover;
        }
    }
    static makeRadioActive(obj = {}) {
        // Change other active items (normally 1) to idle, then change current item to active.
        if (obj.className !== radioState.active) {
            let otherActive = document.getElementsByClassName(radioState.active); // HTMLCollection, indexable array-like object.
            for (let i = 0; i < otherActive.length; i++) { // Fail safe. Could just use otherActive[0].
                otherActive[i].className = radioState.idle;
            }
            obj.className = radioState.active;
        } else {
            obj.className = radioState.hover;
        }
    }
    static makeRadioIdle(obj = {}) {
        if (obj.className !== radioState.active) {
            obj.className = radioState.idle;
        }
    }

    static makeImgHover(obj = {}) {
        if (obj.className === imageState.idle) {
            obj.className = imageState.hover;
        } else {
            obj.className = imageState.activeHover;
        }
    }
    static makeImgActive(obj = {}) {
        if (obj.className === imageState.hover || obj.className === imageState.idle) {
            obj.className = imageState.active;
        } else {
            obj.className = imageState.hover;
        }
    }
    static makeImgIdle(item = {}) {
        if (item.className === imageState.hover) {
            item.className = imageState.idle;
        } else if (item.className == imageState.activeHover) {
            item.className = imageState.active;
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
    radio.onmousedown = () => {
        AnimationTools.makeRadioActive(radio);
    };
    radio.onmouseover = () => {
        AnimationTools.makeRadioHover(radio);
    };
    radio.onmouseout = () => {
        AnimationTools.makeRadioIdle(radio);
    };
    /**
     * Javascript finds the declarations for the functions referenced above and the object's properties are updated.
     * After addEvenetHandlers() finishes executing, the reference to the object is freed up.
     * As a result, the variable 'radio' can be redeclared and this allows the fn to be used repeatedly as a callback by initializeRadioAnimation().
     */
}

const imageState = new AnimationTools('play-image');
initializePlayButtonAnimation();

function initializePlayButtonAnimation() {
    const playImage = document.getElementById('play-image');

    playImage.onmousedown = function () {
        AnimationTools.makeImgActive(playImage);
    };
    playImage.onmouseover = () => {
        AnimationTools.makeImgHover(playImage);
    };
    playImage.onmouseout = () => {
        AnimationTools.makeImgIdle(playImage);
    };
}