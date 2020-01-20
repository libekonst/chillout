import { BehaviorSubject, Subject } from 'rxjs';
import {
	map,
	debounceTime,
	distinctUntilKeyChanged,
	filter,
	distinct,
	tap,
	pairwise,
	distinctUntilChanged
} from 'rxjs/operators';
import { Radio } from '../data';
import { AudioService } from '../services/audio.service';
import storage, { StorageService } from '../services/storage.service';

export class Player {
	constructor(
		private readonly _audioService: AudioService,
		private readonly _storageService: StorageService
	) {}

	// Update volume
	private _updateVolumeSubj = new Subject<number>();

	private _updateSub = this._updateVolumeSubj
		.pipe(debounceTime(500))
		.subscribe(volume => {
			this._audioService.volume = volume;
			this._storageService.saveVolume(volume);
		});

	private _radioSubject = new BehaviorSubject<Radio | undefined>(undefined);

	readonly activeRadio$ = this._radioSubject.pipe(
		distinctUntilChanged((prev, curr) => prev?.id === curr?.id),
		tap(x => console.log(x))
	);

	private readonly _sub = this._radioSubject
		.pipe(pairwise())
		.subscribe(([prevRadio, selectedRadio]) => {
			/**
			 * Business rules:
			 * 1. If there is no selected radio, don't do anything.
			 * 2. If there is no previous radio, then this is the first time the user clicked a radio. Play it.
			 * 3. If the selected radio is the same as the previous radio, the user clicked on it twice. Pause it.
			 * 4. Else just play the selected radio.
			 */
			if (!selectedRadio) return;

			if (prevRadio?.id === selectedRadio.id && this._audioService.isPlaying) {
				this._audioService.stop();
				return;
			}

			this._audioService.play(selectedRadio.source);
			this._storageService.saveLatestRadio(selectedRadio);
		});

	changeVolume(val: number) {
		this._updateVolumeSubj.next(val);
	}

	mute() {
		this._audioService.mute(!this._audioService.muted);
	}

	select(radio: Radio) {
		this._radioSubject.next(radio);
	}

	stop() {
		this._audioService.stop();
	}

	dispose() {
		this._sub.unsubscribe();
		this._updateSub.unsubscribe();
	}
}

export default new Player(new AudioService(), storage);
