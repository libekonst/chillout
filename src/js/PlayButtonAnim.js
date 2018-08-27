//@ts-check
import AnimationsInterface from "./AnimationsInterface";

/** Creates an object with methods that handle the play button's animations.*/
export default class PlayButtonAnim extends AnimationsInterface {

    makeActive() {
        document.getElementById('play-button').classList.add('play-button-active');
        document.getElementById('play-button-wrapper').classList.add('play-button-wrapper-active');
    }

    makeIdle() {
        document.getElementById('play-button').classList.remove('play-button-active');
        document.getElementById('play-button-wrapper').classList.remove('play-button-wrapper-active');
    }
}