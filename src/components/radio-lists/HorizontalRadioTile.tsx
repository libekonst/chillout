import React, { ComponentProps, useState } from 'react';
import { Favorite } from '../icon-buttons/Favorite';
import { AsyncImage } from '../async-image';
import styled from 'styled-components';
import { ListItemBase } from './ListItemBase';
import { Row } from '../layout/Row';
import { GridItem, GridBase } from '../grid/GridBase';
import { ControlsButton } from '../grid/ControlsButton';
import { Media } from '../grid/Media';

interface IProps {
	handleAddFavorite: (e: React.MouseEvent) => void;
	handlePlay: (e: React.MouseEvent) => void;
	isFavorite: boolean;
	isPlaying: boolean;
	selected: boolean;
	name: string;
	image: string;
	label: string;
}

type Props = Partial<ComponentProps<typeof GridBase>> & IProps;

export function HorizontalRadioTile(props: Props) {
	const [hovered, setHovered] = useState(false);

	const toggleHover = (bool: boolean) => () => setHovered(bool);

	const {
		handlePlay,
		isPlaying,
		handleAddFavorite,
		isFavorite,
		image,
		name,
		label,
		selected
	} = props;

	return (
		<ListItemBase
			onMouseEnter={toggleHover(true)}
			onMouseLeave={toggleHover(false)}
			onClick={handlePlay}
			selected={selected}>
			<Row>
				<GridItem gridArea="playcontrol" justifySelf="end">
					<ControlsButton isPlaying={isPlaying} isHover={hovered} />
				</GridItem>
				<GridItem
					shouldOverflow
					gridArea="favorite"
					justifySelf="center"
					onClick={handleAddFavorite}>
					<Favorite isFavorite={isFavorite} />
				</GridItem>
				<GridItem gridArea="image" justifySelf="center">
					<Media>
						<AsyncImage src={image} />
						{/* <Image src={this.props.image} /> */}
					</Media>
				</GridItem>
				<GridItem gridArea="title" truncate>
					{name}
				</GridItem>
				<GridItem gridArea="genre">{label}</GridItem>
			</Row>
		</ListItemBase>
	);
}
