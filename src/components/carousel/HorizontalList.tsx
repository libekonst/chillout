import styled, { keyframes, css } from 'styled-components';

const scaleIn = keyframes`
  from { transform: scale(0.8) }
  to { transform: scale(1) }
`;

const slideIn = keyframes`
  from {
    transform: translate3d(-3px, -2px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
    width: 8%;
  }

  to {
    opacity: 0;
    visibility: hidden;
    width: 5%;
  }
`;

interface IProps {
  highlightMore: boolean;
}
export const HorizontalList = styled.ul`
  /* overflow: visible; */
  width: 100%;
  min-height: 12rem;
  position: relative;
  display: flex;
  background-color: none;
  justify-content: flex-start;
  animation: ${slideIn} ease-out 0.2s;

  /* Can click next */
  ${(props: IProps) =>
    props.highlightMore &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          90deg,
          rgba(149, 149, 149, 0) 0%,
          rgba(149, 149, 149, 0.5) 100%
        );
        /* z-index: -1; */
        animation: ${fadeOut} 0.75s ease-in-out;
      }
    `}
`;

export const ListItem = styled.li`
  margin-left: 0.7rem;
  animation: ${scaleIn} 0.15s ease-out;

  &:last-child {
    margin-right: 0.7rem;
  }
`;
