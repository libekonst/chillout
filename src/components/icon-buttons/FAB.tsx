import React, { FC } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { MdFavorite, MdClose } from 'react-icons/md';

// Floating action button base
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
  align-items: center;
  justify-content: center;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;

  /* Content styles */
  color: white;
  font-size: 1.3rem;

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
const rotateOn = keyframes`
  from {
    transform: rotate(-45deg);
  }

  to {
    transform: rotate(0);
  }
`;

// Close icon styles
const Close = styled(MdClose)`
  margin: auto;
  animation: ${rotateOn} 0.1s ease-out forwards;
`;

// FAB
interface IProps {
  onClick?: () => void;
  isOpen?: boolean;
}
export const FAB: FC<IProps> = ({ isOpen, ...rest }) => {
  return <FabBase {...rest}>{isOpen ? <Close /> : <MdFavorite />}</FabBase>;
};
