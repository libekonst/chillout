import { css } from "styled-components";

/** Need fixed width for ellipsis to work. Width should be constrained by parent. */
export const truncateText = () => css`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;