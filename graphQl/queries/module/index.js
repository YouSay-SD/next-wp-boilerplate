// import { queryCpt, queryCptAcf } from "./cptQueries";
// import { queryBackgroundGroup, queryButtonGroup, queryDescription, queryImage, queryMediaGroup, queryPaddingOptions, querySeoTitle, queryWysiwyg } from "./supportQueries";
// import { cptQueries, supportQueries } from "graphQl/queries";
// import cptQueries from 'graphQl/queries';

import { supportQueries } from "..";

// console.log('QUERIES', cptQueries)
const { queryBackgroundGroup, queryButtonGroup, queryDescription, queryImage, queryMediaGroup, queryPaddingOptions, querySeoTitle, queryWysiwyg } = supportQueries;
// const { queryCpt, queryCptAcf } = cptQueries;

// Module: Hero
const queryHero = `
  ${queryButtonGroup}
  ${queryBackgroundGroup}
  ${querySeoTitle}
  ${queryWysiwyg}
  prehead
  type
`;

// Module: Hero Post
const queryHeroPost = `
  ${queryButtonGroup}
  ${queryBackgroundGroup}
  ${querySeoTitle}
  ${queryWysiwyg}
`;

// Module: Image Gallery
const queryImageGallery = `
  ${querySeoTitle}
  ${queryDescription}
  gallery {
    databaseId
    sourceUrl
    srcSet(size: MEDIUM)
    altText
  }
  ${queryPaddingOptions}
`;

// Module: Blog Searcher
const queryBlogSearcher = `
  ${querySeoTitle}
  ${queryDescription}
  ${queryPaddingOptions}
`;

// Module: Contact
const queryContact = `
  ${querySeoTitle}
  ${queryWysiwyg}
  ${queryPaddingOptions}
`;

// Module: Left/Right
const queryLeftRight = `
  prehead
  contentSide
  ${querySeoTitle}
  ${queryWysiwyg}
  ${queryMediaGroup}
  ${queryButtonGroup}
  ${queryPaddingOptions}
`;

// Module: Archive
const queryArchive = `
  postTypes {
    allowFeatured
    featuredSectionLabel
    filterLabel
    postType
    viewAllLabel
  }
  search
  typeFilter
  ${queryPaddingOptions}
`;

// Module: Post Picker
// const queryBlogPicker = `
//   ${querySeoTitle}
//   ${queryDescription}
//   ${queryPaddingOptions}
//   blogPicker {
//     ... on CptBlog {
//       ${queryCpt}
//       ${queryCptAcf['Blog']}
//     }
//   }
// `;

const queryBlogPicker = `
  ${querySeoTitle}
  ${queryDescription}
  ${queryPaddingOptions}
  blogPicker {
    ... on CptBlog {
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
      acf {
        ${queryImage}
        ${queryWysiwyg}
      }
    }
  }
`;

// Module Queries {}
const moduleQueries = {
  queryHero,
  queryHeroPost,
  queryImageGallery,
  queryBlogSearcher,
  queryContact,
  queryLeftRight,
  queryArchive,
  queryBlogPicker
}

export default moduleQueries;