import { gql } from "graphql-request";
import { useQuery } from 'react-query';
import { cptQueries } from "graphQl/queries";
import { client } from "graphQl/client";

const { queryCategories, queryCpt, queryCptAcf, queryTags, queryTaxonomies } = cptQueries;

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
  let keyQuery = 'CPT';

  // if (!Array.isArray(postType)) {
  //   let postTypes = [postType];
  // }

  const postTypes = Array.isArray(postType) ? postType : [postType];

  if (Array.isArray(postType)) {
    postType.forEach(cpt => {
      keyQuery += `_${cpt}`;
    })
  } else {
    keyQuery += `_${postType}`;
  }

  // console.log('TYPES', postTypes)

  // Set Key Query
  // postType.forEach(cpt => {
  //   keyQuery += `_${cpt}`;
  // })
  keyQuery += key == ' ' || key == '' ? '' : `_${key}`; 

  return useQuery(keyQuery.toUpperCase(), async () => {
    const data = await client.request(
      gql`
        query GET_CPT{${postTypes.map((cpt) => {
          return (`
            cpt${cpt}s(where: {search: "${key}", orderby: {order: ${order}, field: ${orderBy}}}) {
              nodes {
                ${queryCpt}
                ${queryCptAcf[cpt]}
                ${taxonomies ? queryTaxonomies(taxonomies) : ''}
                ${categories ? queryCategories() : ''}
                ${tags ? queryTags() : ''}
              }
            }`)
        })}
      }`
    )
    
    return data;
  });
};

export default useCpt;