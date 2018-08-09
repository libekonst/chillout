import { Animate } from "./animate";

//@ts-check

export function assignListenersToPlayButton() {
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('mousedown', function () {
        if (playButton.classList.contains('play-button-active')) {
            let activeRadio = document.querySelector('.radio-item.radio-item-active');
            activeRadio.classList.remove('radio-item-active');
            Animate.makeButtonIdle();
        }
    });
}

export function controlPlayPause() {
    const playButton = document.getElementById('play-button');
    const playButtonWrapper = document.getElementById('play-button-wrapper');
    const audio = document.getElementsByTagName('audio')[0];

    playButton.addEventListener('mousedown', () => {
        if (audio.src === "") {
            alert('Select a radio first!');
            return;
        }

        if (audio.paused) {
            audio.play();
            playButton.classList.add('play-button-active');
            playButtonWrapper.classList.add('play-button-wrapper-active');

            let lastRadio = radioSources.find(element => element.source === audio.src).name;
            document.getElementById(lastRadio).classList.add('radio-item-active');
        } else {
            audio.pause();
            playButton.classList.remove('play-button-active');
            playButtonWrapper.classList.remove('play-button-wrapper-active');
        }
    });
}