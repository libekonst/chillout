import React, { Component, FC, ComponentProps as PropsOf } from 'react';
import styled, { css } from 'styled-components';
import { CarouselHeader } from './CarouselHeader';
import { IRadio } from '../../data';
import { CardContainer } from '../RadioCard';
import { CarouselBody } from './CarouselBody';

interface State {
  headerHovered: boolean;
  expanded: boolean;
}
interface IProps {
  data: IRadio[];
  title?: string;
  step?: number;
}

export default class Carousel extends Component<IProps, State> {
  readonly state: State = {
    headerHovered: false,
    expanded: true,
  };
  static defaultProps: Partial<IProps> = { title: 'Your Favorites', step: 5 };

  handleHeaderEnter = () => this.setState({ headerHovered: true });
  handleHeaderLeave = () => this.setState({ headerHovered: false });
  handleExpand = () => this.setState(prev => ({ expanded: !prev.expanded }));
  handleNext = () => console.log('hi');

  // componentDidUpdate(prevProps){}
  render() {
    const { headerHovered, expanded } = this.state;
    return (
      <View
        title="Your Favorites"
        expanded={expanded}
        showExpandIcon={headerHovered}
        onExpand={this.handleExpand}
        onHeaderEnter={this.handleHeaderEnter}
        onHeaderLeave={this.handleHeaderLeave}
        onNext={this.handleNext}
        data={this.props.data}
        display={expanded}
      />
    );
  }
}

const View: FC<
  PropsOf<typeof CarouselHeader> & PropsOf<typeof CarouselBody>
> = props => {
  const { data, display, ...rest } = props;
  return (
    <section>
      <CarouselHeader {...rest} />
      <CarouselBody data={data} display={display} />
    </section>
  );
};
