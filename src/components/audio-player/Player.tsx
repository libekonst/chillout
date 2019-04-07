import React, { FC } from 'react';
import { Footer } from './Footer';
import { PlayButton } from './PlayButton';
import { VolumeBar } from './volume-bar';

interface IProps {
  // Play button
  isPlaying: boolean;
  handlePlay: () => void;
  isLoading: boolean;

  // Volume
  onMuteAudio: () => void;
  muted: boolean;
  changeAudioVolume: (e: any) => void;
  volume: number;
}
const Player: FC<IProps> = props => {
  return (
    <Footer>
      <PlayButton
        isLoading={props.isLoading}
        isPlaying={props.isPlaying}
        onClick={props.handlePlay}
      />
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
