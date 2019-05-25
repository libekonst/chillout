import React, { Component, ComponentProps } from 'react';
import { ControlsButton } from './ControlsButton';
import { Image } from '../styled/Image';
import { Placeholder } from '../styled/Placeholder';
import { GridBase, GridItem } from './GridBase';
import { Media } from './Media';
import { Favorite } from '../icon-buttons/Favorite';
import { AsyncImage } from '../async-image';

interface IProps {
  handleAddFavorite: (e: React.MouseEvent) => void;
  handlePlay: (e: React.MouseEvent) => void;
  isFavorite: boolean;
  isPlaying: boolean;
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
  onMouseEnter = () => this.setState({ hovered: true });
  onMouseLeave = () => this.setState({ hovered: false });

  render() {
    return (
      <GridBase
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.props.handlePlay}
        highlightOnHover
        large
        gutter
        {...this.props}
      >
        <GridItem gridArea="playcontrol" justifySelf="end">
          <ControlsButton
            isPlaying={this.props.isPlaying}
            isHover={this.state.hovered}
          />
        </GridItem>
        <GridItem
          shouldOverflow
          gridArea="favorite"
          justifySelf="center"
          onClick={this.props.handleAddFavorite}
        >
          <Favorite isFavorite={this.props.isFavorite} />
        </GridItem>
        <GridItem gridArea="image" justifySelf="center">
          <Media>
            <AsyncImage src={this.props.image}/>
            {/* <Image src={this.props.image} /> */}
          </Media>
        </GridItem>
        <GridItem gridArea="title" truncate>
          {this.props.name}
        </GridItem>
        <GridItem gridArea="genre">{this.props.label}</GridItem>
      </GridBase>
    );
  }
}
