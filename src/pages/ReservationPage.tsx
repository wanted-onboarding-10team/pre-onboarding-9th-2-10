import React, { useState, useEffect } from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import ReservationContent from 'components/ReservationContent';
import { useBasketState } from '../components/context/BasketProvider';

const ReservationPage = () => {
  const baskets = useBasketState();
  const [total, setTotal] = useState<number>(0);

  if (!baskets.length) {
    return (
      <Box fontSize='lg' textAlign='center' fontWeight='bold'>
        장바구니가 비어있어요. 💨
      </Box>
    );
  }
  useEffect(() => {
    setTotal(baskets.reduce((prev, curr) => prev + curr.price, 0));
  }, [baskets]);

  return (
    <MainLayout>
      <Box as='section'>
        <Text>총 금액 {total}</Text>
        <Grid templateColumns='repeat(2,1fr)' gap={10}>
          {baskets.map(product => (
            <ReservationContent {...product} key={product.idx} />
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default ReservationPage;
