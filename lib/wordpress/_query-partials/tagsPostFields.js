// Query partial: retrieve tags post fields.
const tagsPostFields = /* GraphQL */ `
  tags {
    edges {
      node {
        name
        slug
      }
    }
  }
`
export default tagsPostFields
