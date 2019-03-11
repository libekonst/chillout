import styled, { css } from 'styled-components';

interface IProps {
  gutter?: boolean;
  highlightHover?: boolean;
  areas: [string, string, string, string, string, string];
}

export const GridBase = styled.div`
  width: 100%;
  background-color: ${props => props.highlightHover && 'lightgray'};
  display: grid;
  grid-template-columns: 6rem 6rem 6rem auto 8rem 6rem;
  grid-column-gap: 2%;
  grid-template-areas: "${props => props.areas.join(' ')}";
  ${(props: IProps) =>
    props.gutter &&
    css`
      border-bottom: 1px solid lightgrey;
    `}
`;
