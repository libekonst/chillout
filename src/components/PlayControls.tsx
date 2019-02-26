import { MdPlayArrow, MdPause } from 'react-icons/md';
import React from 'react';
// import './PlayControls.scss';
import styled, { css } from 'styled-components';

// export const PlayIcon = () => <MdPlayArrow className="controls" />;
// export const PauseIcon = () => <MdPause className="controls" />;
const iconStyles = css`
  font-size: 50px;
  color: white;
`;

const Border = styled.div`
  z-index: 2;

  display: block;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledPlayArrow = styled(MdPlayArrow)`
  ${iconStyles}
`;

const StyledPause = styled(MdPause)`
  ${iconStyles}
`;
export const PlayIcon = () => (
  <Border>
    <StyledPlayArrow />
  </Border>
);
export const PauseIcon = () => (
  <Border>
    <StyledPause />
  </Border>
);
