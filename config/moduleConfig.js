// import { queryArchive, queryBlogPicker, queryBlogSearcher, queryContact, queryHero, queryImageGallery, queryLeftRight } from 'graphQl/queries';
import { moduleQueries } from 'graphQl/queries';
import dynamic from 'next/dynamic';

console.log('MDAAAS2', moduleQueries)

/* 
  In this array you must set all the modules that you use in your Flexible Content

  moduleName: 'ImageGallery'
  moduleQuery: queryImageGallery
*/

// export const moduleConfig = [
//   {
//     moduleName: 'Hero',
//     moduleQuery: moduleQueries.queryHero,
//   },
//   {
//     moduleName: 'ImageGallery',
//     moduleQuery: moduleQueries.queryImageGallery,
//   },
//   {
//     moduleName: 'BlogPicker',
//     moduleQuery: moduleQueries.queryBlogPicker,
//   },
//   {
//     moduleName: 'BlogSearcher',
//     moduleQuery: moduleQueries.queryBlogSearcher,
//   },
//   {
//     moduleName: 'Contact',
//     moduleQuery: moduleQueries.queryContact,
//   },
//   {
//     moduleName: 'LeftRight',
//     moduleQuery: moduleQueries.queryLeftRight,
//   },
//   {
//     moduleName: 'Archive',
//     moduleQuery: moduleQueries.queryArchive,
//   }
// ]

// export const dynamicComponents = {
//   Hero: dynamic(() => import('components/general/Hero')),
//   ImageGallery: dynamic(() => import('components/general/ImageGallery')),
//   BlogPicker: dynamic(() => import('components/general/BlogPicker')),
//   BlogSearcher: dynamic(() => import('components/general/BlogSearcher')),
//   Contact: dynamic(() => import('components/general/Contact')),
//   LeftRight: dynamic(() => import('components/general/LeftRight')),
//   Archive: dynamic(() => import('components/general/Archive')),
// };