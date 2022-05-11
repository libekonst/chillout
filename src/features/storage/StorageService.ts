import { Observable } from 'rxjs';
import { Radio } from '../../data/radio/Radio';

export interface StorageService {
	saveActiveRadio: (radio: Radio) => void;
	getActiveRadio: () => Observable<Radio>;
	saveAudioVolume: (volume: number) => void;
	getAudioVolume: () => Observable<number>;
}
