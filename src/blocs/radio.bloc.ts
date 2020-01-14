import { BehaviorSubject, from, combineLatest, merge } from 'rxjs';
import { debounceTime, map, exhaustMap } from 'rxjs/operators';
import { RadioProvider } from '../data/radio.types';
import { Radio } from '../data';
import { fetchRadios } from '../data/radio.provider';

export class RadioBloc {
	constructor(private readonly _radioProvider: RadioProvider) {}

	private readonly _refresh = new BehaviorSubject(null);

	private readonly subscription = this._refresh
		.pipe(
			debounceTime(2000), // network delay
			exhaustMap(() => from(this._radioProvider()))
		)
		.subscribe(radios => this._radiosSubject.next(radios));

	private readonly _radiosSubject = new BehaviorSubject<Radio[]>([]);

	private readonly _filterSubject = new BehaviorSubject<Label | undefined>(undefined);

	filter(label?: Label) {
		this._filterSubject.next(label);
	}

	fetchRadios() {
		this._refresh.next(null);
	}

	readonly isLoading$ = merge(this._refresh, this._radiosSubject).pipe(
		map(x => x === null)
	);

	readonly radios$ = combineLatest(this._radiosSubject, this._filterSubject).pipe(
		map(([radios, filter]) => {
			if (!filter) return radios;
			return radios.filter(r => r.label === filter);
		})
	);

	dispose() {
		this._radiosSubject.complete();
		this._refresh.complete();
		this.subscription.unsubscribe();
	}
}

type Label = 'news' | 'music';

export default new RadioBloc(fetchRadios);
