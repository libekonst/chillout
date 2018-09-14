let lastRadio = {};

class AudioController {
    /** A controller that allows objects to interact with the Audio element. */
    constructor() {
        this.audio = document.querySelector('audio');
        if (this.audio === null)
            throw new Error('No Audio element found on the DOM.');
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
    set lastRadio(radio) {
        Object.assign(lastRadio, radio);
    }
    get lastRadio() {
        return lastRadio;
    }

    get volume(){
        return this.audio.volume;
    }
    set volume(val){
        this.audio.volume = val;
    }

    get muted(){
        return this.audio.muted;
    }
    set muted(bool){
        this.audio.muted = bool;
    }

    get paused(){
        return this.audio.paused;
    }
}

export default AudioController;
