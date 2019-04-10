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
  border-radius: 50%;
  border: 0.5rem solid #29273a;
  background: #29273a;
  cursor: default;
  color: white;
  font-size: ${props => props.theme.sizes.iconButton.medium};
`;

export const PlayButton: FC<IProps> = ({ isPlaying, ...rest }) => (
  <IconButton title={isPlaying ? 'Pause' : 'Play'} {...rest}>
    {isPlaying ? <MdPause /> : <MdPlayArrow />}
  </IconButton>
);
