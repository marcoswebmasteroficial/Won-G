import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedTitle: recommended?.section?.title,
      recommendedGames: gamesMapper(recommended?.section?.games),
      recommendedHighlight: highlightMapper(recommended?.section?.highlight)
    }
  }
}
