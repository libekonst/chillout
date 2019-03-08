import React from 'react';
import { FunctionComponent, ComponentProps } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { CarouselBody } from './CarouselBody';
import { Card } from '../card/';

interface IViewProps {
  isLoading: boolean;
}
type Props = ComponentProps<typeof CarouselHeader> &
  ComponentProps<typeof CarouselBody> &
  IViewProps;

export const View: FunctionComponent<Props> = props => {
  const { content, show, isLoading, ...rest } = props;

  const renderRadios = () => {
    return content.map(r => (
      <li key={r.id}>
        <Card radio={r} onClick={() => console.log(r)} />
      </li>
    ));
  };

  return (
    <section>
      <CarouselHeader {...rest} />
      {/* <CarouselBody content={content} display={display} /> */}
      <CarouselBody
        content={isLoading ? ['loading'] : renderRadios()}
        show={show}
      />
    </section>
  );
};
