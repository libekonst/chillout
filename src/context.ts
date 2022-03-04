import { createContext } from 'react';
import { htmlAudioControls } from './features/audio-engine/HtmlAudioEngine';

type AppContext = {
	audio: ReturnType<typeof htmlAudioControls>;
};

export const AppServices = createContext<AppContext>({
	audio: htmlAudioControls(new Audio())
});
