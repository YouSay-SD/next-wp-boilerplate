import { gql } from "graphql-request";
import { queryBlogPicker, queryBlogSearcher, queryContact, queryImageGallery } from "./moduleQueries";
import dynamic from 'next/dynamic';

/***************************************************/   
/* Flexible Content Queries
/***************************************************/ 
/*
  You must set in this array all the modules that you use in your Flexible Content

  moduleName: module's name
  moduleQuery: graphql's query
  moduleAcf: 'acfPage' + template name / example: 'acfPageBlog',

  const indexFlexibleContent = {
    Blog : [
      {
        moduleName: 'ImageGallery',
        moduleQuery: queryImageGallery,
        moduleAcf: 'acfPageBlog',
      }
    ],
    Home: [
      ...
    ]
  }
*/

// export const indexFlexibleContent = {
//   Home: [
//     {
//       moduleName: 'ImageGallery',
//       moduleQuery: queryImageGallery,
//       moduleAcf: 'acfPageHome',
//     },
//     {
//       moduleName: 'BlogPicker',
//       moduleQuery: queryBlogPicker,
//       moduleAcf: 'acfPageHome',
//     },
//     {
//       moduleName: 'BlogSearcher',
//       moduleQuery: queryBlogSearcher,
//       moduleAcf: 'acfPageHome',
//     }
//   ],
//   Blog: [
//     {
//       moduleName: 'ImageGallery',
//       moduleQuery: queryImageGallery,
//       moduleAcf: 'acfPageBlog',
//     },
//     {
//       moduleName: 'BlogPicker',
//       moduleQuery: queryBlogPicker,
//       moduleAcf: 'acfPageBlog',
//     },
//     {
//       moduleName: 'BlogSearcher',
//       moduleQuery: queryBlogSearcher,
//       moduleAcf: 'acfPageBlog',
//     },
//   ],
//   Flexible: [
//     {
//       moduleName: 'ImageGallery',
//       moduleQuery: queryImageGallery,
//       moduleAcf: 'acfPageFlexible',
//     },
//     {
//       moduleName: 'BlogPicker',
//       moduleQuery: queryBlogPicker,
//       moduleAcf: 'acfPageFlexible',
//     },
//   ] ,
//   Contact: [
//     {
//       moduleName: 'Contact',
//       moduleQuery: queryContact,
//       moduleAcf: 'acfPageContact',
//     }
//   ]
// }

export const indexFlexibleContent = [
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
  }
]

export const dynamicComponents = {
  ImageGallery: dynamic(() => import('components/general/ImageGallery')),
  BlogPicker: dynamic(() => import('components/general/BlogPicker')),
  BlogSearcher: dynamic(() => import('components/general/BlogSearcher')),
  Contact: dynamic(() => import('components/general/Contact')),
};

// export const queryFlexibleContent = async (templateName) => {
//   return gql`
//     query getFlexibleContent($uri: String) {
//       pageBy(uri: $uri) {
//         databaseId
//         uri
//         slug
//         title
//         template {
//           templateName
//         }
//         flexibleContent {
//           flexibleContent {
//             ${
//               indexFlexibleContent?.map(({ moduleName, moduleQuery }) => {
//               return `... on Page_Flexiblecontent_FlexibleContent_${moduleName} {
//                   fieldGroupName
//                   ${moduleQuery}
//                 }`
//               })
//             }
//           }
//         }
//       }
//     }
//   `
// }


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
          ${
            indexFlexibleContent?.map(({ moduleName, moduleQuery }) => {
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