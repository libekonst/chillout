import React, { FC, ComponentProps } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

// Animations
const grow = keyframes`
  from {
    transform: scale(0.9);
  }

  to {
    transform: scale(1);
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

// Styles
const FavoriteEmpty = styled(MdFavoriteBorder)`
  color: ${props => props.theme.colors.lightgray};
  animation: ${grow} 0.1s linear forwards;
  transition: color 0.1s linear;

  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`;

const FavoriteFill = styled(MdFavorite)`
  fill: ${props => props.theme.colors.purple};
  animation: ${heartbeat} 0.2s ease-out;
  transition: transform 0.07s linear;

  &:active {
    transform: scale(0.9);
  }
`;

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  font-size: ${props => props.theme.sizes.iconButton.tiny};

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    font-size: ${props => props.theme.sizes.iconButton.medium};
  }
`;

interface IProps {
  isFavorite?: boolean;
}
type Props = ComponentProps<typeof ButtonBase> & IProps;
export const Favorite: FC<Props> = props => {
  const { isFavorite, ...rest } = props;
  return (
    <ButtonBase {...rest}>
      {isFavorite ? <FavoriteFill /> : <FavoriteEmpty />}
    </ButtonBase>
  );
};
