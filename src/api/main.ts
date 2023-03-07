import client from './client';
import { GetData } from '../types';

/* AUTH API */
export const getTravelListApi = async () => {
  const res = await client.get<any, GetData>('data/mock_data.json');
  return res;
};
