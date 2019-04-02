import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { Card } from '../card';
import { IRadio } from '../../data';
import { FullscreenLayer } from './FullscreenLayer';

interface IProps {
  isPlaying?: boolean;
  selectedRadio?: number;
  onRadioClick: (id: number) => (e: MouseEvent) => void;
  data: IRadio[];
  open: boolean;
}
export const Backdrop: FC<IProps> = props => (
  <FullscreenLayer open={props.open}>
    {props.data.map(r => (
      <CardWrapper onClick={props.onRadioClick(r.id)}>
        <Card
          image={r.image}
          title={r.name}
          isActive={props.selectedRadio === r.id && props.isPlaying}
        />
      </CardWrapper>
    ))}
  </FullscreenLayer>
);

const CardWrapper = styled.div`
  margin: 1rem;
  cursor: pointer;
`;
