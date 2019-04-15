import React, { FC } from 'react';
import { Footer } from './Footer';
import { PlayButton } from './PlayButton';
import { VolumeBar } from './volume-bar';
import { Media } from './Media';
import { RadioLink } from './RadioLink';
import { Image } from '../styled/Image';
import { IRadio } from '../../data';

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
  radio?: IRadio;
}
const Player: FC<IProps> = props => {
  return (
    <Footer>
      {props.radio ? (
        <>
          <Media>
            <Image src={props.radio.image} />
          </Media>
          <RadioLink
            href={props.radio.linkToWebsite}
            target="blank"
            radioTitle={props.radio.name}
            radioSubtitle={props.radio.label}
          />
        </>
      ) : (
        <>
          <div />
          <div />
        </>
      )}
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
