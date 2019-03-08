import styled from 'styled-components';
import { Column } from '../layout/Column';
import { ComponentProps } from 'react';

interface IProps {
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}

type Props = ComponentProps<typeof Column> & IProps;
export const CardContent = styled(Column)<Props>`
  margin-top: 0.8rem;
  text-align: ${props => matchAlignment(props)};
`;

const matchAlignment = ({ alignItems, textAlign }: Props) => {
  if (textAlign) return textAlign;
  switch (alignItems) {
    case 'flex-end':
      return 'end';
    case 'center':
      return 'center';
    default:
      return 'start';
  }
};
