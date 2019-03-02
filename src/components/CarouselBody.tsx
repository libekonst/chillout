import React from 'react';
import styled from 'styled-components';
import { CardContainer } from './RadioCard';
import { IRadio } from '../data';

interface IProps {
  data: IRadio[];
}
export const CarouselBody: React.FunctionComponent<IProps> = ({ data }) => (
  <HorizontalList>
    {data.map(r => (
      <li><CardContainer radio={r} key={r.id} /></li>
    ))}
  </HorizontalList>
);

const HorizontalList = styled.ul`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  background-color: none;
`;
