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
    transform: scale(0.9);
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
  transition: all 0.1s linear;

  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`;

const FavoriteFill = styled(MdFavorite)`
  fill: ${props => props.theme.colors.purple};
  animation: ${heartbeat} 0.2s ease-out;
  transition: transform 0.07s linear;
`;

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  font-size: ${props => props.theme.iconButton.tiny};

  &:active {
    transform: scale(0.9);
    fill: ${props => props.theme.colors.purple};
  }

  @media (max-width: ${props => props.theme.breakpoints.md - 1}px) {
    font-size: ${props => props.theme.iconButton.small};
  }
`;

interface IProps {
  isFavorite?: boolean;
}
type Props = ComponentProps<typeof ButtonBase> & IProps;
export const Favorite: FC<Props> = props => {
  const { isFavorite, ...rest } = props;
  return (
    <ButtonBase
      title={isFavorite ? 'Remove from Your Favorites' : 'Save to Your Favorites'}
      {...rest}
    >
      {isFavorite ? <FavoriteFill /> : <FavoriteEmpty />}
    </ButtonBase>
  );
};
