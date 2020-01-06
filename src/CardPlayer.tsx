import React, { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Radio } from './data';

interface IProps {
	radio?: Radio;
	isPlaying?: boolean;
}
export const CardPlayer: FC<IProps> = ({ radio, isPlaying }) => {
	if (!radio) return null;
	return (
		<Parent>
			<Blurred image={radio.image} />
			<Inner image={radio.image} big={isPlaying} />
			<Title>{radio.name}</Title>
		</Parent>
	);
};

const Parent = styled.div`
	position: relative;
	width: 320px;
	height: 320px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	/* background-color: rgba(255, 255, 255, 0.1); */
	border-radius: 10px;
	padding: 1rem;
	/* overflow: hidden; */
`;

const Blurred = styled.div<{ image: string }>`
	background-image: url(${props => props.image});
	background-color: white;
	background-size: cover;
	position: absolute;
	width: 100%;
	height: 100%;
	filter: blur(20px) saturate(180%);
	transform: scaleX(1.3) scaleY(1.7);
	opacity: 0.2;
`;

const Inner = styled.div<{ image: string; big?: boolean }>`
	background: url(${props => props.image});
	background-size: cover;
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
