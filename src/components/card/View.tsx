import React, { ReactNode, FC } from 'react';
import { CardMedia } from './CardMedia';
import { Image } from '../styled/Image';
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

// TODO: Pause Icon should only be visible when the radio is active AND the Icon Button is hovered.
export const View: FC<IProps> = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  showPause,
  showPlay,
  hovered,
  imageSource,
  showVolume,
  title,
  ...rest
}) => (
  <div>
    <CardMedia
      {...rest}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      // shadowColor="rgba(161, 243, 28, 0.1)"
    >
      <Image
        blur={hovered}
        src={imageSource} /* bgColor={'rgba(152, 230, 27, 0.4)'}  */
      />
      {showPlay && <PlayIcon border={true} position="absolute" type="light" />}
      {showPause && <PauseIcon border={true} position="absolute" type="light" />}
      {showVolume && <VolumeIcon position="absolute" type="dark" />}
      <Overlay show={!!hovered} type="light" />
    </CardMedia>
    {title && (
      <CardContent alignItems="flex-start">
        <Title>{title}</Title>
      </CardContent>
    )}
  </div>
);
