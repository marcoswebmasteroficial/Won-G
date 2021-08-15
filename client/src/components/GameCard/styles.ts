import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(255 255 255 / 5%);
  border-radius: 0.5rem;
  &:hover div {
    opacity: 1;
  }
`
export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: -1rem;
    top: -0.5rem;
    cursor: pointer;
    svg {
      width: 2.5rem;
    }
  `}
`
export const ImageBox = styled.a`
  min-height: 25rem;
  position: relative;
  width: 100%;
  background: #f6f7f8;
  overflow: hidden;
  border-radius: 4px;
  background: linear-gradient(to bottom, rgb(43, 43, 43), rgb(32, 32, 32));
  color: rgba(245, 245, 245, 0.6);
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.a`
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    white-space: nowrap;
  `}
`

export const Developer = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: rgba(245, 245, 245, 0.6);
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    white-space: nowrap;
  `}
`

export const OptionsButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 1rem;
    right: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    z-index: ${theme.layers.overlay};
    opacity: 0;
    svg {
      width: 2.6rem;
      background: #000000c4;
      box-shadow: -1px 1px 6px #121313;
      border-radius: 1.5rem;
      padding: 0.3rem;
    }
  `}
`

export const BuyBox = styled.div`
  display: flex;
`

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xxsmall};
    font-weight: ${theme.font.light};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xxsmall};
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    height: 3rem;
    align-items: center;

    ${!isPromotional && priceModifiers.default(theme)};
    ${isPromotional && priceModifiers.promotional(theme)};
  `}
`
