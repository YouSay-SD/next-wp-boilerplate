import { queryCpt, queryDescription, queryImage, queryPaddingOptions, queryTitle, queryWysiwyg } from "./acfQueries";
import { queryCptAcf } from "./cptQueries";

// Module: Image Gallery
export const queryImageGallery = `
  ${queryTitle}
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
  ${queryTitle}
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
  ${queryTitle}
  ${queryDescription}
  ${queryPaddingOptions}
`;

// Module: Contact
export const queryContact = `
  ${queryTitle}
  ${queryWysiwyg}
  ${queryPaddingOptions}
`;