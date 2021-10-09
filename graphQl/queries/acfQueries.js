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
