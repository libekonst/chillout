//@ts-check

// Contains static methods, used as Event Handlers.
class Animate {

    // Assigns the appropriate Event Handlers to a DOM Element, based on its type.
    static makeActive(element = {}) {
        let myClass = element.classList.item(0);
        const type = eventTargets.find(object => object.baseClass === myClass).type;
        console.log(type);

        if (type === 'radio') {
            Animate.makeRadioActive(element.getAttribute('id'));
        }
    }

    // Applies the radio-item-active styles.
    static makeRadioActive(radioID) {
        let radio = document.getElementById(radioID);

        if (!radio.classList.contains('radio-item-active')) {
            Animate.killOtherActive(radio);
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

        if (!myClassList.contains(`${myClass}-active`)) {
            let otherActive = document.getElementsByClassName(`${myClass}-active`);
            for (let i = 0; i < otherActive.length; i++) {
                otherActive[i].classList.remove(`${myClass}-active`);
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
    type: 'play-button',
    baseClass: 'play-button'
}
];


/* ----RADIO ITEM FUNCTIONS---- */
const radioIDs = getAttributeByClassName('radio-item', 'id'); // An array of all the Radio IDs loaded in the DOM.
// let testArr = getAttributeByClassName('test-class', 'test-attr'); //Throws an error, no 'test-class' found.
// let testArr2 = getAttributeByClassName('radio-item', 'test-attr'); //Throws an error, no 'test-attr' found.

/**
 * Collects Elements by their className and returns an array of each element's requested attribute.
 * @param {string} className The class name by which Elements will be collected.
 * @param {string} attr The requested attribute.
 * @returns {Array<string>} An array of attribute values as strings.
 */
function getAttributeByClassName(className, attr) {
    const radioCollection = document.getElementsByClassName(className);
    let arrayOfAttributes = [];

    if (radioCollection.length < 1) {
        throw new Error(`No elements of class '${className}' found.`);
    }
    for (let i = 0; i < radioCollection.length; i++) {
        if (!radioCollection[i].hasAttribute(attr)) {
            throw new Error(`No ${attr} assigned to this element.`);
        }
        arrayOfAttributes.push(radioCollection[i].getAttribute(attr));
    }
    return arrayOfAttributes;
}

assignEvHandlersToRadios(radioIDs);
// assignEvHandlersToRadios([2]);
 // Throws an error, parameter must be an array of strings.

/**
 * Takes an array of radio IDs and calls a callback fn on each radio respectively.
 * The callback assigns event listeners.
 * @param {Array<string>} arrayOfTargets An array of radio IDs.
 */
function assignEvHandlersToRadios(arrayOfTargets) {
    let isValidTarget = arrayOfTargets => Array.isArray(arrayOfTargets) ?
        arrayOfTargets.every(target => typeof target === 'string') : false;

    if (!isValidTarget) throw new Error('Parameter must be an array of radioID strings');
    arrayOfTargets.forEach(assignListenersToRadio);
}

/**
 * Assigns event listeners to a radio item.
 * @param {string} radioID The ID string used to find the radio item.
 */
function assignListenersToRadio(radioID) {
    const radio = document.getElementById(radioID);
    // radio.addEventListener('mousedown', () => Animate.makeRadioActive(radioID));
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

