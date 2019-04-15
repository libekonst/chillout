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
  background-color: ${props => props.theme.colors.lightPurple};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 25%;
    background-color: ${props => props.theme.colors.purple};
    border-radius: 5px;
    ${props =>
      props.animate &&
      css`
        animation: ${slide} 1.5s ease-in-out infinite;
      `};
  }
`;
export default LoadingBar;
