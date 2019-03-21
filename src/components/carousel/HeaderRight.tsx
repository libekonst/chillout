import styled, { css } from 'styled-components';
import { Row } from '../layout/Row';

export const HeaderButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: lightgray;
  font-size: 1.5rem;
  cursor: auto;
  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
      color: darkgray;

      &:active {
        color: #052fb8;
        transform: scale(1.1);
      }
    `}
`;

export const HeaderRight = styled(Row)`
  overflow: hidden;
`
