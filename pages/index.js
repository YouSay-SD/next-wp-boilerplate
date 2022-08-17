import { HeadSeo } from 'components';
import { getPageData } from 'graphQl/queries/pageQueries';
// import { getThemeSettingData } from 'graphQl/queries/themeSettingQueries';
import { themeSettingQueries } from 'graphQl/queries';
import Layout from 'components/layouts/Layout/Layout';
import FlexibleLayout from 'components/layouts/FlexibleLayout/FlexibleLayout';

const Page = ({ data, themeSetting }) => {
  const { title, slug, template:{templateName} } = data.pageData;
  return (
    <>
      {/* <HeadSeo
       title={title}
      /> */}
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
export const getStaticProps = async () => {
  const data = await getPageData({
    slug: 'home'
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