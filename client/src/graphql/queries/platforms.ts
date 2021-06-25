import { gql } from '@apollo/client'

export const QUERY_PLATAFORMS = gql`
  query QueryPlatforms {
    platforms {
      id
      name
      slug
    }
  }
`
