import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_ORDERS = gql`
  query QueryOrders($limit: Int, $start: Int, $identifier: ID!, $sort: String) {
    orders(
      limit: $limit
      start: $start
      where: { user: { id: $identifier } }
      sort: $sort
    ) {
      id
      created_at
      card_brand
      card_last4
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`
