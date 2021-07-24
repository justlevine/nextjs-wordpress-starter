import {initializeWpApollo} from '@/lib/wordpress/connector'
// import theMutation from '@/lib/wordpress/gravityForms/mutationInsertFormEntry'
import {mutationUpdateFormEntry as theMutation} from '@/lib/wordpress/gravityForms/mutationInsertFormEntry'

/**
 * Submit GF form entry via WP GraphQL.
 *
 * @author WebDevStudios
 * @param  {number}      formId      GF form ID.
 * @param  {object}      fieldValues GF form field values.
 * @return {fieldValues}             Entry ID or error object.
 */
export default async function insertGfFormEntry(formId, fieldValues) {
  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Set up return object.
  const response = {
    apolloClient,
    entryId: null
  }
  console.warn('field-value', {...fieldValues[0]})
  // Convert File objects to be accepted on WP side.
  fieldValues = fieldValues.map((field) => {
    if (!field?.postImageValues) {
      return field
    }
    field.postImageValues = {
      image: {
        name: field.postImageValues?.image[0].name,
        type: field.postImageValues?.image[0].type,
        size: field.postImageValues?.image[0].size,
        tmp_name: field.postImageValues?.image[0].path
      },
      caption: 'some caption',
      altText: 'some ither alt',
      title: 'someTitle',
      description: 'someDescription'
    }
    return field
  })

  console.warn('fileUpload field values', {...fieldValues[0].value})

  // Determine query variables.
  const variables = {
    entryId: 213,
    // formId,
    fieldValues
  }

  // Execute query.
  await apolloClient
    .mutate({
      mutation: theMutation,
      variables
    })
    .then((entryData) => {
      const {entryId, entry} = entryData?.data?.submitGravityFormsForm

      console.log({...entryData.data.submitGravityFormsForm.errors})
      // Set error props if data not found.
      if (!entryId) {
        response.error = true
        response.errorMessage =
          'An error occurred while submitting the form entry.'

        return null
      }

      response.entryId = entryId
      response.confirmationMessage =
        entry?.form?.node?.confirmations?.[0]?.message ||
        'Thanks for contacting us! We will get in touch with you shortly.'
      console.log({response})
    })
    .catch((error) => {
      console.log({...error.graphQLErrors})
      response.error = true
      response.errorMessage = error.message
      console.warn({response})
    })

  return response
}
