import styled, { css } from 'styled-components';
import { Row } from '../layout/Row';

export const HeaderButton = styled.button`
  /* Flex layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Styles */
  color: lightgray;
  font-size: 1.5rem;
  cursor: auto;

  /* Styles if clickable */
  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
      color: darkgray;
      transition: color 0.1s linear;

      &:hover {
        color: #6d6c6c;
      }

      &:active {
        transition: none;
        color: ${props => props.theme.colors.blue};
        transform: scale(1.1);
      }
    `}
`;

export const HeaderRight = styled(Row)`
  overflow: hidden;
`;
