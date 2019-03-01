import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { ExpandIcon } from '../styled/ExpandIcon';

interface Props {
  expanded?: boolean;
  onClickExpand?: () => any;
}
interface State {
  headerHovered: boolean;
  expanded: boolean;
}

export class Carousel extends Component<Props, State> {
  state = {
    headerHovered: false,
    expanded: true,
  };
  handleHeaderEnter = () => this.setState({ headerHovered: true });
  handleHeaderLeave = () => this.setState({ headerHovered: false });
  handleHeaderClick = () => this.setState(prev => ({ expanded: !prev.expanded }));

  render() {
    const { headerHovered, expanded } = this.state;
    return (
      <section>
        <CarouselHeader>
          <HeaderLeft
            onMouseEnter={this.handleHeaderEnter}
            onMouseLeave={this.handleHeaderLeave}
            onClick={this.handleHeaderClick}
          >
            <ExpandIcon type={expanded ? 'less' : 'more'} show={headerHovered} />
            <h4>Your Favorites</h4>
          </HeaderLeft>
          <HeaderRight>
            <Button>
              <IoIosArrowBack />
            </Button>
            <Button>
              <IoIosArrowForward />
            </Button>
          </HeaderRight>
        </CarouselHeader>
        {/* <CarouselContent /> */}
      </section>
    );
  }
}

const CarouselHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ onClick }) =>
    !!onClick &&
    css`
      cursor: pointer;
    `}
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

// const HeaderRight = styled.div``;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: lightgray;

  &:hover {
    color: darkgray;
  }

  &:active {
    color: #052fb8;
  }
`;
