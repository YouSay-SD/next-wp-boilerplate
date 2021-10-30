import { gql } from 'graphql-request';

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