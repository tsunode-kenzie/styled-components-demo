import styled, { css } from 'styled-components';

export const Container = styled.div`
  svg {
    color: ${({ isLight }) => isLight ? 'yellow' : 'gray'};
      
    font-size: 250px;
  }
`;