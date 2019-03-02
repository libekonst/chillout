import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { CarouselHeader } from '../CarouselHeader';
import { IRadio } from '../../data';
import { CardContainer } from '../RadioCard';

interface State {
  headerHovered: boolean;
  expanded: boolean;
}
interface IProps {
  data: IRadio[];
}

export class Carousel extends Component<IProps, State> {
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
          onNext={() => null}
        />
        <ul style={{ overflowX: 'scroll', overflowY: 'hidden', display: 'flex', backgroundColor: 'none' }}>
          {this.props.data.map(r => (
            <CardContainer radio={r} key={r.id} />
          ))}
        </ul>
      </section>
    );
  }
}
