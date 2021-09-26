import { gql } from "graphql-request";
import { useQuery } from 'react-query';
import { queryCpt } from "graphQl/queries/acfQueries";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";
import { queryCategories, queryTags, queryTaxonomies, queryCptAcf } from "graphQl/queries/cptQueries";
import { client } from "graphQl/client";

/*
  postType: string
  order: string
  orderBy: string
  taxonomies: name array of 'graphql_plural_name' into taxonomy / example ['taxoDogs', 'taxoCats']
  categories: boolean / show categories
  tags: boolean / show tags
*/

const useCpt = ({ 
  postType, 
  order = 'DESC', 
  orderBy = 'DATE', 
  taxonomies = null, 
  categories = false, 
  tags = false, 
  key = ' ' 
}) => {
  // const postTypeLabel = `cpt${capitalizeFirstLetter(postType)}s`;

  return useQuery(`CPT_${postType.toUpperCase()}_${key.toUpperCase()}`, async () => {
    const data = await client.request(
      gql`
        query ${postType}s {
          cpt${postType}s(where: {search: "${key}", orderby: {order: ${order}, field: ${orderBy}}}) {
            nodes {
              ${queryCpt}
              ${queryCptAcf[postType]}
              ${taxonomies ? queryTaxonomies(taxonomies) : ''}
              ${categories ? queryCategories() : ''}
              ${tags ? queryTags() : ''}
            }
          }
        }
      `
    )
    
    return data;
  });
};

export default useCpt;
