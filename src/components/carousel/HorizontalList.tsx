import styled, { keyframes } from 'styled-components';

interface IScrollProps {
  scroll?: boolean;
  show?: boolean;
}
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
  display: ${({ show = true }: IScrollProps) => (show ? 'flex' : 'none')};
  background-color: none;
  justify-content: flex-start;
  padding-right: 0.7rem;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  animation: ${slideIn} ease-out 0.2s;
`;

export const ListItem = styled.li`
  margin-left: 0.7rem;

  &:last-child {
    margin-right: 0.7rem;
  }
`;
