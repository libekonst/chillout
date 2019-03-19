import { GridBase, GridItem } from './GridBase';
import React, { FC, ComponentProps, Component } from 'react';
import { PlayIcon, FavoriteBorderIcon } from '../IconButtons';
import { Media } from './Media';
import { Image } from '../styled/Image';

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
        spacing={true}
        gutter={true}
        {...this.props}
      >
        <GridItem gridArea="playcontrol" justifySelf="end">
          {/* <div style={{ visibility: this.state.hovered ? 'visible' : 'hidden' }}> */}
          {this.state.hovered && <PlayIcon size="small" type="light" color="dark" />}
          {/* </div> */}
        </GridItem>
        <GridItem gridArea="favorite" justifySelf="center">
          <FavoriteBorderIcon size="tiny" type="light" color="dark" />
        </GridItem>
        <GridItem gridArea="image" justifySelf="center">
          <Media>
            <Image src="http://www.offradio.gr/sites/all/themes/offradio_theme/facebook.png" />
          </Media>
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
