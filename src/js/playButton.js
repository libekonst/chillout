//@ts-check
import PlayButtonAnim from "./PlayButtonAnim";


const buttonAnim = new PlayButtonAnim();

export function controlPlayPause() {
    const audio = document.getElementsByTagName('audio')[0];

    document.getElementById('play-button').addEventListener('mousedown', () => {
        if (audio.src === '') return alert('Select a radio first!');

        if (audio.paused) {
            audio.play();
            buttonAnim.makeActive();

            // const lastRadio = radioSources.find(element => element.source === audio.src).name;
            // document.getElementById(lastRadio).classList.add('radio-item-active');
        } else {
            audio.pause();
            buttonAnim.makeIdle();

            const activeRadio = document.querySelector('.radio-item.radio-item-active');
            activeRadio.classList.remove('radio-item-active');
        }
    });
}