import { BehaviorSubject, from, combineLatest } from 'rxjs';
import { debounceTime, map, exhaustMap } from 'rxjs/operators';
import { RadioProvider } from '../data/radio.types';
import { Radio } from '../data';
import { fetchRadios } from '../data/radio.provider';

export class RadioBloc {
	constructor(private readonly _radioProvider: RadioProvider) {}

	private readonly _radiosFromApi = from(this._radioProvider());

	readonly refresh = new BehaviorSubject(null);

	fetchRadios() {
		this.refresh.next(null);
	}

	private readonly subscription = this.refresh
		.pipe(
			debounceTime(2000), // network delay
			exhaustMap(() => this._radiosFromApi)
		)
		.subscribe(radios => this._radiosSubject.next(radios));

	private readonly _radiosSubject = new BehaviorSubject<Radio[]>([]);

	private readonly _filterSubject = new BehaviorSubject<'news' | 'music' | undefined>(
		undefined
	);

	filter(label?: 'news' | 'music') {
		this._filterSubject.next(label);
	}

	readonly radios$ = combineLatest(this._radiosSubject, this._filterSubject).pipe(
		map(([radios, filter]) => {
			if (!filter) return radios;
			return radios.filter(r => r.label === filter);
		})
	);

	dispose() {
		this._radiosSubject.complete();
		this.refresh.complete();
		this.subscription.unsubscribe();
	}
}

export default new RadioBloc(fetchRadios);
