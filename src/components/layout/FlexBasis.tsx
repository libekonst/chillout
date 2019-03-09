import styled from 'styled-components';

interface IProps {
  flexDirection: 'row' | 'column';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

export const FlexBasis = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }: IProps) => flexDirection};
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ alignItems = 'center' }) => alignItems};
`;
