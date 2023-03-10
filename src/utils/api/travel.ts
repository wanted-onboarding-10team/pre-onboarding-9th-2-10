import client from 'utils/api/client';

export const getTravelListApi = async () => {
  return await client.get(`/data/mock_data.json`);
};
