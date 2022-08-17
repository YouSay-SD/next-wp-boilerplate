import { client } from "graphQl/client";
import { gql } from "graphql-request";
import { moduleQueries, supportQueries } from "..";

const { queryWysiwyg, queryImage } = supportQueries;
const { queryHeroPost } = moduleQueries;

// console.log()
export const cptConfig = [
  {
    slug: 'blog',
    label: 'Blog'
  },
  {
    slug: 'case-study',
    label: 'CaseStudy'
  },
];

/***************************************************/   
/* Queries: CPT
/***************************************************/

// Queries
const queryCpt = `
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
const queryCptAcf = {
  Blog: `
    acf {
      ${queryImage}
      ${queryWysiwyg}
    }
  `,
  CaseStudy: `
    acf {
      ${queryImage}
      ${queryWysiwyg}
    }
  `
}

// const queryCptAcf = {
//   Blog: `
//     acf {
//       ${queryImage}
//       ${queryWysiwyg}
//     }
//     pageHeader {
//       ${queryHeroPost}
//     }
//   `,
//   CaseStudy: `
//     acf {
//       ${queryImage}
//       ${queryWysiwyg}
//     }
//     pageHeader {
//       ${queryHeroPost}
//     }
//   `
// }

// Get CPT Data
const getCptData = async ({ slug, cpt }) => {
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
const queryTaxonomies = (taxonomies) => {
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
const queryCategories = () => {
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
const queryTags = () => {
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
const getCptRoutes = async () => {
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
const getSingleBySlug = async ( cptLabel ) => {
  return gql`
    query getSingleBySlug($slug: ID!) {
      cpt${cptLabel}(id: $slug, idType: SLUG) {
        ${queryCpt}
        ${queryCptAcf[cptLabel]}
      }
    }
  `
}

// CPT Queries Group
const cptQueries = {
  getSingleBySlug,
  getCptRoutes,
  queryTags,
  queryCategories,
  queryTaxonomies,
  getCptData,
  queryCptAcf,
  queryCpt
}

export default cptQueries;
