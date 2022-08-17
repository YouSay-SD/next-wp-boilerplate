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
  Hero: dynamic(() => import('components/organisms/Hero/Hero')),
  ImageGallery: dynamic(() => import('components/organisms/ImageGallery/ImageGallery')),
  BlogPicker: dynamic(() => import('components/organisms/BlogPicker/BlogPicker')),
  BlogSearcher: dynamic(() => import('components/organisms/BlogSearcher/BlogSearcher')),
  Contact: dynamic(() => import('components/organisms/Contact/Content')),
  LeftRight: dynamic(() => import('components/organisms/LeftRight/LeftRight')),
  Archive: dynamic(() => import('components/organisms/Archive/Archive')),
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
