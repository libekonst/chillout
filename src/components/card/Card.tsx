import React, { ReactNode } from 'react';
import { IRadio } from '../../data';
import { View } from './View';

interface IProps {
  radio: IRadio;
  title: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
interface IState {
  hovered: boolean;
  active: boolean;
}
export default class Card extends React.Component<IProps, IState> {
  readonly state: IState = {
    hovered: false,
    active: false,
  };
  onMouseEnter = () => this.setState({ hovered: true });
  onMouseLeave = () => this.setState({ hovered: false });
  onClick = () => this.setState({ active: !this.state.active });

  render() {
    const {
      radio: { image, name },
      title
    } = this.props;
    return (
      <View
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.props.onClick || this.onClick}
        showPlay={this.state.hovered && !this.state.active}
        showPause={this.state.hovered && this.state.active}
        showVolume={!this.state.hovered && this.state.active}
        hovered={this.state.hovered}
        imageSource={image}
        title={title}
      />
    );
  }
}
