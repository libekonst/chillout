import React, { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { MdExpandLess } from 'react-icons/md';
import { Row } from '../layout/Row';
import { Column } from '../layout/Column';

interface ExpandProps {
  expanded: boolean;
  showOnlyOnHover?: boolean;
}
export const HeaderLeft = styled(Row)`
  cursor: ${props => props.onClick && 'pointer'};
`;

export const ExpandIcon: FC<ExpandProps> = props => (
  <IconWrapper expanded={props.expanded} showOnlyOnHover={false}>
    <MdExpandLess />
  </IconWrapper>
);

const IconWrapper = styled(Column)`
  font-size: 1.2rem;

  /* transition: transform 0.2s ease-out; */
  ${(props: ExpandProps) =>
    css`
      /* transform: rotate(200deg) rotate(180deg); */
      animation: ${props.expanded ? rotateUp : rotateDown} 0.3s ease-out;
      transform: ${!props.expanded && 'rotate(180deg)'};
    `}

  /* Show icon only when header is hovered.  */
  ${props =>
    props.showOnlyOnHover &&
    css`
      visibility: hidden;
      ${HeaderLeft}:hover & {
        visibility: visible;
      }
    `}
`;

const rotateDown = keyframes`
  0% {
    transform: rotate(0deg);
  }

  60% {
    transform: rotate(200deg);
  }

  100% {
    transform: rotate(180deg);
  }
`;

const rotateUp = keyframes`
  0% {
    transform: rotate(180deg);
  }

  60% {
    transform: rotate(-20deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;
