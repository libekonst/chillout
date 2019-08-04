import React, { ComponentProps, FC, SyntheticEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { AppReadyState } from '../../AppContext';
import { Placeholder } from '../styled/Placeholder';

interface IImageProps {
  loaded?: boolean;
}
const Image = styled.img<IImageProps>`
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  ${props =>
    props.loaded &&
    css`
      opacity: 1;
    `}
`;

export const AsyncImage: FC<ComponentProps<typeof Image>> = props => {
  const { src, ...rest } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => setIsLoaded(true);
  const appReady = React.useContext(AppReadyState);

  return (
    <Placeholder fadeOutOn={isLoaded}>
      <Image
        onLoad={handleLoad}
        loaded={isLoaded}
        src={appReady ? src : undefined}
        {...rest}
      />
    </Placeholder>
  );
};
