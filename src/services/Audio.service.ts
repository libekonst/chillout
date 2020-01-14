/*eslint-env browser*/

export class AudioService {
	private readonly _audio = new Audio();

	play(url: string) {
		this._audio.src = url;
		this._audio.play();
	}

	stop() {
		this._audio.pause();
		this._audio.src = null;
	}
}
