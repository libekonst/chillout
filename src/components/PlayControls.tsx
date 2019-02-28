import { MdPlayArrow, MdPause } from 'react-icons/md';
import { IoIosVolumeHigh } from 'react-icons/io';
import React, { ComponentType } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

// export const PlayIcon = () => <MdPlayArrow className="controls" />;
// export const PauseIcon = () => <MdPause className="controls" />;
interface IBorderProps {
  border?: boolean;
}
const Border = styled.div`
  z-index: 2;

  /* display: block; */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  ${(props: IBorderProps) =>
    props.border &&
    css`
      border: 2px solid white;
    `}
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
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
`;

const StyledPause = withStyle(iconStyles)(MdPause);
const StyledVolume = withStyle(iconStyles)(IoIosVolumeHigh);

export const PlayIcon = ({ border = true }: IBorderProps) => (
  <Border border={border}>
    <StyledPlayArrow />
  </Border>
);
export const PauseIcon = ({ border = true }: IBorderProps) => (
  <Border border={border}>
    <StyledPause />
  </Border>
);
export const VolumeIcon = ({ border = false }: IBorderProps) => (
  <Border border={border}>
    <StyledVolume />
  </Border>
);
