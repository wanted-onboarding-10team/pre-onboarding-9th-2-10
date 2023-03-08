import { Container, SimpleGrid, Text } from '@chakra-ui/react';
import TravelProductCard from 'components/TravelProductCard';
import { useQuery } from 'react-query';
import { getTravelProducts } from 'utils/api/travelApi';
import { TravelProduct } from 'utils/type/travelProduct';

const MainPage = () => {
  //TODO: 여행 상품 정보 받아와야 함
  const travelProductsData = useQuery<TravelProduct[]>('travelProducts', getTravelProducts);

  return (
    <>
      {travelProductsData?.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Container padding={30} maxW="lg">
            <SimpleGrid columns={6} spacing={4}>
              <TravelProductCard />
              <TravelProductCard />
              <TravelProductCard />
              <TravelProductCard />
              <TravelProductCard />
              <TravelProductCard />
            </SimpleGrid>
          </Container>
        </>
      )}
    </>
  );
};

export default MainPage;
