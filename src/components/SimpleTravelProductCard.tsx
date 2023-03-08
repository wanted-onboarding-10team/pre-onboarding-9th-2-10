import { Box, Image } from '@chakra-ui/react';
import { ReservedTravelProduct } from 'utils/type/travelProduct';

const SimpleTravelProductCard = (product: ReservedTravelProduct) => {
  return (
    <Box>
      <Image src={product.mainImage} alt={product.name} maxW="50" />
      {product.name}
    </Box>
  );
};

export default SimpleTravelProductCard;
