import styled from 'styled-components';
import { Column } from '../layout/Column';
import { ComponentProps } from 'react';

interface IProps {
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}
type MergedProps = IProps & ComponentProps<typeof Column>;

export const CardContent = styled(Column)`
  margin-top: 0.8rem;
  text-align: ${matchAlignment};
`;

function matchAlignment({ alignItems, textAlign }: MergedProps): IProps['textAlign'] {
  if (textAlign) return textAlign;

  switch (alignItems) {
    case 'flex-end':
      return 'end';
    case 'center':
      return 'center';
    default:
      return 'start';
  }
}
