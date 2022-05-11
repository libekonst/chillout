import React, { ReactNode, useState, FC } from 'react';
import { View } from './View';
import { isLarge } from '../../styles';

interface Props {
	title: ReactNode;
	image: string;
	isActive?: boolean;
	cardRef?: React.RefObject<HTMLDivElement>;
	onClick?: (e: React.MouseEvent) => void;
}

const Card: FC<Props> = props => {
	const [hovered, setHovered] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const isScreenLarge = isLarge();

	const onMouseEnter = () => isScreenLarge && setHovered(true);
	const onMouseLeave = () => isScreenLarge && setHovered(false);
	const onImageLoad = () => setLoaded(true);

	const { title, onClick, isActive, image, cardRef, children } = props;

	return (
		<View
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}
			isHover={hovered}
			isActive={isActive}
			imageSource={image}
			title={title}
			loaded={loaded}
			onImageLoad={onImageLoad}
			cardRef={cardRef}>
			{children}
		</View>
	);
};

export default Card;
