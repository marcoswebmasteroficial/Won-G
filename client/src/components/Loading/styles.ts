import styled, { css, keyframes } from 'styled-components'

const Animation = keyframes`
to {
  transform: rotate(1turn);
}
`
export const Wrapper = styled.div`
  width: 20em;
  height: 20em;
  font-size: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Face = styled.div`
  ${({ theme }) => css`
    position: absolute;
    border-radius: 50%;
    border-style: solid;
    animation: ${Animation} 3s linear infinite;

    &&:nth-child(1) {
      width: 100%;
      height: 100%;
      color: ${theme.colors.primary};
      border-color: currentColor transparent transparent currentColor;
      border-width: 0.2em 0.2em 0em 0em;
      --deg: -45deg;
      animation-direction: normal;
    }
    &&:nth-child(2) {
      width: 70%;
      height: 70%;
      color: ${theme.colors.secondary};
      border-color: currentColor currentColor transparent transparent;
      border-width: 0.2em 0em 0em 0.2em;
      --deg: -135deg;
      animation-direction: reverse;
    }
  `}
`
export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    opacity: 0.5;
  `}
`
export const Cicle = styled.div`
position: absolute;
width: 50%;
height: 0.1em;
top: 50%;
left: 50%;
background-color: transparent;
transform: rotate(var(--deg));
transform-origin: left;
&&::before {
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  content: "";
  width: 1em;
  height: 1em;
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em,
    0 0 0 0.5em rgba(255, 255, 0, 0.1);
}
  }
`
