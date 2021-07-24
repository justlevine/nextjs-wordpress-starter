import allMenus from './allMenus'
import cart from './cart'
import defaultSeoFields from './defaultSeoFields'
import siteSettings from './siteSettings'

// Query partial: retrieve default data for all frontend pages.
const defaultPageData = /* GraphQL */ `
  ${defaultSeoFields}
  ${allMenus}
  ${cart}
  ${siteSettings}
`

export default defaultPageData
