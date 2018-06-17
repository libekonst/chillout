/* // using audio as the argument on the constructor doesn't work.
// audio is an object. Can I / Do I need to access the url itself from the source tag? 
let audio = document.getElementById('radioSource');
let url = 'http://46.28.53.118:7062/stream?1529011397134';
 */
//@ts-check
const radios = {
    offradio: 'http://46.28.53.118:7062/stream?1529011397134',
    enlefko: 'http://stream.radiojar.com/enlefko877',
    parapolitika: 'http://netradio.live24.gr/athinaradio',
    skai: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8'
};

let currentRadio = '';
const player = new Audio();

function playAudio(source){
    player.src = source;
    player.play();
    currentRadio = source;
}

function playButton(){
    // player.muted = false;
    player.play();

    
}

function pauseAudio(){
    // player.muted = true;
    player.pause();
}
