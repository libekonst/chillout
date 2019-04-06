import styled from 'styled-components';

export const Slider = styled.input<{ volume?: number }>`
  appearance: none;
  outline: none;
  background: transparent;
  position: relative;
  width: 200px;
  height: 2rem;
  cursor: pointer;

  /* Track */
  &::-webkit-slider-runnable-track {
    /* background: rgb(221, 221, 221); */
    height: 2px;
    background: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: stretch;
  }
  /* &::-moz-range-track {
    height: 5px;
  }
  &::-ms-track {
  } */

  /* Thumb */
  &::-webkit-slider-thumb {
    appearance: none;
    background: white;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    position: relative;
    transition: transform 0.2s ease-out;
    z-index: 2;

    &:active {
      transform: scale(1.5);
    }
  }
  /*
  &::-moz-range-thumb,
  &::-ms-thumb {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid black;
    box-shadow: -100vw 0 0 100vw pink;
  } */

  /* &:-ms-fill-lower,
  &:-moz-range-progress,
  &:-webkit-progress-value {
    background: blue;
  } */

  /* &:-ms-ticks-after,
  &:-ms-ticks-before,
  &:-ms-tooltip {
    display: none;
  } */
`;
