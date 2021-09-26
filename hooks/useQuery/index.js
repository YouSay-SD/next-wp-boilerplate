import useSWR from "swr";
import request from "graphql-request";

const useQuery = (query, variables = {}, options = {}) => {
  const fetcherQuery = (query, variables = {}) => {
    const variablesPar = JSON.parse(variables);
    return request(process.env.wpGraphqlUrl, query, variablesPar);
  }

  const variablesStr = JSON.stringify(variables);
  const { data, error } = useSWR([query, variablesStr], fetcherQuery, options)  

  return {
    data,
    error,
    loading: !error && !data
  }
}

export default useQuery;