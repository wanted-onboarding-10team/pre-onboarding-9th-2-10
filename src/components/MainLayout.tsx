import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      maxWidth={1000}
      margin='auto'
      paddingTop={100}
      paddingBottom={100}
      display='flex'
      alignItems={'center'}
      justifyContent='center'
      flexDirection={'column'}
      as={'main'}
    >
      {children}
    </Box>
  );
};
export default MainLayout;