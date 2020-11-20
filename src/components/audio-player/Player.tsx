/* eslint-disable react/destructuring-assignment */
import React, { FC, useMemo, useContext } from 'react';
import { Footer } from './Footer';
import { PlayButton } from './PlayButton';
import { VolumeBar } from './volume-bar';
import { NowPlayingLayout } from './NowPlaying';
import { Radio } from '../../data';
import { AsyncImage } from '../async-image';
import { Favorite } from '../icon-buttons/Favorite';
import useObservable from '../../utils/useObservable';
import playerBloc from '../../blocs/player.bloc';
import collectionsBloc from '../../blocs/collections.bloc';
import { AppServices } from '../../context';
import {
	PlayerBloc2,
	PlayClicked,
	MuteClicked,
	VolumeChanged
} from '../../blocs/PlayerBloc';

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

const Player: FC = props => {
	const audioVolume = useObservable(PlayerBloc2.volume$);
	const audioMuted = useObservable(PlayerBloc2.muted$, false);
	const activeRadio = useObservable(PlayerBloc2.selectedRadio$);
	const isPlaying = useObservable(PlayerBloc2.isPlaying$, false);
	const isFavorite$ = useMemo(() => collectionsBloc.isFavorite(activeRadio), [
		activeRadio
	]);
	const isFavorite = useObservable(isFavorite$, false);

	const { audio } = useContext(AppServices);
	const volume = useObservable(PlayerBloc2.volume$);
	console.log('volume from audio service', volume);

	const handlePlay = () => {
		// if (activeRadio) playerBloc.select(activeRadio);
		PlayerBloc2.dispatch(new PlayClicked());
	};

	const handleAddFavorite = () => {
		if (activeRadio) collectionsBloc.addFavorite(activeRadio);
	};

	console.log('audio volume', audioVolume, 'active radio', activeRadio);

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
					onMuteAudio={() => PlayerBloc2.dispatch(new MuteClicked())}
					muted={audioMuted}
					changeAudioVolume={(vol: number) => {
						// playerBloc.changeVolume(vol);
						// audio.setVolume(vol);
						PlayerBloc2.dispatch(new VolumeChanged(vol));
					}}
					volume={volume ?? 0}
				/>
			)}
		</Footer>
	);
};
export default Player;
