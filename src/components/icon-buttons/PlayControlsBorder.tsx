import React, { FC } from 'react';
import {
  IoIosPause,
  IoIosVolumeHigh,
  IoIosPlay,
  IoMdPlay,
  IoMdPause,
} from 'react-icons/io';
import { MdPause, MdPlayArrow } from 'react-icons/md';
import styled, { css } from 'styled-components';

interface IProps {
  isPlaying?: boolean;
  isHover?: boolean;
  isSelected?: boolean;
}

const PlayPauseSpeaker: FC<IProps> = ({ isPlaying, isHover }) => {
  if (isPlaying) return isHover ? <MdPause /> : <IoIosVolumeHigh />;

  return <MdPlayArrow />;
};

const IconButton = styled.button<{ border?: boolean }>`
  /* Flex */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Styles */
  cursor: pointer;
  color: white;
  padding: 0.2rem;
  background-color: rgba(45, 45, 45, 0.6);
  font-size: ${props => props.theme.sizes.iconButton.big};

  /* Border */
  border-radius: 50%;
  ${props =>
    props.border &&
    css`
      border: 1px solid white;
      background-color: rgba(230, 230, 230, 0.7);
    `}
`;

export const PlayControlsBorder: FC<IProps> = props => {
  const { isPlaying, isHover, ...rest } = props;
  return (
    <IconButton border={isHover || !isPlaying} {...rest}>
      <PlayPauseSpeaker isPlaying={isPlaying} isHover={isHover} />
    </IconButton>
  );
};
