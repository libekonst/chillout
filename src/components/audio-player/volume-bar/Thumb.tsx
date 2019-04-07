import styled from 'styled-components';
import { InputWrapper } from './SliderElements';

export const ThumbWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  pointer-events: none;
  transition: transform 0.2s ease-out;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Thumb = styled.div`
  position: relative;
  background: white;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease-out;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: -25%;
    right: -25%;
    bottom: -25%;
    left: -25%;
    background-color: white;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.2s ease-out;

    ${InputWrapper}:hover & {
      opacity: 0.2;
    }
  }

  ${InputWrapper}:hover & {
    transform: scale(2);
  }
`;
