import React, { ComponentProps } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { Card } from '../card/';
import { IRadio } from '../../data';
import { ListItem, HorizontalList } from '../layout/HorizontalList';

interface IViewProps {
  isLoading: boolean;
  show: boolean;
  cardRef?: React.RefObject<any>;
  radios?: IRadio[];
}
type Props = ComponentProps<typeof CarouselHeader> & IViewProps;

// ? Intersection observer or refs and offset on carousel & card to detect how many elements fit
export const View = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { radios, show, isLoading, cardRef, ...rest } = props;
  return (
    <section ref={ref}>
      <CarouselHeader {...rest} />
      {show && (
        // TODO: Remove non-null assertion.
        <HorizontalList >{renderRadios(radios, cardRef)}</HorizontalList>
      )}
    </section>
  );
});

const renderRadios = (
  radios?: IRadio[],
  cardRef?: React.RefObject<any>,
): JSX.Element | JSX.Element[] =>
  radios ? (
    radios.map((r, i) => (
      <ListItem key={r.id} ref={radios.length - 1 === i ? cardRef : undefined}>
        <Card
          // cardRef={radios.length -1  === i ? cardRef : undefined}
          title={r.name}
          image={r.image} /* onClick={() => console.log(r)} */
        />
      </ListItem>
    ))
  ) : (
    <ListItem>
      <Card
        cardRef={cardRef}
        title={'r.name'}
        image={'r.image'} /* onClick={() => console.log(r)} */
      />
    </ListItem>
  );
