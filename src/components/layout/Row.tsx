import styled from 'styled-components';

interface Props {
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify = 'center' }: Props) => justify};
  align-items: ${({ alignItems = 'center' }: Props) => alignItems};
`;
