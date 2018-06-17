//@ts-check

const radios = {
    offradio: 'http://46.28.53.118:7062/stream?1529011397134',
    enlefko: 'http://stream.radiojar.com/enlefko877',
    parapolitika: 'http://netradio.live24.gr/athinaradio',
    skai: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8'
};

const player = new Audio();
let isPlaying = false;
let currentRadio = '';

let playButton = document.getElementById('playButton');

function playAudio(source){
    if (player.src !== source) {
        player.src = source;
        player.play();
        isPlaying = true;
        currentRadio = source;
        playButton.innerHTML = 'Pause';
    } else if (isPlaying) {
        player.pause();
        isPlaying = false;
        playButton.innerHTML = 'Play!';
    } else {
        player.play();
        isPlaying = true;
        playButton.innerHTML = 'Pause';
    }
}

function buttonText(){
    if (currentRadio === ''){
        alert('Click an image to load a radio!');
    } else {
        playAudio(currentRadio);
    }
}