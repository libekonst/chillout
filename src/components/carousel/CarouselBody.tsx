import React, { Component } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { CardContainer } from '../RadioCard';
import { IRadio } from '../../data';
import { HorizontalList } from './HorizontalList';

interface IProps {
  data: IRadio[];
  display: boolean;
}
// export const CarouselBody: React.FunctionComponent<IProps> = ({ data }) => (
//   <HorizontalList>
//     {data.map(r => (
//       <li>
//         <CardContainer radio={r} key={r.id} />
//       </li>
//     ))}
//   </HorizontalList>
// );

interface IState {
  hovered: boolean;
}
export class CarouselBody extends Component<IProps, IState> {
  readonly state: IState = { hovered: false };
  handleHover = () => this.setState(prev => ({ hovered: !prev.hovered }));

  render() {
    const { data, ...props } = this.props;
    return (
      <HorizontalList
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        scroll={this.state.hovered}
        {...props}
      >
        {data.map(r => (
          <li key={r.id}>
            <CardContainer radio={r} onClick={() => console.log(r)} />
          </li>
        ))}
      </HorizontalList>
    );
  }
}

