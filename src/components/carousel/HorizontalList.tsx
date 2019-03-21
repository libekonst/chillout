import styled, { keyframes } from 'styled-components';

interface IScrollProps {
  scroll?: boolean;
  show?: boolean;
}

export const HorizontalList = styled.ul`
  overflow: visible;
  display: ${({ show = true }: IScrollProps) => (show ? 'flex' : 'none')};
  background-color: none;
  justify-content: flex-start;
  padding-right: 0.7rem;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};

  &:hover {
    /* overflow-x: auto; */
  }
`;

export const ListItem = styled.li`
  margin-left: 0.7rem;

  &:last-child {
    margin-right: 0.7rem;
  }
`;
