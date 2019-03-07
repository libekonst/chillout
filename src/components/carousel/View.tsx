import React from 'react';
import { FunctionComponent, ComponentProps } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { CarouselBody } from './CarouselBody';
import { CardContainer } from '../RadioCard';
import { IRadio } from '../../data';

interface IViewProps {
  isLoading: boolean;
}
type Props = ComponentProps<typeof CarouselHeader> &
  ComponentProps<typeof CarouselBody> &
  IViewProps;

export const View: FunctionComponent<Props> = props => {
  const { content, display, isLoading, ...rest } = props;

  const renderRadios = () => {
    return content.map(r => (
      <li key={r.id}>
        <CardContainer radio={r} onClick={() => console.log(r)} />
      </li>
    ));
  };

  return (
    <section>
      <CarouselHeader {...rest} />
      {/* <CarouselBody content={content} display={display} /> */}
      <CarouselBody
        content={isLoading ? ['loading'] : renderRadios()}
        display={display}
      />
    </section>
  );
};
