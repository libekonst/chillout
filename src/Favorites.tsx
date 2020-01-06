import React, { FC } from 'react';
import styled from 'styled-components';
import { isLarge } from './styles';
import { Carousel } from './components/carousel';
import { Backdrop } from './components/backdrop';
import { Radio } from './data';
import { FAB } from './components/icon-buttons/FAB';

interface IProps {
	expandFavorites: () => void;
	openFavorites: () => void;
	togglePlayRadio: (id: number) => (e: React.MouseEvent<Element, MouseEvent>) => void;

	// App state
	// contentReady: boolean;
	isScreenLarge: boolean;

	// Radio state
	favoritesOpened: boolean;
	activeRadioId?: number;
	pendingRadioId?: number;
	favorites: Radio[];

	// Playback state
	isPlaying: boolean;
	isLoading: boolean;

	// Audio state
	volume: number;
	audioMuted: boolean;
}

export const Favorites: FC<IProps> = props => {
	const {
		favorites,
		favoritesOpened,
		isPlaying,
		expandFavorites,
		togglePlayRadio,
		openFavorites,
		isLoading,
		activeRadioId,
		pendingRadioId
	} = props;

	if (isLarge())
		return (
			<StickyTop>
				<Carousel
					data={favorites}
					handleExpand={expandFavorites}
					expanded={favoritesOpened}
					isPlaying={isPlaying || isLoading}
					selectedRadio={pendingRadioId || activeRadioId}
					onSelectRadio={togglePlayRadio}
				/>
			</StickyTop>
		);

	if (!isLarge() && favorites.length)
		return (
			<>
				<Backdrop
					open={favoritesOpened}
					data={favorites}
					onRadioClick={togglePlayRadio}
					isPlaying={isPlaying || isLoading}
					selectedRadio={pendingRadioId || activeRadioId}
				/>
				<FAB isOpen={favoritesOpened} onClick={openFavorites} />
			</>
		);

	return null;
};

const StickyTop = styled.div`
	position: sticky;
	top: 0;
	z-index: 1;
	padding-bottom: 1rem;
	background-color: #fff;
`;
