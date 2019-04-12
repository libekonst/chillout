import React, { FC } from 'react';
import { Footer } from './Footer';
import { PlayButton } from './PlayButton';
import { VolumeBar } from './volume-bar';
import { Media } from './Media';
import { Image } from '../styled/Image';

interface IProps {
  // Play button
  isPlaying: boolean;
  handlePlay: () => void;

  // Volume
  onMuteAudio: () => void;
  muted: boolean;
  changeAudioVolume: (e: any) => void;
  volume: number;

  // Image
  image?: string;
}
const Player: FC<IProps> = props => {
  return (
    <Footer>
      <Media>
        <Image src={props.image} />
      </Media>
      <PlayButton isPlaying={props.isPlaying} onClick={props.handlePlay} />
      <VolumeBar
        onMuteAudio={props.onMuteAudio}
        muted={props.muted}
        changeAudioVolume={props.changeAudioVolume}
        volume={props.volume}
      />
    </Footer>
  );
};
export default Player;
