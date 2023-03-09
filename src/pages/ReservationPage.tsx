import React, { useEffect, useState } from 'react';

import { Box, Button, Card, CardBody, CardFooter, Grid, Heading, Text } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';

import { Link, Navigate, useLoaderData } from 'react-router-dom';
import { travleContent } from 'types';
import ReservationsContent from 'components/reservations/ReservationsContent';
import { useBasketState } from 'components/context/BasketProvider';

// const basket = getData ? (JSON.parse(getData || '') as travleContent[]) : null;

const ReservationPage = () => {
  const basket = useBasketState();
  const [delDupleData, setDupleData] = useState<travleContent[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  let idxCounterArr = [] as number[];

  useEffect(() => {
    // SUM TOTAL PRICE & COUNT ITEM
    if (basket.length > 0) {
      const maxIdx = basket.sort((a, b) => a.idx - b.idx)[0].idx;
      idxCounterArr = new Array(maxIdx + 1).fill(0);

      let price = 0;
      basket.forEach(el => {
        idxCounterArr[el.idx]++;
        price += el.price;
      });
      setTotalPrice(price);

      const delDupleDataArr = [] as travleContent[];
      basket.forEach(el => {
        if (!delDupleDataArr.find(val => val.idx === el.idx)) delDupleDataArr.push(el);
      });
      setDupleData(delDupleDataArr);
    }
  }, [basket]);

  return (
    <MainLayout>
      <Grid templateColumns='1fr 400px'>
        <Box as='section'>
          <Link to='/main'>
            <Button marginBottom={'3'} minW={'200px'}>
              홈으로 돌아가기
            </Button>
          </Link>
          <Grid templateColumns='repeat(1,1fr)' gap={10}>
            {basket.length === 0 ? (
              <div>데이터가 없습니다</div>
            ) : (
              delDupleData.map(product => {
                return <ReservationsContent {...product} key={product.idx} />;
              })
            )}
          </Grid>
        </Box>
        <Card marginLeft={'10'} maxH={'200px'} variant='outline' overflow='hidden'>
          <CardBody>
            <Heading size={'md'} fontSize={'2rem'}>
              결제금액 : {totalPrice.toLocaleString('ko-KR')} 원{' '}
            </Heading>
          </CardBody>
          <Button>결제하기</Button>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default ReservationPage;
