import styled, { css } from 'styled-components';

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
  spacing?: boolean;
  justifyItems?: BoxAlignment; // x-axis
  alignItems?: BoxAlignment; // y-axis
  areas: [string, string, string, string, string, string];
}

export const GridBase = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props: IGridBaseProps) =>
    props.highlightHover && 'rgba(70, 70, 70, 0.2)'};
  border-bottom: ${props => props.gutter && '1px solid rgba(70, 70, 70, 0.1)'};
  ${props =>
    props.spacing &&
    css`
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    `}

  /* Grid layout */
  display: grid;
  grid-template-columns: 3rem 3rem 3rem auto 8rem 6rem;
  grid-column-gap: 0.5rem;
  grid-template-areas: "${props => props.areas.join(' ')}";
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-items: ${({ justifyItems = 'start' }) => justifyItems};
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
