/* eslint-disable react/destructuring-assignment */
import React, { FC, useMemo, useContext } from 'react';
import { Footer } from './Footer';
import { PlayButton } from './PlayButton';
import { VolumeBar } from './volume-bar';
import { NowPlayingLayout } from './NowPlaying';
import { Radio } from '../../data/radio/Radio';
import { AsyncImage } from '../async-image';
import { Favorite } from '../icon-buttons/Favorite';
import useObservable from '../../utils/useObservable';
import collectionsBloc from '../../blocs/collections.bloc';

const NowPlaying: FC<{ radio: Radio; controls: JSX.Element }> = props => {
	const Info = () => (
		<>
			<a href={props.radio.website} target="blank">
				{props.radio.name}
			</a>
			<p>{props.radio.label}</p>
		</>
	);

	return (
		<NowPlayingLayout
			imageSlot={<AsyncImage src={props.radio.image} />}
			controlsSlot={props.controls}
			infoSlot={<Info />}
		/>
	);
};

export function Player() {
	const audioVolume = 0.6;
	const audioMuted = false;
	const activeRadio = undefined;
	const isPlaying = false;
	// const playerBloc = usePlayerBloc();
	// const audioVolume = useObservable(playerBloc.volume$);
	// const audioMuted = useObservable(playerBloc.muted$, false);
	// const activeRadio = useObservable(playerBloc.selectedRadio$);
	// const isPlaying = useObservable(playerBloc.isPlaying$, false);
	const isFavorite$ = useMemo(
		() => collectionsBloc.isFavorite(activeRadio),
		[activeRadio]
	);
	const isFavorite = useObservable(isFavorite$, false);

	const handlePlay = () => {
		// if (activeRadio) playerBloc.select(activeRadio);
		// playerBloc.dispatch(new PlayClicked());
	};

	const handleAddFavorite = () => {
		if (activeRadio) collectionsBloc.addFavorite(activeRadio);
	};

	const Controls = () => (
		<Favorite isFavorite={isFavorite} onClick={handleAddFavorite} />
	);

	return (
		<Footer>
			<div style={{ width: '100%' }}>
				{activeRadio && <NowPlaying radio={activeRadio} controls={<Controls />} />}
			</div>
			<PlayButton isPlaying={isPlaying} onClick={handlePlay} />
			{audioVolume !== undefined && (
				<VolumeBar
					// onMuteAudio={audio.toggleMute}
					// onMuteAudio={() => playerBloc.dispatch(new MuteClicked())}
					onMuteAudio={() => {}}
					muted={audioMuted}
					changeAudioVolume={(vol: number) => {
						// playerBloc.changeVolume(vol);
						// audio.setVolume(vol);
						// playerBloc.dispatch(new VolumeChanged(vol));
					}}
					volume={audioVolume}
				/>
			)}
		</Footer>
	);
}
