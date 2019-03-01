import styled, { css } from 'styled-components';

interface ImageProps {
  blur?: boolean;
  bgColor?: string;
}
export const RadioImage = styled.img`
  background-size: cover;
  width: 100%;
  background-color: ${({ bgColor = 'transparent' }: ImageProps) => bgColor};
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.05s ease-out;
  ${(props: ImageProps) =>
    props.blur &&
    css`
      filter: blur(7px);
      transform: scale(1.05);
      transition: all 0.1s ease-out;
    `}
`;
