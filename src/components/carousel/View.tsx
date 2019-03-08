import React from 'react';
import { FunctionComponent, ComponentProps } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { CarouselBody } from './CarouselBody';
import { Card } from '../card/';
import { IRadio } from '../../data';

interface IViewProps {
  isLoading: boolean;
  show: boolean;
  radios?: IRadio[];
}
type Props = ComponentProps<typeof CarouselHeader> &
  // Partial<ComponentProps<typeof CarouselBody>> &
  IViewProps;

export const View: FunctionComponent<Props> = props => {
  const { radios, show, isLoading, ...rest } = props;

  const renderRadios = (): JSX.Element[] => {
    return radios!.map(r => (
      <li key={r.id}>
        <Card radio={r} title={<p>{r.name}</p>} onClick={() => console.log(r)} />
      </li>
    ));
  };

  return (
    <section>
      <CarouselHeader {...rest} />
      {/* <CarouselBody content={content} display={display} /> */}
      <CarouselBody content={isLoading ? renderRadios() : ['loading']} show={show} />
    </section>
  );
};
