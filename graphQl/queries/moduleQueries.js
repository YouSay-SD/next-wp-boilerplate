import { queryCpt } from "./acfQueries";
import { queryCptAcf } from "./cptQueries";
import { querySeoTitle, queryDescription, queryWysiwyg, queryPaddingOptions, queryMediaGroup, queryActionGroup } from "./supportQueries";

// Module: Image Gallery
export const queryImageGallery = `
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

// Module: Post Picker
export const queryBlogPicker = `
  ${querySeoTitle}
  ${queryDescription}
  ${queryPaddingOptions}
  blogPicker {
    ... on CptBlog {
      ${queryCpt}
      ${queryCptAcf['Blog']}
    }
  }
`;

// Module: Blog Searcher
export const queryBlogSearcher = `
  ${querySeoTitle}
  ${queryDescription}
  ${queryPaddingOptions}
`;

// Module: Contact
export const queryContact = `
  ${querySeoTitle}
  ${queryWysiwyg}
  ${queryPaddingOptions}
`;

// Module: Left/Right
export const queryLeftRight = `
  prehead
  contentSide
  ${querySeoTitle}
  ${queryWysiwyg}
  ${queryMediaGroup}
  ${queryActionGroup}
  ${queryPaddingOptions}
`;