import React, { FC, MouseEvent } from 'react';
import { Footer } from './Footer';
import { ControlsButton } from '../icon-buttons/PlayControls';
import { LoadingBar } from '../loaders';
import { Input } from './Input';
import styled from 'styled-components';
import { InputWrapper, TrackBar, LowerFillBar } from './SliderElements';

interface IProps {
  isPlaying: boolean;
  handlePlay: () => void;
  changeAudioVolume: (e: any) => void;
  animate: boolean;
  volume: number;
}
const Player: FC<IProps> = props => (
  <Footer>
    <div
      style={{
        width: '100%',
        opacity: props.animate ? 1 : 0,
        display: props.animate ? 'visible' : 'hidden',
      }}
    >
      <LoadingBar animate={props.animate} />
    </div>
    <InputWrapper>
      <TrackBar />
      <LowerFillBar style={{ transform: `scaleX(${props.volume})` }} />
      <Input
        type="range"
        min="0"
        max="1"
        step="0.01"
        onChange={props.changeAudioVolume}
      />
    </InputWrapper>
    <ControlsButton isHover isPlaying={props.isPlaying} onClick={props.handlePlay} />
  </Footer>
);
export default Player;
