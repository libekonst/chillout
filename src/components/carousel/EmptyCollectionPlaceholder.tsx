import React, { FC } from 'react';
import styled from 'styled-components';
import { Row } from '../layout/Row';

const TextWrapper = styled(Row)`
  width: 100%;
  height: 6rem;
`;

const Text = styled.p`
  color: #bcbcbc;
  font-size: 2rem;
  font-weight: bold;
`;
const emtpyCollection = `This collection is empty :'(`;

export const EmptyCollectionPlaceholder: FC = props => (
  <TextWrapper>
    <Text>{emtpyCollection}</Text>
  </TextWrapper>
);
