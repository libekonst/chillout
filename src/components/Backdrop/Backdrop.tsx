import React, { FC } from 'react';
import styled from 'styled-components';
import { Card } from '../card';
import { IRadio } from '../../data';
import { FullscreenLayer } from './FullscreenLayer';


interface IProps {
  data: IRadio[];
  open: boolean;
}
export const Backdrop: FC<IProps> = props => (
  <FullscreenLayer open={props.open}>
    {props.data.map(r => (
      <CardWrapper>
        <Card image={r.image} title={r.name} />
      </CardWrapper>
    ))}
  </FullscreenLayer>
);

const CardWrapper = styled.div`
  padding: 1rem;
`;
