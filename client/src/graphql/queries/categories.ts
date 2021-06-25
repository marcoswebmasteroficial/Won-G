import { gql } from '@apollo/client'

export const QUERY_CATEGORIES = gql`
  query QueryCategories {
    categories {
      id
      name
      slug
    }
  }
`
