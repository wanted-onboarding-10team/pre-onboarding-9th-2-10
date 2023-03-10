import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from 'router';
import BasketProvider from 'components/context/BasketProvider';

function App() {
  return (
    <ChakraProvider>
      <BasketProvider>
        <RouterProvider router={router} />
      </BasketProvider>
    </ChakraProvider>
  );
}

export default App;
