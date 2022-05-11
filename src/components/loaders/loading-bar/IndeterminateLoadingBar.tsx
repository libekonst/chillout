import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    width: 20%;
  }

  to {
    transform: translate3d(100%, 0, 0);
    width: 100%;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }

  to {
    opacity: 1;
    visibility: visible;
  }
`;
const IndeterminateLoadingBar = styled.div`
	position: relative;
	width: 100%;
	height: 0.2rem;
	overflow: hidden;
	background-color: ${props => props.theme.colors.lightPurple};
	animation: ${fadeIn} 0.2s linear;

	&::after {
		/* Positioning */
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;

		/* Styles */
		width: 100%;
		border-radius: 100px;
		background-color: ${props => props.theme.colors.purple};

		/* Animation */
		transform-origin: left;
		transform: translate3d(-100%, 0, 0);
		animation: ${slideRight} 1s ease-out infinite;
	}
`;
export default IndeterminateLoadingBar;
