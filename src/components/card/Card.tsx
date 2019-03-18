import React, { ReactNode } from 'react';
import { View } from './View';

interface IProps {
  title: ReactNode;
  image: string;
  cardRef?: React.RefObject<HTMLDivElement>;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
interface IState {
  hovered: boolean;
  loaded: boolean;
  active: boolean;
}
export default class Card extends React.Component<IProps, IState> {
  readonly state: IState = {
    hovered: false,
    loaded: false,
    active: false,
  };
  onMouseEnter = () => this.setState({ hovered: true });
  onMouseLeave = () => this.setState({ hovered: false });
  onClick = () => this.setState({ active: !this.state.active });

  onImageLoad = () => this.setState({ loaded: true });
  render() {
    const { title } = this.props;

    return (
      <View
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.props.onClick || this.onClick}
        showPlay={this.state.hovered && !this.state.active}
        showPause={this.state.hovered && this.state.active}
        showVolume={!this.state.hovered && this.state.active}
        hovered={this.state.hovered}
        imageSource={this.props.image}
        title={title}
        loaded={this.state.loaded}
        onImageLoad={this.onImageLoad}
        cardRef={this.props.cardRef}
      >
        {this.props.children}
      </View>
    );
  }
}
