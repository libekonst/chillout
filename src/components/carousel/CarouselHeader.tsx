import React, { FC } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import { Row } from '../layout/Row';
import { ExpandIcon, HeaderLeft } from './HeaderLeft';
import { HeaderButton, HeaderRight } from './HeaderRight';

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
