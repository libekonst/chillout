import styled, { css } from 'styled-components';

const thumbStyles = css`
  /* Reset */
  appearance: none;
  outline: none;
  border: 0;

  /* Styles */
  background: white;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  transition: transform 0.2s ease-out;
  z-index: 2;
`;

export const Input = styled.input`
  /* Reset */
  appearance: none;
  outline: none;
  border: 0;

  /* Styles */
  background: transparent;
  position: relative;
  overflow: visible;
  width: 200px;
  height: 2rem;
  cursor: pointer;

  /* Thumb styles */
  &::-webkit-slider-thumb {
    ${thumbStyles}
  }

  &::-moz-range-thumb {
    ${thumbStyles}
  }

  &::-ms-thumb {
    ${thumbStyles}
  }

  /* Scale thumb on active */
  &:hover {
    &::-webkit-slider-thumb {
      transform: scale(2);
    }

    &::-moz-range-thumb {
      transform: scale(2);
    }

    &::-ms-thumb {
      transform: scale(2);
    }
  }
`;
