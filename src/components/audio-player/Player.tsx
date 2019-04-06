import React, { FC, MouseEvent } from 'react';
import { Footer } from './Footer';
import { ControlsButton } from '../icon-buttons/PlayControls';
import { LoadingBar } from '../loaders';
import { Slider } from './Slider';
import styled from 'styled-components';

interface IProps {
  isPlaying: boolean;
  handlePlay: () => void;
  changeAudioVolume: (e: any) => void;
  animate: boolean;
  volume: number;
}
const Player: FC<IProps> = props => (
  <Footer>
    <div style={{ width: '100%', opacity: props.animate ? 1 : 0 }}>
      <LoadingBar animate={props.animate} />
    </div>
    <InputWrapper>
      <MovingBar style={{ transform: `translateX(${props.volume * 100}%)` }} />
      <Slider
        type="range"
        min="0"
        max="1"
        step="0.05"
        onChange={props.changeAudioVolume}
        volume={props.volume}
        value={props.volume}
      />
    </InputWrapper>
    <ControlsButton isHover isPlaying={props.isPlaying} onClick={props.handlePlay} />
  </Footer>
);
export default Player;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

const MovingBar = styled.div`
  position: absolute;
  height: 2px;
  background: lightgray;
  width: 100%;
  z-index: 1;
  margin: auto;
  pointer-events: none;
`;
