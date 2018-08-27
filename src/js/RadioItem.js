//@ts-check

import RadioAnim from "./RadioAnim";



export default class RadioItem {

    /** 
     * Creates a radioItem composing of several objects, loads it to the DOM and assigns event listeners to it.
     * @param {Object} radioProps An object containing radio specific properties.
     * @param {RadioAnim} radioAnim Provides methods that handle the radioItem animations.
     * @param {String} type Used to render the radio item under a certain parent <ul> element.
     */
    constructor(radioProps, radioAnim, type) {
        // Radio properties taken from the json response.
        this.id = radioProps.id;
        this.name = radioProps.name;
        this.source = radioProps.source;
        this.img = radioProps.img;

        // Stores a reference to the radioAnim object and passes this.id to it.
        this.anim = radioAnim;
        this.anim.id = this.id;

        this.type = type;

        // Loads the radioItem to the DOM.
        this.render();

        // Finds the radioItem on the DOM and assigns Event Listeners to it.
        document.getElementById(this.id).addEventListener('mousedown', () => {
            this.interact();
        });
    }

    isValidRadioProps(){
        // checks if the radioProps object has the required properties.
    }

    /** Loads the RadioItem object onto the DOM and converts its properties into Element attributes. */
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

    /** Finds the <audio> element in the DOM, changes its source, calls its play() or pause() methods and handles the radio item's animations.*/
    interact() {
        const audio = document.getElementsByTagName('audio')[0];

        console.log(`Loading ${this.name}...`); //Replace with a function that reads this.name and displays info to the user.

        this.setAudioSource(audio);

        if (audio.paused)
            this.startAudio(audio);
        else
            this.pauseAudio(audio);
        console.log(`Player paused? ${audio.paused}`);
    }

    /**
     * Updates the audio source if it is different and changes other radios to idle.
     * @param {HTMLAudioElement} audio The target Audio Element responsible for playing the sound content.
     */
    setAudioSource(audio) {
        if (audio.src !== this.source) {
            audio.src = this.source;
            this.anim.killOtherActive();
        }
    }

    /**
     * Starts the audio and changes the radioItem's styles to active.
     * @param {HTMLAudioElement} audio The target Audio Element responsible for playing the sound content.
     */
    startAudio(audio) {
        // Animate.makeRadioActive(this.data);
        this.anim.makeActive();
        audio.play()
            .then(() => console.log(`Playing ${this.name}...`))
            //Replace with a function that reads this.name and displays info to the user.
            .catch(error => {
                console.log(`Failed to load radio... ${error}.`); //Replace with a function that reads e and displays info to the user.
                console.log(this);
                this.anim.makeIdle();
            });
    }

    /**
     * Pauses the audio and changes the radioItem's styles to idle.
     * @param {HTMLAudioElement} audio The target Audio Element responsible for playing the sound content.
     */
    pauseAudio(audio) {
        this.anim.makeIdle();
        audio.pause();

    }
}