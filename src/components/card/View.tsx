import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { CardMedia } from './CardMedia';
import { Image } from '../styled/Image';
import { Overlay } from '../styled/OverLay';
import { CardContent } from './CardContent';
import { Title } from './Title';
import { Placeholder } from '../styled/Placeholder';
import { PlayControlsBorder } from '../icon-buttons/PlayControlsBorder';
import { BlurredImage } from '../styled/BlurredImage';

interface IProps {
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent) => void;
  onImageLoad: () => any;
  backdrop?: boolean;
  isHover?: boolean;
  isActive?: boolean;
  imageSource?: string;
  loaded?: boolean;
  title?: ReactNode;
  cardRef?: React.RefObject<HTMLDivElement>;
}

// TODO: Pause Icon should only be visible when the radio is active AND the Icon Button is hovered.
export const View: FC<IProps> = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  isActive,
  isHover,
  imageSource,
  title,
  loaded,
  onImageLoad,
  cardRef,
  ...rest
}) => (
  <div ref={cardRef} style={{ width: '10rem' }}>
    <CardMedia
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      {...rest}
      // shadowColor="rgba(161, 243, 28, 0.1)"
    >
      <Overlay show={!!isHover} type="light" />
      <Placeholder shouldFadeOut={loaded} gradient={true}>
        <Image src={imageSource} loaded={loaded} onLoad={onImageLoad} />
      </Placeholder>
      <IconWrapper>
        <BlurredImage
          src={imageSource}
          visibility={isHover}
          loaded={loaded}
          onLoad={onImageLoad}
        />
      </IconWrapper>
      <IconWrapper>
        {(isHover || isActive) && (
          <PlayControlsBorder isHover={isHover} isPlaying={isActive} />
        )}
      </IconWrapper>
    </CardMedia>
    {title && (
      <CardContent alignItems="flex-start">
        <Title>{title}</Title>
      </CardContent>
    )}
  </div>
);

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
