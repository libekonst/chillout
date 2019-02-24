import React from 'react';
import './RadioCardA.scss';
import { PlayIcon, PauseIcon } from './PlayControls';

export class RadioCardA extends React.Component {
  state = {
    hovered: false,
    active: false,
  };
  onMouseEnter = () => this.setState({ hovered: true });
  onMouseLeave = () => this.setState({ hovered: false });
  onClick = () => this.setState({ active: !this.state.active });

  render() {
    let backdrop = 'cardA__backdrop';
    if (!this.state.hovered) backdrop += '--invisible';

    let image = 'cardA__image-container';
    if (this.state.hovered) image += '--blur';
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
        <div
          className="cardA"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
          >
            <img
          
              className="cardA__image"
              src="http://www.music892.gr/wp-content/uploads/2017/09/cropped-MASTER_MUSIC_LOGO-2.png"
            />
          {this.state.hovered && !this.state.active && <PlayIcon />}
          {this.state.active && <PauseIcon />}
          <div className={backdrop} />
        </div>
        <h3 className="cardA__title">Music 89.2</h3>
      </li>
    );
  }
}
