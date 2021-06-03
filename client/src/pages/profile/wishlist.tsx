import { initializeApollo } from 'utils/apollo'
import { GetServerSidePropsContext } from 'next'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'
import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'

import Wishlist from 'templates/Wishlist'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'

export default function WishlistPage() {
  return (
    <Profile>
      <Wishlist />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)
  if (!session) return {}
  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session?.user?.email as string
    }
  })

  return {
    props: {
      session,
      initialApolloState: apolloClient.cache.extract()
    }
  }
}
