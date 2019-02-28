import styled, { css } from 'styled-components';

interface ImageProps {
  blur?: boolean;
}
export const RadioImage = styled.img`
  background-size: cover;
  width: 100%;

  /* background-color: #fff; */

  /* background-color: #52494f11; */
  background-color: #98e61b6e;
  background-repeat: no-repeat;
  background-position: center;
  ${(props: ImageProps) =>
    props.blur &&
    css`
      filter: blur(0.7px);
    `}
`;
