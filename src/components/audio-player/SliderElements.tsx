import styled from 'styled-components';

export const InputWrapper = styled.div`
  /* Flex */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  /* Styles */
  overflow: visible;
  /* opacity: 0.7; */
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
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
  border-radius: 10px;
  transform-origin: left;
  transition: transform 0.2s ease-out;
`;

export const TrackBar = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  border-radius: 10px;
  /* background: rgb(221, 221, 221); */
  /* background: rgb(91, 91, 91); */
  background: rgba(180, 180, 180, 0.7);
  /* background: rgb(33, 33, 33); */
  margin: auto;
`;
