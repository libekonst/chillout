import React from 'react';
import { FunctionComponent, ComponentProps } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { CarouselBody } from './CarouselBody';

type Props = ComponentProps<typeof CarouselHeader> & ComponentProps<typeof CarouselBody>;
export const View: FunctionComponent<Props> = props => {
  const { content, display, ...rest } = props;
  return (
    <section>
      <CarouselHeader {...rest} />
      <CarouselBody content={content} display={display} />
    </section>
  );
};
