import styled, { css } from 'styled-components';

interface IProps {
  fadeOutOn?: boolean;
}
export const Placeholder = styled.div<IProps>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: white; */

  &::after {
    /* Position */
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    /* Styles */
    opacity: 1;
    visibility: visible;
    transition: all 0.2s ease-out;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

    /* Fade out */
    ${props =>
      props.fadeOutOn &&
      css`
        opacity: 0;
        visibility: hidden;
      `};
  }
`;
