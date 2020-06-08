/* eslint-env browser */

import { fromEvent, Observable, merge } from 'rxjs';
import { map, mapTo, share, tap, debounceTime } from 'rxjs/operators';

const VOLUME_KEY = 'AUDIO_VOLUME';
const audio = new Audio();

export const audioService = (audio: HTMLAudioElement) => {
	const setVolume = (val: number) => {
		if (val < 0 || val > 1) return; // Valid volume input.

		audio.volume = val;
		audio.muted = false;
	};

	const volume$ = fromEvent(audio, 'volumechange').pipe(
		tap(console.log),
		map(() => {
			if (audio.muted) return 0;
			return audio.volume;
		}),
		share()
	);

	const mute = (val = true) => {
		audio.muted = val;
	};

	const toggleMute = () => {
		audio.muted = !audio.muted;
	};

	const playbackState$ = merge(
		fromEvent(audio, 'loadstart'),
		fromEvent(audio, 'playing'),
		fromEvent(audio, 'error'),
		fromEvent(audio, 'ended'),
		fromEvent(audio, 'suspend')
	).pipe(map(eventTypeToStatus));

	const play = (url: string) => {
		audio.src = url;
		audio.play();
	};

	/** Pauses the audio and resets its source to prevent memory leaks and mobile data burns. */
	const stop = () => {
		audio.pause(); // Downloading continues in the background.

		audio.src = 'about:'; // Tries to empty the source, throws MEDIA_ELEMENT_ERROR on error handler, then sets to hostname. This stops the download.
		audio.removeAttribute('src'); // Resets to '', as if never set. Doesn't stop download, must be stopped beforehand. Silences error.
		audio.load(); // ? Resets the media element to its initial state, discarding cached playback.
	};

	// -- Persistence
	const saveVolume = (volume: number) => {
		if (volume < 0 || volume > 1) return;
		localStorage.setItem(VOLUME_KEY, volume.toString(10));
	};

	const getSavedVolume = (): number | undefined => {
		const storedVolume = localStorage.getItem(VOLUME_KEY);
		if (!storedVolume) return undefined;
		return parseInt(storedVolume, 10);
	};

	// TODO remember to cleanup
	const sub = volume$.pipe(debounceTime(1000)).subscribe(saveVolume);

	return {
		setVolume,
		volume$,
		mute,
		toggleMute,
		saveVolume,
		getSavedVolume,
		playbackState$,
		play,
		stop
	};

	// return {
	// 	// set volume(val: number) {
	// 	// 	if (val < 0 || val > 1) return; // Valid volume input.

	// 	// 	audio.volume = val;
	// 	// 	this.mute(false);
	// 	// },

	// 	// get volume() {
	// 	// 	return audio.volume;
	// 	// },

	// 	// volume$: fromEvent(audio, 'volumechange').pipe(
	// 	// 	tap(console.log),
	// 	// 	map(() => {
	// 	// 		if (audio.muted) return 0;
	// 	// 		return audio.volume;
	// 	// 	}),
	// 	// 	share()
	// 	// ),

	// 	mute(val = true) {
	// 		audio.muted = val;
	// 	},

	// 	toggleMute() {
	// 		audio.muted = audio.muted;
	// 	}
	// };
};

const eventTypeToStatus = (ev: Event) => {
	switch (ev.type) {
		case 'loadstart':
			return PlaybackStatus.LOADING;
		case 'playing':
			return PlaybackStatus.PLAYING;
		case 'error': // TODO handle error
		case 'ended':
		case 'suspend':
		default:
			return PlaybackStatus.PAUSED;
	}
};
export enum PlaybackStatus {
	PLAYING = 'PLAYING',
	LOADING = 'LOADING',
	PAUSED = 'PAUSED'
}
export class AudioService {
	constructor(private readonly audio: HTMLAudioElement) {}

	get source() {
		return this.audio.src;
	}

	get isPlaying() {
		return !this.audio.paused;
	}

	play = (url: string) => {
		this.audio.src = url;
		this.audio.play();
	};

	/** Pauses the audio and resets its source to prevent memory leaks and mobile data burns. */
	stop = () => {
		this.audio.pause(); // Downloading continues in the background.

		this.audio.src = 'about:'; // Tries to empty the source, throws MEDIA_ELEMENT_ERROR on error handler, then sets to hostname. This stops the download.
		this.audio.removeAttribute('src'); // Resets to '', as if never set. Doesn't stop download, must be stopped beforehand. Silences error.
		this.audio.load(); // ? Resets the media element to its initial state, discarding cached playback.
	};

	set volume(val: number) {
		if (val < 0 || val > 1) return; // Valid volume input.

		this.audio.volume = val;
		this.mute(false);
	}

	get volume() {
		return this.audio.volume;
	}

	volume$ = fromEvent(this.audio, 'volumechange').pipe(
		tap(console.log),
		map(() => {
			if (this.audio.muted) return 0;
			return this.audio.volume;
		}),
		share()
	);

	get muted() {
		return this.audio.muted;
	}

	mute(val = true) {
		this.audio.muted = val;
	}

	toggleMute() {
		this.audio.muted = !this.audio.muted;
	}

	/** Registers an event handler for the specified event type and returns a registration cleanup function. */
	on<K extends keyof HTMLMediaElementEventMap>(
		type: K,
		listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any
	) {
		this.audio.addEventListener(type, listener);

		return () => {
			this.audio.removeEventListener(type, listener);
		};
	}

	onMany(handlers: { [ev: string]: EventListener }) {
		Object.entries(handlers).forEach(([ev, handler]) =>
			this.audio.addEventListener(ev, handler)
		);
	}

	// -- Persistence
	saveVolume(volume: number) {
		if (volume < 0 || volume > 1) return;
		localStorage.setItem(VOLUME_KEY, volume.toString(10));
	}

	get savedVolume(): number | undefined {
		const storedVolume = localStorage.getItem(VOLUME_KEY);
		if (!storedVolume) return undefined;
		return parseInt(storedVolume, 10);
	}
}

export default new AudioService(new Audio());
