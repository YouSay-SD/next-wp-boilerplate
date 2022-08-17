import { getPageData } from 'graphQl/queries/pageQueries';
import { themeSettingQueries } from 'graphQl/queries';
import Layout from 'components/layouts/Layout/Layout';
import HeadSeo from 'components/atoms/HeadSeo/HeadSeo';
import FlexibleLayout from 'components/layouts/FlexibleLayout/FlexibleLayout';

const Page = ({ data, themeSetting }) => {
  const { title, slug, template:{templateName} } = data.pageData;
  return (
    <>
      <HeadSeo
        title={title}
      />
      <Layout
        className={`template-${templateName.toLowerCase()} page-${slug}`}
        themeSetting={themeSetting}
      >
        <FlexibleLayout
          data={data}
        />
      </Layout>
    </>
  )
}

export default Page;


// Static Props
export const getServerSideProps = async ({ params }) => {
  // Get Page Data
  const data = await getPageData({
    slug: params.page
  });

  // Get Theme Setting Data
  const themeSetting = await themeSettingQueries.getThemeSettingData();
  
  return {
    props: {
      data,
      themeSetting
    }
  }
}
