import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

const { components } = chakraTheme;

const theme = extendBaseTheme({
  components,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>,
);
