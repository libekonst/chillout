//@ts-check
import PlayButtonAnim from "./PlayButtonAnim";
import AudioController from "./AudioController";
import RadioAnim from "./RadioAnim";

const buttonAnim = new PlayButtonAnim();
const audio = new AudioController();
const radioAnim = new RadioAnim();

export default function controlPlayPause() {

    document.getElementById('play-button').addEventListener('mousedown', () => {
        radioAnim.id = audio.lastRadio; // Provided later on because the id changes dynamically.

        if (audio.source === '')
            return alert('Select a radio first!');
        if (audio.paused) 
            turnOn();
        else turnOff();
    });
}

function turnOn() {
    audio.play();
    buttonAnim.makeActive();
    radioAnim.makeActive();
}

function turnOff() {
    audio.pause();
    buttonAnim.makeIdle();
    radioAnim.makeIdle();
}