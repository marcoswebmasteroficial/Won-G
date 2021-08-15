import Link from 'next/link'

import { useEffect, useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'

import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import UserDropdown from 'components/UserDropdown'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'
import SearchInput from 'components/SearchInput'
import {
  QuerySearch,
  QuerySearchVariables,
  QuerySearch_games
} from 'graphql/generated/QuerySearch'
import { QUERY_SEARCH } from 'graphql/queries/search'
import { initializeApollo } from 'utils/apollo'

export type MenuProps = {
  username?: string | null
  search: boolean
}

const Menu = ({ username, search }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [Result, setResult] = useState<QuerySearch_games[] | []>([])
  const [numberResult, setNumberResult] = useState(0)
  const apolloClient = initializeApollo()

  const handleSearch = async (value: string) => {
    const { data } = await apolloClient.query<
      QuerySearch,
      QuerySearchVariables
    >({
      query: QUERY_SEARCH,
      variables: {
        keywords: value,
        start: 0,
        limit: 10,
        sort: 'name:asc'
      }
    })
    setNumberResult(data.games.length)
    setResult(data.games ? data.games.slice(0, 4) : [])
  }

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>
      <S.MenuGroup>
        <S.SearchWrapper>
          {!search && (
            <SearchInput
              aria-label="Search"
              iconPosition="right"
              placeholder="Pesquisar Game"
              onInputChange={(v) => handleSearch(v)}
              items={Result}
              total={numberResult}
            />
          )}
        </S.SearchWrapper>
        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart">
              <a>
                <CartIcon />
              </a>
            </Link>
          </MediaMatch>
        </S.IconWrapper>

        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>

          {!!username && (
            <>
              <Link href="/profile/me" passHref>
                <S.MenuLink>My Profile</S.MenuLink>
              </Link>
              <Link href="/profile/wishlist" passHref>
                <S.MenuLink>Wishlist</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
