//@ts-check

// Contains static methods that are used as Event Handlers responsible for the animations.
class Animate {
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
            Animate.makeButtonActive();
        } else {
            Animate.makeButtonIdle();
        }
        myClasslist.toggle(`${myClass}-active`);

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
assignEventListeners([1,2]); // Intentionally throws an error.

// Calls functions that add event listeners to the event target.
function assignEventListeners(target) {
    if (Array.isArray(target) && target.every(target => typeof target === 'string')) {
        target.forEach(assignListenersToRadio);
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
