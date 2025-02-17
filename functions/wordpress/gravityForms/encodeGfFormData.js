/**
 * Encode GF form data into multipart form data.
 *
 * @param  {object} data GF form data.
 * @return {object}      Encoded form data.
 */
export default function encodeGfFormData(data) {
  const formData = new FormData()

  formData.append('formId', data?.formId)

  if (!data?.fieldValues || !data?.fieldValues.length) {
    return {
      body: formData
    }
  }

  data.fieldValues.forEach((field) => {
    // Check if field is file upload field.
    if (field?.postImageValues) {
      // Pass uploaded file data.
      console.log(field.postImageValues)
      formData.append(`field_${field.id}`, field.postImageValues)
    } else {
      // Pass stringified version of full field object for all other field types.
      formData.append(`field_${field.id}`, JSON.stringify(field))
    }
  })

  return {
    body: formData
  }
}
