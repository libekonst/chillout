//@ts-check

import { Player } from "./player";
import { Animate } from "./animate";

// RADIO.JS
const radioSources = [
    {name: 'offradio', source: 'FAIL-http://46.28.53.118:7062/stream?1529011397134'},
    {name: 'enlefko', source: 'http://stream.radiojar.com/enlefko877'},
    {name: 'parapolitika', source: 'http://netradio.live24.gr/athinaradio'},
    {name: 'best', source: 'http://best.live24.gr:80/best1222'},
    {name: 'imagine', source: 'http://37.59.32.115:6224/stream'},
    {name: 'pepper', source: 'http://pepper966.live24.gr:80/pepperorigin'},
    {name: 'skai', source: 'http://liveradio.skai.gr/skaihd/skai/playlist.m3u8'}
];


const myRadioPlayer = new Player();
console.log(`Paused flag: ${myRadioPlayer.paused}. Source = ${myRadioPlayer.src}`);
myRadioPlayer.src = 'http://stream.radiojar.com/enlefko877';
console.log(`Paused flag: ${myRadioPlayer.paused}. Source = ${myRadioPlayer.src}`);

myRadioPlayer.addEventListener('play', () => console.log(`Trying to play... Paused Flag : ${myRadioPlayer.paused}`));
myRadioPlayer.addEventListener('pause', () => console.log(`Paused... Flag: ${myRadioPlayer.paused}`  ));



function assignAudioSource(radioID, source){
    let radio = document.getElementById(radioID);
    // const source = radioSources.find(element => element.name === radio.id).source;

    radio.addEventListener('mousedown', () => myRadioPlayer.loadRadio(source));
}

assignAudioSource('offradio');
assignAudioSource('enlefko', 'http://stream.radiojar.com/enlefko877');
assignAudioSource('best', 'http://netradio.live24.gr/athinaradio');
assignAudioSource('imagine');
assignAudioSource('pepper');


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

// ANIMATE.JS



/* ----RADIO ITEM FUNCTIONS---- */
const radioIDs = getAttributeByClassName('radio-item', 'id'); // An array of all the Radio IDs loaded in the DOM.
// let testArr = getAttributeByClassName('test-class', 'test-attr'); //Throws an error, no 'test-class' found.
// let testArr2 = getAttributeByClassName('radio-item', 'test-attr'); //Throws an error, no 'test-attr' found.

/**
 * Collects Elements by their className and returns an array of each element's requested attribute.
 * @param {string} className The class name by which Elements will be collected.
 * @param {string} attr The requested attribute.
 * @returns {Array<string>} An array of attribute values as strings.
 */
function getAttributeByClassName(className, attr) {
    const radioCollection = document.getElementsByClassName(className);
    let arrayOfAttributes = [];

    if (radioCollection.length < 1) {
        throw new Error(`No elements of class '${className}' found.`);
    }
    for (let i = 0; i < radioCollection.length; i++) {
        if (!radioCollection[i].hasAttribute(attr)) {
            throw new Error(`No ${attr} assigned to this element.`);
        }
        arrayOfAttributes.push(radioCollection[i].getAttribute(attr));
    }
    return arrayOfAttributes;
}

assignEvHandlersToRadios(radioIDs);
// assignEvHandlersToRadios([2]);
// Throws an error, parameter must be an array of strings.

/**
 * Takes an array of radio IDs and calls a callback fn on each radio respectively.
 * The callback assigns event listeners.
 * @param {Array<string>} arrayOfTargets An array of radio IDs.
 */
function assignEvHandlersToRadios(arrayOfTargets) {
    let isValidTarget = arrayOfTargets => Array.isArray(arrayOfTargets) ?
        arrayOfTargets.every(target => typeof target === 'string') : false;

    if (!isValidTarget) throw new Error('Parameter must be an array of radioID strings');
    arrayOfTargets.forEach(assignListenersToRadio);
}

/**
 * Assigns event listeners to a radio item.
 * @param {string} radioID The ID string used to find the radio item.
 */
function assignListenersToRadio(radioID) {
    const radio = document.getElementById(radioID);
    // radio.addEventListener('mousedown', () => Animate.makeRadioActive(radioID));
    radio.addEventListener('mousedown', () => Animate.makeActive(radio));
}

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

