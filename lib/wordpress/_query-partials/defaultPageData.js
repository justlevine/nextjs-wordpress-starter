import allMenus from './allMenus'
import defaultSeoFields from './defaultSeoFields'
import siteSettings from './siteSettings'

// Query partial: retrieve default data for all frontend pages.
const defaultPageData = `
  ${defaultSeoFields}
  ${allMenus}
	${siteSettings}
`

export default defaultPageData
