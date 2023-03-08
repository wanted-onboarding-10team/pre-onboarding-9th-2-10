import React from 'react';
import { Outlet } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryclient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryclient}>
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
