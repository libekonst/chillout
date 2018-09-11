//@ts-check
import PlayButtonAnim from "./PlayButtonAnim";
import AudioController from "./AudioController";
import RadioAnim from "./RadioAnim";

const buttonAnim = new PlayButtonAnim();
const audio = new AudioController();
const radioAnim = new RadioAnim();

function controlPlayPause() {
    document.getElementById('play-button').addEventListener('mousedown', () => {
        // ID provided on function call because it changes dynamically.
        radioAnim.id = audio.lastRadio;

        if (audio.source === '')
            return alert('Select a radio first!');
        if (audio.paused)
            turnOn();
        else
            turnOff();
    });
}

function turnOn() {
    buttonAnim.makeActive();
    radioAnim.makeActive();
    audio.play()
        .catch(error => {
            turnOff();
            console.log(error);
            alert(`Can't load ${audio.lastRadio}...`)
        });
}

function turnOff() {
    audio.pause();
    buttonAnim.makeIdle();
    radioAnim.makeIdle();
}

export default controlPlayPause;