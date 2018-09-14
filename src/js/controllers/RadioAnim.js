//@ts-check
import AnimationsInterface from "./AnimationsInterface";

// Using WeakMap to fake private properties
const _id = new WeakMap();

class RadioAnim extends AnimationsInterface {
    /** 
     * A controller that handles a radioItem's animations.
     * @param {String} radioID Target radioItem ID. Provide initially in the 
     * constructor or later by setting radioAnim.id = radioItem.id */
    constructor(radioID = '') {
        super();
        _id.set(this, radioID);
    }

    /**Adds the radio-item-active className. */
    makeActive() {
        this.hasID();
        document.getElementById(this.id)
            .classList.add('radio-item-active');
    }

    /** Removes the radio-item-active className. */
    makeIdle() {
        this.hasID();
        document.getElementById(this.id)
            .classList.remove('radio-item-active');
    }

    /** Strips the radio-item-active className from every other radioItem. */
    killOtherActive() {
        this.hasID();
        [...document.getElementsByClassName('radio-item-active')]
            .forEach(radio => radio.classList.remove('radio-item-active'));
    }

    /** Checks if the radioAnim's id property has been set. */
    hasID() {
        if (this.id === '' || undefined)
            throw new Error('Set radioAnim.id equal to target radioItem.id first.');
    }

    /**@param {String} id Set equal to the ID of target radioItem. */
    set id(id) {
        _id.set(this, id);
    }
    get id() {
        return _id.get(this);
    }
}

export default RadioAnim;