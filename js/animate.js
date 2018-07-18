//@ts-check
// Contains helper functions used to determine the appropriate Event Handler.
class Animate {

    // Accepts an element, finds its type and returns the appropriate Event Handler.
    // This fn consumes all the other methods.
    static makeActive(element = {}) {
        let myClass = element.classList.item(0);
        const type = eventTargets.find(object => object.baseClass === myClass).type;
        console.log(type);

        // Try to deactivate other similar items first. Might merge the if with killOtherActive()
        if (document.getElementsByClassName(myClass + '-active').length > 0) {
            Animate.killOtherActive(element);
        }

        // if (type === 'radio'){
        //     Animate.makeRadioActive;
        // }

        // let assigner = type => type === 'radio' ? Animate.makeRadioActive : type === 'play' ? Animate.makeButtonActive;
        // assigner(type);
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


/* ----RADIO ITEM FUNCTIONS---- */
const radioIDs = getElementsAttrByClassName('radio-item', 'id'); // An array of all the Radio IDs loaded in the DOM.
let testArr = getElementsAttrByClassName('test-class', 'test-attr'); //Throws an error
let testArr2 = getElementsAttrByClassName('radio-item', 'test-attr'); //Throws an error

// Returns an array of each element's requested attribute 
function getElementsAttrByClassName(className = '', attr = '') {
    const radioCollection = document.getElementsByClassName(className);
    let arrayOfAttributes = [];
        
    if (radioCollection.length < 1) {
        console.error(`No elements of class '${className}' found.`);
    } else {
        for (let i = 0; i < radioCollection.length; i++) {
            if (!radioCollection[i].hasAttribute(attr)) {
                console.error(`No ${attr} assigned to this element.`);
            } else {
                arrayOfAttributes.push(radioCollection[i].getAttribute(attr));
            }
        }
    }
    
    return arrayOfAttributes;
}

assignEvHandlersToRadios(radioIDs);
assignEvHandlersToRadios([1, 2]); // Intentionally throws an error.

function assignEvHandlersToRadios(arrayOfTargets) {
    let isValidTarget = arrayOfTargets => Array.isArray(arrayOfTargets) ?
        arrayOfTargets.every(target => typeof target === 'string') : false;

    if (!isValidTarget) {
        console.error('Parameter must be an array of radioID strings');
    } else {
        arrayOfTargets.forEach(assignListenersToRadio);
    }
}

function assignListenersToRadio(radioID) {
    const radio = document.getElementById(radioID);
    radio.addEventListener('mousedown', () => Animate.makeActive(radio));
}

/* ----PLAY BUTTON FUNCTIONS---- */
assignListenersToPlayButton();

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
