import React, { Component } from 'react';
import { HorizontalList } from './HorizontalList';

interface IProps {
  content: any[];
  show: boolean;
}

interface IState {
  hovered: boolean;
}
export class CarouselBody extends Component<IProps, IState> {
  readonly state: IState = { hovered: false };
  handleHover = () => this.setState(prev => ({ hovered: !prev.hovered }));

  render() {
    const { content, ...props } = this.props;
    return (
      <HorizontalList
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        scroll={this.state.hovered}
        {...props}
      >
        {content}
      </HorizontalList>
    );
  }
}

