//@ts-check

// Creates an object that holds class names used by the event handlers.
class AnimationState {
    constructor(name = '') {
        this.className = name;
        this.active = `${name} ${name}-active`;
        this.hover = `${name} ${name}-hover`;
        this.activeHover = `${name} ${name}-active-hover`;
        this.idle = name;
    }
}

// Contains static methods to be used as event handlers.
class AnimationEffects {

    static makeRadioHover(radioObject = {}) {
        if (radioObject.className === radioState.idle) {
            radioObject.className = radioState.hover;
        }
    }
    static makeRadioActive(radioObject = {}) {
        // Change other active items (normally 1) to idle, then change current item to active.
        if (radioObject.className !== radioState.active) {
            let otherActive = document.getElementsByClassName(radioState.active); // HTMLCollection, indexable array-like object.
            for (let i = 0; i < otherActive.length; i++) { // Fail safe. Could just use otherActive[0].
                otherActive[i].className = radioState.idle;
            }
            radioObject.className = radioState.active;
        } else {
            radioObject.className = radioState.hover;
        }
    }
    static makeRadioIdle(radioObject = {}) {
        if (radioObject.className !== radioState.active) {
            radioObject.className = radioState.idle;
        }
    }

    static makeImgHover(imageObject = {}) {
        if (imageObject.className === imageState.idle) {
            imageObject.className = imageState.hover;
        } else {
            imageObject.className = imageState.activeHover;
        }
    }
    static makeImgActive(imageObject = {}) {
        if (imageObject.className === imageState.hover || imageObject.className === imageState.idle) {
            imageObject.className = imageState.active;
        } else {
            imageObject.className = imageState.hover;
        }
    }
    static makeImgIdle(imageObject = {}) {
        if (imageObject.className === imageState.hover) {
            imageObject.className = imageState.idle;
        } else if (imageObject.className == imageState.activeHover) {
            imageObject.className = imageState.active;
        }
    }
}

let radioState = new AnimationState('radio-item');
let radioIDs = ['offradio', 'best', 'enlefko', 'imagine', 'pepper']; // TODO: Fn that parses json and returns array.
animationInitializer(radioIDs);

// Calls addEventHandlers() for each element in the array (i.e. event target).
function animationInitializer(arrayOfIDs) {
    if (!Array.isArray(arrayOfIDs)) {
        console.error('Parameter must be an array'); // Ensures the parameter is an array.
    } else {
        arrayOfIDs.forEach(addEventHandlers); // Elegant For loop.
    }
}

// A callback fn. Adds event handlers to the event target.
function addEventHandlers(radioID) {
    const radio = document.getElementById(radioID); // Returns an Element object. This object already exists in the DOM.
    radio.onmousedown = () => {
        AnimationEffects.makeRadioActive(radio);
    };
    radio.onmouseover = () => {
        AnimationEffects.makeRadioHover(radio);
    };
    radio.onmouseout = () => {
        AnimationEffects.makeRadioIdle(radio);
    };
    /**
     * Javascript finds the declarations for the functions referenced above.
     * The object's properties are updated.
     * After addEvenetHandlers() finishes executing, the reference to the object is lost and freed up.
     * As a result, the variable 'radio' can be redeclared and this allows the fn to be used as a callback repeatedly by animationInitializer().
     */
}


const imageState = new AnimationState('play-image');
playButtonAnimation();

function playButtonAnimation() {
    const playImage = document.getElementById('play-image');

    playImage.onmousedown = function() {
        AnimationEffects.makeImgActive(playImage);
    };
    playImage.onmouseover = () => {
        AnimationEffects.makeImgHover(playImage);
    };
    playImage.onmouseout = () => {
        AnimationEffects.makeImgIdle(playImage);
    };
}
