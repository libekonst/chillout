import styled from 'styled-components';

export const Title = styled.p`
  text-transform: capitalize;

  /* Wrap to more lines */

  /* overflow-wrap: break-word;
  white-space: normal; */

  /* Ellipsis */
  width: 10rem; /* Need a fixed width for ellipsis to work. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
