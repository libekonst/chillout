import styled, { css } from 'styled-components';

interface IProps {
  transitionOut?: boolean;
  gradient?: boolean;
}
export const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${props =>
    props.gradient && 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'};
  transition: opacity 0.1s;

  /* Opacity fading */
  ${(props: IProps) =>
    typeof props.transitionOut !== 'undefined' &&
    css`
      opacity: ${props.transitionOut ? 0 : 1};
    `};
`;
