import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from '@chakra-ui/react';
import ProductList from 'components/ProductList';
import { ModalProductProvider } from 'contexts/ModalProductContext';

const Main = () => {
  const navigate = useNavigate();

  return (
    <ModalProductProvider>
      <Container
        w='100%'
        maxW='500px'
        minH='100vh'
        m='0 auto'
        overflowX='hidden'
        border='1px'
        borderColor='gray.200'
        pos='relative'
      >
        <ProductList />
        <Button
          border-radius='50%'
          position='fixed'
          bottom='50px'
          right='50px'
          w='50px'
          h='50px'
          colorScheme='teal'
          onClick={() => navigate('/reservations')}
        />
      </Container>
    </ModalProductProvider>
  );
};

export default Main;
