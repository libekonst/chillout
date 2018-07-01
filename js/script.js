//@ts-check

class AnimationState {
    constructor(name='') {
        this.className = name;
        this.active = `${name} ${name}-active`;
        this.hover = `${name} ${name}-hover`;
        this.idle = name;
    }    
}

class BasicAnimations {
    static changeToHover(radio = {}) {
        if (radio.className !== testState.active) {
            radio.className = testState.hover;
        }
    }

    static changeToActive(radio = {}) {
        if (radio.className !== testState.active) {
            // Change other active items (normally 1) to idle, then change current item to active.

            let otherActive = document.getElementsByClassName(testState.active); // HTMLCollection, indexable array-like object.
            for (let i = 0; i < otherActive.length; i++) {  // Fail safe. Could just use otherActive[0].
                otherActive[i].className = testState.idle;
            }
            radio.className = testState.active;

        } else {
            radio.className = testState.hover;
        }
    }

    static resetClassName(radio = {}) {
        if (radio.className !== testState.active) {
            radio.className = testState.idle;
        }
    } 
}

let radioIDs = ['offradio', 'best', 'enlefko', 'imagine', 'pepper'];  // Fn that parses json and returns array?
let testState = new AnimationState('radio-item');  // Temporary solution to give the object the specific name. Need a way to avoid initializing it this way.
animationInitializer(radioIDs);


// Calls addEventHandlers() for each array element (i.e. event target).
function animationInitializer(arrayOfIDs) {    
    if (!Array.isArray(arrayOfIDs)) {
        console.error('Parameter must be an array');  // Ensures the parameter is an array.
    } else {
        arrayOfIDs.forEach(addEventHandlers);
    }
}



// A callback fn. Adds event handlers to the event target.
function addEventHandlers(radioID) {
    
    const radio = document.getElementById(radioID); // Returns an Element object. The object already exists in the DOM.

    radio.onmousedown = () => { BasicAnimations.changeToActive(radio); };
    radio.onmouseover = () => { BasicAnimations.changeToHover(radio); };
    radio.onmouseout = () => { BasicAnimations.resetClassName(radio); };
/**
  * Javascript finds the declarations for the functions referenced in above.
  * The object's properties are updated.
  * After addEvenetHandlers() finishes executing, the reference to the object is lost and freed up.
  * As a result, the variable 'radio' can be reassigned and this allows the fn to be used as a callback repeatedly.
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