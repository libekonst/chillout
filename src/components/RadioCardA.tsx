import React from 'react';
import './RadioCardA.scss';
import { PlayIcon, PauseIcon } from './PlayControls';

interface ICProps {}
interface IState {
  
  hovered:boolean;
  active: boolean;
}
export class CardContainer extends React.Component<ICProps, IState> {
  state = {
    hovered: false,
    active: false,
    
  };
  onMouseEnter = () => this.setState({ hovered: true });
  onMouseLeave = () => this.setState({ hovered: false });
  onClick = () => this.setState({ active: !this.state.active });
  img =
    'http://www.music892.gr/wp-content/uploads/2017/09/cropped-MASTER_MUSIC_LOGO-2.png';

  
  render() {
    return (
      <li
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          border: '1px black',
        }}
      >
        <Card
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
          showPlay={this.state.hovered && !this.state.active}
          showPause={this.state.active}
          hovered={this.state.hovered}
          imageSource={this.img}
        />
      </li>
    );
  }
}
interface IProps {
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  showPlay?: boolean;
  showPause?: boolean;
  backdrop?: boolean;
  hovered?: boolean;
  imageSource: string;
}
const Card = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  showPause,
  showPlay,
  hovered,
  imageSource,
}: IProps) => (
  <>
    <div
      className="cardA"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <img className="cardA__image" src={imageSource} />
      {showPlay && <PlayIcon />}
      {showPause && <PauseIcon />}
      <div
        className={`cardA__backdrop 
    ${hovered ? 'cardA__backdrop--show' : 'cardA__backdrop--hide'}`}
      />
    </div>
    <h3 className="cardA__title">Music 89.2</h3>
  </>
);
