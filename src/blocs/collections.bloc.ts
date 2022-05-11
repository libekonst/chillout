import { BehaviorSubject, Subject, of } from 'rxjs';
import { throttleTime, withLatestFrom, switchAll, flatMap, map } from 'rxjs/operators';
import storage, { StorageService } from '../features/storage/storage.service';
import { Radio } from '../data/radio/Radio';

// let favorites = [] as Radio[];

export class CollectionsBloc {
	constructor(private readonly _storageService: StorageService) {}

	private _favoritesSubject = new Subject<Radio>();

	private _favoritesState = new BehaviorSubject<Radio[]>([]);

	private _favoritesSub = this._favoritesSubject
		.pipe(throttleTime(300), withLatestFrom(this._favoritesState))
		.subscribe(([requested, favorites]) => {
			const existing = favorites.find(r => r.id === requested.id);

			// If the requested radio is in the favorites, remove it.
			const updated = existing
				? favorites.filter(f => f.id !== existing.id)
				: [requested, ...favorites]; // Add from left

			this._favoritesState.next(updated);
			this._storageService.updateFavorites(updated);
		});

	readonly favorites$ = of(this._storageService.favorites$, this._favoritesState).pipe(
		switchAll()
	);

	isFavorite(radio?: Radio) {
		return this.favorites$.pipe(
			map(favs => {
				if (!favs) return false;
				return !!favs.find(r => r.id === radio?.id);
			})
		);
	}

	addFavorite(radio: Radio) {
		this._favoritesSubject.next(radio);
	}

	dispose() {
		this._favoritesSub.unsubscribe();
		this._favoritesSubject.complete();
	}
}

export default new CollectionsBloc(storage);
