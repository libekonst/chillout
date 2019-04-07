import styled, { css } from 'styled-components';

const thumbStyles = css`
  /* Reset */
  appearance: none;
  outline: none;
  border: 0;
  height: 0;
  width: 0;
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
  width: 100%;
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
