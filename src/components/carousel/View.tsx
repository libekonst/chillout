import React, { ComponentProps, FC, MouseEvent } from 'react';
import { Radio } from '../../data/radio/Radio';
import { Card } from '../card';
import { CarouselHeader } from './CarouselHeader';
import { EmptyCollectionPlaceholder } from './EmptyCollectionPlaceholder';
import { HorizontalList, ListItem } from './HorizontalList';

interface IViewProps {
	show: boolean;
	canClickNext: boolean;
	selectedRadio?: string;
	canClickBack: boolean;
	onSelectRadio: (radio: Radio) => (e: MouseEvent) => void;
	cardRef: React.RefObject<HTMLLIElement>;
	radios: Radio[];
	isPlaying?: boolean;
}
type Props = ComponentProps<typeof CarouselHeader> & IViewProps;

export const View = React.forwardRef<HTMLUListElement, Props>((props, ref) => {
	const { radios, show, cardRef, isPlaying, selectedRadio, ...rest } = props;
	const renderContent = () =>
		!radios.length ? (
			<EmptyCollectionPlaceholder message="addFavorite" />
		) : (
			radios.map((r, i) => (
				<ListItem key={r.id} ref={i === 0 ? cardRef : null}>
					<Card
						title={r.name}
						image={r.image}
						onClick={props.onSelectRadio(r)}
						isActive={selectedRadio === r.id && isPlaying}
					/>
				</ListItem>
			))
		);

	return (
		<section>
			<CarouselHeader
				// {...rest}
				title={props.title}
				onExpand={props.onExpand}
				expanded={props.expanded}
				onNext={props.expanded && props.canClickNext ? props.onNext : undefined}
				onBack={props.expanded && props.canClickBack ? props.onBack : undefined}
			/>
			{show && (
				<HorizontalList ref={ref} highlightMore={props.canClickNext}>
					{renderContent()}
				</HorizontalList>
			)}
		</section>
	);
});
