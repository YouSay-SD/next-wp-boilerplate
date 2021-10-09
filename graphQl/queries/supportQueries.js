export const queryImage = `
  image {
    databaseId
    sourceUrl
    srcSet(size: MEDIUM)
    altText
  }
`;

export const queryLink = `
  link {
    target
    title
    url
  }
`;

export const queryMediaGroup = `
  mediaGroup {
    mediaType
    video
    ${queryImage}
  }
`;

export const queryActionGroup = `
  actionGroup {
    alignment
    actions {
      display
      ${queryLink}
    }
  }
`;

export const querySeoTitle = `
  seoTitle {
    title
    tag
  }
`;

export const queryDescription = `
  description
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

