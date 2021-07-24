import {gql} from '@apollo/client'

// Mutation: submit GF form entry.
const mutationInsertFormEntry = gql`
  mutation SUBMIT_FORM_ENTRY($formId: Int!, $fieldValues: [FieldValuesInput]) {
    submitGravityFormsForm(
      input: {
        formId: $formId
        clientMutationId: "submitGfForm"
        fieldValues: $fieldValues
      }
    ) {
      clientMutationId
      entryId
      resumeToken
      resumeUrl
      entry {
        form {
          node {
            confirmations {
              message
            }
          }
        }
      }
      errors {
        id
        message
      }
    }
  }
`

export const mutationUpdateFormEntry = gql`
  mutation SUBMIT_FORM_ENTRY($entryId: Int!, $fieldValues: [FieldValuesInput]) {
    updateGravityFormsEntry(
      input: {
        entryId: $entryId
        clientMutationId: "submitGfForm"
        fieldValues: $fieldValues
      }
    ) {
      clientMutationId
      entryId
      entry {
        formFields {
          nodes {
            ... on PostImageField {
              imageValues {
                altText
                caption
                description
                title
                url
              }
            }
          }
        }
        form {
          node {
            confirmations {
              message
            }
          }
        }
      }
      errors {
        id
        message
      }
    }
  }
`

export const mutationDraftFormEntry = gql`
  mutation SUBMIT_FORM_ENTRY(
    $resumeToken: String!
    $fieldValues: [FieldValuesInput]
  ) {
    updateGravityFormsDraftEntry(
      input: {
        resumeToken: $resumeToken
        clientMutationId: "submitGfForm"
        fieldValues: $fieldValues
      }
    ) {
      clientMutationId
      entryId
      resumeToken
      resumeUrl
      entry {
        formFields {
          ... on PostImageField {
            imageValues {
              altText
              caption
              description
              title
              url
            }
          }
        }
        form {
          node {
            confirmations {
              message
            }
          }
        }
      }
      errors {
        id
        message
      }
    }
  }
`

export default mutationInsertFormEntry
