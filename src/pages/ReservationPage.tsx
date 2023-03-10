import React, { useEffect, useState } from 'react';

import { Box, Button, Card, CardBody, Grid, Heading, Text } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';

import { Link } from 'react-router-dom';
import { travleContent } from 'types';
import ReservationsContent from 'components/reservations/ReservationsContent';
import { useBasketState } from 'components/context/BasketProvider';
import { ArrowBackIcon } from '@chakra-ui/icons';

const ReservationPage = () => {
  const basket = useBasketState();
  const [delDupleData, setDupleData] = useState<travleContent[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  let idxCounterArr = [] as number[];

  useEffect(() => {
    if (basket.length > 0) {
      const maxIdx = basket.sort((a, b) => a.idx - b.idx)[0].idx;
      idxCounterArr = new Array(maxIdx + 1).fill(0);
      let price = 0;

      // SUM TOTAL PRICE & COUNT ITEM
      basket.forEach(el => {
        idxCounterArr[el.idx]++;
        price += el.price;
      });
      setTotalPrice(price);

      // FILTERS DUPLICATE ITEM
      setDupleData(
        basket.reduce<travleContent[]>((arr, cur) => {
          if (!arr.find(val => val.idx === cur.idx)) arr.push(cur);
          return arr;
        }, []),
      );
    }
  }, [basket]);

  return (
    <MainLayout>
      <Grid templateColumns='1fr 400px'>
        <Box as='section'>
          <Link to='/main'>
            <Button marginBottom={'3'} minW={'200px'} fontSize='m'>
              <ArrowBackIcon boxSize={'1.5rem'} marginRight={'2'} />
              <Text>홈으로 돌아가기</Text>
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

        <Card marginLeft={'10'} maxH={'200px'} top={'52px'} variant='outline' overflow='hidden'>
          <CardBody>
            <Heading size={'md'} fontSize={'2rem'}>
              결제금액 : {totalPrice.toLocaleString('ko-KR')} 원{' '}
            </Heading>
          </CardBody>
          <Button
            bgColor={'gray.700'}
            color={'gray.100'}
            colorScheme='blackAlpha'
            minH='60px'
            fontSize={'2xl'}
          >
            결제하기
          </Button>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default ReservationPage;
