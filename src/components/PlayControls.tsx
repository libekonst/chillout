import { MdPlayArrow, MdPause } from 'react-icons/md';
import { IoIosVolumeHigh } from 'react-icons/io';
import React, { ComponentType } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

// export const PlayIcon = () => <MdPlayArrow className="controls" />;
// export const PauseIcon = () => <MdPause className="controls" />;
interface BorderProps {
  border?: boolean;
  type?: 'light' | 'dark';
}
const Border = styled.div`
  z-index: 2;

  /* display: block; */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  ${(props: BorderProps) =>
    props.border &&
    css`
      border: 2px solid white;
    `}
  border-radius: 50%;
  background-color: ${({ type }: BorderProps) =>
    type === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
  ${({ type }: BorderProps) =>
    type === 'light'
      ? css`
          background-color: rgba(255, 255, 255, 0.8);
          border-color: rgb(30, 30, 30);
        `
      :  css`
          background-color: rgba(30, 30, 30, 0.6);
          border-color: rgb(255, 255, 255);
        `} /* background-color: rgba(255, 255, 255, 0.4); */
`;

const iconStyles = css`
  font-size: 50px;
  color: white;
`;
const withStyle = (style: FlattenSimpleInterpolation) => (Component: ComponentType) =>
  styled(Component)`
    ${style}
  `;

// const StyledPlayArrow = withStyle(iconStyles)(MdPlayArrow);
const StyledPlayArrow = styled(MdPlayArrow)`
  ${iconStyles}
  color: ${props => (props.type === 'light' ? 'rgb(30, 30, 30)' : 'white')};
`;
const StyledPause = withStyle(iconStyles)(MdPause);
const StyledVolume = withStyle(iconStyles)(IoIosVolumeHigh);

export const PlayIcon = ({ border = true }: BorderProps) => (
  <Border border={border} type="dark">
    <StyledPlayArrow type="dark" />
  </Border>
);
export const PauseIcon = ({ border = true }: BorderProps) => (
  <Border border={border} type="light">
    <StyledPause />
  </Border>
);
export const VolumeIcon = ({ border = false }: BorderProps) => (
  <Border border={border} type="light">
    <StyledVolume />
  </Border>
);
