import { css } from "styled-components";

/** Truncating will only be activated if the element's width is specified. Constraint its width */
export const truncateText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;