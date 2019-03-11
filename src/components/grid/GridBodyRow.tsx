import { GridBase, GridItem } from './GridBase';
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
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        highlightHover={this.state.hovered}
        gutter={true}
        {...this.props}
      >
        <GridItem gridArea="playcontrol" justifySelf="center">
          {/* <PlayIcon  /> */}
          {<PlayIcon size="small" />}
        </GridItem>
        <GridItem gridArea="favorite">
          {/* <PlayIcon /> */}
          {'icon'}
        </GridItem>
        <GridItem gridArea="image">
          {/* <PlayIcon /> */}
          {'icon'}
        </GridItem>
        <GridItem gridArea="title">{'offradio'}</GridItem>
        <GridItem gridArea="genre">{'music'}</GridItem>
        <GridItem gridArea="options">
          {/* <PlayIcon /> */}
          {'icon'}
        </GridItem>
      </GridBase>
    );
  }
}
