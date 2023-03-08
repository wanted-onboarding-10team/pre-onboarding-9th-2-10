import axios from 'axios';
import { ProductType } from 'types/ProductType';

export const getPosts = async () => {
  const { data } = await axios.get<ProductType[]>('/data/mock_data.json');
  return data;
};
