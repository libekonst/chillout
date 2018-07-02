//@ts-check

// Creates an object that holds class names used by the event handlers.
class AnimationState {
    constructor(name = '') {
        this.className = name;
        this.active = `${name} ${name}-active`;
        this.hover = `${name} ${name}-hover`;
        this.idle = name;
    }
}

// Contains static methods that can be used as event handlers.
class BasicAnimations {

    static changeToHover(radio = {}) {
        if (radio.className === radioState.idle) {
            radio.className = radioState.hover;
        }
    }

    static changeToActive(radio = {}) {
        // Change other active items (normally 1) to idle, then change current item to active.
        if (radio.className !== radioState.active) {
            let otherActive = document.getElementsByClassName(radioState.active); // HTMLCollection, indexable array-like object.
            for (let i = 0; i < otherActive.length; i++) { // Fail safe. Could just use otherActive[0].
                otherActive[i].className = radioState.idle;
            }
            radio.className = radioState.active;
        } else {
            radio.className = radioState.hover;
        }
    }

    static changeToIdle(radio = {}) {
        if (radio.className !== radioState.active) {
            radio.className = radioState.idle;
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
        BasicAnimations.changeToActive(radio);
    };
    radio.onmouseover = () => {
        BasicAnimations.changeToHover(radio);
    };
    radio.onmouseout = () => {
        BasicAnimations.changeToIdle(radio);
    };
    /**
     * Javascript finds the declarations for the functions referenced above.
     * The object's properties are updated.
     * After addEvenetHandlers() finishes executing, the reference to the object is lost and freed up.
     * As a result, the variable 'radio' can be redeclared and this allows the fn to be used as a callback repeatedly by animationInitializer().
     */
}


/* ------------------PLAY IMAGE------------------ */
function playButtonAnimation() {
    const playImage = document.getElementById('play-image');

    function changeToHover() {
        if (playImage.className == "play-image") {
            playImage.className = "play-image play-image-hover";
        } else {
            playImage.className = "play-image play-image-active-hover";
        }
    }


    function changeToActive() {
        if (playImage.className == "play-image play-image-hover" || playImage.className == "play-image") {
            playImage.className = "play-image play-image-active";
        } else {
            playImage.className = "play-image play-image-hover";
        }
    }

    function resetClassName() {
        if (playImage.className == "play-image play-image-hover") {
            playImage.className = "play-image";
        } else if (playImage.className == "play-image play-image-active-hover") {
            playImage.className = "play-image play-image-active";
        }
    }

    playImage.onmousedown = changeToActive;
    playImage.onmouseover = changeToHover;
    playImage.onmouseout = resetClassName;
}

playButtonAnimation();