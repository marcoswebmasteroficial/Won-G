import { tint } from 'polished'
import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div``

export const Body = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;
    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`
export const Error = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    background: ${theme.colors.red};
    border-radius: 0.3rem;
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: ${theme.font.sizes.small};
    svg {
      width: ${theme.font.sizes.xxlarge};
    }
  `}
`
export const FreeGames = styled.p`
  ${({ theme }) => css`
    text-align: center;

    font-size: ${theme.font.sizes.small};
    background: none;
    border: 3px solid #101832;
    color: #101832;
    cursor: pointer;

    letter-spacing: 0.075em;
    padding: 0.8em 1em;
    margin: auto 2em;
    position: relative;
    align-self: center;
    text-transform: uppercase;
    z-index: 1;
    box-shadow: -0.5em 0.5em rgb(16 24 50 / 0%);
    transform-origin: left bottom;

    &:before,
    &:after {
      border: 3px #00bcdd solid;
      content: '';
      display: block;
      position: absolute;
      z-index: -1;
    }
    &:before {
      border-image: linear-gradient(45deg, #00bcdd 0%, #0097dd 100%);
      border-image-slice: 1 1 0 1;
      left: -0.59em;
      top: 0em;
      width: 0.31em;
      height: 113.5%;
      -webkit-transform: skewY(-45deg);
      -ms-transform: skewY(-45deg);
      transform: skewY(-45deg);
    }
    &:after {
      border-image: linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
      border-image-slice: 1 1 1 0;
      bottom: -0.61em;
      right: 0;
      width: 103.5%;
      height: 0.31em;
      -webkit-transform: skewX(-45deg);
      -ms-transform: skewX(-45deg);
      transform: skewX(-45deg);
    }
    &:hover {
      background-color: white;
      background-size: 90%;
      transform: translate(0.1em, -0.1em);
      box-shadow: -1em 1em 0.15em rgba(16, 24, 50, 0.1);
    }
  `}
`
