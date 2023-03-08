import { Container, Heading, StackDivider, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from 'utils/store/store';
import SimpleTravelProductCard from './SimpleTravelProductCard';

const ReservedTravelProductList = () => {
  const ReservedTravelProducts = useSelector((state: RootState) => state.reservation);

  return (
    <Container padding={0}>
      <Heading size="md">현재 예약한 상품</Heading>
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
        {ReservedTravelProducts.map(product => (
          <SimpleTravelProductCard key={product.idx} {...product} />
        ))}
      </VStack>
    </Container>
  );
};

export default ReservedTravelProductList;
