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

const RadioName = styled.p`
  font-weight: 500;
  ${truncateText}
`;
const Title = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Subtitle = styled.p`
  font-size: 0.8rem;
  opacity: 0.9;
`;

interface IProps {
  radioTitle?: string;
  radioSubtitle?: string;
}

type Props = IProps & ComponentProps<typeof Link>;
export const RadioLink: FC<Props> = props => (
  <Link {...props}>
    {!!props.radioTitle && (
      <Title>
        <RadioName>{props.radioTitle}</RadioName>
        <Favorite
          // isFavorite={props.isRadioFavorite}
          // onClick={props.handleAddFavorite}
          style={{ marginLeft: '0.2rem' }}
        />
      </Title>
    )}
    {!!props.radioSubtitle && <Subtitle>{props.radioSubtitle}</Subtitle>}
  </Link>
);
