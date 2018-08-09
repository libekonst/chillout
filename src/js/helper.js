//@ts-check
import {Animate} from './animate';

/**
 * Collects Elements by their className and returns an array of each element's requested attribute.
 * @param {string} className The class name by which Elements will be collected.
 * @param {string} attr The requested attribute.
 * @returns {Array<string>} An array of attribute values as strings.
 */
export function getAttributeByClassName(className, attr) {
    const radioCollection = document.getElementsByClassName(className);
    let arrayOfAttributes = [];
    
    validateRequest();
    for (let radio of radioCollection) {
        arrayOfAttributes.push(radio.getAttribute(attr));
    }
    return arrayOfAttributes;

    function validateRequest() {
        if (radioCollection.length < 1){
            throw new Error(`No elements of class '${className}' found.`);
        }
        
        for (let radio of radioCollection) {
            if (!radio.hasAttribute(attr))
                throw new Error(`No ${attr} assigned to this element.`);
        }
    }
}

/**
 * Takes an array of radio IDs and calls a callback fn on each radio respectively.
 * @param {Array<string>} arrayOfTargets An array of radio IDs.
 */
export function assignEvHandlersToRadios(arrayOfTargets) {
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