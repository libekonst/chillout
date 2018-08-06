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

/**
 * Takes an array of radio IDs and calls a callback fn on each radio respectively.
 * The callback assigns event listeners.
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
export function assignListenersToRadio(radioID) {
    const radio = document.getElementById(radioID);
    // radio.addEventListener('mousedown', () => Animate.makeRadioActive(radioID));
    radio.addEventListener('mousedown', () => Animate.makeActive(radio));
}