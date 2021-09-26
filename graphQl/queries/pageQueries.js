import { client } from 'graphQl/client';
import uniqid from 'uniqid';
import { GET_FLEXIBLE_CONTENT } from './flexibleQuery';

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
