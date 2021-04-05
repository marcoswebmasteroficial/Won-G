import { setContext } from '@apollo/client/link/context'
import { Session } from 'next-auth/client'
import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import apolloCache from './apolloCache'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })
  const authLink = setContext((_, { headers }) => {
    const authorization = session?.jwt ? `Bearer ${session?.jwt}` : ''
    return { headers: { ...headers, authorization } }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: apolloCache
  })
}
export function initializeApollo(
  initialState = null,
  session?: Session | null
) {
  // serve para verificar se já existe uma instância, para não criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient(session)

  // se a página usar o apolloClient no lado client
  // hidratamos o estado inicial aqui
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal

  // cria o apolloClient se estiver no client side
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null, session?: Session) {
  //useMemo que utiliza uma técnica já conhecida chamada memoization, que consiste em guardar o valor de retorno de uma função a partir dos valores de entrada (Parâmetros). Ou seja, se uma função de soma recebe os parâmetros 2 e 3 e retorna 5, esses valores serão armazenados e, quando essa função for chamada com os mesmos parâmetros, ela não precisará refazer o cálculo para obter o valor de retorno, já que este estará armazenado.
  const store = useMemo(() => initializeApollo(initialState, session), [
    initialState,
    session
  ])
  return store
}
