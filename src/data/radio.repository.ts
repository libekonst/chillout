import { BehaviorSubject, from, combineLatest, merge } from 'rxjs';
import { debounceTime, map, exhaustMap, startWith, share } from 'rxjs/operators';
import { RadioProvider, Radio } from './radio.types';
import { fetchRadios } from './radio.provider';

export class RadioRepository {
	constructor(private _getRadios: RadioProvider) {}

	private _refresh = new BehaviorSubject(null);

	// private subscription = this._refresh
	// 	.pipe(exhaustMap(this._getRadios))
	// 	.subscribe(radios => this._radiosSubject.next(radios));

	private _radioEntities$ = this._refresh.pipe(
		exhaustMap(this._getRadios),
		startWith([] as Radio[]),
		share()
	);

	// private selectedRadio

	// private _radiosSubject = new BehaviorSubject<Radio[]>([]);

	private _filterSubject = new BehaviorSubject<Label | undefined>(undefined);

	filter(label?: Label) {
		this._filterSubject.next(label);
	}

	fetchRadios() {
		this._refresh.next(null);
	}

	isLoading$ = merge(this._refresh, this._radioEntities$).pipe(
		map(x => x === null) // Whenever refresh emits, it's loading.
	);

	radios$ = combineLatest(this._radioEntities$, this._filterSubject).pipe(
		map(([radios, filter]) => {
			if (!filter) return radios;
			return radios.filter(r => r.label === filter);
		})
	);

	dispose() {
		// this._radiosSubject.complete();
		this._refresh.complete();
		// this.subscription.unsubscribe();
	}
}

type Label = 'news' | 'music';

export default new RadioRepository(fetchRadios);
