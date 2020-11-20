import { AudioService, htmlAudioControls } from './services/audio.service';
import { createContext } from 'react';

type AppContext = {
	audio: ReturnType<typeof htmlAudioControls>;
};

export const AppServices = createContext<AppContext>({
	audio: htmlAudioControls(new Audio())
});
