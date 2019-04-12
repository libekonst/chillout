import { GridBase, GridItem } from './GridBase';
import React, { FC, ComponentProps } from 'react';

type Props = Partial<ComponentProps<typeof GridBase>>;

export const GridHeader: FC<Props> = props => (
  <GridBase {...props}>
    <GridItem gridArea="title" style={{ textTransform: 'uppercase' }}>
      title
    </GridItem>
    <GridItem gridArea="genre" style={{ textTransform: 'uppercase' }}>
      genre
    </GridItem>
  </GridBase>
);
