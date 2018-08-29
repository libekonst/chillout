//@ts-check
import AnimationsInterface from "./AnimationsInterface";

export default class RadioAnim extends AnimationsInterface {
    /** 
     * Creates an object with methods that handle a radioItem's animations.
     * @param {String} radioID Target radioItem ID. Provide initially in the constructor
     * or later by setting radioAnim.id = radioItem.id
     */
    constructor(radioID = '') {
        super();
        this._id = radioID;
    }

    makeActive() {
        this.hasID();
        document.getElementById(this.id)
            .classList.add('radio-item-active');
    }

    makeIdle() {
        this.hasID();
        document.getElementById(this.id)
            .classList.remove('radio-item-active');
    }

    killOtherActive() {
        this.hasID();
        const activeRadios = document.getElementsByClassName('radio-item-active');
        for (const radio of activeRadios) {
            radio.classList.remove('radio-item-active');
        }
    }

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