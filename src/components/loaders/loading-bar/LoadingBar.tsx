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

const LoadingBar = styled.div<IProps>`
  position: relative;
  width: 100%;
  height: 0.3rem;
  overflow: hidden;
  background-color: rgb(255, 173, 184);
  /* background-color: rgb(255, 181, 218); */
  /* background-color: #ffbe76; */
  /* background-color: #7ed6df; */
  /* background-color: #c7ecee; */
  /* background-color: #686de0; */
  /* background-color: #f1afff; */
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 25%;
    background-color: rgb(255, 32, 62);
    /* background-color: rgb(255, 32, 117); */
    /* background-color: #f0932b; */
    /* background-color: #22a6b3; */
    /* background-color: #95afc0; */
    /* background-color: #4834d4; */
    /* background-color: #be2edd; */
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
export default LoadingBar;