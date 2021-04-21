import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`
export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...'
}))`
  width: 4rem;
`
export const FormSuccess = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    background: #8bc34a;
    border-radius: 0.3rem;
    padding: 1rem;
    svg {
      color: ${theme.colors.white};
      width: ${theme.font.sizes.xxlarge};
      margin-right: 1rem;
    }
  `}
`
export const FormError = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    background: ${theme.colors.red};
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: ${theme.font.sizes.medium};
    svg {
      width: ${theme.font.sizes.xlarge};
    }
  `}
`
export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
