import { HeadSeo } from 'components';
import { cptQueries, themeSettingQueries } from 'graphQl/queries';
import { Layout, SingleLayout } from 'layouts';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';

const Single = ({ cptData, slug: {cpt, single}, themeSetting }) => {
  console.log('CPT', cptData)
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
