import { useQuery } from 'react-query';
import { client } from "graphQl/client";
import { GET_MENU } from 'graphQl/queries/menuQueries';

const useMenu = ({ id }) => {
  return useQuery(['MENU', id], async () => {
    const data = await client.request(GET_MENU, { id })
    return data;
  });
};

export default useMenu;
