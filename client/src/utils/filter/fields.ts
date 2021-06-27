import { initializeApollo } from './../apollo'

import { QueryPlatforms } from './../../graphql/generated/QueryPlatforms'
import { QUERY_PLATAFORMS } from './../../graphql/queries/platforms'
import { categoriesMapper, platformsMapper } from './../mappers'

import { QueryCategories } from './../../graphql/generated/QueryCategories'
import { QUERY_CATEGORIES } from './../../graphql/queries/categories'

const apolloClient = initializeApollo()

export const platformFields = async () => {
  const { data } = await apolloClient.query<QueryPlatforms>({
    query: QUERY_PLATAFORMS
  })
  return platformsMapper(data.platforms)
}

export const categoriasFields = async () => {
  const { data } = await apolloClient.query<QueryCategories>({
    query: QUERY_CATEGORIES
  })
  return categoriesMapper(data.categories)
}

export const priceFields = [
  { label: 'Free', name: 0 },
  { label: 'Under $50', name: 50 },
  { label: 'Under $100', name: 100 },
  { label: 'Under $150', name: 150 },
  { label: 'Under $250', name: 250 },
  { label: 'Under $500', name: 500 }
]

export const sortFields = [
  { label: 'Lowest to highest', name: 'price:asc' },
  { label: 'Highest to lowest', name: 'price:desc' }
]
