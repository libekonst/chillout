import React, { FunctionComponent, ComponentProps } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { Card } from '../card/';
import { IRadio } from '../../data';
import { ListItem, HorizontalList } from '../layout/HorizontalList';

interface IViewProps {
  isLoading: boolean;
  show: boolean;
  radios?: IRadio[];
}
type Props = ComponentProps<typeof CarouselHeader> & IViewProps;

export const View: FunctionComponent<Props> = props => {
  const { radios, show, isLoading, ...rest } = props;

  return (
    <section>
      <CarouselHeader {...rest} />
      {show && (
        <HorizontalList>
          {isLoading ? renderRadios(radios!) : ['loading']}
        </HorizontalList>
      )}
    </section>
  );
};

const renderRadios = (radios: IRadio[]) => {
  return radios.map(r => (
    <ListItem key={r.id}>
      <Card radio={r} title={r.name} onClick={() => console.log(r)} />
    </ListItem>
  ));
};
