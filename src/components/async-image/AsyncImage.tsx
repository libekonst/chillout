import React, { FC, useState, SyntheticEvent, ComponentProps } from 'react';
import { Placeholder } from '../styled/Placeholder';
import styled, { css } from 'styled-components';
import { AppContext } from '../../AppContext';

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
  const windowReady = React.useContext(AppContext);

  return (
    <Placeholder fadeOutOn={isLoaded}>
      <Image
        onLoad={handleLoad}
        loaded={isLoaded}
        src={windowReady ? src : undefined}
        {...rest}
      />
    </Placeholder>
  );
};
