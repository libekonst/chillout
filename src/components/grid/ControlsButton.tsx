import { IoIosVolumeHigh, IoIosPause, IoIosPlay } from 'react-icons/io';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { GridBase } from './GridBase';

interface IProps {
  isPlaying?: boolean;
  isHover?: boolean;
  isSelected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const PlayPauseSpeaker: FC<IProps> = ({ isPlaying, isHover }) => {
  if (isPlaying) return isHover ? <IoIosPause /> : <IoIosVolumeHigh />;

  return <IoIosPlay />;
};

const IconButton = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  color: ${props => props.theme.colors.lightblack};
  font-size: ${props => props.theme.sizes.iconButton.small};
  opacity: 0;
  visibility: hidden;
  transition: all 0.05s linear;

  /* Make visible when the parent is hovered or when playing */
  ${GridBase}:hover & {
    opacity: 1;
    visibility: visible;
  }

  ${props =>
    props.isPlaying &&
    css`
      opacity: 1;
      visibility: visible;
    `};

  /* Different color if radio is active */
  ${({ isPlaying, isSelected, theme }) =>
    (isPlaying || isSelected) &&
    css`
      color: ${theme.colors.blue};
    `}
`;

export const ControlsButton: FC<IProps> = props => {
  const { isPlaying, isHover, ...rest } = props;
  return (
    <IconButton isPlaying={isPlaying} title={isPlaying ? 'Pause' : 'Play'} {...rest}>
      <PlayPauseSpeaker isPlaying={isPlaying} isHover={isHover} />
    </IconButton>
  );
};

/* Styles */
/* z-index: 2; */
/* border-radius: 50%; */

/* color: rgb(30, 30, 30); */

/* color: white; */

/* color: black; */

/* border-color: rgb(255, 255, 255); */

/* background-color: rgba(255, 255, 255, 0.3); */

/* background-color: rgba(0, 0, 0, 0.6); */
