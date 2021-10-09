import { getPageData } from 'graphQl/queries/pageQueries';
import { useQuery } from 'react-query';

const useFlexibleContent = ({ pageSlug, options = {} }) => {
  const getData = async () => {
    return getPageData({
      slug: pageSlug,
    })
  }

  const { data, isError, isLoading } = useQuery(`FLEXIBLE_CONTENT_${pageSlug.toUpperCase()}`, getData, options);
  return {
    data, 
    isError,
    isLoading
  }
}

export default useFlexibleContent;

