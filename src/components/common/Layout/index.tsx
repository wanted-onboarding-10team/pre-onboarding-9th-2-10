import { Flex } from '@chakra-ui/react';
import React from 'react';

interface LayoutPropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" backgroundColor="gray.200">
      {children}
    </Flex>
  );
};

export default Layout;
