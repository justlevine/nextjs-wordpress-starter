// Query partial: retrieve pagination info for archive.
const archivePageInfo = /* GraphQL */ `
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
`

export default archivePageInfo
