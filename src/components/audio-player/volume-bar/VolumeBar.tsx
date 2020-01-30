import React, { FC } from 'react';
import styled from 'styled-components';
import { MuteButton } from './MuteButton';
import { InputWrapper, TrackBar, LowerFillBar } from './SliderElements';
import { ThumbWrapper, Thumb } from './Thumb';
import { Input } from './Input';

const VolumeBarWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 20rem;
	width: 100%;
`;

interface IProps {
	onMuteAudio: () => void;
	muted: boolean;
	changeAudioVolume: (val: number) => void;
	volume: number;
}
const VolumeBar: FC<IProps> = props => {
	const { onMuteAudio, muted, changeAudioVolume, volume } = props;

	const handleChangeVolume = (v: string) => changeAudioVolume(parseFloat(v));

	return (
		<VolumeBarWrapper>
			<MuteButton volume={volume} onClick={onMuteAudio} audioMuted={muted} />
			<InputWrapper>
				<TrackBar />
				<LowerFillBar style={{ transform: `scaleX(${muted ? 0 : volume})` }} />
				<ThumbWrapper
					style={{
						// Subtract half the thumb's width to center it.
						transform: `translateX(calc(${muted ? 0 : volume * 100}% - 0.25rem))`
					}}>
					<Thumb />
				</ThumbWrapper>
				<Input
					type="range"
					min="0"
					max="1"
					step="0.01"
					value={muted ? 0 : volume}
					onInput={e => handleChangeVolume(e.currentTarget.value)}
				/>
			</InputWrapper>
		</VolumeBarWrapper>
	);
};

export default VolumeBar;
