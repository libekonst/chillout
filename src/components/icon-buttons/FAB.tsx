import React, { FC, ComponentProps } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdClose, MdFavorite } from 'react-icons/md';

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

const rotateRight = keyframes`
  from {
    transform: rotate(-45deg);
  }

  to {
    transform: rotate(0);
  }
`;
const rotateLeft = keyframes`
  from {
    transform: rotate(30deg);
  }

  to {
    transform: rotate(0);
  }
`;
// Floating action button base
const FabBase = styled.button`
  /* Positioning */
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 5rem;
  right: 1rem;
  z-index: 10;

  /* Content styles */
  color: white;
  font-size: 1.3rem;

  /* Styles */
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.purple};
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.5);
  animation: ${grow} 0.3s ease-out;
  transition: all 0.1s ease-out;

  &:active {
    transform: scale(0.85);
    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);
  }
`;

// Close icon styles
const Close = styled(MdClose)`
  margin: auto;
  animation: ${rotateRight} 0.1s ease-out forwards;
`;
const Favorite = styled(MdFavorite)`
  margin: auto;
  animation: ${rotateLeft} 0.1s ease-out forwards;
`;
// FAB
interface IProps {
  isOpen?: boolean;
}
type Props = IProps & ComponentProps<typeof FabBase>;
export const FAB: FC<Props> = ({ isOpen, children, ...rest }) => {
  return (
    <FabBase title={isOpen ? 'Close Favorites' : 'Open Favorites'} {...rest}>
      {isOpen ? <Close /> : <Favorite />}
    </FabBase>
  );
};
