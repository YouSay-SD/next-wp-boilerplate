import { gql } from "graphql-request";

export const SUBMIT_FORM = gql`
  mutation submitForm($formId: Int!, $fieldValues: [FieldValuesInput]) {
    submitGravityFormsForm(input: {
      formId: $formId
      fieldValues: $fieldValues
    }) {
      entryId
      errors {
        id
        message
      }
    }
  }
`;