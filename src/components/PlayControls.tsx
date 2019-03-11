import { MdPlayArrow, MdPause } from 'react-icons/md';
import { IoIosVolumeHigh } from 'react-icons/io';
import React, { ComponentType } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

// export const PlayIcon = () => <MdPlayArrow className="controls" />;
// export const PauseIcon = () => <MdPause className="controls" />;
interface BorderProps {
  border?: boolean;
  type?: 'light' | 'dark';
  cursor?: 'default' | 'pointer';
}
const Border = styled.button`
  z-index: 2;

  /* display: block; */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  /* color: black; */
  font-size: 50px;
  color: white;
  cursor: ${({ cursor = 'default' }) => cursor};
  border: ${(props: BorderProps) => props.border && '2px solid'};
  border-radius: 50%;
  /* background-color: ${props =>
    props.type === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}; */
  /* ${({ type }: BorderProps) =>
    type === 'light'
      ? css`
          background-color: rgba(255, 255, 255, 0.6);
          border-color: rgb(255, 255, 255);
        `
      : css`
          background-color: rgba(45, 45, 45, 0.6);
          border-color: rgb(255, 255, 255);
        `} background-color: rgba(255, 255, 255, 0.4); */
`;

export const PlayIcon = ({ border = true }: BorderProps) => (
  <Border border={true} type="dark">
    <MdPlayArrow />
  </Border>
);
export const PauseIcon = ({ border = true }: BorderProps) => (
  <Border border={border} type="light">
    <MdPause />
  </Border>
);
export const VolumeIcon = ({ border = false }: BorderProps) => (
  <Border border={border} type="light">
    <IoIosVolumeHigh />
  </Border>
);
