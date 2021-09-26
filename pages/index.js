import { HeadSeo } from 'components';
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
export const getStaticProps = async () => {
  const data = await getPageData({
    slug: 'home'
  });

  return {
    props: {
      data
    }
  }
}