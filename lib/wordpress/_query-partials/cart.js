// Query partial: retrieve cart.
const cart = /* GraphQL */ `
  cart {
    contents {
      itemCount
      nodes {
        key
        product {
          node {
            averageRating
            databaseId
            description
            id
            name
            onSale
            reviewCount
            slug
            type
            dateOnSaleTo
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
            ... on SimpleProduct {
              regularPrice(format: FORMATTED)
              price(format: FORMATTED)
              salePrice(format: FORMATTED)
            }
            ... on VariableProduct {
              regularPrice(format: FORMATTED)
              price(format: FORMATTED)
              salePrice(format: FORMATTED)
            }
            ... on ExternalProduct {
              regularPrice(format: FORMATTED)
              price(format: FORMATTED)
              salePrice(format: FORMATTED)
            }
          }
        }
        quantity
        subtotal
      }
    }
    appliedCoupons {
      code
      discountAmount
      discountTax
    }
    subtotal
    subtotalTax
    shippingTax
    shippingTotal
    total
    totalTax
    feeTax
    feeTotal
    discountTax
    discountTotal
  }
`

export default cart
