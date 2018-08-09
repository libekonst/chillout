//@ts-check
class Player extends Audio {
    constructor() {
        super();
    }

    /**
     * Accepts a url string as a source and starts playing the audio.
     * @param {String} source 
     */
    loadRadio(source) {
        if (this.src !== source) this.src = source;
        if (this.paused) {
            console.log(`Source: ${this.src}`);
            this.play()
                .then(() => console.log(`Audio loaded successfully!`))
                .catch( e => console.log(`Failed to load radio... :( ${e}`) );
        } else this.pause();
    }

    playPauseLoad(radioID) {
        const radio = document.getElementById(radioID);

        if (this.src === source && !this.paused) this.pause();
        else if (this.src === source) this.play();
        // else this.load(source);
    }
}
