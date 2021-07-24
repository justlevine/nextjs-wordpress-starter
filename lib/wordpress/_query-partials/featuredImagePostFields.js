// Query partial: retrieve featured image post fields.
const featuredImagePostFields = /* GraphQL */ `
  featuredImage {
    node {
      altText
      sourceUrl(size: $imageSize)
    }
  }
`

export default featuredImagePostFields
