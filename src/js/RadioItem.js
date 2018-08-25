import { Animate } from "./animate";

//@ts-check
export class RadioItem {

    /** 
     * Bundles properties together to create a radio item, load it to the DOM and assign event listeners to it.
     * @param {String} name The value used as the "data-name" attribute.
     * @param {String} id The value used as the "id" attribute.
     * @param {String} imgURL The source for the background image of the child div.
     * @param {String} src The radio's stream source
     * @param {String} type Used to render the radio item under a certain parent <ul> element, based on its place in the JSON file.
     */
    constructor(name, id, imgURL, src, type) {
        this.name = name;
        this.id = id;
        this.img = imgURL;
        this.src = src;
        this.type = type;

        // Loads the RadioItem object to the DOM.
        this.render();

        // Finds the radio item on the DOM and assigns Event Listeners to it.
        document.getElementById(this.id).addEventListener('mousedown', () => {
            this.interact();
        });
    }

    /** Loads a RadioItem object onto the DOM and converts its properties into Element attributes. */
    render() {
        const img = document.createElement('div');
        img.setAttribute('class', 'radio-image');
        img.style.backgroundImage = `url(${this.img})`;

        const radioItem = document.createElement('li');
        radioItem.setAttribute('class', 'radio-item');
        radioItem.setAttribute('id', this.id);
        radioItem.setAttribute('data-name', this.name);
        radioItem.setAttribute('data-content', 'pause');
        radioItem.appendChild(img);

        // Append the radioItem to the parent unordered list element.
        const parent = document.getElementById(`${this.type}-radios`);
        parent.appendChild(radioItem);
    }

    /** Finds the <audio> element in the DOM, changes its source, calls its play() or pause() methods and handles the radio item's animations.*/
    interact() {
        const player = document.getElementsByTagName('audio')[0];
        console.log(`Loading ${this.name}...`); //Replace with a function that reads this.name and displays info to the user.
        
        this.setAudioSource(player);
        if (player.paused)
            this.startAudio(player);
        else 
            this.pauseAudio(player);

        console.log(`Player paused? ${player.paused}`);
    }

    /**
     * Checks if audio source is the same as the radio item's source.
     * If not, it updates the source and changes other radios to idle.
     * @param {HTMLAudioElement} audio The Audio Element responsible for playing the sound content.
     */
    setAudioSource(audio) {
        if (audio.src !== this.src) {
            audio.src = this.src;
            Animate.killOtherActive(document.getElementById(this.id));
        }
    }

    /**
     * Starts the audio and changes the radio item's styles to active.
     * @param {HTMLAudioElement} audio 
     */
    startAudio(audio) {
        Animate.makeRadioActive(this);
        audio.play()
            .then(() => console.log(`Playing ${this.name}...`)) //Replace with a function that reads this.name and displays info to the user.
            .catch(error => {
                console.log(`Failed to load radio... :( ${error}.`); //Replace with a function that reads e and displays info to the user.
                console.log(this);
                Animate.makeRadioIdle(this);
            });
    }

    /**
     * Pauses the audio and changes the radio item's styles to idle.
     * @param {HTMLAudioElement} audio 
     */
    pauseAudio(audio) {
        Animate.makeRadioIdle(this);
        audio.pause();
    }
}