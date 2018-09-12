class AudioController {
    /** A controller that allows objects to interact with the Audio element. */
    constructor() {
        this.audio = document.querySelector('audio');
        if (this.audio === null)
            throw new Error('No Audio element found on the DOM.');
    }

    /** Loads and starts playback of a media resource.*/
    play() {
        return this.audio.play();
    }

    /** Pauses the current playback and sets paused to TRUE. */
    pause() {
        return this.audio.pause();
    }

    /** Sets the Audio element's source to the specified address or URL. */
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

    /** Gets a flag that specifies whether playback is paused. */
    get paused(){
        return this.audio.paused;
    }
}

export default AudioController;
