import { GET_FLEXIBLE_CONTENT } from './flexibleQuery';
import { client } from 'graphQl/client';
import { gql } from 'graphql-request';
import uniqid from 'uniqid';

// Get Page Data
export const getPageData = async ({ slug }) => {
  const variables = {
    uri: slug
  }

  // Get Page Data
  const { pageBy } = await client.request(GET_FLEXIBLE_CONTENT, variables)
  const flexibleContent = pageBy.flexibleContent.flexibleContent;

  const dataFlexible = flexibleContent?.map(currentModule => {
    const moduleTypeName = currentModule.fieldGroupName;
    const stringToReplace = `Page_Flexiblecontent_FlexibleContent_`;
    const moduleName = moduleTypeName.substr(stringToReplace.length, moduleTypeName.length);

    return {
      moduleId: uniqid(),
      moduleName,
      moduleAcf: { 
        ...currentModule 
      }
    }
  })

  return {
    pageData: {
      databaseId: pageBy.databaseId,
      uri: pageBy.uri,
      slug: pageBy.slug,
      title: pageBy.title,
      template: pageBy.template,
    },
    flexibleData: dataFlexible
  };
}

// Query: Get all page routes
export const GET_PAGE_ROUTES = gql`
  query getPageRoutes {
    pages {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

// Get All Page Routes
export const getPageRoutes = async () => {
  const data =  await client.request(GET_PAGE_ROUTES);
  const paths = data?.pages.edges.map(({ node }) => `/${node.slug}`) || []

  return paths;
}

// Get Page
export const GET_PAGE = gql`
  query getPage($uri: String) {
    pageBy(uri: $uri) {
      databaseId
      uri
      slug
      title
      template {
        templateName
      }
    }
  }
`;