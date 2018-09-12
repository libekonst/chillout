import AudioController from "./controllers/AudioController";

const audio = new AudioController();

function changeVolume() {
    audio.volume = this.value / 100;
}

function addVolumeControls() {
    const volumeBar = document.getElementById('volume-bar');

    audio.volume = 0.2;
    volumeBar.addEventListener('change', changeVolume);
    volumeBar.addEventListener('input', changeVolume);
    mute();
}

function mute() {
    const volBtn = document.getElementById('volume-icon');

    document.getElementById('volume-icon')
        .addEventListener('click', () => {
            if (audio.muted) {
                audio.muted = false;
                volBtn.innerHTML = 'volume_up';
            } else {
                audio.muted = true;
                volBtn.innerHTML = 'volume_off';
            }
        });
}

export default addVolumeControls;