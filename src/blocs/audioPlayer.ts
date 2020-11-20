import { AudioControls, AudioPersistence } from '../services/audio.service';
import { map } from 'rxjs/operators';

type AudioPlayer = (controls: AudioControls, persistence: AudioPersistence) => void;
export const audioPlayer: AudioPlayer = (controls, persistence) => {
	const muted$ = controls.volume$.pipe(map(v => v === 0));
};
