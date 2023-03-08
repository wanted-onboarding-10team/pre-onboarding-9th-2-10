import axios from 'axios';
import { GoodsType } from 'types/Goods';

export const getGoodsAPI = async () => {
  try {
    const { data } = await axios.get<GoodsType[]>('/data/mock_data.json');
    return data;
  } catch (e) {
    console.error(e);
  }
};
