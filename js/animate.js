//@ts-check

// Contains static methods that are used as Event Handlers responsible for the animations.
class Animate {

    // onMouseOver
    static makeHover(element = {}) {
        let item = element.classList.item(0);

        element.classList.add(`${item}-hover`);
        // if (!element.classList.contains(`${item}-active`)) {
        // }
    }

    // onMouseOut
    static makeIdle(element = {}) {
        let item = element.classList.item(0);

        element.classList.remove(`${item}-hover`);
        // if (!element.classList.contains(`${item}-active`)) {
        // }
    }

    // onClick
    static makeActive(element = {}) {
        let myClasslist = element.classList;
        let myClass = element.classList.item(0);


        const type = eventTargets.find(object => object.baseClass === myClass).type;

        console.log(type);


        // Deactivate other active radios first.
        if (!myClasslist.contains(myClass + '-active')) {
            let otherActive = document.getElementsByClassName(myClass + '-active');

            for (let i = 0; i < otherActive.length; i++) {
                otherActive[i].classList.remove(`${myClass}-hover`);
                otherActive[i].classList.remove(`${myClass}-active`); // Na rotiso alex giati den piani to anapodo.
            }
        }
        myClasslist.toggle(`${myClass}-active`);

    }
}


const eventTargets = [
    {
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
assignEventListeners('play-button');
assignEventListeners(3); // Intentionally throws an error.

// Calls functions that add event listeners to the event target.
function assignEventListeners(eventTarget) {
    if (isValid(eventTarget)) {
        if (Array.isArray(eventTarget)) {
            eventTarget.forEach(assignListenersToRadio);
        }
    } else {
        assignListenersToPlayButton();
    }
}


function assignListenersToRadio(radioID) {
    const radio = document.getElementById(radioID);

    radio.addEventListener('mousedown', () => {
        Animate.makeActive(radio);
        togglePlayButton();
    });
    radio.addEventListener('mouseover', () => Animate.makeHover(radio));
    radio.addEventListener('mouseout', () => Animate.makeIdle(radio));
}



function assignListenersToPlayButton() {
    const playButton = document.getElementById('play-button');

    
    playButton.addEventListener('mousedown', function () {
        Animate.makeActive(playButton);
        togglePlayButton();

    });
    playButton.addEventListener('mouseover', () => Animate.makeHover(playButton));
    playButton.addEventListener('mouseout', () => Animate.makeIdle(playButton));

    // TODO: Add active-hover.
    // TODO: Make fn universal for all single string IDs, not play-button specific.
}

// TEMP
function togglePlayButton() {
    const playButton = document.getElementById('play-button');
    let iconWrapper = document.getElementById('icon-wrapper');

    if (playButton.classList.contains('play-button-active')) {
        playButton.classList.remove('play-button-active');
        iconWrapper.classList.remove('icon-wrapper-active');
    } else {
        playButton.classList.add('play-button-active');
        iconWrapper.classList.add('icon-wrapper-active');
    }
}


function isValid(eventTarget) {
    if (Array.isArray(eventTarget)) {
        // Checks if every array element passes the test. Test must return Boolean.
        console.log('ii is an Array');
        return eventTarget.every(target => typeof target === 'string');
    } else if (typeof eventTarget === 'string') {
        console.log('it is a String');
        return true;
    } else {
        console.error('Parameter must be string or array of strings.');
        return false;
    }
}
// function isValid(eventTarget) {
//     if (Array.isArray(eventTarget)) {
//         // Checks if every array element passes the test. Test must return Boolean.
//         if (eventTarget.every(target => typeof target === 'string')) {
//             return true;
//         } else {
//             return false;
//         }
//     } else if (typeof eventTarget === 'string') {
//         return true;
//     } else {
//         console.error('Parameter must be string or array of strings.');
//         return false;
//     }
// }