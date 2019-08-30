import React, { FC } from 'react';
import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';

const TextWrapper = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.grayLight};
  margin: 0.3rem 0.75rem;
  padding: 0 0.5rem;
  border-radius: 30px;

  /* Flex layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
`;

const Text = styled.p`
  color: #afafaf;
  text-align: center;
  display: flex;
  align-items: center;
`;

const Favorite = styled(MdFavorite)`
  margin: 0 0.3rem;
  font-size: 1.5rem;
`;

interface IProps {
  message?: 'empty' | 'addFavorite';
}
export const EmptyCollectionPlaceholder: FC<IProps> = props => {
  const pickText = () => {
    switch (props.message) {
      case 'addFavorite':
        return (
          <Text>
            <span>Click the</span>
            <Favorite />
            <span>icon next to a radio to add it to your favorites!</span>
          </Text>
        );
      default:
        return <Text>{"This collection is empty :'("}</Text>;
    }
  };

  return <TextWrapper>{props.children || pickText()}</TextWrapper>;
};
