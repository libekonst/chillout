//@ts-check

export default class AudioController {
    /** A Controller that allows objects to interact with the <audio> element. */
    constructor() {
        this.audio = document.getElementsByTagName('audio')[0];
    }

    play() {
        return this.audio.play();
    }

    pause() {
        return this.audio.pause();
    }

    set source(sourceURL) {
        this.audio.src = sourceURL;
    }
    get source() {
        return this.audio.src;
    }

    /** Stores the ID of the latest selected radio so that it can be accessed by other objects. */
    set lastRadio(radioID) {
        this.audio.dataset.lastRadio = radioID;
    }
    get lastRadio() {
        return this.audio.dataset.lastRadio;
    }

    get paused(){
        return this.audio.paused;
    }
}