const queryImage = `
  image {
    databaseId
    sourceUrl
    srcSet(size: MEDIUM)
    altText
  }
`;

const queryImageMobile = `
  imageMobile {
    databaseId
    sourceUrl
    srcSet(size: MEDIUM)
    altText
  }
`;

const queryLink = `
  link {
    target
    title
    url
  }
`;

const queryBackgroundColor = `
  backgroundColor {
    color
  }
`;

const queryBackgroundImage = `
  backgroundImage {
    ${queryImage}
    ${queryImageMobile}
    opacityOverlay
  }
`;

const queryBackgroundGroup = `
  backgroundGroup {
    type
    ${queryBackgroundColor}
    ${queryBackgroundImage}
  }
`;

const queryMediaGroup = `
  mediaGroup {
    mediaType
    video
    videoThumbnail {
      databaseId
      sourceUrl
      srcSet(size: MEDIUM)
      altText
    }
    ${queryImage}
  }
`;

const queryButtonGroup = `
  buttonGroup {
    alignment
    buttons {
      display
      ${queryLink}
    }
  }
`;

const querySeoTitle = `
  seoTitle {
    title
    tag
  }
`;

const queryDescription = `
  description
`;

const queryWysiwyg = `
  wysiwyg
`;

const queryPaddingOptions = `
  paddingOptions {
    paddingTop
    paddingBottom
  }
`;

const supportQueries = {
  queryImage,
  queryImageMobile,
  queryLink,
  queryBackgroundColor,
  queryBackgroundImage,
  queryBackgroundGroup,
  queryMediaGroup,
  queryButtonGroup,
  querySeoTitle,
  queryDescription,
  queryWysiwyg,
  queryPaddingOptions
}

export default supportQueries;
