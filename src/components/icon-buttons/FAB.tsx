import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const grow = keyframes`
    0% {
      transform: scale(0);
    }

    80% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  `;

const FabBase = styled.button`
  /* Positioning */
  position: fixed;
  display: flex;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;

  /* Styles */
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightblue};
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.5);
  animation: ${grow} 0.3s ease-out;
  transition: all 0.1s ease-out;

  &:active {
    transform: scale(0.85);
    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);
  }
`;

export const FAB: FC<any> = props => {
  return <FabBase />;
};
