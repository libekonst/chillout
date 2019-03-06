import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { ExpandIcon } from '../styled/ExpandIcon';
import { Row } from '../layout/Row';
interface IProps {
  expanded: boolean;
  showExpandIcon: boolean;
  title: string;
  onExpand?: () => void;
  onHeaderEnter?: () => void;
  onHeaderLeave?: () => void;
  onNext?: () => void;
  onBack?: () => void;
}

export const CarouselHeader: FunctionComponent<IProps> = props => {
  const {
    expanded,
    onExpand,
    onNext,
    onBack,
    onHeaderEnter,
    onHeaderLeave,
    showExpandIcon,
    title,
  } = props;
  return (
    <Row justify="space-between">
      <HeaderLeft
        onMouseEnter={onHeaderEnter}
        onMouseLeave={onHeaderLeave}
        onClick={onExpand}
      >
        {onExpand && (
          <ExpandIcon type={expanded ? 'less' : 'more'} show={showExpandIcon} />
        )}
        <h4>{title}</h4>
      </HeaderLeft>

      <HeaderRight>
        <Button onClick={onBack}>
          <IoIosArrowBack />
        </Button>
        <Button onClick={onNext}>
          <IoIosArrowForward />
        </Button>
      </HeaderRight>
    </Row>
  );
};

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ onClick }) =>
    !!onClick &&
    css`
      cursor: pointer;
    `}
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: lightgray;
  font-size: 1.5rem;
  cursor: auto;
  ${props =>
    !!props.onClick &&
    css`
      cursor: pointer;
      
      &:hover {
        color: darkgray;
      }

      &:active {
        color: #052fb8;
        transform: scale(1.1);
      }
    `}
`;
