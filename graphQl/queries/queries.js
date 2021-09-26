import { gql } from 'graphql-request';
import { client } from 'graphQl/client';

/***************************************************/   
/* PAGE Queries 
/***************************************************/ 

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

/***************************************************/   
/* Menu Queries
/***************************************************/ 

// Get Menu
export const GET_MENU = gql`
  query getMenu($id: ID!) {
    menu(id: $id, idType: NAME) {
      name,
      slug,
      menuItems {
        edges {
          node {
            id
            path
            label
            url
            cssClasses
            target
          }
        }
      }
    }
  }
`;

export const GET_MENUS = gql`
  query getMenus {
    menus {
      edges {
        node {
          slug
        }
      }
    }
  }
`;