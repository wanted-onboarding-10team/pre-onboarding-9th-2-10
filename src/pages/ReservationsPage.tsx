import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useBasketState } from 'components/context/BasketProvider';
import MainLayout from 'components/MainLayout';
import ReservationsContent from 'components/ReservationsContent';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { travleContent } from 'types';

const ReservationsPage = () => {
  const baskets = useBasketState();
  const [filterBaskets, setFilterBaskets] = useState<travleContent[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const navigate = useNavigate();
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
    setTotalPrice(baskets.reduce((prev, curr) => prev + curr.price, 0));
  }, [baskets]);

  return (
    <MainLayout>
      {baskets.length === 0 ? (
        <Flex flexDir={'column'} gap='10'>
          <Text as='b' fontSize='24'>
            장바구니에 담은 상품이 없습니다.
          </Text>
          <Button colorScheme='red' onClick={() => navigate('/main')}>
            상품 담으러 가기
          </Button>
        </Flex>
      ) : (
        <Box width='700px'>
          <Flex fontSize='24' width='100%' gap='10' marginBottom={'8'} justifyContent='flex-end'>
            <Text display={'block'} as='b'>
              총 결제액 수
            </Text>
            <Text display={'block'} color='red.400' as='b'>
              {totalPrice.toLocaleString('ko-KR')}원
            </Text>
          </Flex>
          {filterBaskets?.map(basket => (
            <ReservationsContent {...basket} key={basket.idx} />
          ))}
        </Box>
      )}
    </MainLayout>
  );
};

export default ReservationsPage;
