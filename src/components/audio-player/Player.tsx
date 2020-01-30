/* eslint-disable react/destructuring-assignment */
import React, { FC } from 'react';
import { Footer } from './Footer';
import { PlayButton } from './PlayButton';
import { VolumeBar } from './volume-bar';
import { NowPlayingLayout } from './NowPlaying';
import { Radio } from '../../data';
import { AsyncImage } from '../async-image';
import { Favorite } from '../icon-buttons/Favorite';
import useObservable from '../../utils/useObservable';
import playerBloc from '../../blocs/player.bloc';

interface IProps {
	// Play button
	isPlaying: boolean;
	handlePlay?: () => void;

	// Volume
	muted: boolean;
	volume: number;

	// Radio
	radio?: Radio;
	isRadioFavorite?: boolean;
	handleAddFavorite?: (e: any) => void;
}

const NowPlaying: FC<{ radio: Radio; controls: JSX.Element }> = props => {
	const Info = () => (
		<>
			<a href={props.radio!.website} target="blank">
				{props.radio!.name}
			</a>
			<p>{props.radio!.label}</p>
		</>
	);

	return (
		<NowPlayingLayout
			imageSlot={<AsyncImage src={props.radio!.image} />}
			controlsSlot={props.controls}
			infoSlot={<Info />}
		/>
	);
};

const Player: FC<IProps> = props => {
	const Controls = () => (
		<Favorite isFavorite={props.isRadioFavorite} onClick={props.handleAddFavorite} />
	);

	function renderNowPlaying() {
		if (!props.radio) return undefined;
		return <NowPlaying radio={props.radio} controls={<Controls />} />;
	}

	const audioVolume = useObservable(playerBloc.audioVolume$, 0.6);
	console.log('audio volume', audioVolume);
	return (
		<Footer>
			<div style={{ width: '100%' }}>{renderNowPlaying()}</div>
			<PlayButton isPlaying={props.isPlaying} onClick={props.handlePlay} />
			<VolumeBar
				onMuteAudio={() => playerBloc.mute()}
				muted={props.muted}
				changeAudioVolume={(vol: number) => playerBloc.changeVolume(vol)}
				volume={audioVolume}
			/>
		</Footer>
	);
};
export default Player;
