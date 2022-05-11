import React, { FC, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { isLarge } from './styles';
import { Carousel } from './components/carousel';
import { Backdrop } from './components/backdrop';
import { Radio } from './data/radio/Radio';
import { FAB } from './components/icon-buttons/FAB';
import { AppServices } from './context';
import { useObservable } from './utils';

type Props = {
	// expandFavorites: () => void;
	// openFavorites: () => void;
	toggleFavoritesOpenAndThen: (cb?: () => any) => void;
	togglePlayRadio: (radio: Radio) => (e: React.MouseEvent<Element, MouseEvent>) => void;

	// App state
	// contentReady: boolean;
	isScreenLarge: boolean;

	// Radio state
	favoritesOpened: boolean;
	activeRadioId?: string;
	favorites: Radio[];

	// Playback state
	isPlaying: boolean;
};

export function Favorites(props: Props) {
	const {
		favorites,
		favoritesOpened,
		toggleFavoritesOpenAndThen,
		togglePlayRadio,
		activeRadioId,
		isScreenLarge,
		isPlaying
	} = props;

	if (isScreenLarge)
		return (
			<StickyTop>
				<Carousel
					data={favorites}
					handleExpand={toggleFavoritesOpenAndThen}
					expanded={favoritesOpened}
					isPlaying={isPlaying}
					selectedRadio={activeRadioId}
					onSelectRadio={togglePlayRadio}
				/>
			</StickyTop>
		);

	if (!isScreenLarge && favorites.length)
		return (
			<>
				<Backdrop
					open={favoritesOpened}
					data={favorites}
					onRadioClick={togglePlayRadio}
					isPlaying={isPlaying}
					selectedRadio={activeRadioId}
				/>
				<FAB isOpen={favoritesOpened} onClick={toggleFavoritesOpenAndThen} />
			</>
		);

	return null;
}

const StickyTop = styled.div`
	position: sticky;
	top: 0;
	z-index: 1;
	padding-bottom: 1rem;
	background-color: rgba(255, 255, 255, 0.8);
	backdrop-filter: saturate(180%) blur(20px);
`;
