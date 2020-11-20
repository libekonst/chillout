import { IAudioService } from '../services/IAudioService';
import {
	filter,
	map,
	distinctUntilChanged,
	mapTo,
	switchMapTo,
	withLatestFrom,
	share,
	distinctUntilKeyChanged,
	pairwise,
	startWith
} from 'rxjs/operators';
import { PlaybackStatus } from '../services/PlaybackStatus';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Radio } from '../data';
import { HtmlAudioService } from '../services/audio.service';
import { RadioEntityStore, SelectRadio, radioStore } from '../data/RadioEntityStore';
import { fetchRadios } from '../data/radio.provider';

class EventHandler<Events> {
	protected readonly eventsSubject = new Subject<Events>();

	dispatch(event: Events) {
		this.eventsSubject.next(event);
	}
}

/**
 * Player component is aware of:
 * 1. Audio status (volume etc.)
 * 2. Audio controls
 * 3. Active radio
 */
export class PlayerBloc extends EventHandler<PlayerEvents> {
	constructor(
		private readonly audio: IAudioService,
		private readonly radioStore: RadioEntityStore
	) {
		super();
		this.audio = audio;
		this.radioStore = radioStore;
		console.log(this.audio);
	}

	// play = this._audio.play;

	// Select radio.
	// private radioSubject = new BehaviorSubject<Radio | undefined>(undefined);
	// activeRadio$ = this.radioSubject.pipe(
	// 	distinctUntilChanged((prev, curr) => prev?.id === curr?.id) // Only emit if the radio hasn't changed.
	// );

	private playClickedEvent$ = this.eventsSubject.pipe(
		filter((ev): ev is PlayClicked => ev instanceof PlayClicked)
	);
	// muteClickedEvent$ = this.eventsSubject.pipe(
	// 	filter((ev): ev is MuteClicked => ev instanceof MuteClicked)
	// );
	private volumeChangedEvent$ = this.eventsSubject.pipe(
		filter((ev): ev is VolumeChanged => ev instanceof VolumeChanged)
	);
	private radioSelectedEvent$ = this.eventsSubject.pipe(
		filter((ev): ev is RadioSelected => ev instanceof RadioSelected)
	);

	// Queries
	isPlaying$ = this.audio.playbackState$.pipe(
		map(status => status === PlaybackStatus.PLAYING),
		distinctUntilChanged()
	);

	volume$ = this.audio.volume$.pipe();

	muted$ = this.audio.volume$.pipe(
		map(vol => vol === 0),
		distinctUntilChanged()
	);
	changeVolume(val: number) {
		this.audio.setVolume(val);
	}

	// This might come from storage too
	selectedRadio$ = this.radioSelectedEvent$.pipe(
		map(ev => ev.radio),
		distinctUntilKeyChanged('id'),
		share()
	);
	activeRadio$ = this.radioStore.activeRadio$.pipe(distinctUntilChanged(), share());

	// Event handlers
	private playClickedHandler = this.playClickedEvent$
		.pipe(switchMapTo(this.audio.playbackState$), withLatestFrom(this.selectedRadio$))
		.subscribe(([status, radio]) => {
			if (!radio) return; // is this necessary now?
			if (status === PlaybackStatus.STOPPED) this.audio.play(radio.source);
			else this.audio.stop();
		});

	private muteClickedHandler = this.eventsSubject
		.pipe(filter((ev): ev is MuteClicked => ev instanceof MuteClicked))
		.subscribe(() => this.audio.toggleMute());

	private volumeChangedHandler = this.volumeChangedEvent$.subscribe(event => {
		console.log('from volumeChangeHandler', event);
		this.audio.setVolume(event.volume); // validate input?
	});

	private radioSelectedHandler = this.radioSelectedEvent$
		.pipe(
			map(ev => ev.radio),
			withLatestFrom(this.radioStore.activeRadio$, this.audio.playbackState$)
		)
		.subscribe(([clickedRadio, activeRadio, status]) => {
			if (activeRadio?.id !== clickedRadio.id)
				this.radioStore.dispatch(new SelectRadio(clickedRadio.id)); // Update the selected radio. this ok?

			if (activeRadio?.id === clickedRadio.id && status === PlaybackStatus.PLAYING)
				this.audio.stop();
			else this.audio.play(clickedRadio.source);
		});

	dispose() {
		this.playClickedHandler.unsubscribe();
		this.muteClickedHandler.unsubscribe();
		this.volumeChangedHandler.unsubscribe();
		this.radioSelectedHandler.unsubscribe();
		this.eventsSubject.complete();
	}
}

export const PlayerBloc2 = new PlayerBloc(new HtmlAudioService(), radioStore);

type PlayerEvents = PlayClicked | MuteClicked | VolumeChanged | RadioSelected;

export class PlayClicked {}
export class MuteClicked {}
export class VolumeChanged {
	constructor(readonly volume: number) {}
}
export class RadioSelected {
	constructor(readonly radio: Radio) {}
}
