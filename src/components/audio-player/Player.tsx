import React, { FC } from 'react';
import { Footer } from './Footer';
import { PlayButton } from './PlayButton';
import { VolumeBar } from './volume-bar';
import { NowPlayingLayout } from './NowPlaying';
import { IRadio } from '../../data';
import { AsyncImage } from '../async-image';
import { Favorite } from '../icon-buttons/Favorite';

interface IProps {
  // Play button
  isPlaying: boolean;
  handlePlay: () => void;

  // Volume
  onMuteAudio: () => void;
  muted: boolean;
  changeAudioVolume: (e: any) => void;
  volume: number;

  // Radio
  radio?: IRadio;
  isRadioFavorite?: boolean;
  handleAddFavorite?: (e: any) => void;
}

const NowPlaying: FC<{ radio: IRadio; controls: JSX.Element }> = props => {
  const Info = () => (
    <>
      <a href={props.radio!.website} target="blank">
        {props.radio!.name}
      </a>
      <p>{props.radio!.label}</p>
    </>
  );

  return (
    <NowPlayingLayout
      imageSlot={<AsyncImage src={props.radio!.image} />}
      controlsSlot={props.controls}
      infoSlot={<Info />}
    />
  );
};

const Player: FC<IProps> = props => {
  const Controls = () => (
    <Favorite isFavorite={props.isRadioFavorite} onClick={props.handleAddFavorite} />
  );

  function renderNowPlaying() {
    if (!props.radio) return;
    return <NowPlaying radio={props.radio} controls={<Controls />} />;
  }

  return (
    <Footer>
      <div style={{ width: '100%' }}>{renderNowPlaying()}</div>
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
