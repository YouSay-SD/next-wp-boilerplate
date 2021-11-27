// import { moduleConfig } from "config/moduleConfig";
import { gql } from "graphql-request";
import dynamic from "next/dynamic";
import { moduleQueries } from "..";

const { queryHero, queryImageGallery, queryBlogSearcher, queryContact, queryLeftRight, queryArchive, queryBlogPicker } = moduleQueries;

export const moduleConfig = [
  {
    moduleName: 'Hero',
    moduleQuery: queryHero,
  },
  {
    moduleName: 'ImageGallery',
    moduleQuery: queryImageGallery,
  },
  {
    moduleName: 'BlogPicker',
    moduleQuery: queryBlogPicker,
  },
  {
    moduleName: 'BlogSearcher',
    moduleQuery: queryBlogSearcher,
  },
  {
    moduleName: 'Contact',
    moduleQuery: queryContact,
  },
  {
    moduleName: 'LeftRight',
    moduleQuery: queryLeftRight,
  },
  {
    moduleName: 'Archive',
    moduleQuery: queryArchive,
  }
]

export const dynamicComponents = {
  Hero: dynamic(() => import('components/general/Hero')),
  ImageGallery: dynamic(() => import('components/general/ImageGallery')),
  BlogPicker: dynamic(() => import('components/general/BlogPicker')),
  BlogSearcher: dynamic(() => import('components/general/BlogSearcher')),
  Contact: dynamic(() => import('components/general/Contact')),
  LeftRight: dynamic(() => import('components/general/LeftRight')),
  Archive: dynamic(() => import('components/general/Archive')),
};

const getFlexibleContent = gql`
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

// CPT Queries Group
const flexibleQueries = {
  getFlexibleContent
}

export default flexibleQueries;
