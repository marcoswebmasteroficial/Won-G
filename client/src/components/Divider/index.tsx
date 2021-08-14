import styled, { css } from 'styled-components'

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};
    height: 0.1rem;
    background: #333;
    border: 0;
  `}
`
