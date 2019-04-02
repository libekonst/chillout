import React, { ReactNode } from 'react';
import { View } from './View';

interface IProps {
  title: ReactNode;
  image: string;
  isActive?: boolean;
  cardRef?: React.RefObject<HTMLDivElement>;
  onClick?: (e: React.MouseEvent) => void;
}
interface IState {
  hovered: boolean;
  loaded: boolean;
}
export default class Card extends React.Component<IProps, IState> {
  readonly state: IState = {
    hovered: false,
    loaded: false,
  };
  onMouseEnter = () => this.setState({ hovered: true });
  onMouseLeave = () => this.setState({ hovered: false });

  onImageLoad = () => this.setState({ loaded: true });
  render() {
    const { title } = this.props;

    return (
      <View
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.props.onClick}
        isHover={this.state.hovered}
        isActive={this.props.isActive}
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
