import styled, { css } from 'styled-components';

interface ImageProps {
  blur?: boolean;
  bgColor?: string;
  loaded?: boolean;
}
export const Image = styled.img<ImageProps>`
  background-size: cover;
  width: 100%;
  background-color: ${({ bgColor = 'white' }) => bgColor};
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.05s ease-out, opacity 0.5s ease-in-out;
  will-change: transform;
  opacity: ${props => (typeof props.loaded === 'undefined' ? 1 : 0)};
  ${props =>
    props.loaded &&
    css`
      opacity: 1;
    `};

  /* Blur effect. */
  ${props =>
    props.blur &&
    css`
      @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        filter: blur(7px);
        transform: scale(1.07);
        transition: all 0.1s ease-out;
      }
    `}
`;
