import styled from 'styled-components';

type BoxAlignment =
  | 'auto'
  | 'normal'
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'baseline';

interface IGridBaseProps {
  gutter?: boolean;
  highlightHover?: boolean;
  justifyItems?: BoxAlignment; // x-axis
  alignItems?: BoxAlignment; // y-axis
  areas: [string, string, string, string, string, string];
}

export const GridBase = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props: IGridBaseProps) => props.highlightHover && 'lightgray'};

  /* Grid layout */
  display: grid;
  grid-template-columns: 4rem 6rem 6rem auto 8rem 6rem;
  grid-column-gap: 1%;
  grid-template-areas: "${props => props.areas.join(' ')}";
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-items: ${({ justifyItems = 'start' }) => justifyItems};
  border-bottom: ${props => props.gutter && '1px solid lightgray'};
`;

interface IGridItemProps {
  gridArea: string;
  alignSelf?: BoxAlignment;
  justifySelf?: BoxAlignment;
}
export const GridItem = styled.div`
  grid-area: ${(props: IGridItemProps) => props.gridArea};
  align-self: ${({ alignSelf = 'auto' }) => alignSelf};
  justify-self: ${({ justifySelf = 'auto' }) => justifySelf};
`;
