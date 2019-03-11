import { GridBase } from './GridBase';
import React, { FC, ComponentProps } from 'react';
import { PlayIcon } from '../PlayControls';

type Props = Partial<ComponentProps<typeof GridBase>>;
export const GridBodyRow: FC<Props> = props => (
  <GridBase
    areas={['playcontrol', 'favorite', 'image', 'title', 'genre', 'options']}
    {...props}
  >
    <div style={{ gridArea: 'playcontrol' }}>
      {/* <PlayIcon  /> */}
      {'icon'}
    </div>
    <div style={{ gridArea: 'favorite' }}>
      {/* <PlayIcon /> */}
      {'icon'}
    </div>
    <div style={{ gridArea: 'image' }}>
      {/* <PlayIcon /> */}
      {'icon'}
    </div>
    <div style={{ gridArea: 'title' }}>{'offradio'}</div>
    <div style={{ gridArea: 'genre' }}>{'music'}</div>
    <div style={{ gridArea: 'options' }}>
      {/* <PlayIcon /> */}
      {'icon'}
    </div>
  </GridBase>
);
