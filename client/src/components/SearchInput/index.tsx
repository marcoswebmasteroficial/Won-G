import React, { InputHTMLAttributes, useEffect, useState } from 'react'

import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Link from 'next/link'
import * as S from './styles'
import { QuerySearch_games } from 'graphql/generated/QuerySearch'

export type SearchInputProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  iconPosition?: 'left' | 'right'
  total?: number
  items?: QuerySearch_games[]
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const SearchInput = ({
  iconPosition = 'left',
  label,
  name,
  error,
  total = 0,
  items = [],
  disabled = false,
  initialValue = '',
  onInputChange,
  ...props
}: SearchInputProps) => {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [Result, setResult] = useState<JSX.Element[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget?.value
    newValue.length > 0 ? setIsFocused(true) : setIsFocused(false)
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }

  const CloseSearch = () => {
    setValue('')
    !!onInputChange && onInputChange('')
    setIsFocused(false)
  }

  const Search = async () => {
    setResult(
      items
        ? items.map((item) => {
            const parts = item.name.split(new RegExp(`(${value})`, 'gi'))[1]
            return (
              <S.ItemLi key={item.id} onClick={CloseSearch}>
                <Link href={`/game/${item.slug}`} passHref>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.name.replace(
                        parts,
                        `<strong>${parts}</strong>`
                      )
                    }}
                  ></div>
                </Link>
              </S.ItemLi>
            )
          })
        : []
    )
  }
  useEffect(() => {
    Search()
  }, [value])

  return (
    <>
      <S.Wrapper disabled={disabled} error={!!error}>
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.InputWrapper>
          <S.Icon iconPosition={iconPosition}>
            {isFocused ? <CloseIcon onClick={CloseSearch} /> : <SearchIcon />}
          </S.Icon>
          <S.Input
            onChange={handleSearch}
            value={value}
            iconPosition={iconPosition}
            disabled={disabled}
            maxLength={350}
            autoComplete="off"
            name={name}
            {...(label ? { id: name } : {})}
            {...props}
          />
        </S.InputWrapper>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
      {!!isFocused && (
        <S.Dropdown>
          {Result.length > 0 && value.replace(/\s+/g, '').length > 0 ? (
            <>
              {Result}
              {total > 4 && (
                <S.Viewmore>
                  <a role="link" href={`/games?name=${value}`}>
                    Ver mais +
                  </a>
                </S.Viewmore>
              )}
            </>
          ) : (
            <>
              <S.NoItemLi key="no-game">
                <div>Nenhum Jogo foi encontrado</div>
              </S.NoItemLi>
              <S.Viewmore>
                <Link href="/games" passHref>
                  Explorar Todos os jogos
                </Link>
              </S.Viewmore>
            </>
          )}
        </S.Dropdown>
      )}
    </>
  )
}

export default SearchInput
