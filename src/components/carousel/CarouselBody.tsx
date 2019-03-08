import React, { Component, ReactNode } from 'react';
import { HorizontalList } from '../layout/HorizontalList';

interface IProps {
  content: ReactNode[];
  show: boolean;
}

interface IState {
  hovered: boolean;
}
export class CarouselBody extends Component<IProps, IState> {
  readonly state: IState = { hovered: false };
  handleHover = () => this.setState(prev => ({ hovered: !prev.hovered }));

  render() {
    const { content, show, ...props } = this.props;
    return (
      show && (
        <HorizontalList
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          scroll={this.state.hovered}
          {...props}
        >
          {content}
        </HorizontalList>
      )
    );
  }
}
