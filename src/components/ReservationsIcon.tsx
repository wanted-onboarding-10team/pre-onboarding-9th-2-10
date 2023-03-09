import { Box, IconButton, Text } from '@chakra-ui/react';
import ShoppingBasket from 'assets/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import { useBasketState } from './context/BasketProvider';

const ReservationsIcon = () => {
  const baskets = useBasketState();
  const navigate = useNavigate();
  return (
    <Box
      position='fixed'
      top='90%'
      left='90%'
      zIndex={'5'}
      onClick={() => navigate('/reservations')}
    >
      <IconButton
        aria-label='shoppingbasket'
        icon={<ShoppingBasket />}
        width='50px'
        height='50px'
      ></IconButton>
      <Text
        position='absolute'
        top='6'
        left='8'
        backgroundColor='red.400'
        color='white'
        width='30px'
        height='30px'
        lineHeight='30px'
        textAlign='center'
        borderRadius='50%'
        fontSize='12px'
      >
        {baskets.length}
      </Text>
    </Box>
  );
};

export default ReservationsIcon;
