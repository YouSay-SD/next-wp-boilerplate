import { HeadSeo } from 'components';
import { getPageRoutes } from '../graphQl/queries/queries';
import { Layout, FlexibleLayout } from 'layouts';
import { getPageData } from 'graphQl/queries/pageQueries';

const Page = ({ data }) => {
  const { title, slug, template:{templateName} } = data.pageData;
  return (
    <>
      <HeadSeo
        title={title}
      />
      <Layout
        className={`template-${templateName.toLowerCase()} page-${slug}`}
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
  const data = await getPageData({
    slug: params.page
  });

  return {
    props: {
      data
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
