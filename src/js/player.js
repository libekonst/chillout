//@ts-check
export class Player extends Audio {
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

const radioSources = [
    { name: 'offradio', source: 'FAIL-http://46.28.53.118:7062/stream?1529011397134' },
    { name: 'enlefko', source: 'http://stream.radiojar.com/enlefko877' },
    { name: 'parapolitika', source: 'http://netradio.live24.gr/athinaradio' },
    { name: 'best', source: 'http://best.live24.gr:80/best1222' },
    { name: 'imagine', source: 'http://37.59.32.115:6224/stream' },
    { name: 'pepper', source: 'http://pepper966.live24.gr:80/pepperorigin' },
    { name: 'skai', source: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8' }
];