import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { Card } from '../card';
import { Radio } from '../../data';
import { FullscreenLayer } from './FullscreenLayer';

interface IProps {
	isPlaying?: boolean;
	selectedRadio?: number;
	onRadioClick: (id: number) => (e: MouseEvent) => void;
	data: Radio[];
	open: boolean;
}
export const Backdrop: FC<IProps> = props => (
	<aside>
		<FullscreenLayer open={props.open}>
			{props.data.map(r => (
				<CardWrapper onClick={props.onRadioClick(r.id)} key={r.id}>
					<Card
						image={r.image}
						title={r.name}
						isActive={props.selectedRadio === r.id && props.isPlaying}
					/>
				</CardWrapper>
			))}
		</FullscreenLayer>
	</aside>
);

const CardWrapper = styled.li`
	margin: 1rem;
	cursor: pointer;
`;
