import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translate3d(-3px, -2px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const HorizontalList = styled.ul`
  overflow: visible;
  width: 100%;
  display: flex;
  background-color: none;
  justify-content: flex-start;
  animation: ${slideIn} ease-out 0.2s;
`;

export const ListItem = styled.li`
  margin-left: 0.7rem;

  &:last-child {
    margin-right: 0.7rem;
  }
`;
