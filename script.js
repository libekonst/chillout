/* // using audio as the argument on the constructor doesn't work.
// audio is an object. Can I / Do I need to access the url itself from the source tag? 
let audio = document.getElementById('radioSource');
let url = 'http://46.28.53.118:7062/stream?1529011397134';
 */

const radios = {
    offradio: 'http://46.28.53.118:7062/stream?1529011397134',
    enlefko: 'http://stream.radiojar.com/enlefko877',
    parapolitika: 'http://netradio.live24.gr/athinaradio',
    skai: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8'
};

const player = new Audio();

function playAudio(){
    player.src = radios.offradio;
    player.play();
    // player.msPlayToPreferredSourceUri
}

function playEnlefko(){
    player.pause();
    player.src = radios.enlefko;
    player.play();
}

function playOffradio(){
    player.pause();
    player.src = radios.offradio;
    player.play();
}
function playParapolitika(){
    player.pause();
    player.src = radios.parapolitika;
    player.play();
}

function pauseAudio(){
    player.pause();
}
