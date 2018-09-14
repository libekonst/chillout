import RadioAnim from "./controllers/RadioAnim";
import AudioController from "./controllers/AudioController";
import PlayButtonAnim from "./controllers/PlayButtonAnim";
import { displayToast } from "./toast";


class RadioItem {
    /** 
     * Creates a radioItem composing of several objects, loads it to the DOM and assigns event listeners to it.
     * @param {RadioProps} radioProps An object containing radio specific properties.
     * @param {RadioAnim} radioAnim Contains methods that handle the radioItem animations.
     * @param {AudioController} audioController Contains methods that allow interaction with the <audio>.
     * @param {PlayButtonAnim} playButtonAnim Contains methods that affect the play button's animations.
     * @param {String} type Used to render the radio item under a certain parent <ul> element.
     */
    constructor(radioProps, radioAnim, audioController, playButtonAnim, type) {
        this.setProps(radioProps);
        this.radioAnim = radioAnim;
        this.audio = audioController;
        this.buttonAnim = playButtonAnim;
        this.type = type;
        this.render()
            .addEventListeners();
    }

    setProps(radioProps) {
        if (this.isValid(radioProps)) {
            Object.assign(this, radioProps);
        } else
            throw new Error('A radioProps object must have .id, .name, .source and .img properties.');
    }

    /** Checks if the object containing the radio info has the right properties. */
    isValid(props) {
        return props.hasOwnProperty('id') &&
            props.hasOwnProperty('name') &&
            props.hasOwnProperty('img') &&
            props.hasOwnProperty('source');
    }

    /** Loads the radioItem to the DOM and converts its properties into Element attributes. */
    render() {
        // Creates a <div> which holds the radio image.
        const img = document.createElement('div');
        img.setAttribute('class', 'radio-image');
        img.style.backgroundImage = `url(${this.img})`;

        // Creates a <li> element which represents the radioItem.
        const radioItem = document.createElement('li');
        radioItem.setAttribute('class', 'radio-item');
        radioItem.setAttribute('id', this.id);
        radioItem.setAttribute('data-name', this.name);
        radioItem.appendChild(img);

        // Appends the radioItem to the parent <ul>.
        document.getElementById(`${this.type}-radios`).appendChild(radioItem);

        // Returns 'this' so that another method can be chained.
        return this;
    }

    /** Finds the radioItem on the DOM and assigns Event Listeners to it. */
    addEventListeners() {
        document.getElementById(this.id).addEventListener('mousedown', () => {
            this.handleClick();
        });
        // Using 'mousedown' instead of 'click' to fake performance.
        // The user expects feedback when the mousebutton is released and the audio loads in the meantime.
    }

    /** Updates the audio source, toggles play/pause and playbtn animations */
    handleClick() {
        this.updateAudioSource();

        if (this.audio.paused)
            this.startAudio();
        else
            this.pauseAudio();

        console.log(`Player paused? ${this.audio.paused}`);
    }

    /** Updates the audio source if different. If so, also makes other radios idle. */
    updateAudioSource() {
        if (this.audio.source !== this.source) {
            this.audio.source = this.source;
            this.radioAnim.killOtherActive();
        }
    }

    /** Starts the audio and changes the radioItem's styles to active. */
    startAudio() {
        this.radioAnim.makeActive();
        this.buttonAnim.makeActive();
        this.audio.lastRadio = this;

        this.audio.play()
            .then(this.buttonAnim.makeActive)
            .catch(error => {
                console.log(error);
                this.radioAnim.makeIdle();
                this.buttonAnim.makeIdle();
                displayToast(`Failed to load ${this.name}`);
            });
    }

    /** Pauses the audio and changes the radioItem's styles to idle. */
    pauseAudio() {
        this.radioAnim.makeIdle();
        this.audio.pause();
        this.buttonAnim.makeIdle();
    }
}

export default RadioItem;


/** @typedef {Object} RadioProps An object with data about a specific radio. 
 * @property {string} id Unique radio ID.
 * @property {string} name Radio name that will be displayed.
 * @property {string} source Stream URL.
 * @property {string} img Image source URL.
 */
