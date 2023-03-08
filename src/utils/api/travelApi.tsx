import axios from 'axios';
import { TravelProduct } from 'utils/type/travelProduct';

const { host, protocol } = location;

export const instance = axios.create({
  baseURL: `${protocol}//${host}/dummy/mock_data.json`,
  timeout: 1000,
});

export const getTravelProducts = async () => {
  return await instance.get<TravelProduct[]>('').then(res => res);
};
