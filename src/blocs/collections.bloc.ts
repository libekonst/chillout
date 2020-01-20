import { BehaviorSubject, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import storage, { StorageService } from '../services/storage.service';
import { Radio } from '../data';

let favorites = [] as Radio[];

export class CollectionsBloc {
	constructor(private readonly _storageService: StorageService) {}

	private _favoritesSubject = new Subject<Radio>();

	private _favoritesSub = this._favoritesSubject
		.pipe(throttleTime(300))
		.subscribe(radio => {
			const existing = favorites.find(r => r.id === radio.id);

			if (existing) favorites = favorites.filter(f => f.id !== existing.id);
			else favorites = [radio, ...favorites]; // Add from leftF
			this._storageService.updateFavorites(favorites);
		});

	addFavorite(radio: Radio) {
		this._favoritesSubject.next(radio);
	}

	dispose() {
		this._favoritesSub.unsubscribe();
		this._favoritesSubject.complete();
	}
}

export default new CollectionsBloc(storage);
