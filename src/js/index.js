//@ts-check
import { getAttributeByClassName, assignEvHandlersToRadios } from "./helper";
import { requestJSON } from "./populateDOM";
import { controlPlayPause, assignListenersToPlayButton } from "./playButton";


// WORKING WITH JSON
requestJSON();


/**
 * One file with functions for play button functionality.
 * One file for radio item functionality(RadioItem.js).
 * One file for animations.
 * Combine them all here.
 */

 /**
  * OR handle each component individually and combine here those that intertwine?
  * OR have an Animations module that adds animations to everything and import it to each component. 
  */





// player.addEventListener('play', () => console.log(`Trying to play... Paused Flag : ${player.paused}`));
// player.addEventListener('pause', () => console.log(`Paused... Flag: ${player.paused}`));


// function assignAudioSource(radioID, source) {
//     let radio = document.getElementById(radioID);
//     // const source = radioSources.find(element => element.name === radio.id).source;

//     radio.addEventListener('mousedown', () => player.loadRadio(source));
// }

// assignAudioSource('offradio', 'FAIL-http://46.28.53.118:7062/stream?1529011397134');
// assignAudioSource('enlefko', 'http://stream.radiojar.com/enlefko877');
// assignAudioSource('best', 'http://best.live24.gr:80/best1222');
// assignAudioSource('imagine', 'http://37.59.32.115:6224/stream');
// assignAudioSource('pepper', 'http://pepper966.live24.gr:80/pepperorigin');
// assignAudioSource('parapolitika', 'http://netradio.live24.gr/athinaradio');


// ANIMATE.JS

/* ----RADIO ITEM FUNCTIONS---- */
const radioIDs = getAttributeByClassName('radio-item', 'id'); // An array of all the Radio IDs loaded in the DOM.
console.log(`Radio IDs: ${radioIDs}`);
// assignEvHandlersToRadios(radioIDs);
// assignEvHandlersToRadios(getAttributeByClassName('radio-item', 'id'));


/* ----PLAY BUTTON FUNCTIONS---- */
assignListenersToPlayButton();



controlPlayPause();
