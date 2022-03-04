import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { Card } from '../card';
import { Radio } from '../../data/radio/Radio';
import { FullscreenLayer } from './FullscreenLayer';

interface IProps {
	isPlaying?: boolean;
	selectedRadio?: string;
	onRadioClick: (radio: Radio) => (e: MouseEvent) => void;
	data: Radio[];
	open: boolean;
}
export const Backdrop: FC<IProps> = ({
	open,
	data,
	selectedRadio,
	isPlaying,
	onRadioClick
}) => (
	<aside>
		<FullscreenLayer open={open}>
			{data.map(r => (
				<CardWrapper onClick={onRadioClick(r)} key={r.id}>
					<Card
						image={r.image}
						title={r.name}
						isActive={selectedRadio === r.id && isPlaying}
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
