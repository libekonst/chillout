import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { CarouselHeader } from '../CarouselHeader';

interface State {
  headerHovered: boolean;
  expanded: boolean;
}

export class Carousel extends Component<any, State> {
  state = {
    headerHovered: false,
    expanded: true,
  };
  handleHeaderEnter = () => this.setState({ headerHovered: true });
  handleHeaderLeave = () => this.setState({ headerHovered: false });
  handleExpand = () => this.setState(prev => ({ expanded: !prev.expanded }));

  render() {
    const { headerHovered, expanded } = this.state;
    return (
      <section>
        <CarouselHeader
          title="Your Favorites"
          expanded={expanded}
          showExpandIcon={headerHovered}
          onExpand={this.handleExpand}
          onHeaderEnter={this.handleHeaderEnter}
          onHeaderLeave={this.handleHeaderLeave}
        />
        {/* <CarouselContent /> */}
      </section>
    );
  }
}
