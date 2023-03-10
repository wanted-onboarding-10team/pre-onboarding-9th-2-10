import { getTravelListApi } from 'utils/api/travel';

const mainLoader = async () => {
  const { data } = await getTravelListApi();
  return data;
};
export default mainLoader;
