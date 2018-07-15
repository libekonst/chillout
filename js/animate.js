//@ts-check
// Contains helper functions used to determine the appropriate Event Handler.
class Animate {

    // Accepts an element, finds its type and returns the appropriate Event Handler.
    // This fn consumes all the other methods.
    static makeActive(element = {}) {
        let myClass = element.classList.item(0);
        const type = eventTargets.find(object => object.baseClass === myClass).type;
        console.log(type);

        // if (type === 'radio'){
        //     Animate.makeRadioActive;
        // }

        // Should this method check if the passed parameter isValid ?
        // let assigner = type => type === 'radio' ? Animate.makeRadioActive : type === 'play' ? Animate.makeButtonActive;
        // assigner(type);

        // Try to deactivate other similar items first.
        if (document.getElementsByClassName(myClass + '-active').length > 0) {
            Animate.killOtherActive(element);
        }
    }

    static makeRadioActive(radioID = '') {
        let radio = document.getElementById(radioID);

        if (!radio.classList.contains('radio-item-active')) {
            radio.classList.add('radio-item-active');
            Animate.makeButtonActive();
        } else {
            radio.classList.remove('radio-item-active');
            Animate.makeButtonIdle();
        }
    }

    // Deactivates other items of the same type.
    static killOtherActive(element = {}) {
        let myClassList = element.classList;
        let myClass = element.classList.item(0);

        if (!myClassList.contains(myClass + '-active')) {
            let otherActive = document.getElementsByClassName(myClass + '-active');
            for (let i = 0; i < otherActive.length; i++) {
                otherActive[i].classList.remove(myClass + '-active');
            }
        }
    }

    static makeButtonActive() {
        let playButton = document.getElementById('play-button');
        let buttonWrapper = document.getElementById('play-button-wrapper');

        playButton.classList.add('play-button-active');
        buttonWrapper.classList.add('play-button-wrapper-active');
    }

    static makeButtonIdle() {
        let playButton = document.getElementById('play-button');
        let buttonWrapper = document.getElementById('play-button-wrapper');

        playButton.classList.remove('play-button-active');
        buttonWrapper.classList.remove('play-button-wrapper-active');
    }
}


const eventTargets = [{
    type: 'radio',
    baseClass: 'radio-item'
},
{
    type: 'play',
    baseClass: 'play-button'
}
];


let radioIDs = populateArray();

// Returns an array of all the radio IDs loaded in the DOM.
function populateArray() {
    let radioItems = document.getElementsByClassName('radio-item');
    let array = [];

    for (let i = 0; i < radioItems.length; i++) {
        array.push(radioItems[i].id);
    }
    return array;
}

assignEventListeners(radioIDs);
assignListenersToPlayButton();
assignEventListeners([1, 2]); // Intentionally throws an error.

// Calls functions that add event listeners to the event target.
function assignEventListeners(arrayOfTargets) {
    if (Array.isArray(arrayOfTargets) && arrayOfTargets.every(target => typeof target === 'string')) {
        arrayOfTargets.forEach(assignListenersToRadio);
    } else {
        console.error('Parameter must be an array of strings');
    }
}


function assignListenersToRadio(radioID) {
    const radio = document.getElementById(radioID);

    radio.addEventListener('mousedown', () => Animate.makeActive(radio));
}

function assignListenersToPlayButton() {
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('mousedown', function () {
        if (playButton.classList.contains('play-button-active')) {
            let activeRadio = document.querySelector('.radio-item.radio-item-active');
            activeRadio.classList.remove('radio-item-active');
            Animate.makeButtonIdle();
        }
    });
}
