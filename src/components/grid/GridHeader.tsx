import { GridBase } from './GridBase';
import React, { FC, ComponentProps } from 'react';

type Props = Partial<ComponentProps<typeof GridBase>>;

export const GridHeader: FC<Props> = props => (
  <GridBase areas={['.', '.', '.', 'title', 'genre']} {...props}>
    <div style={{ gridArea: 'title',  textTransform: 'uppercase' }}>title</div>
    <div style={{ gridArea: 'genre' }}>genre</div>
  </GridBase>
);
