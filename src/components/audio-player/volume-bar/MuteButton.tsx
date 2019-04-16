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
  cursor: pointer;
  color: white;
  position: relative;
  margin-right: 1rem;
  font-size: ${props => props.theme.iconButton.small};
  opacity: 1;

  &::before {
    /* Positioning */
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;

    /* Styles */
    background-color: #302d47;
    border-radius: 50%;
    opacity: 0;
    transform: scale(1.2);
    transition: all 0.15s ease-out;
  }

  &:hover::before {
    transform: scale(1.5);
    opacity: 0.8;
  }
`;

const Speaker: FC<IProps> = ({ volume, audioMuted }) => {
  if (volume === 0 || audioMuted) return <IoIosVolumeOff />;
  if (volume >= 0.5) return <IoIosVolumeHigh />;
  if (volume >= 0.2) return <IoIosVolumeLow />;
  if (volume > 0) return <IoIosVolumeMute />;
  return <IoIosVolumeOff />;
};

export const MuteButton: FC<IProps> = ({ volume, audioMuted, ...rest }) => (
  <IconButton title={audioMuted ? 'Unmute Sound' : 'Mute Sound'} {...rest}>
    <Speaker volume={volume} audioMuted={audioMuted} />
  </IconButton>
);
