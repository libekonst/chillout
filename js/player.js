//@ts-check
class Player extends Audio{
    constructor() {
        super();
    }

    loadAndPlayRadio(myRadioSource) {
        this.src = myRadioSource;
        this.play();
    }

}

const radioSources = [
    {name: 'offradio', source: 'http://46.28.53.118:7062/stream?1529011397134'},
    {name: 'enlefko', source: 'http://stream.radiojar.com/enlefko877'},
    {name: 'parapolitika', source: 'http://netradio.live24.gr/athinaradio'},
    {name: 'skai', source: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8'}
];



let myRadioPlayer = new Player();


function assignAudioSource(radioID){
    let radio = document.getElementById(radioID);

        

    radio.addEventListener('mousedown', function(){
        let source = radioSources.find( element => element.name === radio.id ).source;
        if (myRadioPlayer.src === source && !myRadioPlayer.paused) {
            myRadioPlayer.pause();
        } else if(myRadioPlayer.src === source) {
            myRadioPlayer.play();
        } else {
            myRadioPlayer.loadAndPlayRadio(source);

        }
    });
}

assignAudioSource('offradio');
assignAudioSource('enlefko');


controlPlayPause();
function controlPlayPause(){
    let playButton = document.getElementById('play-button');
    let playButtonWrapper = document.getElementById('play-button-wrapper');

    playButton.addEventListener('mousedown', function(){
        if (myRadioPlayer.src === ''){
            alert('Select a radio first!');
        } else {
            if (myRadioPlayer.paused) {
                // Play audio and make the radio item active(animation).
                myRadioPlayer.play();
                let lastRadio = radioSources.find(element => element.source === myRadioPlayer.src).name;
                document.getElementById(lastRadio).classList.add('radio-item-active');
                playButton.classList.add('play-button-active');
                playButtonWrapper.classList.add('play-button-wrapper-active');

            } else {
                myRadioPlayer.pause();
            }
        }
    });
}