import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import gamesMock from 'components/GameCardSlider/mock'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
export default function WishlistPage(props: WishlistTemplateProps) {
  return (
    <Profile>
      <Wishlist {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo()
  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      games: gamesMock
    }
  }
}
