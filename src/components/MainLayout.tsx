import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      maxWidth={'100vw'}
      minHeight={'100vh'}
      margin='auto'
      paddingTop={100}
      paddingBottom={100}
      display='flex'
      alignItems={'center'}
      justifyContent='center'
      flexDirection={'column'}
      as={'main'}
      position='relative'
    >
      {children}
    </Box>
  );
};
export default MainLayout;
