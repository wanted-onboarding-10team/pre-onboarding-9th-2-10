import { Box, Flex, Text } from '@chakra-ui/react';
import { useBasketState } from 'components/context/BasketProvider';
import MainLayout from 'components/MainLayout';
import ReservationContent from 'components/ReservationContent';

const ReservationPage = () => {
  const reservationData = useBasketState();

  const totalData = reservationData.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0,
  );

  return (
    <MainLayout>
      <Box as='section'>
        <Text fontSize={'2xl'}>총 금액 : {totalData.toLocaleString('ko-KR')}원</Text>
      </Box>
      <Box as='section'>
        <Flex flexDirection={'column'} gap={10}>
          {reservationData.map(data => (
            <ReservationContent data={data} key={data.idx} />
          ))}
        </Flex>
      </Box>
    </MainLayout>
  );
};
export default ReservationPage;
