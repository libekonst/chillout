import styled from 'styled-components';
import { truncateText } from '../../styles';

export const Title = styled.p`
  text-transform: capitalize;

  /* Truncate text */
  width: 100%;
  ${truncateText}
`;
