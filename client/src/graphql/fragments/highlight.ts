import { gql } from '@apollo/client'

export const HighlightFragment = gql`
  fragment HighlightFragment on ComponentPageHighlight {
    title
    subtitle
    buttonLabel
    buttonLink
    alignment
    background {
      url
    }
    floatImage {
      url
    }
  }
`
