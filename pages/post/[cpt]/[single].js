import HeadSeo from 'components/atoms/HeadSeo/HeadSeo';
import Layout from 'components/layouts/Layout/Layout';
import SingleLayout from 'components/layouts/SingleLayout/SingleLayout';
import { cptQueries, themeSettingQueries } from 'graphQl/queries';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';

const Single = ({ cptData, slug: {cpt, single}, themeSetting }) => {
  return (
    <>
      <HeadSeo
        title={capitalizeFirstLetter(cpt)}
        single={cptData.title}
      />
      <Layout
        className={`template-single cpt-${cpt} single-${cpt}-${single}`}
        themeSetting={themeSetting}
      >
        <SingleLayout
          {...cptData} 
        />
      </Layout>
    </>
  )
}

export default Single;


// Static Props
export const getStaticProps = async ({ params: {cpt, single} }) => {
  const cptData = await cptQueries.getCptData({
    slug: single,
    cpt
  })

  // Get Theme Setting Data
  const themeSetting = await themeSettingQueries.getThemeSettingData();

  return {
    props: {
      themeSetting,
      cptData,
      slug: {
        cpt,
        single
      }
    }
  }
}

// Static Paths - Routes pre-rendering
export const getStaticPaths = async () => {
  const paths = await cptQueries.getCptRoutes();
  return {
    paths,
    fallback: false,
  }
}
