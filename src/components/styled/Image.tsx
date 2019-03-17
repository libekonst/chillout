import styled, { css } from 'styled-components';

interface ImageProps {
  blur?: boolean;
  bgColor?: string;
  loaded?: boolean;
}
export const Image = styled.img`
  background-size: cover;
  width: 100%;
  background-color: ${({ bgColor = 'transparent' }: ImageProps) => bgColor};
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.05s ease-out, opacity 0.5s ease-in-out;
  opacity: ${props => (typeof props.loaded === 'undefined' ? 1 : 0)};
  ${props =>
    props.loaded &&
    css`
      opacity: 1;
    `};
  ${props =>
    props.blur &&
    css`
    transform: 3d;
      filter: blur(7px);
      transform: translateZ(0) scale(1.05);
      transition: all 0.1s ease-out;
    `}
`;
