import styled, { css, DefaultTheme } from 'styled-components'

import { SearchInputProps } from '.'

type IconPositionProps = Pick<SearchInputProps, 'iconPosition'>

type WrapperProps = Pick<SearchInputProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: #eaeaea1f;
    padding: 0 ${theme.spacings.xsmall};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
    > i {
      display: flex;
      cursor: pointer;
      order: 2;
      & > svg {
        fill: ${theme.colors.gray};
      }
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
  
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none;
    }
    &::-ms-reveal,
    &::-ms-clear {
      display: none;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};
    z-index: 9999;
    & > svg {
      width: 2.2rem;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    margin-bottom: 1rem;
  `}
`

export const Dropdown = styled.ul`
  position: absolute;
  z-index: 1000;
  bottom: 1rem;
  transform: translateY(100%);
  background-color: rgb(32, 32, 32);
  padding: 0px;
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 35px 0px;
  font-size: 1.4rem;
  letter-spacing: 0.2px;
  line-height: 1.4;
  width: 30rem;
  margin: 0;
  list-style: none;

  &&::before {
    content: '';
    border-bottom: 6px solid rgb(32, 32, 32);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    height: 0px;
    width: 6px;
    position: absolute;
    top: 0px;
    left: 8%;
    transform: translateY(calc(-100% + 1px));
  }
`
export const ItemLi = styled.li`
  ${({ theme }) => css`
    border-top: 0.1rem solid #3e3e3e47;
    color: #9a9a9a;
    align-items: flex-start;

    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
    text-decoration: none;
    strong {
      color: rgb(245, 245, 245);
      font-size: 1.5rem;
    }

    &:hover {
      background: #e4e0e212;
    }
  `}
`
export const Viewmore = styled.li`
  border-top: 0.1rem solid #3e3e3e47;

  text-align: center;
  color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  text-decoration: none;
  background: #282828;
  a {
    color: #9a9a9a;
    text-decoration: none;
    font-size: 1.2rem;
  }
`
export const NoItemLi = styled.li`
  border-top: 0.1rem solid #3e3e3e47;
  color: #9a9a9a;
  text-align: center;
  color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  text-decoration: none;
`
