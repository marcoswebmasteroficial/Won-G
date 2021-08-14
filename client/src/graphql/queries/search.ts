import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
export const QUERY_SEARCH = gql`
  query QuerySearch(
    $limit: Int
    $start: Int
    $keywords: String!
    $price: Int
    $sort: String
  ) {
    games(
      limit: $limit
      start: $start
      where: { name_contains: $keywords, price: $price }
      sort: $sort
    ) {
      ...GameFragment
    }
  }
  ${GameFragment}
`
