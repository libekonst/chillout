import styled, { css } from 'styled-components';

interface OverlayProps {
  show: boolean;
  type: 'light' | 'dark';
}
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  ${({ show }: OverlayProps) =>
    show &&
    css`
      transition: opacity 0.2s ease-in-out;
      opacity: 0.3;
    `}
  background-color: ${({ type }: OverlayProps) =>
    type === 'dark' ? 'rgb(30, 30, 30)' : 'rgb(180, 180, 180)'}
`;
