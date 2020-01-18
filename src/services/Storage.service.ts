/* eslint-env browser */
import { of, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, exhaustMap, debounceTime, exhaust } from 'rxjs/operators';
import { Radio } from '../data';

export class StorageService {
	private _volumeSubj = new BehaviorSubject<number | undefined>(undefined);

	private _lastRadioSubj = new BehaviorSubject<Radio | undefined>(undefined);

	private _getPrefsSubj = new BehaviorSubject(null);

	private _favoritesSubj = new BehaviorSubject<Radio[]>([]);

	private _getFavoritesSubj = new BehaviorSubject(null);

	// private _updateFavoritesSubj = new Subject<UpdateFavoriteAction>();

	private _loadPreferences$ = of(getPreferences());

	private _loadFavorites$ = of(getFavorites());

	private _preferencesSub = combineLatest(this._volumeSubj, this._lastRadioSubj)
		.pipe(debounceTime(500))
		.subscribe(([volume, radio]) => savePreferences(volume, radio));

	// Reducer
	// private _favoritesSub = combineLatest(this._favoritesSubj, this._updateFavoritesSubj)
	// 	.pipe(debounceTime(500))
	// 	.subscribe(([favorites, action]) => favoritesReducer(favorites, action));

	private _updateFavoritesSub = this._favoritesSubj
		.pipe(debounceTime(500))
		.subscribe(radios => saveFavorites(radios));

	saveVolume(vol: number) {
		this._volumeSubj.next(vol);
	}

	saveLatestRadio(radio: Radio) {
		this._lastRadioSubj.next(radio);
	}

	updateFavorites(radios: Radio[]) {
		this._favoritesSubj.next(radios);
	}

	// dispatchUpdateFavorite(action: UpdateFavoriteAction) {
	// 	this._updateFavoritesSubj.next(action);
	// }

	preferences$ = this._getPrefsSubj.pipe(exhaustMap(() => this._loadPreferences$));

	favorites$ = this._getFavoritesSubj.pipe(exhaustMap(() => this._loadFavorites$));

	dispose() {
		this._volumeSubj.complete();
		this._lastRadioSubj.complete();
		this._getPrefsSubj.complete();
		this._favoritesSubj.complete();
		this._preferencesSub.unsubscribe();
		// this._favoritesSub.unsubscribe();
		this._updateFavoritesSub.unsubscribe();
	}
}

interface Preferences {
	volume: number;
	radio?: Radio;
}

interface UpdateFavoriteAction {
	type: 'ADD' | 'REMOVE';
	payload: Radio;
}

enum Storage {
	PREFS = 'preferences',
	FAVS = 'favorites'
}

const getPreferences = () => {
	const pref = localStorage.getItem(Storage.PREFS);
	if (!pref) return undefined;

	const parsed: Preferences = JSON.parse(pref);
	return parsed;
};

const savePreferences = (volume?: number, radio?: Radio) => {
	if (volume === undefined || radio === undefined) return;

	localStorage.setItem(Storage.PREFS, JSON.stringify({ volume, radio } as Preferences));
};

const getFavorites = () => {
	const favorites = localStorage.getItem(Storage.FAVS);
	if (!favorites) return undefined;

	const parsed: Radio[] = JSON.parse(favorites);
	console.log(parsed);
	return parsed;
};

const saveFavorites = (radios: Radio[]) => {
	return localStorage.setItem(Storage.FAVS, JSON.stringify(radios));
};

// Reducer
const addFavorite = (collection: Radio[], radio: Radio) => {
	if (collection.find(r => r.id === radio.id)) return undefined;

	const updated = [...collection, radio];
	return localStorage.setItem(Storage.FAVS, JSON.stringify(updated));
};

const removeFavorite = (collection: Radio[], radio: Radio) => {
	const updated = collection.filter(r => r.id !== radio.id);

	return localStorage.setItem(Storage.FAVS, JSON.stringify(updated));
};

const favoritesReducer = (favorites: Radio[], action: UpdateFavoriteAction) => {
	switch (action.type) {
		case 'ADD':
			return addFavorite(favorites, action.payload);
		case 'REMOVE':
			return removeFavorite(favorites, action.payload);
		default:
			return undefined;
	}
};

export default new StorageService();
