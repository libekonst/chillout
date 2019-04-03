import styled, { keyframes, css } from 'styled-components';

const slide = keyframes`
  from {
    transform: scaleX(1) translate3d(-100%, 0, 0);
  }

  to {
    transform: scaleX(4) translate3d(200%, 0, 0); /* Move 2 times its fine size to completely overflow its container */
  }
`;
interface IProps {
  animate: boolean;
}

export const LoadingBar = styled.div<IProps>`
  position: relative;
  width: 100%;
  height: 0.3rem;
  overflow: hidden;
  background-color: rgb(255, 181, 218);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 25%;
    background-color: rgb(255, 32, 117);
    border-radius: 5px;
    will-change: transform;
    ${props =>
      props.animate &&
      css`
        animation: ${slide} 1.5s ease-in-out infinite;
      `};

    /* background-image: linear-gradient(90deg, #f093fb 0%, rgb(255, 32, 117) 100%); */
  }
`;
