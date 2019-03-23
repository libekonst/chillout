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
  font-size: 1.8rem;
  cursor: auto;

  /* Styles if clickable */
  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
      color: darkgray;
      transition: color 0.05s linear;

      &:hover {
        color: #6d6c6c;
      }

      &:active {
        transition: none;
        color: #052fb8;
        transform: scale(1.2);
      }
    `}
`;

export const HeaderRight = styled(Row)`
  overflow: hidden;
`;
