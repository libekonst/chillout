//@ts-check

import { Player } from "./player";
import { Animate } from "./animate";
import { getAttributeByClassName, assignEvHandlersToRadios } from "./helper";
import { requestJSON } from "./requestJSON";


// WORKING WITH JSON
requestJSON();


// RADIO.JS
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

assignAudioSource('offradio', 'FAIL-http://46.28.53.118:7062/stream?1529011397134');
assignAudioSource('enlefko', 'http://stream.radiojar.com/enlefko877');
assignAudioSource('best', 'http://best.live24.gr:80/best1222');
assignAudioSource('imagine', 'http://37.59.32.115:6224/stream');
assignAudioSource('pepper', 'http://pepper966.live24.gr:80/pepperorigin');
// assignAudioSource('parapolitika', 'http://netradio.live24.gr/athinaradio');


controlPlayPause();
function controlPlayPause() {
    const playButton = document.getElementById('play-button');
    const playButtonWrapper = document.getElementById('play-button-wrapper');

    playButton.addEventListener('mousedown', () => {
        if (player.src === '') alert('Select a radio first!');
        else {
            if (player.paused) {
                // Play audio and make the radio item active(animation).
                player.play();
                let lastRadio = radioSources.find(element => element.source === player.src).name;
                document.getElementById(lastRadio).classList.add('radio-item-active');
                playButton.classList.add('play-button-active');
                playButtonWrapper.classList.add('play-button-wrapper-active');
            } else player.pause();
        }
    });
}

// ANIMATE.JS

/* ----RADIO ITEM FUNCTIONS---- */
const radioIDs = getAttributeByClassName('radio-item', 'id'); // An array of all the Radio IDs loaded in the DOM.
assignEvHandlersToRadios(radioIDs);
// assignEvHandlersToRadios(getAttributeByClassName('radio-item', 'id'));


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
