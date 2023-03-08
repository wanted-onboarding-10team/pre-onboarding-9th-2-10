import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from 'router';
import BarsketProvider from 'components/context/BarsketProvider';

function App() {
  return (
    <ChakraProvider>
      <BarsketProvider>
        <RouterProvider router={router} />
      </BarsketProvider>
    </ChakraProvider>
  );
}

export default App;
