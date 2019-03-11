import { MdPlayArrow, MdPause } from 'react-icons/md';
import { IoIosVolumeHigh } from 'react-icons/io';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

// export const PlayIcon = () => <MdPlayArrow className="controls" />;
// export const PauseIcon = () => <MdPause className="controls" />;
interface IProps {
  border?: boolean;
  type?: 'light' | 'dark';
  cursor?: 'default' | 'pointer';
  size?: 'small' | 'medium' | 'big';
}
const Border = styled.button`
  z-index: 2;

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  /* color: black; */
  font-size: ${props => calcSize(props.size)};
  color: white;
  cursor: ${({ cursor = 'default' }) => cursor};
  border: ${(props: IProps) => props.border && '2px solid'};
  border-radius: 50%;
  /* background-color: ${props =>
    props.type === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}; */
  /* ${({ type }: IProps) =>
    type === 'light'
      ? css`
          background-color: rgba(255, 255, 255, 0.6);
          border-color: rgb(255, 255, 255);
        `
      : css`
          background-color: rgba(45, 45, 45, 0.6);
          border-color: rgb(255, 255, 255);
        `} background-color: rgba(255, 255, 255, 0.4); */
`;
const calcSize = (size: IProps['size']) => {
  switch (size) {
    case 'small':
      return '40px';
    case 'medium':
      return '50px';
    case 'big':
      return '60px';
    default:
      return '50px';
  }
};
export const PlayIcon: FC<IProps> = ({ border = true }) => (
  <Border border={true} type="dark">
    <MdPlayArrow />
  </Border>
);
export const PauseIcon: FC<IProps> = ({ border = true }) => (
  <Border border={border} type="light" size="big">
    <MdPause />
  </Border>
);
export const VolumeIcon: FC<IProps> = ({ border = true }) => (
  <Border border={border} type="light">
    <IoIosVolumeHigh />
  </Border>
);
