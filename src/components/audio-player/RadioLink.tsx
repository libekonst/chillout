import React, { FC, ComponentProps } from 'react';
import styled from 'styled-components';
import { truncateText } from '../../styles';

const Link = styled.a`
  text-decoration: none;
  color: white;
  margin-left: 0.5rem;
  width: 100%;

  &:hover {
    text-decoration: ${props => props.href !== undefined && 'underline white'};
  }
`;

const Title = styled.p`
  width: 100%;
  ${truncateText}
`;
const Subtitle = styled.p`
  font-size: 0.8rem;
  opacity: 0.8;
`;

interface IProps {
  radioTitle?: string;
  radioSubtitle?: string;
}

type Props = IProps & ComponentProps<typeof Link>;
export const RadioLink: FC<Props> = props => (
  <Link {...props}>
    {!!props.radioTitle && <Title>{props.radioTitle}</Title>}
    {!!props.radioSubtitle && <Subtitle>{props.radioSubtitle}</Subtitle>}
  </Link>
);
