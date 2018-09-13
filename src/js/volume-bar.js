import AudioController from "./controllers/AudioController";

const audio = new AudioController();

function addVolumeControls() {
    const volumeBar = document.getElementById('volume-bar');

    audio.volume = 0.2;
    volumeBar.addEventListener('change', changeVolume);
    volumeBar.addEventListener('input', changeVolume);
    mute();
}

function changeVolume() {
    audio.volume = this.value / 100;
}

/** Mutes the audio on volume-icon click. */
function mute() {
    const volButton = document.getElementById('volume-icon');

    volButton.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            volButton.innerHTML = 'volume_up';
        } else {
            audio.muted = true;
            volButton.innerHTML = 'volume_off';
        }
    });
}

export default addVolumeControls;