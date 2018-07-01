//@ts-check

class AnimationState {
    constructor(name='') {
        this.className = name;
        this.active = `${name}-item ${name}-item-active`;
        this.hover = `${name}-item ${name}-item-hover`;
        this.idle = `${name}-item`;
    }

    setHover() {
        if (this.className !== this.active) {
            this.className = this.hover;
        }
    }
}

let radioIDs = ['offradio', 'best', 'enlefko', 'imagine', 'pepper'];
animationInitializer(radioIDs);


function animationInitializer(arrayOfIDs) {
    // Calls addEventHandlers() for each array element (i.e. event target).
    
    if (!Array.isArray(arrayOfIDs)) {
        console.error('Parameter must be an array');  // Ensures the parameter is an array.
    } else {
        arrayOfIDs.forEach(addEventHandlers);
    }
}

function addEventHandlers(radioID) {
    // A callback fn. Adds event handlers to the event target.

    const radio = document.getElementById(radioID); // Returns an Element object.

    radio.onmousedown = changeToActive;
    radio.onmouseover = changeToHover;
    radio.onmouseout = resetClassName;

    // 1. Javascript finds the declarations for the functions referenced above.
    // 2. Object state is created and its properties' values are assigned into the functions (active-hover-idle).
    // 3. After the addEventHandlers() finishes, state ceases to exist. This means that its properties and the setHover() method can no longer be called.

    const state = new AnimationState('radio');

    function changeToHover() {
        if (radio.className !== state.active) {
            radio.className = state.hover;
        }
    }

    function changeToActive() {
        if (radio.className !== state.active) {
            // Change other active items (normally 1) to idle, then change current item to active.

            let otherActive = document.getElementsByClassName(state.active); // HTMLCollection, indexable array-like object.
            for (let i = 0; i < otherActive.length; i++) {  // Fail safe. Could just use otherActive[0].
                otherActive[i].className = state.idle;
            }
            radio.className = state.active;

        } else {
            radio.className = state.hover;
        }
    }

    function resetClassName() {
        if (radio.className !== state.active) {
            radio.className = state.idle;
        }
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