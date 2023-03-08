import axios from 'axios';
import { Box, Grid } from '@chakra-ui/react';
import Goods from 'components/Goods';
import React, { useEffect, useState } from 'react';
import { GoodsType } from 'types/Goods';
import Layout from 'components/common/Layout';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [goodsList, setGoodsList] = useState<GoodsType[]>();

  const getData = async () => {
    const { data } = await axios.get<GoodsType[]>('/data/mock_data.json');
    setGoodsList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div>
        <Grid templateColumns="repeat(4, 1fr)" gap={12}>
          {goodsList?.map(item => (
            <Goods item={item} key={item.idx} />
          ))}
        </Grid>
        <div onClick={() => navigate('/reservations')}>장바구니</div>
        <Box position="absolute">{/* <I.ShoppingBasket /> */}</Box>
      </div>
    </Layout>
  );
};

export default MainPage;
