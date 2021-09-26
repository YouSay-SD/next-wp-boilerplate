import { useQuery } from 'react-query';
import { fetcher } from 'utils/fetcher';

const useFlexibleContent = ({ pageSlug, options = {} }) => {
  const getData = async () => {
    return fetcher(`${process.env.reactAppUrl}/api/page/${pageSlug}`);
  }

  const { data, isError, isLoading } = useQuery(`FLEXIBLE_CONTENT_${pageSlug.toUpperCase()}`, getData, options);

  return {
    data, 
    isError,
    isLoading
  }
}

export default useFlexibleContent;

