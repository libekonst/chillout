import { IoIosPause, IoIosPlay } from 'react-icons/io';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  isPlaying?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const IconButton = styled.button`
  /* Flex */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Styles */
  position: relative;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  color: white;
  font-size: ${props => props.theme.iconButton.medium};

  /* Background circle */
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
    opacity: 0.5;
    transform: scale(1.4);
    transition: all 0.1s ease-out;
  }

  &:hover::before {
    transform: scale(1.5);
    opacity: 1;
  }
`;

export const PlayButton: FC<IProps> = ({ isPlaying, ...rest }) => (
  <IconButton title={isPlaying ? 'Pause' : 'Play'} {...rest}>
    {isPlaying ? <MdPause /> : <MdPlayArrow />}
  </IconButton>
);
