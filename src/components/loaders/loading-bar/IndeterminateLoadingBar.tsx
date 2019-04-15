import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }

  40% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(100%, 0, 0);
  }
`;

const IndeterminateLoadingBar = styled.div`
  position: relative;
  width: 100%;
  height: 0.3rem;
  overflow: hidden;
  background-color: ${props => props.theme.colors.lightPurple};

  &::after {
    /* Positioning */
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    /* Styles */
    width: 100%;
    border-radius: 10%;
    background-color: ${props => props.theme.colors.purple};

    /* Animation */
    transform-origin: left;
    transform: translate3d(-100%, 0, 0);
    animation: ${slideRight} 1s ease-in-out infinite;
  }
`;
export default IndeterminateLoadingBar;
