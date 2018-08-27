//@ts-check
import AnimationsInterface from "./AnimationsInterface";

/** Creates an object with methods that handle a radioItem's animations. Created object's ID must be set equal to target radioItem's ID.*/
export default class RadioAnim extends AnimationsInterface {
    makeActive() {
        this.hasID();
        document.getElementById(this.id)
            .classList.add('radio-item-active');
        //playButton.makeActive();
    }

    makeIdle() {
        this.hasID();
        document.getElementById(this.id)
            .classList.remove('radio-item-active');
        // playButtonAnim.makeIdle();
    }

    killOtherActive() {
        this.hasID();
        const activeRadios = document.getElementsByClassName('radio-item-active');
        for (const radio of activeRadios) {
            radio.classList.remove('radio-item-active');
        }
    }

    hasID() {
        if (!this.hasOwnProperty('_id'))
            throw new Error('Set radioAnim.id equal to target radioItem.id first.');
    }
    
    /**@param {String} id The ID of the radioItem which calls the animation methods. */
    set id(id) {
        this._id = id; // '_id' is not elegant :(
    }

    get id() {
        return this._id;
    }
}