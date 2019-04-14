import styled from 'styled-components';

export const InputWrapper = styled.div`
  /* Flex */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  /* Styles */
  overflow: visible;
  width: 100%;
`;

export const LowerFillBar = styled.div`
  /* Position */
  position: absolute;
  width: 100%;
  margin: auto;
  z-index: 1;

  /* Styles */
  height: 2px;
  background: white;
  pointer-events: none;
  border-radius: 30px;
  transform-origin: left;
`;

export const TrackBar = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  border-radius: 30px;
  background: rgba(180, 180, 180, 0.7);
  margin: auto;
`;
