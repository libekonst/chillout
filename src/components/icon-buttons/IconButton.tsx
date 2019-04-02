import styled, { css } from 'styled-components';

interface IProps {
  border?: boolean;
  cursor?: 'default' | 'pointer';
  size?: 'tiny' | 'small' | 'normal' | 'big' | 'enormous';
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
}
export const IconButton = styled.button<IProps>`
  /* Positioning */
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${({ position = 'static' }) => position};
  color: ${props => props.theme.colors.lightblack};
  background-color: black;
  border-radius: 50%;

  /* Props related styles */
  ${({ size = 'normal', cursor = 'default', border }) =>
    css`
      font-size: ${calcSize(size)};
      cursor: ${cursor};
      /* border: ${border && '2px solid'}; */
      /* border-style: solid;
      border-width: 2px; */
      border-color: ${border ? props => props.theme.colors.lightblack : 'transparent'};
    `}
`;

const calcSize = (size: IProps['size']) => {
  switch (size) {
    case 'tiny':
      return '20px';
    case 'small':
      return '30px';
    case 'normal':
      return '50px';
    case 'big':
      return '60px';
    case 'enormous':
      return '80px';
    default:
      return '50px';
  }
};
