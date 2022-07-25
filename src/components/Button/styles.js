import styled, { css } from 'styled-components';

const buttonsStyles = {
  primary: {
    color: '#f10',
    backgroundColor: '#fff',
  },
  secondary: {
    color: 'blue'
  }
}

export const Button = styled.button`
  padding: 5px;
  margin: 5px;

  ${({ styleType }) =>
    css
      `color: ${buttonsStyles[styleType].color};`
  }
`