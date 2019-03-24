import React, { ComponentProps } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { Card } from '../card/';
import { IRadio } from '../../data';
import { ListItem, HorizontalList } from './HorizontalList';
import { EmptyCollectionPlaceholder } from './EmptyCollectionPlaceholder';

interface IViewProps {
  show: boolean;
  cardRef?: React.RefObject<any>;
  radios?: IRadio[];
}
type Props = ComponentProps<typeof CarouselHeader> & IViewProps;

/**
 * Initially render a placeholder to measure its size, then setState again to populate with an exact number of fitting items.
 * This intermediate state won't be visible to the user.
 */
export const View = React.forwardRef<HTMLUListElement, Props>((props, ref) => {
  const { radios, show, cardRef, ...rest } = props;

  const renderCardList = (radios: IRadio[]) =>
    !!radios.length ? (
      radios.map((r, i) => (
        <ListItem key={r.id} ref={i === 0 ? props.cardRef : null}>
          <Card title={r.name} image={r.image} />
        </ListItem>
      ))
    ) : (
      <EmptyCollectionPlaceholder message="addFavorite" />
    );

  return (
    <section>
      <CarouselHeader {...rest} />
      <HorizontalList show={show} ref={ref}>
        {show &&
          !!radios &&
          (renderCardList(radios))}
      </HorizontalList>
    </section>
  );
});
