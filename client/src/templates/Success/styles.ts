import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0 calc(${theme.spacings.xxlarge} * 3);
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    text-align: center;
  `}
`

export const CheckMark = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    padding: ${theme.spacings.medium};
    &::before {
      content: ' ';
      margin: 0 0 8px 20px;
      height: 3px;
      text-shadow: none;
      background: #f231a521;
      width: 40rem;
    }
    &::after {
      content: ' ';
      margin: 0 20px 8px 0;
      height: 3px;
      text-shadow: none;
      background: #f231a521;
      width: 40rem;
    }
    div {
      background: #f231a521;
      border-radius: 50%;
      width: 10rem;
      height: 10rem;
    }
    svg {
      color: #fafafa;
      background: #f231a5;
      border-radius: 50%;
      padding: 1rem;
      width: 8rem;
      margin-top: 1rem;
    }
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    max-width: 60rem;
    margin: auto;

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  `}
`
