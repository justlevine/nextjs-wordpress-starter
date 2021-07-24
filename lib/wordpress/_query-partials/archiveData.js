import archivePageInfo from './archivePageInfo'
import archiveSeo from './archiveSeo'

// Query partial: retrieve default data for archives.
const archiveData = /* GraphQL */ `
  ${archivePageInfo}
  ${archiveSeo}
`

export default archiveData
