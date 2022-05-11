import React, { FC, useContext, useMemo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Radio } from './data/radio/Radio';
import { AppServices } from './context';
import { useObservable } from './utils';
import { PlaybackStatus } from './features/audio-engine/PlaybackStatus';

type Props = {
	radio?: Radio;
};
export function CardPlayer({ radio }: Props) {
	const { audio } = useContext(AppServices);
	const playback = useObservable(audio.playbackState$);
	const isPlaying = useMemo(
		() => playback === PlaybackStatus.LOADING || playback === PlaybackStatus.PLAYING,
		[playback]
	);
	if (!radio) return null;

	return (
		<Parent>
			<Blurred image={radio.image} />
			<Inner image={radio.image} big={isPlaying} />
			<LiveNow>LIVE</LiveNow>
			<Title>{radio.name}</Title>
		</Parent>
	);
}

const CardView = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	/* max-width:  */
`;

const Parent = styled.div`
	position: relative;
	width: 320px;
	height: 320px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: rgba(223, 96, 96, 0.1);
	border-radius: 10px;
	padding: 1rem;
	/* overflow: hidden; */
`;

const scaleIn = keyframes`
	from { transform: scaleX(1) scaleY(1.4); opacity: 0.1;}
	to { transform: scaleX(1.3) scaleY(1.7); opacity: 0.2;}
`;

const Blurred = styled.div<{ image: string }>`
	background-image: url(${props => props.image});
	background-color: white;
	background-size: cover;
	background-position: center;
	position: absolute;
	width: 100%;
	height: 100%;
	filter: blur(20px) saturate(180%);
	animation: ${scaleIn} 0.5s ease-in-out forwards;
	opacity: 0.2;
`;

const Inner = styled.div<{ image: string; big?: boolean }>`
	background: url(${props => props.image});
	background-size: contain;
	background-repeat: repeat;
	background-position: center;
	background-color: rgb(250, 250, 250);
	width: 60%;
	height: 60%;
	transition: transform 0.1s ease-out;
	border-radius: 10px;
	z-index: 1;
	/* box-shadow: 0 16px 24px -12px rgba(0, 0, 0, 0.3); */
	transform: scale(1);

	${props =>
		props.big &&
		css`
			transform: scale(1.3);
		`}
`;

const Title = styled.p`
	color: #fff;
	/* color: rgb(11, 10, 21); */
	font-size: 2rem;
	z-index: 1;
`;

const LiveNow = styled.div`
	// color: rgb(90, 90, 90);
	color: rgb(245, 245, 245);
	background-color: rgba(120, 120, 120, 0.6);
	backdrop-filter: blur(20px);
	border-radius: 5px;
	padding: 5px;
	position: absolute;
	top: 20px;
	left: 80px;
	font-weight: bold;
	z-index: 10;
	cursor: default;
`;
