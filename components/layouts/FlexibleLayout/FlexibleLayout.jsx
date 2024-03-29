import { useFlexibleContent } from 'hooks';
import { dynamicComponents } from 'graphQl/queries/flexibleContent';
import Section from 'components/atoms/Section/Section';
// import { dynamicComponents } from 'config/moduleConfig';

const FlexibleLayout = ({ data }) => {
  const { data: modules, isLoading } = useFlexibleContent({
    pageSlug: data.pageData.slug,
    options: {
      initialData: data
    }
  });

  return (
    <div className='flexible-layout'>
      {!isLoading && modules?.flexibleData.map(({ moduleId, moduleName, moduleAcf }) => {
        const DynamicComponent = dynamicComponents[moduleName];

        return (
          <Section
            key={moduleId}
            moduleName={moduleName} 
            paddingOptions={moduleAcf?.paddingOptions} 
          >
            <DynamicComponent
              {...moduleAcf}
            />
          </Section>
        )
      })}
    </div>
  )
}

export default FlexibleLayout;