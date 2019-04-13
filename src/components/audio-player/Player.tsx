import React, { FC } from 'react';
import { Footer } from './Footer';
import { PlayButton } from './PlayButton';
import { VolumeBar } from './volume-bar';
import { Media } from './Media';
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
        <section>
          <a
            href="https://www.github.com/kostaslib"
            target="blank"
            style={{ display: 'flex' }}
          >
            <Media>
              <Image src={props.radio.image} />
            </Media>
            <div
              style={{ display: 'flex', flexDirection: 'column', marginLeft: '0.5rem', width: '100%' }}
            >
              <p
                style={{
                  color: 'white',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {props.radio.name}
              </p>
              <p>{props.radio.label}</p>
            </div>
          </a>
        </section>
      ) : (
        <div />
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
