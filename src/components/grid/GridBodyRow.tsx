import { GridBase } from './GridBase';
import React, { FC, ComponentProps, Component } from 'react';
import { PlayIcon } from '../PlayControls';

type Props = Partial<ComponentProps<typeof GridBase>>;
interface IState {
  hovered: boolean;
}
// export const GridBodyRow: FC<Props> = props => (
export class GridBodyRow extends Component<Props, IState> {
  readonly state: IState = {
    hovered: false,
  };
  handleHover = () => this.setState(prev => ({ hovered: !prev.hovered }));
  render() {
    return (
      <GridBase
        areas={['playcontrol', 'favorite', 'image', 'title', 'genre', 'options']}
        {...this.props}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        highlightHover={this.state.hovered}
        gutter={true}
      >
        <div style={{ gridArea: 'playcontrol' }}>
          {/* <PlayIcon  /> */}
          {this.state.hovered && 'icon'}
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
  }
}
