import { HeadSeo } from 'components';
import { getCptData, getCptRoutes } from 'graphQl/queries/cptQueries';
import { getThemeSettingData } from 'graphQl/queries/themeSettingQueries';
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
  const cptData = await getCptData({
    slug: single,
    cpt
  })

  // Get Theme Setting Data
  const themeSetting = await getThemeSettingData();

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
  const paths = await getCptRoutes();
  return {
    paths,
    fallback: false,
  }
}
