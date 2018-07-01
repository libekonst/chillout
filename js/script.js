//@ts-check

class AnimationState {
    constructor(name='') {
        this.className = name;
        this.active = `${name} ${name}-active`;
        this.hover = `${name} ${name}-hover`;
        this.idle = name;
    }    
}


let radioIDs = ['offradio', 'best', 'enlefko', 'imagine', 'pepper'];  // Fn that parses json and returns array?
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
    const radio = document.getElementById(radioID); // Returns an Element object. This object already exists in the DOM.

    radio.onmousedown = () => { changeToActive(radio); };
    radio.onmouseover = () => { changeToHover(radio); };
    radio.onmouseout = () => { resetClassName(radio); };

    // 1. Javascript finds the declarations for the functions referenced above.
    // 2. The object's properties are updated.
    // 3. After addEvenetHandlers() finishes executing, the reference to the object is lost and freed up.
    // 4. As a result, the variable 'radio' can be reassigned and this allows the fn to be used as a callback repeatedly.
}


let testState = new AnimationState('radio-item');

function changeToHover(radio = {}) {
    if (radio.className !== testState.active) {
        radio.className = testState.hover;
    }
}

function changeToActive(radio = {}) {
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

function resetClassName(radio = {}) {
    if (radio.className !== testState.active) {
        radio.className = testState.idle;
    }
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