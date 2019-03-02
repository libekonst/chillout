import React from 'react';
import styled from 'styled-components';
import { CardContainer } from './RadioCard';
import { IRadio } from '../data';

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
export class CarouselBody extends React.Component<IProps, IState> {
  state = {
    hovered: false,
  };
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
          <li>
            <CardContainer radio={r} key={r.id} />
          </li>
        ))}
      </HorizontalList>
    );
  }
}

interface IListProps {
  scroll: boolean;
  display: boolean;
}
const HorizontalList = styled.ul`
  overflow-x: ${({ scroll }: IListProps) => (scroll ? 'scroll' : 'hidden')};
  overflow-y: hidden;
  display: ${({ display }: IListProps) => (display ? 'flex' : 'none')};
  background-color: none;
  &::-webkit-scrollbar {
    height: 9px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0.1);

    &:hover {
      border: 1px solid #ccc;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(30, 30, 30, 0.2);

    &:hover {
      background: rgba(30, 30, 30, 0.3);
      height: 20px;
    }

    &:active {
      background: rgba(30, 30, 30, 0.4);
    }
  }
`;
