import { FlexBase } from './FlexBase';
import React, { FC, ComponentProps } from 'react';

type Props = Partial<ComponentProps<typeof FlexBase>>;

export const Row: FC<Props> = props => <FlexBase flexDirection="row" {...props} />;
