import React, { InputHTMLAttributes, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  eyePassword?: boolean
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  eyePassword = false,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const [passwordShown, setPasswordShown] = useState(true)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInput && onInput(newValue)
  }
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

        {iconPosition != 'right' && eyePassword && (
          <i onClick={togglePasswordVisiblity}>
            {passwordShown ? <FaEye size={22} /> : <FaEyeSlash size={22} />}
          </i>
        )}
        <S.Input
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
          type={passwordShown && !!eyePassword ? 'password' : 'text'}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
