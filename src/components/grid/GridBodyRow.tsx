import React, { Component, ComponentProps, MouseEvent } from 'react';
import { FavoriteBorderIcon, PlayIcon } from '../IconButtons';
import { Image } from '../styled/Image';
import { Placeholder } from '../styled/Placeholder';
import { GridBase, GridItem } from './GridBase';
import { Media } from './Media';
interface IProps {
  onClick: (e: MouseEvent) => any;
  isFavorite: boolean;
  name: string;
  image: string;
  label: string;
}
type Props = Partial<ComponentProps<typeof GridBase>> & IProps;
interface IState {
  hovered: boolean;
  loaded: boolean;
}
// export const GridBodyRow: FC<Props> = props => (
export class GridBodyRow extends Component<Props, IState> {
  readonly state: IState = {
    hovered: false,
    loaded: false,
  };
  onImageLoad = () => this.setState({ loaded: true });
  handleHover = () => this.setState(prev => ({ hovered: !prev.hovered }));
  render() {
    return (
      <GridBase
        areas={['playcontrol', 'favorite', 'image', 'title', 'genre', 'options']}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        highlightOnHover={true}
        large={true}
        gutter={true}
        // {...this.props}
      >
        <GridItem gridArea="playcontrol" justifySelf="end">
          {/* <div style={{ visibility: this.state.hovered ? 'visible' : 'hidden' }}> */}
          {this.state.hovered && <PlayIcon size="small" type="light" color="dark" />}
          {/* </div> */}
        </GridItem>
        <GridItem gridArea="favorite" justifySelf="center" onClick={this.props.onClick}>
          <FavoriteBorderIcon size="tiny" type="light" color="dark" isFavorite={this.props.isFavorite} />
        </GridItem>
        <GridItem gridArea="image" justifySelf="center">
          <Media>
            <Placeholder shouldFadeOut={this.state.loaded} gradient={true}>
              <Image
                src={this.props.image}
                onLoad={this.onImageLoad}
                loaded={this.state.loaded}
              />
            </Placeholder>
          </Media>
        </GridItem>
        <GridItem gridArea="title">{this.props.name}</GridItem>
        <GridItem gridArea="genre">{this.props.label}</GridItem>
        <GridItem gridArea="options">
          {/* <PlayIcon /> */}
          {'icon'}
        </GridItem>
      </GridBase>
    );
  }
}
