import React, { FC, ComponentProps } from 'react';
import styled from 'styled-components';
import { truncateText } from '../../styles';
import { Favorite } from '../icon-buttons/Favorite';

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
  font-weight: 500;
  ${truncateText}
`;

const Subtitle = styled.p`
  width: 100%;
  font-size: 0.8rem;
  opacity: 0.9;
`;

const Section = styled.section`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

interface IProps {
  radioTitle?: string;
  radioSubtitle?: string;
  isRadioFavorite?: boolean;
  handleAddFavorite?: (e: any) => void;
}

type Props = IProps & ComponentProps<typeof Link>;
export const RadioLink: FC<Props> = props => (
  <Section>
    <Link {...props}>
      {!!props.radioTitle && <Title>{props.radioTitle}</Title>}
      {!!props.radioSubtitle && <Subtitle>{props.radioSubtitle}</Subtitle>}
    </Link>
    <Favorite
      isFavorite={props.isRadioFavorite}
      onClick={props.handleAddFavorite}
      style={{ marginLeft: '0.5rem' }}
    />
  </Section>
);
