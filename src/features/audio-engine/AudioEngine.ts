import { Observable } from 'rxjs';
import { PlaybackStatus } from './PlaybackStatus';

export interface AudioEngine {
	setVolume: (volume: number) => void;
	volume$: Observable<number>;
	mute: (val?: boolean) => void;
	toggleMute: () => void;
	playbackState$: Observable<PlaybackStatus>;
	play: (url: string) => void;
	stop: () => void;
}
