import React, { FC, ComponentProps } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { IconButton } from './IconButton';

const grow = keyframes`
  from {
    transform: scale(0.9);
  }

  to {
    transform: scale(1);
  }
`;
const FavoriteBorder = styled(MdFavoriteBorder)`
  color: ${props => props.theme.colors.lightgray};
  transition: color 0.1s linear;
  animation: ${grow} 0.1s linear forwards;

  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`;

const heartbeat = keyframes`
  0% {
    transform: scale(1);
  }

  65% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
`;

const FavoriteFill = styled(MdFavorite)`
  fill: ${props => props.theme.colors.purple};
  stroke: ${props => props.theme.colors.purple};
  animation: ${heartbeat} 0.2s ease-out;

  &:active {
    transform: scale(0.9);
  }
`;

interface IProps {
  isFavorite?: boolean;
}
type Props = ComponentProps<typeof IconButton> & IProps;
export const Favorite: FC<Props> = ({ isFavorite, ...rest }) => (
  <IconButton {...rest}>{isFavorite ? <FavoriteFill /> : <FavoriteBorder />}</IconButton>
);
