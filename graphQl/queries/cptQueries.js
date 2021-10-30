// import { queryWysiwyg, queryImage, queryButtonGroup, queryBackgroundGroup, querySeoTitle } from "./supportQueries";
import { supportQueries } from "graphQl/queries";
import { cptConfig } from "config/cptConfig";
import { gql } from "graphql-request";
import { client } from "graphQl/client";

const { queryWysiwyg, queryImage, queryButtonGroup, queryBackgroundGroup, querySeoTitle } = supportQueries;

/***************************************************/   
/* Queries: CPT
/***************************************************/


// Queries
export const queryCpt = `
  title
  databaseId
  date
  slug
  status
  uri
  featuredImage {
    node {
      databaseId
      sourceUrl
      srcSet(size: MEDIUM)
      altText
    }
  }
  contentType {
    node {
      name
    }
  }
`;

// Queries CPT ACF
export const queryCptAcf = {
  Blog: `
    acf {
      ${queryImage}
      ${queryWysiwyg}
    }
    pageHeader {
      ${queryHeroPost}
    }
  `,
  CaseStudy: `
    acf {
      ${queryImage}
      ${queryWysiwyg}
    }
    pageHeader {
      ${queryHeroPost}
    }
  `
}

// Get CPT Data
export const getCptData = async ({ slug, cpt }) => {
  const variables = {
    slug
  };

  // const cptLabel = config.cpt.find(({ slug }) => slug === cpt).label;
  const cptLabel = cptConfig.find(({ slug }) => slug === cpt).label;
  const cptName = `cpt${cptLabel}`;
  const querySingle = await getSingleBySlug(cptLabel);
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

// Get All Cpt Routes
export const getCptRoutes = async () => {
  // const cptNames = config.cpt.map(({ label }) => label);
  const cptNames = cptConfig.map(({ label }) => label);


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
export const getSingleBySlug = async ( cptLabel ) => {
  return gql`
    query getSingleBySlug($slug: ID!) {
      cpt${cptLabel}(id: $slug, idType: SLUG) {
        ${queryCpt}
        ${queryCptAcf[cptLabel]}
      }
    }
  `
}
