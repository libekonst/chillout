import styled, { css } from 'styled-components';

interface CardProps {
  shadowColor?: string;
}
export const CardContent = styled.div`
  position: relative;
  height: 10rem;
  max-width: 10rem;
  margin: 10px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ${({ shadowColor = 'rgba(89, 89, 89, 0.1)' }: CardProps) =>
    css`
      box-shadow: 0 13px 60px -5px ${shadowColor};
    `}
`;
