import styled, { css } from 'styled-components';

export const FullscreenLayer = styled.div<{ open: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.lightblue};
  transition: all 0.2s ease-out;
  clip-path: circle(0 at right 0 bottom 0);
  z-index: 5;

  ${props =>
    props.open &&
    css`
      clip-path: circle(1000px at 90% 90%);
    `}
`;
