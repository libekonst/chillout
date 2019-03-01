import React from 'react';
import styled from 'styled-components';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

interface WrapperProps {
  show: boolean;
}
interface ExpandProps extends WrapperProps {
  type: 'more' | 'less';
}

export const ExpandIcon = ({ type, show }: ExpandProps) => {
  const getIcon = () => {
    switch (type) {
      case 'less':
        return <MdExpandLess />;
      case 'more':
        return <MdExpandMore />;
      default:
        return <MdExpandMore />;
    }
  };
  return <IconWrapper show={show}>{getIcon()}</IconWrapper>;
};

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${(props: WrapperProps) => (props.show ? 'visible' : 'hidden')};
`;
