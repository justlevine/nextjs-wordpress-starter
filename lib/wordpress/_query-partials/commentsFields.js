// Query partial: retrieve comment fields.
const commentsFields = /* GraphQL */ `
  databaseId
  content(format: RENDERED)
  parentDatabaseId
  approved
  id
  date
  parentId
  type
  author {
    node {
      name
      url
    }
  }
`
export default commentsFields
