import styled, { css } from 'styled-components';

interface CardProps {
  shadowColor?: string;
}
export const CardMedia = styled.div<CardProps>`
  /* Styles */
  border-radius: 20px;
  position: relative;
  height: 10rem;
  width: 10rem;

  /* Flex */
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  ${({ shadowColor = 'rgba(89, 89, 89, 0.1)' }) =>
    css`
      box-shadow: 0 13px 60px -5px ${shadowColor};
    `}
`;
