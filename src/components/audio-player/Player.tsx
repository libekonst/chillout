import React, { FC, MouseEvent } from 'react';
import { Footer } from './Footer';
import { ControlsButton } from '../icon-buttons/PlayControls';
import { LoadingBar } from '../loaders';

interface IProps {
  isPlaying: boolean;
  handlePlay: () => void;
  changeAudioVolume: (e: any) => void;
  animate: boolean;
}
const Player: FC<IProps> = props => (
  <Footer>
    <div style={{ width: '100%', opacity: props.animate ? 1 : 0 }}>
      <LoadingBar animate={props.animate} />
    </div>
    <input type="range" min="0" max="1" step="0.01" onChange={props.changeAudioVolume} />
    <ControlsButton isHover isPlaying={props.isPlaying} onClick={props.handlePlay} />
  </Footer>
);
export default Player;
