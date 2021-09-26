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

export const queryImage = `
  image {
    databaseId
    sourceUrl
    srcSet(size: MEDIUM)
    altText
  }
`;

export const queryTitle = `
  seoTitle {
    title
    tag
  }
`;

export const queryWysiwyg = `
  wysiwyg
`;

export const queryPaddingOptions = `
  paddingOptions {
    paddingTop
    paddingBottom
  }
`;

export const queryDescription = `
  description
`;