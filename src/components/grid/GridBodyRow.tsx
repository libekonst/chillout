import React, { Component, ComponentProps, useState, FC } from 'react';
import { ControlsButton } from './ControlsButton';
import { Image } from '../styled/Image';
import { Placeholder } from '../styled/Placeholder';
import { GridBase, GridItem } from './GridBase';
import { Media } from './Media';
import { Favorite } from '../icon-buttons/Favorite';
import { AsyncImage } from '../async-image';

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
interface IState {
	hovered: boolean;
	loaded: boolean;
}
// export const GridBodyRow: FC<Props> = props => (
export const GridBodyRow: FC<Props> = props => {
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
		...rest
	} = props;

	return (
		<GridBase
			onMouseEnter={toggleHover(true)}
			onMouseLeave={toggleHover(false)}
			onClick={handlePlay}
			highlightOnHover
			large
			gutter
			{...rest}>
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
		</GridBase>
	);
};
