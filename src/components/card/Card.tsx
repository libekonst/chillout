import React from 'react';
import { IRadio } from '../../data';
import { View } from './View';

interface ICProps {
  radio: IRadio;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
interface IState {
  hovered: boolean;
  active: boolean;
}
export default class Card extends React.Component<ICProps, IState> {
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
        title={<p>{name}</p>}
      />
    );
  }
}
