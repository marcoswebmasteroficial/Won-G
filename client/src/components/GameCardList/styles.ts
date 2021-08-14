import styled, { css } from 'styled-components'

export const Wrapper = styled.ol`
  ${({ theme }) => css`
    column-count: 3;
    column-gap: 25px;
    margin-bottom: ${theme.spacings.large};
  `}
`
export const List = styled.li`
  page-break-inside: avoid;
  break-inside: avoid;
  margin: 0.5rem 0;
`

export const Item = styled.div`
  display: flex;
  padding: 0.8rem 0;
  align-items: stretch;
  overflow: hidden;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover {
    background: linear-gradient(to bottom, rgb(43, 43, 43), rgb(32, 32, 32));
  }
`

export const Link = styled.a`
  text-decoration: none;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Left = styled.div`
  width: 100%;
  margin: 0 1rem;
  max-width: 8rem;
`
export const Right = styled.div`
  ${({ theme }) => css`
    h1 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-break: break-word;
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.small};
    }
    small {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-break: break-word;
      color: ${theme.colors.gray};
      font-weight: ${theme.font.light};
      font-size: ${theme.font.sizes.small};
    }
  `}
`
export const ImageBox = styled.div`
  min-height: 10rem;
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
