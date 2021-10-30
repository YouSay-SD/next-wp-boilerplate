import { gql } from "graphql-request";
import { client } from "graphQl/client";
import { queryImage } from "./supportQueries";

export const themeSettingHeaderQuery = `
  acfOptionsHeader {
    header {
      ${queryImage}
    }
  }
`

export const themeSettingQuery = gql`
  query themeSetting {
    ${themeSettingHeaderQuery}
  }
`;

// Get Page Data
export const getThemeSettingData = async () => {
  // Get Theme Setting Data
  const data = await client.request(themeSettingQuery);

  return { ...data }
}
