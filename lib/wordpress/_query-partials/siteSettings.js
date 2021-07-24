const fragments = {
  url: /* GraphQL */ `
    ... on Page {
      id
      databaseId
      uri
    }
  `,
  bgImage: /* GraphQL */ `
    ... on MediaItem {
      databaseId
      id
      sizes(size: PAGE_HEADER_1365W)
      sourceUrl(size: PAGE_HEADER_1365W)
      srcSet(size: PAGE_HEADER_1365W)
    }
  `
}

const siteSettingsData = /* GraphQL */ `
    siteConfig {
      siteSettings {
        gqlName
        gqlLogo {
          id
          altText
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        gqlPlaceholder {
          databaseId
          sourceUrl
          srcSet
          sizes
          title
        }
        gqlPlaceholderMaps {
          databaseId
          sourceUrl
          srcSet
          sizes
        }
        gqlSubscribeBtnText
        gqlSubscribeBtnUrl {
          ${fragments.url}
        }
        gqlCity
        gqlContactAddress
        gqlContactEmail
        gqlContactPhone
        gqlCtaLeftBtnUrl {
          ${fragments.url}
        }
        gqlCtaLeftButtonText
        gqlCtaRightButtonText
        gqlCtaRightButtonUrl {
          ${fragments.url}
        }
        gqlFooterCtaBgImage {
          id
          databaseId
          sizes
          sourceUrl
          srcSet
        }
        gqlFooterCtaText
        gqlPostalCode
        gqlAccountHeaderImage {
          ${fragments.bgImage}
        }
        gqlCartHeaderImage {
          ${fragments.bgImage}
        }
        gqlCheckoutHeaderImage {
          ${fragments.bgImage}
        }
        gqlEventsHeaderImage {
          ${fragments.bgImage}
        }
        gqlGuidesHeaderImage {
          ${fragments.bgImage}
        }
        gqlListingsHeaderImage {
          ${fragments.bgImage}
        }
        gqlPageHeaderImage {
          ${fragments.bgImage}
        }
        gqlPostHeaderImage {
          ${fragments.bgImage}
        }
        gqlProductsHeaderImage {
          ${fragments.bgImage}
        }
      }
    }
`

export default siteSettingsData
