import React, { FC, ComponentProps } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { MdFavorite } from 'react-icons/md';
import { IconButton } from './IconButton';

interface IProps {
  isFavorite: boolean;
}
const FavoriteIcon = styled(MdFavorite)<IProps>`
  fill: none;
  stroke-width: 0.1rem;
  stroke: #afafaf;
  transition: stroke 0.1s linear;

  &:hover {
    stroke: ${props => props.theme.colors.purple};
  }

  ${({
    isFavorite,
    theme: {
      colors: { purple },
    },
  }) =>
    isFavorite &&
    css`
      fill: ${purple};
      stroke: ${purple};
      animation: ${grow} 0.2s ease-out;
    `}
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

type Props = ComponentProps<typeof IconButton> & IProps;
export const Favorite: FC<Props> = props => (
  <IconButton {...props}>
    <FavoriteIcon isFavorite={props.isFavorite} />
  </IconButton>
);
