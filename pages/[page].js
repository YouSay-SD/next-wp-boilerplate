import { HeadSeo } from 'components';
import { getPageData, getPageRoutes } from 'graphQl/queries/pageQueries';
// import { getThemeSettingData } from 'graphQl/queries/themeSettingQueries';
import { themeSettingQueries } from 'graphQl/queries';
import { Layout, FlexibleLayout } from 'layouts';

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
export const getStaticProps = async ({ params }) => {
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

// Static Paths - Routes pre-rendering
export const getStaticPaths = async () => {
  const paths = await getPageRoutes();
  return {
    paths,
    fallback: false,
  }
}
