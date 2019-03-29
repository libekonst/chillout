import React, { FC, ComponentProps } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { MdFavorite } from 'react-icons/md';
import { IconButton } from './IconButtons';

interface IProps {
  isFavorite: boolean;
}
const FavoriteBorder = styled(MdFavorite)<IProps>`
  transition: stroke 0.1s linear, stroke-width 0.1s ease-out;
  fill: none;
  stroke-width: 0.1rem;
  stroke: #afafaf;

  &:hover {
    stroke: ${props => props.theme.colors.purple};
  }

  ${props =>
    props.isFavorite &&
    css`
      fill: ${props => props.theme.colors.purple};
      stroke: ${props => props.theme.colors.purple};
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
    <FavoriteBorder isFavorite={props.isFavorite} />
  </IconButton>
);
