import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
  }

  to {
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
    animation: ${slideRight} 1s ease-out infinite;
  }
`;
export default IndeterminateLoadingBar;