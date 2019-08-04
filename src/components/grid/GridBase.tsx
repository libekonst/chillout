import styled, { css } from 'styled-components';
import { truncateText } from '../../styles';
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
  highlightOnHover?: boolean;
  large?: boolean;
  selected?: boolean;
}

export const GridBase = styled.div<IGridBaseProps>`
  width: 100%;
  height: auto;
  position: relative;
  cursor: default;

  /* Grid layout */
  display: grid;
  grid-template-columns: 0 3rem 3rem auto 0;
  grid-column-gap: 0.5rem;
  grid-template-areas: "playcontrol favorite image title genre";
  align-items: center;
  justify-items: start;

  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    grid-template-columns: 0 3rem 3rem auto 8rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    grid-template-columns: 3rem 3rem 3rem auto 8rem;
  }

  /* Highlight On Hover */
  ${props =>
    props.highlightOnHover &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: rgba(210, 210, 210, 0.2);
        z-index: -1;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s linear;
      }

      &:hover::before {
        opacity: 1;
        visibility: visible;
      }
    `}

  /* Spacing */
  ${props =>
    props.large &&
    css`
      padding: 0.5rem 0;
    `}

  /* Gutter */
  ${props =>
    props.gutter &&
    css`
      &::after {
        content: '';
        position: absolute;
        left: 2rem;
        right: 2rem;
        bottom: 0;
        height: 1px;
        background-color: rgba(70, 70, 70, 0.05);
      }
    `}

  /* Selected */
  ${props =>
    props.selected &&
    css`
      color: ${props.theme.colors.blue};
      font-weight: bold;
    `}
`;

interface IGridItemProps {
  gridArea?: 'playcontrol' | 'favorite' | 'image' | 'title' | 'genre';
  alignSelf?: BoxAlignment;
  truncate?: boolean;
  shouldOverflow?: boolean;
  justifySelf?: BoxAlignment;
}

/**
 * Set justifySelf OR parent grid's justifyItems prop to 'stretch', if text should be truncated.
 * Overflow prevents truncating.
 */
export const GridItem = styled.div<IGridItemProps>`
  /* Grid placement */
  grid-area: ${props => props.gridArea};
  align-self: ${({ alignSelf = 'auto' }) => alignSelf};
  justify-self: ${({ justifySelf = 'stretch' }) => justifySelf};
  overflow: hidden;

  /* <- Define the element's width using 'justify-self: stretch' instead
  of 'width: 100%' to truncate text on Chrome. Firefox is OK with both width and justify-self. */

  /* Text ellipsis */
  ${props => props.truncate && truncateText}

  /* Allow overflow, e.g. for animated elements. Overflowing prevents text truncating and hiding items with grid-template-columns. */
  ${props =>
    props.shouldOverflow &&
    css`
      overflow: visible;
    `}
`;
