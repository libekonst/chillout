import { FlexBase } from './FlexBase';
import React, { FC, ComponentProps } from 'react';

type Props = Partial<ComponentProps<typeof FlexBase>>;

export const Column: FC<Props> = props => (
  <FlexBase flexDirection="column" {...props} />
);
