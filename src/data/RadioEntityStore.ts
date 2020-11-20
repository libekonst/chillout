import { RadioProvider, Radio } from './radio.types';
import { Subject, merge } from 'rxjs';
import {
	exhaustMap,
	startWith,
	share,
	filter,
	map,
	withLatestFrom
} from 'rxjs/operators';
import { fetchRadios } from './radio.provider';

export enum Filters {
	NEWS = 'NEWS',
	MUSIC = 'MUSIC',
	NONE = 'NONE'
} 

export class RadioEntityStore {
	constructor(private _getRadios: RadioProvider) {}

	private _commandsSubject = new Subject<Commands>();
	dispatch(command: Commands) {
		this._commandsSubject.next(command);
	}

	// State
	private _refresh$ = this._commandsSubject.pipe(
		filter((c): c is Refresh => c instanceof Refresh)
	);

	private _radioEntities$ = this._refresh$.pipe(
		exhaustMap(this._getRadios),
		startWith([] as Radio[]), // Replace with record for faster indexing
		share()
	);

	// Queries
	isLoading$ = merge(this._refresh$, this._radioEntities$).pipe(
		map(x => x instanceof Refresh) // Whenever refresh emits (Refresh command received), it's loading.
	);

	filter$ = this._commandsSubject.pipe(
		filter((c): c is Filter => c instanceof Filter),
		map(c => c.filter),
		startWith(Filters.NONE),
		share()
	);

	radios$ = this._radioEntities$.pipe(
		withLatestFrom(this.filter$),
		map(([radios, filter]) => {
			if (filter === Filters.NONE) return radios;
			const label = mapFilterToLabel(filter);
			return radios.filter(r => r.label === label);
		})
	);

	activeRadio$ = this._commandsSubject.pipe(
		filter((c): c is SelectRadio => c instanceof SelectRadio),
		withLatestFrom(this._radioEntities$),
		map(([command, radios]) => {
			return radios.find(radio => radio.id === command.id);
		}),
		share()
	);

	dispose() {
		this._commandsSubject.complete();
	}
}

export class Refresh {}
export class Filter {
	constructor(readonly filter: Filters) {}
}
export class SelectRadio {
	constructor(readonly id: number) {}
}
export const radioStore = new RadioEntityStore(fetchRadios);
type Commands = Refresh | Filter | SelectRadio;

const mapFilterToLabel = (filter: Filters) => {
	switch (filter) {
		case Filters.NEWS:
			return 'news';
		default:
		case Filters.MUSIC:
			return 'music';
	}
};
