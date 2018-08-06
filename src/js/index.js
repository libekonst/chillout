//@ts-check

import { Player } from "./player";
import { Animate } from "./animate";
import { RadioItem } from "./populateDOM";
import { getAttributeByClassName, assignEvHandlersToRadios, assignListenersToRadio } from "./helper";


// WORKING WITH JSON
requestJSON();

function requestJSON() {
    const requestURL = 'http://127.0.0.1:5500/src/radios.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
        const radioData = request.response;
        console.log(radioData);
        for (let radio of radioData.music) {
            console.log(radio);
            new RadioItem(radio.name, radio.id, radio.img, 'music').render();
        }
        for (const radio of radioData.news) {
            console.log(radio);
            new RadioItem(radio.name, radio.id, radio.img, 'news').render();
        }

    };
}

// new CreateRadio('testRadio', 'testRadio').render();
// const newRadioItem = new CreateRadio('testRadio', 'testRadio');
// newRadioItem.render();

// RADIO.JS
const radioSources = [
    // {name: 'offradio', source: 'FAIL-http://46.28.53.118:7062/stream?1529011397134'},
    // {name: 'enlefko', source: 'http://stream.radiojar.com/enlefko877'},
    // {name: 'parapolitika', source: 'http://netradio.live24.gr/athinaradio'},
    // {name: 'best', source: 'http://best.live24.gr:80/best1222'},
    // {name: 'imagine', source: 'http://37.59.32.115:6224/stream'},
    // {name: 'pepper', source: 'http://pepper966.live24.gr:80/pepperorigin'},
    // {name: 'skai', source: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8'}
];


const player = new Player();
console.log(`Paused flag: ${player.paused}. Source = ${player.src}`);
player.src = 'http://stream.radiojar.com/enlefko877';
console.log(`Paused flag: ${player.paused}. Source = ${player.src}`);

player.addEventListener('play', () => console.log(`Trying to play... Paused Flag : ${player.paused}`));
player.addEventListener('pause', () => console.log(`Paused... Flag: ${player.paused}`));



function assignAudioSource(radioID, source) {
    let radio = document.getElementById(radioID);
    // const source = radioSources.find(element => element.name === radio.id).source;

    radio.addEventListener('mousedown', () => player.loadRadio(source));
}

assignAudioSource('offradio');
assignAudioSource('enlefko', 'http://stream.radiojar.com/enlefko877');
assignAudioSource('best', 'http://netradio.live24.gr/athinaradio');
assignAudioSource('imagine');
assignAudioSource('pepper');


controlPlayPause();
function controlPlayPause() {
    const playButton = document.getElementById('play-button');
    const playButtonWrapper = document.getElementById('play-button-wrapper');

    playButton.addEventListener('mousedown', () => {
        if (player.src === '') {
            alert('Select a radio first!');
        } else {
            if (player.paused) {
                // Play audio and make the radio item active(animation).
                player.play();
                let lastRadio = radioSources.find(element => element.source === player.src).name;
                document.getElementById(lastRadio).classList.add('radio-item-active');
                playButton.classList.add('play-button-active');
                playButtonWrapper.classList.add('play-button-wrapper-active');

            } else {
                player.pause();
            }
        }
    });
}

// ANIMATE.JS



/* ----RADIO ITEM FUNCTIONS---- */
// const radioIDs = getAttributeByClassName('radio-item', 'id'); // An array of all the Radio IDs loaded in the DOM.
// assignEvHandlersToRadios(radioIDs);
assignEvHandlersToRadios(getAttributeByClassName('radio-item', 'id'));


/* ----PLAY BUTTON FUNCTIONS---- */
assignListenersToPlayButton();

function assignListenersToPlayButton() {
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('mousedown', function () {
        if (playButton.classList.contains('play-button-active')) {
            let activeRadio = document.querySelector('.radio-item.radio-item-active');
            activeRadio.classList.remove('radio-item-active');
            Animate.makeButtonIdle();
        }
    });
}

