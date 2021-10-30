import { moduleConfig } from "config/moduleConfig";
import { gql } from "graphql-request";

export const GET_FLEXIBLE_CONTENT = gql`
  query getFlexibleContent($uri: String) {
    pageBy(uri: $uri) {
      databaseId
      uri
      slug
      title
      template {
        templateName
      }
      flexibleContent {
        flexibleContent {
          ${moduleConfig?.map(({ moduleName, moduleQuery }) => {
            return `... on Page_Flexiblecontent_FlexibleContent_${moduleName} {
                fieldGroupName
                ${moduleQuery}
              }`
            })
          }
        }
      }
    }
  }
`;