import { AudioService, audioService } from './services/audio.service';
import { createContext } from 'react';

type AppContext = {
	audio: ReturnType<typeof audioService>;
};

export const AppServices = createContext<AppContext>({
	audio: audioService(new Audio())
});
