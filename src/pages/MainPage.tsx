import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import TravelProductCard from 'components/TravelProductCard';
import { useQuery } from 'react-query';
import { getTravelProducts } from 'utils/api/travelApi';
import { TravelProduct } from 'utils/type/travelProduct';
import BasicLayout from './BasicLayout';

const MainPage = () => {
  //TODO: 여행 상품 정보 받아와야 함
  const travelProductsData = useQuery<AxiosResponse<TravelProduct[]>>(
    'travelProducts',
    getTravelProducts,
  );

  return (
    <>
      {travelProductsData.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <BasicLayout>
          <>
            <Container padding={30} maxW="container.lg" centerContent>
              <Heading mb={10}>예매 상품</Heading>
              <SimpleGrid columns={4} spacing={4}>
                {travelProductsData.data?.data.map(travelproduct => (
                  <TravelProductCard key={travelproduct.idx} {...travelproduct} />
                ))}
              </SimpleGrid>
            </Container>
          </>
        </BasicLayout>
      )}
    </>
  );
};

export default MainPage;
