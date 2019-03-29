import React, { FC, ComponentProps } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { IconButton } from './IconButton';

const FavoriteBorder = styled(MdFavoriteBorder)`
  color: ${props => props.theme.colors.lightgray};
  transition: color 0.1s linear;

  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`;

const grow = keyframes`
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
  animation: ${grow} 0.2s ease-out;
`;

interface IProps {
  isFavorite?: boolean;
}
type Props = ComponentProps<typeof IconButton> & IProps;
export const Favorite: FC<Props> = ({ isFavorite, ...rest }) => (
  <IconButton {...rest}>{isFavorite ? <FavoriteFill /> : <FavoriteBorder />}</IconButton>
);
