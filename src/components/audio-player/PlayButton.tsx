import { IoIosPause, IoIosPlay } from 'react-icons/io';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  isPlaying?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const IconButton = styled.button<IProps>`
  /* Flex */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Styles */
  cursor: default;
  color: white;
  font-size: ${props => props.theme.sizes.iconButton.medium};
`;

export const PlayButton: FC<IProps> = ({ isPlaying, ...rest }) => (
  <IconButton isPlaying={isPlaying} title={isPlaying ? 'Pause' : 'Play'} {...rest}>
    {isPlaying ? <IoIosPause /> : <IoIosPlay />}
  </IconButton>
);

