import React, { FC } from 'react';
import { Footer } from './Footer';
import { ControlsButton } from '../icon-buttons/PlayControls';
import { Input } from './volume-bar/Input';
import { InputWrapper, TrackBar, LowerFillBar } from './volume-bar/SliderElements';
import { PlayButton } from './PlayButton';
import { MuteButton } from './MuteButton';
import styled from 'styled-components';
import { ThumbWrapper, Thumb } from './volume-bar/Thumb';
import { VolumeBar } from './volume-bar';

interface IProps {
  // Play button
  isPlaying: boolean;
  handlePlay: () => void;

  // Volume
  onMuteAudio: () => void;
  muted: boolean;
  changeAudioVolume: (e: any) => void;
  volume: number;
}
const Player: FC<IProps> = props => {
  const { muted, volume } = props;
  return (
    <Footer>
      <PlayButton isPlaying={props.isPlaying} onClick={props.handlePlay} />
      <VolumeBar
        handlePlay={props.handlePlay}
        onMuteAudio={props.onMuteAudio}
        muted={props.muted}
        changeAudioVolume={props.changeAudioVolume}
        volume={props.volume}
      />
    </Footer>
  );
};
export default Player;
