import React, { ComponentProps } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { Card } from '../card/';
import { IRadio } from '../../data';
import { ListItem, HorizontalList } from './HorizontalList';

interface IViewProps {
  isFirstRender?: boolean;
  show: boolean;
  cardRef?: React.RefObject<any>;
  radios?: IRadio[];
}
type Props = ComponentProps<typeof CarouselHeader> & IViewProps;

/**
 * Initially render a placeholder to measure its size, then setState again to populate with an exact number of fitting items.
 * This intermediate state won't be visible to the user.
 */
export const View = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { radios, show, isFirstRender, cardRef, ...rest } = props;

  return (
    <section ref={ref}>
      <CarouselHeader {...rest} />
      {show &&
        !!radios &&
        !!radios.length &&
        (isFirstRender ? (
          <ListItem ref={cardRef}>
            <Card title={'r.name'} image={'r.image'} />
          </ListItem>
        ) : (
          <HorizontalList show={show}>
            {radios.map((r, i) => (
              <ListItem key={r.id} ref={i === 0 ? props.cardRef : null}>
                <Card title={r.name} image={r.image} />
              </ListItem>
            ))}
          </HorizontalList>
        ))}
    </section>
  );
});
