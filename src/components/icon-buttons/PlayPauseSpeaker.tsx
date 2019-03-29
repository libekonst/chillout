import { MdPlayArrow, MdPause, MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { IoIosVolumeHigh } from 'react-icons/io';
import React, { FC, ComponentProps } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { IconButton } from './IconButton';

type ButtonProps = ComponentProps<typeof IconButton>;

export const PlayIcon: FC<ButtonProps & { onClick?: () => void }> = props => (
  <IconButton {...props}>
    <MdPlayArrow />
  </IconButton>
);
export const PauseIcon: FC<ButtonProps> = props => (
  <IconButton {...props}>
    <MdPause />
  </IconButton>
);
export const VolumeIcon: FC<ButtonProps> = props => (
  <IconButton {...props}>
    <IoIosVolumeHigh />
  </IconButton>
);


      /* Styles */
  /* z-index: 2; */
  /* border-radius: 50%; */

  /* color: rgb(30, 30, 30); */

  /* color: white; */

  /* color: black; */

  /* border-color: rgb(255, 255, 255); */

  /* background-color: rgba(255, 255, 255, 0.3); */

  /* background-color: rgba(0, 0, 0, 0.6); */