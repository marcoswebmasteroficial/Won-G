import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as BannerStyles from 'components/Banner/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: ${theme.spacings.small};

      li {
        background: #232222;
        width: 100%;
        height: 100%;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        max-width: 106rem;
       
      }

      .slick-dots {
        position: absolute;
        right: 0;
        flex-direction: column;
        height: 100%;
        top: 0;
        margin: 0;

        li {
          border-top: 0.1rem #e8e1e112 solid;
        }
      }
    `}
  `}
`
export const itemSliderDots = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    > div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.normal};
    }
  `}
`

export const itemSliderDotsImagem = styled.div`
  display: flex;
  height: 8rem;
  width: 6rem;
  overflow: hidden;
  position: absolute;
`
