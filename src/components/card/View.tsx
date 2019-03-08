import React, { ReactNode } from 'react';
import { CardMedia } from './CardMedia';
import { RadioImage } from './RadioImage';
import { PlayIcon, PauseIcon, VolumeIcon } from '../PlayControls';
import { Overlay } from '../styled/OverLay';
import { CardContent } from './CardContent';
import { Title } from './Title';

interface IProps {
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  showPlay?: boolean;
  showVolume?: boolean;
  showPause?: boolean;
  backdrop?: boolean;
  hovered?: boolean;
  imageSource: string;
  title?: ReactNode;
}
export const View = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  showPause,
  showPlay,
  hovered,
  imageSource,
  showVolume,
  title,
}: IProps) => (
  <div>
    <CardMedia
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      // shadowColor="rgba(161, 243, 28, 0.1)"
    >
      <RadioImage
        blur={hovered}
        src={imageSource} /* bgColor={'rgba(152, 230, 27, 0.4)'}  */
      />
      {showPlay && <PlayIcon border={true} />}
      {showPause && <PauseIcon />}
      {showVolume && <VolumeIcon />}
      <Overlay show={!!hovered} type="light" />
    </CardMedia>
    {title && (
      <CardContent alignItems="flex-start">
        <Title>{title}</Title>
      </CardContent>
    )}
  </div>
);
