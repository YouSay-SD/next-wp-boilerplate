import { gql } from "graphql-request";
import { client } from "graphQl/client";
import { supportQueries } from "graphQl/queries";

const { queryImage } = supportQueries;

const themeSettingHeaderQuery = `
  acfOptionsHeader {
    header {
      ${queryImage}
    }
  }
`

const themeSettingQuery = gql`
  query themeSetting {
    ${themeSettingHeaderQuery}
  }
`;

// Get Page Data
const getThemeSettingData = async () => {
  // Get Theme Setting Data
  const data = await client.request(themeSettingQuery);

  return { ...data }
}

const themeSettingQueries = {
  getThemeSettingData,
}

export default themeSettingQueries;