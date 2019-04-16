import styled, { css, keyframes } from 'styled-components';

interface ImageProps {
  loaded?: boolean;
  showBlur?: boolean;
}

export const BlurredImage = styled.img<ImageProps>`
  /* Positioning */
  background-size: cover;
  width: 100%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;

  /* Effects */
  opacity: 0;
  transform: scale(1);
  filter: blur(7px);
  transition: opacity 0.05s linear, transform 0.1s ease-out;

  /* Blur effect. */
  ${props =>
    props.showBlur &&
    css`
      opacity: 1;
      transform: scale(1.15);
    `}
`;
