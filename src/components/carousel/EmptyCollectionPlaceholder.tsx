import React, { FC } from 'react';
import styled from 'styled-components';
import { truncateText } from '../../styles';

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
`;

const Text = styled.p`
  margin: auto;
  color: #bcbcbc;
  font-weight: bold;
  ${truncateText}
`;

const emptyCollection = `This collection is empty :'(`;

export const EmptyCollectionPlaceholder: FC = props => (
  <TextWrapper>
    <Text>{emptyCollection}</Text>
  </TextWrapper>
);
