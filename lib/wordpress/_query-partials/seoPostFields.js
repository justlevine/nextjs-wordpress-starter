// Query partial: retrieve SEO post fields.
const seoPostFields = /* GraphQL */ `
  seo {
    breadcrumbs {
      text
      url
    }
    canonical
    title
    metaDesc
    metaRobotsNofollow
    metaRobotsNoindex
    opengraphAuthor
    opengraphModifiedTime
    opengraphPublishedTime
    opengraphImage {
      sourceUrl(size: LARGE)
    }
  }
`

export default seoPostFields
