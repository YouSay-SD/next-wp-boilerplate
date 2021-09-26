import { gql } from "graphql-request";
import { useQuery } from 'hooks';
// import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";


const queryGravityFormField = `
  id
  label
  type
  placeholder
  isRequired
  errorMessage
  formId
  description
`;

const queryGravityForm = gql`
  query getGravityForm($formId: ID!) {
    gravityFormsForm(id: $formId, idType: DATABASE_ID) {
      id
      formId
      title
      description
      button {
        imageUrl
        text
        type
      }
      confirmations {
        message
        id
      }
      formFields {
        edges {
          node {
            ... on EmailField {
              ${queryGravityFormField}
            }
            ... on TextField {
              ${queryGravityFormField}
            }
            ... on TextAreaField {
              ${queryGravityFormField}
            }
          }
        }
      }
    }
  }
`;

const useGravityForm = ({ formId }) => {

  const { loading, data, error } = useQuery(queryGravityForm, {formId});

  return {
    data: data?.gravityFormsForm
  }
  // const postTypeLabel = `cpt${capitalizeFirstLetter(postType)}s`;

  // const { loading, data: dataCpt, error } = useQuery(
  //   gql`
  //     query ${postTypeLabel} {
  //       ${postTypeLabel}(where: {search: "${key}", orderby: {order: ${order}, field: ${orderBy}}}) {
  //         nodes {
  //           ${queryCpt}
  //           ${queryCptAcf[postType]}
  //           ${taxonomies ? getTaxonomies(taxonomies) : ''}
  //           ${categories ? getCategories() : ''}
  //           ${tags ? getTags() : ''}
  //         }
  //       }
  //     }
  //   `
  // );

  // const data = dataCpt ? dataCpt[postTypeLabel].nodes : null;

  // return {
  //   loading,
  //   data,
  //   error,
  // }
};

export default useGravityForm;
