import React, { FC } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { ExpandIcon, HeaderLeft } from './HeaderLeft';
import { HeaderRight, HeaderButton } from './HeaderRight';
import { Row } from '../layout/Row';
import styled from 'styled-components';

interface IProps {
  expanded: boolean;
  title: string;
  onExpand?: () => void;
  onNext?: () => void;
  onBack?: () => void;
}

export const CarouselHeader: FC<IProps> = props => {
  const { expanded, onExpand, onNext, onBack, title } = props;
  return (
    <Row justify="space-between">
      <HeaderLeft onClick={onExpand}>
        {onExpand && <ExpandIcon expanded={expanded} />}
        <HeaderLeftTitle>{title}</HeaderLeftTitle>
      </HeaderLeft>

      <HeaderRight>
        <HeaderButton onClick={onBack}>
          <IoIosArrowBack />
        </HeaderButton>
        <HeaderButton onClick={onNext}>
          <IoIosArrowForward />
        </HeaderButton>
      </HeaderRight>
    </Row>
  );
};

const HeaderLeftTitle = styled.h4`
  &::selection {
    background-color: transparent;
  }
`;
