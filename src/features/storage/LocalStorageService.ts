import { EMPTY, of } from 'rxjs';
import { Radio } from '../../data/radio/Radio';
import { StorageService } from './StorageService';

/**
 * If the maximum storage quota is reached, Storage.setItem throws an Error.
 * Safari on private mode sets the storage quota to 0, instead of implementing a separate
 * storage container, thus Storage.setItem always throws.
 */
export class LocalStorageService implements StorageService {
	saveActiveRadio(radio: Radio) {
		try {
			localStorage.setItem(Keys.ACTIVE_RADIO, JSON.stringify(radio));
		} catch {}
	}
	getActiveRadio() {
		const retrieved = localStorage.getItem(Keys.ACTIVE_RADIO);
		if (!retrieved) return EMPTY;

		const radio: Radio = JSON.parse(retrieved); // TODO validate input
		return of(radio);
	}

	saveAudioVolume(volume: number) {
		try {
			localStorage.setItem(Keys.AUDIO_VOLUME, JSON.stringify(volume));
		} catch {}
	}
	getAudioVolume() {
		const got = localStorage.getItem(Keys.AUDIO_VOLUME);
		if (!got) return EMPTY;

		const volume = parseFloat(got);
		if (isNaN(volume)) return EMPTY;

		return of(volume);
	}
}

enum Keys {
	ACTIVE_RADIO = 'ACTIVE_RADIO',
	AUDIO_VOLUME = 'AUDIO_VOLUME',
	FAVORITES = 'FAVORITES'
}
