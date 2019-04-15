import {
  IoIosVolumeHigh,
  IoIosVolumeLow,
  IoIosVolumeMute,
  IoIosVolumeOff,
} from 'react-icons/io';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  volume: number;
  audioMuted: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const IconButton = styled.button`
  /* Flex */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  /* Styles */
  cursor: default;
  color: white;
  margin-right: 0.8rem;
  font-size: ${props => props.theme.iconButton.small};
  opacity: 0.85;
  transition: opacity 0.1s linear;

  &:hover {
    opacity: 1;
  }
`;

const Speaker: FC<IProps> = ({ volume, audioMuted }) => {
  if (volume === 0 || audioMuted) return <IoIosVolumeOff />;
  if (volume >= 0.5) return <IoIosVolumeHigh />;
  if (volume >= 0.2) return <IoIosVolumeLow />;
  if (volume > 0) return <IoIosVolumeMute />;
  return <IoIosVolumeHigh />;
};

export const MuteButton: FC<IProps> = ({ volume, audioMuted, ...rest }) => (
  <IconButton title={audioMuted ? 'Unmute Sound' : 'Mute Sound'} {...rest}>
    <Speaker volume={volume} audioMuted={audioMuted} />
  </IconButton>
);
