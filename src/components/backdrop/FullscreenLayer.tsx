import styled, { css, keyframes } from 'styled-components';

export const FullscreenLayer = styled.ul<{ open: boolean }>`
  /* Positioning */
  position: fixed;
  width: 100%;
  height: calc(100vh - 4rem); /* Minus the height of the player */

  /* Flex */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  /* background-color: ${props => props.theme.colors.lightblue}; */
  background-color: white;
  transition: all 0.2s ease-out;
  z-index: 5;
  overflow-y: auto;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;

  /* Open */
  ${props =>
    props.open &&
    css`
      pointer-events: auto;
      visibility: visible;
      opacity: 1;
      animation: ${slideUp} 0.2s ease-out forwards;
    `}
`;

const slideUp = keyframes`
  from {
    transform: translateY(+10%);
  }

  to {
    transform: translateY(0%);
  }
`;
