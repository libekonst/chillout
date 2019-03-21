import styled from 'styled-components';
import { truncateText } from '../../styles';

export const Title = styled.p`
  text-transform: capitalize;

  /* Ellipsis */
  ${truncateText}
`;
