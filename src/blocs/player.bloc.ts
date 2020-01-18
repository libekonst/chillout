import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AudioService } from '../services/Audio.service';
import { Radio } from '../data';

export class Player {
	constructor(private readonly _audioService: AudioService) {}

	private readonly _selectedRadio = new BehaviorSubject<Radio | undefined>(undefined);

	readonly activeRadio$ = this._selectedRadio.asObservable();

	private readonly _sub = this._selectedRadio
		.pipe(map(radio => radio?.source))
		.subscribe(src => src && this._audioService.play(src));

	playRadio(radio: Radio) {
		this._selectedRadio.next(radio);
	}

	dispose() {
		this._sub.unsubscribe();
	}
}

export default new Player(new AudioService());
