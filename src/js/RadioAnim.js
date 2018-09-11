//@ts-check
import AnimationsInterface from "./AnimationsInterface";

class RadioAnim extends AnimationsInterface {
    /** 
     * Creates an object with methods that handle a radioItem's animations.
     * @param {String} radioID Target radioItem ID. Provide initially in the 
     * constructor or later by setting radioAnim.id = radioItem.id */
    constructor(radioID = '') {
        super();
        this._id = radioID;
    }

    /**Adds the radio-item-active className to apply the active radio styles. */
    makeActive() {
        this.hasID();
        document.getElementById(this.id)
            .classList.add('radio-item-active');
    }

    /** Strips the radio-item-active className to remove the active styles. */
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
        if (this.id === '')
            throw new Error('Set radioAnim.id equal to target radioItem.id first.');
    }

    /**@param {String} id Set equal to the ID of target radioItem. */
    set id(id) {
        this._id = id; // Ugly :(
    }

    get id() {
        return this._id;
    }
}

export default RadioAnim;