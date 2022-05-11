import React, { createContext, useContext, useMemo } from 'react';
import { AudioEngine } from './AudioEngine';
import { HtmlAudioEngine } from './HtmlAudioEngine';

type Props = {
	children: React.ReactNode;
};
export function AudioEngineProvider({ children }: Props) {
	const audioEngine = useMemo(() => new HtmlAudioEngine(), []);
	return <Context.Provider value={audioEngine}>{children}</Context.Provider>;
}

export const useAudioEngine = () => useContext(Context);

const Context = createContext<AudioEngine>(new HtmlAudioEngine());
