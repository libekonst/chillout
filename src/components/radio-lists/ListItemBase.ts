import styled, { keyframes, css } from 'styled-components';

const enterGrowanimation = keyframes`
  from {
    transform: translateY(10px) scaleX(0.9);
    opacity: 0;
  }
  to {
    transform: translateY(0) scaleX(1);
    opacity: 1;
  }
`;

type Props = {
	selected?: boolean;
};

export const ListItemBase = styled.div<Props>`
	/* Styles */
	width: 100%;
	padding: 0.5rem 0;
	height: auto;
	position: relative;
	cursor: default;
	opacity: 0;
	transform-origin: bottom left;
	animation: ${enterGrowanimation} 0.2s ease-out forwards;

	/* Highlight on hover */
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 5px;
		background-color: rgba(210, 210, 210, 0.2);
		z-index: -1;
		opacity: 0;
		visibility: hidden;
		transition: all 0.2s linear;
	}

	&:hover::before {
		opacity: 1;
		visibility: visible;
	}

	/* Selected */
	${props =>
		props.selected &&
		css`
			color: ${props.theme.colors.blue};
			font-weight: bold;
		`}
`;
