import RadioAnim from "./RadioAnim";
import AudioController from "./AudioController";
import PlayButtonAnim from "./PlayButtonAnim";


class RadioItem {
    /** 
     * Creates a radioItem composing of several objects, loads it to the DOM and assigns event listeners to it.
     * @param {RadioProps} radioProps An object containing radio specific properties.
     * @param {RadioAnim} radioAnim An object providing methods that handle the radioItem animations.
     * @param {AudioController} audioController An object providing commands that allow interaction with the <audio>.
     * @param {PlayButtonAnim} playButtonAnim An object providing functions that affect the play button's animations.
     * @param {String} type Used to render the radio item under a certain parent <ul> element.
     */
    constructor(radioProps, radioAnim, audioController, playButtonAnim, type) {
        if (this.isValid(radioProps)) {
            this.id = radioProps.id;
            this.name = radioProps.name;
            this.source = radioProps.source;
            this.img = radioProps.img;
        } else throw new Error('A radioProps object must have .id, .name, .source and .img properties!');

        this.anim = radioAnim;
        this.audio = audioController;
        this.playButton = playButtonAnim;
        this.type = type;
        this.render();
        this.addEventListeners();
    }
    
    /** Checks if the object containing the radio info has the right properties. */
    isValid(props){
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
        radioItem.setAttribute('data-content', 'pause');
        radioItem.appendChild(img);

        // Appends the radioItem to the parent <ul>.
        const parent = document.getElementById(`${this.type}-radios`);
        parent.appendChild(radioItem);
    }

    /** Finds the radioItem on the DOM and assigns Event Listeners to it. */
    addEventListeners() {
        document.getElementById(this.id).addEventListener('mousedown', () => {
            this.handleClick();
        });
    }

    /** Updates the audio source, plays/pauses the audio and changes animations respectively.*/
    handleClick() {
        this.updateAudioSource();

        if (this.audio.paused)
            this.startAudio();
        else
            this.pauseAudio();

        console.log(`Player paused? ${this.audio.paused}`);
    }

    /** Updates the audio source if it is different and changes other radios to idle. */
    updateAudioSource() {
        if (this.audio.source !== this.source) {
            console.log(`Loading ${this.name}...`);
            this.audio.source = this.source;
            this.anim.killOtherActive();
        }
    }

    /** Starts the audio and changes the radioItem's styles to active. */
    startAudio() {
        this.anim.makeActive();
        this.playButton.makeActive();

        this.audio.play()
            .then(() => {
                this.audio.lastRadio = this.id;
                console.log(`Playing ${this.name}...`);
                this.playButton.makeActive();
            })
            .catch(error => {
                console.log(`Failed to load radio... ${error}.`);
                console.log(this);
                this.anim.makeIdle();
                this.playButton.makeIdle();
            });
    }

    /** Pauses the audio and changes the radioItem's styles to idle. */
    pauseAudio() {
        this.anim.makeIdle();
        this.audio.pause();
        this.playButton.makeIdle();
    }
}

export default RadioItem;


/** @typedef {Object} RadioProps An object with data about a specific radio. 
 * @property {string} id Unique radio ID.
 * @property {string} name Radio name that will be displayed.
 * @property {string} source Stream URL.
 * @property {string} img Image source URL.
 */