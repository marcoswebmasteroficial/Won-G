import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionBanner = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled.div`
  ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

  ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
    `}
`
