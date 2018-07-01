//@ts-check

let radioIDs = ['offradio', 'best', 'enlefko', 'imagine', 'pepper'];
animationInitializer(radioIDs);

function animationInitializer(arrayOfIDs) {
    // Calls addEventHandlers on every event target (parameter is the array member).
    
    if (!Array.isArray(arrayOfIDs)) {
        console.error('Parameter must be an array');
    } else {
        arrayOfIDs.forEach(addEventHandlers);
    }
}


function addEventHandlers(radioID) {
    // Adds event handlers to the event target.

    let radio = document.getElementById(radioID); // returns an Element object

    radio.onmousedown = changeToActive;
    radio.onmouseover = changeToHover;
    radio.onmouseout = resetClassName;

    let active = 'radio-item radio-item-active';
    let hover = 'radio-item radio-item-hover';
    let idle = 'radio-item';

    function changeToHover() {
        if (radio.className != active) {
            radio.className = hover;
        }
    }

    function changeToActive() {
        if (radio.className != active) {
            // Change other active items (normally 1) to idle, then change current item to active.

            let otherActive = document.getElementsByClassName(active); // HTMLCollection, indexable array-like object.
            for (let i = 0; i < otherActive.length; i++) {
                otherActive[i].className = idle;
            }
            radio.className = active;

        } else {
            radio.className = hover;
        }
    }

    function resetClassName() {
        if (radio.className != active) {
            radio.className = idle;
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