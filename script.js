//@ts-check
const player = new Audio();
let isPlaying = false;
let currentRadio = '';

function playAudio(source) {
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

let playButton = document.getElementById('playButton');
function buttonText(){
    if (currentRadio === ''){
        alert('Click an image to load a radio!');
    } else {
        playAudio(currentRadio);
    }
}


const radios = {
    offradio: {
        id: 'offradio',
        image: 'https://www.offradio.gr/sites/all/themes/offradio_theme/facebook.png',
        url: 'http://46.28.53.118:7062/stream?1529011397134',
        clickHandler: playAudio()
    },
    sources: {
        offradio: 'http://46.28.53.118:7062/stream?1529011397134',
        enlefko: 'http://stream.radiojar.com/enlefko877',
        parapolitika: 'http://netradio.live24.gr/athinaradio',
        skai: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8'
    },
    
};
newImage();
function newImage() {
    let newImg = document.createElement('img');
    newImg.height = 200;
    newImg.width = 200;
    newImg.src = radios.offradio.image;
    newImg.id = radios.offradio.id;
    /* let clickHandler = () => {return playAudio(radios.offradio.url);};
    newImg.onclick = () => {radios.offradio.clickHandler;}; */
    newImg.addEventListener('click', function(){playAudio(radios.offradio.url);alert('lol');});
    document.body.insertBefore(newImg, document.getElementById('lastButton'));
}


// window.onload = () => {return newImage;};