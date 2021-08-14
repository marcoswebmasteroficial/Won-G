import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { darken } from 'polished'
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(auto, 50%) 1fr;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr)
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: #e7e7e7;
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.medium};
    }
    h2 {
      color: #ccc;
      opacity: 0.4;
    }
    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: 1rem;
    margin-top: ${theme.spacings.small};
  `}
`
