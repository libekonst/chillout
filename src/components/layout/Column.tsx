import React from 'react';
import { FlexStyle } from './FlexStyle';
import styled from 'styled-components';

type Props = {
	mainAxis?: FlexStyle['justifyContent'];
	crossAxis?: FlexStyle['alignItems'];
};

export const Column = styled.div<Props>`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	justify-content: ${({ mainAxis = 'center' }) => mainAxis};
	align-items: ${({ crossAxis = 'center' }) => crossAxis};
`;
