import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { ComponentProps } from 'types';

const LayoutWrapper = ({ children }: ComponentProps) => {
  return (
    <Center>
      <Box h="100%">{children}</Box>
    </Center>
  );
};

export default LayoutWrapper;
