/* eslint-env browser */

export class AudioService {
	private readonly _audio = new Audio();

	get source() {
		return this._audio.src;
	}

	get isPlaying() {
		return !this._audio.paused;
	}

	play(url: string) {
		this._audio.src = url;
		this._audio.play();
	}

	/** Pauses the audio and resets its source to prevent memory leaks and mobile data burns. */
	stop() {
		this._audio.pause(); // Downloading continues in the background.

		this._audio.src = 'about:'; // Tries to empty the source, throws MEDIA_ELEMENT_ERROR on error handler, then sets to hostname. This stops the download.
		this._audio.removeAttribute('src'); // Resets to '', as if never set. Doesn't stop download, must be stopped beforehand. Silences error.
		this._audio.load(); // ? Resets the media element to its initial state, discarding cached playback.
	}

	set volume(val: number) {
		if (val < 0 || val > 1) return;

		this._audio.volume = val;
		this.mute(false);
	}

	get volume() {
		return this._audio.volume;
	}

	get muted() {
		return this._audio.muted;
	}

	mute(val = true) {
		this._audio.muted = val;
	}

	on(handlers: { [ev: string]: EventListener }) {
		Object.entries(handlers).forEach(([ev, handler]) =>
			this._audio.addEventListener(ev, handler)
		);
	}
}

export default new AudioService();
