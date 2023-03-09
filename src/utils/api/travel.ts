import client from 'utils/api/client';

const { host, protocol } = location;

export const getTravelListApi = async () => {
  return await client.get(`${protocol}//${host}/data/mock_data.json`);
};
