/* eslint-disable react/destructuring-assignment */
import React, { FC, useMemo } from 'react';
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
	const audioVolume = useObservable(playerBloc.audioVolume$);
	const audioMuted = useObservable(playerBloc.muted$);
	const activeRadio = useObservable(playerBloc.activeRadio$);
	const isPlaying = useObservable(playerBloc.isPlaying$);
	const isFavorite$ = useMemo(() => collectionsBloc.isFavorite(activeRadio), [
		activeRadio
	]);
	const isFavorite = useObservable(isFavorite$, false);

	const handlePlay = () => {
		if (activeRadio) playerBloc.select(activeRadio);
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
					onMuteAudio={() => playerBloc.mute()}
					muted={!!audioMuted}
					changeAudioVolume={(vol: number) => playerBloc.changeVolume(vol)}
					volume={audioVolume}
				/>
			)}
		</Footer>
	);
};
export default Player;
