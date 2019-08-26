import React, { ComponentProps, FC } from 'react';
import styled from 'styled-components';
import { truncateText } from '../../styles';

interface IProps {
  imageSlot?: JSX.Element;
  controlsSlot?: JSX.Element;
  infoSlot?: JSX.Element;
}

type Props = IProps;
export const NowPlayingLayout: FC<Props> = props => (
  <Section>
    {props.imageSlot && <Media>{props.imageSlot}</Media>}
    {props.infoSlot && <Info>{props.infoSlot}</Info>}
    {props.controlsSlot && <Controls>{props.controlsSlot}</Controls>}
  </Section>
);

const Info = styled.div`
  width: 100%;
  color: white;
  font-size: 0.8rem;
  opacity: 0.8;

  & a {
    opacity: 1;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    ${truncateText}

    &:hover {
      text-decoration: underline white;
    }
  }
`;

const Section = styled.section`
  /* Grid */
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.5rem;
  align-items: center;
  justify-content: stretch;

  /* Styles */
  width: 100%;
`;

const Media = styled.div`
  border-radius: 5px;
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  /* background-color: ${props => props.theme.colors.primaryBlack}; */
  background-color: white;
`;

const Controls = styled.div`
  display: flex;

  & *:not(:first-child) {
    margin-left: 0.5rem;
  }
`;
