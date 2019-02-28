import styled, { css } from 'styled-components';

interface IOverlayProps {
  show: boolean;
}
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(30, 30, 30);
  z-index: 1;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  ${(props: IOverlayProps) =>
    props.show &&
    css`
      transition: opacity 0.2s ease-in-out;
      opacity: 0.5;
    `}
`;
