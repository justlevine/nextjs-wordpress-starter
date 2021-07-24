// Query partial: retrieve archive SEO data.
const archiveSeo = /* GraphQL */ `
  archiveSeo {
    canonical
    metaDesc
    metaRobotsNofollow
    metaRobotsNoindex
    title
  }
`

export default archiveSeo
