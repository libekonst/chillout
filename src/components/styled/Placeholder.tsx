import styled, { css } from 'styled-components';

interface IProps {
  shouldFadeOut?: boolean;
  gradient?: boolean;
}
export const Placeholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${props =>
      props.gradient && 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'};

    /* Opacity fade out */
    transition: opacity 0.1s;
    ${(props: IProps) =>
      props.shouldFadeOut &&
      css`
        opacity: ${props.shouldFadeOut ? 0 : 1};
      `};
  }
`;
