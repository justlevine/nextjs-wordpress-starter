// Query partial: retrieve categories post fields.
const categoriesPostFields = /* GraphQL */ `
  categories {
    edges {
      node {
        slug
        name
      }
    }
  }
`
export default categoriesPostFields
