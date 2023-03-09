import { Flex, Text } from '@chakra-ui/react';
import { useBasketState } from 'components/context/BasketProvider';
import MainLayout from 'components/MainLayout';
import ReservationsContent from 'components/ReservationsContent';
import { useEffect, useState } from 'react';
import { travleContent } from 'types';

const ReservationsPage = () => {
  const baskets = useBasketState();
  const [filterBaskets, setFilterBaskets] = useState<travleContent[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setFilterBaskets(
      baskets
        .filter((item, i) => {
          return (
            baskets.findIndex(item2 => {
              return item.idx === item2.idx;
            }) === i
          );
        })
        .sort((a, b) => a.idx - b.idx),
    );
    setTotalPrice(baskets.map(item => item.price).reduce((prev, curr) => prev + curr, 0));
  }, [baskets]);

  return (
    <MainLayout>
      {baskets.length === 0 ? (
        <>장바구니에 담은 상품이 없습니다.</>
      ) : (
        <>
          <Flex fontSize='24' width='100%' gap='10' marginBottom={'8'} justifyContent='flex-end'>
            <Text display={'block'} as='b'>
              총 결제액 수
            </Text>
            <Text display={'block'} color='red.400' as='b'>
              {totalPrice.toLocaleString('ko-KR')}원
            </Text>
          </Flex>
          {filterBaskets?.map((basket, i) => (
            <ReservationsContent {...basket} key={i} />
          ))}
        </>
      )}
    </MainLayout>
  );
};

export default ReservationsPage;
