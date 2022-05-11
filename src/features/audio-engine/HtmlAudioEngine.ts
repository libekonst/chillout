/* eslint-env browser */

import { fromEvent, Observable, merge } from 'rxjs';
import { map, mapTo, share, tap, debounceTime, startWith } from 'rxjs/operators';
import { StorageSet, StorageGet } from '../storage/storage';
import { PlaybackStatus } from './PlaybackStatus';
import { AudioEngine } from './AudioEngine';

const audio = new Audio();

export class HtmlAudioEngine implements AudioEngine {
	private _audio = new Audio();

	// TODO remember to validate input
	setVolume(val: number) {
		if (val < 0 || val > 1) return;
		this._audio.volume = val;
		this._audio.muted = false;
	}

	// Event fired when `volume` or `muted` changes
	volume$ = fromEvent(this._audio, 'volumechange').pipe(
		tap(x => console.log('volume change ', x)),
		map(() => {
			if (this._audio.muted) return 0;
			return this._audio.volume;
		}),
		share(),
		tap(x => console.log('volume change 2', x)),

		startWith(0.5)
	);

	// Triggers the `volumechange` event
	mute(val = true) {
		this._audio.muted = val;
	}

	// Triggers the `volumechange` event
	toggleMute() {
		this._audio.muted = !this._audio.muted;
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

	playbackState$ = merge(
		fromEvent(audio, 'loadstart'),
		fromEvent(audio, 'playing'),
		fromEvent(audio, 'error'),
		fromEvent(audio, 'ended'),
		fromEvent(audio, 'suspend')
	).pipe(map(eventTypeToStatus));
}

export const htmlAudioControls = (audio: HTMLAudioElement) => {
	const setVolume = (val: number) => {
		if (!isValidVolumeRange(val)) return; // Validate volume input.

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

	// TODO remember to cleanup, move to player.
	// const sub = volume$.pipe(debounceTime(1000)).subscribe(saveVolume);

	return {
		setVolume,
		volume$,
		mute,
		toggleMute,
		// saveVolume,
		// getSavedVolume,
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

export type AudioControls = ReturnType<typeof htmlAudioControls>;

// -- Persistence
const VOLUME_KEY = 'AUDIO_VOLUME';

export const saveVolume = (save: StorageSet, volume: number) => {
	if (!isValidVolumeRange(volume)) return;

	save(VOLUME_KEY, volume.toString(10));
};

export const getSavedVolume = (get: StorageGet): number | undefined => {
	const storedVolume = get(VOLUME_KEY);
	if (!storedVolume) return undefined;

	return parseInt(storedVolume, 10);
};

export const audioPersistence = (get: StorageGet, set: StorageSet) => ({
	saveVolume: (volume: number) => saveVolume(set, volume),
	getVolume: () => getSavedVolume(get)
});

export type AudioPersistence = ReturnType<typeof audioPersistence>;

const isValidVolumeRange = (volume: number) => {
	return volume >= 0 && volume <= 1;
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
			return PlaybackStatus.STOPPED;
	}
};
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
