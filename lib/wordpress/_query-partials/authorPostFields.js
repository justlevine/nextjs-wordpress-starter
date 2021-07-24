// Query partial: retrieve author post fields.
const authorPostFields = /* GraphQL */ `
  author {
    node {
      slug
      nickname
    }
  }
`
export default authorPostFields
