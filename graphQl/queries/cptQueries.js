import { gql } from "graphql-request";
import { client } from "graphQl/client";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";
import { queryCpt } from "./acfQueries";
import { queryWysiwyg, queryImage } from "./supportQueries";

/***************************************************/   
/* Queries: CPT
/***************************************************/

// Get CPT Data
export const getCptData = async ({ slug, cpt }) => {
  const variables = {
    slug
  };

  const cptName = `cpt${capitalizeFirstLetter(cpt)}`;
  const querySingle = await getSingleBySlug(cpt);
  const data = await client.request(querySingle, variables);
  return data[cptName]
}
 
// Get Taxonomies
export const queryTaxonomies = (taxonomies) => {
  return taxonomies.map((taxonomy) => {
    return `
      ${taxonomy} {
        nodes {
          databaseId
          slug
          name
        }
      }
    `
  })
};

// Get Categories
export const queryCategories = () => {
  return `
    categories {
      nodes {
        databaseId
        name
        slug
      }
    }
  `
};

// Get Tags
export const queryTags = () => {
  return `
    tags {
      nodes {
        name
        slug
        databaseId
      }
    }
  `
};

// Queries CPT ACF
export const queryCptAcf = {
  Blog: `
    acf {
      ${queryImage}
      ${queryWysiwyg}
    }
  `
}

// Get All Cpt Routes
export const getCptRoutes = async () => {
  // Put in this array the CPT that you use.
  const cptNames = ['Blog'];

  const data = await client.request(`
    query getCptRoutes {
      ${cptNames.map(cptName => {
        return `
          cpt${cptName}s {
            edges {
              node {
                slug
                contentType {
                  node {
                    name
                  }
                }
              }
            }
          }
        `;
      })}
    }
  `)

  const paths = [];
  Object.values(data).map(({ edges }) => {
    return edges.map(({ node }) => {
      const cpt = node.contentType.node.name;
      const single = node.slug;

      paths.push({
        params: {
          cpt,
          single,
        }
      })
    })
  });
  
  return paths;
}

// Get single's data by slug
// name: cpt's name 
export const getSingleBySlug = async ( name ) => {
  const cptName = capitalizeFirstLetter(name);
  return gql`
    query getSingleBySlug($slug: ID!) {
      cpt${cptName}(id: $slug, idType: SLUG) {
        ${queryCpt}
        ${queryCptAcf[cptName]}
      }
    }
  `
}
