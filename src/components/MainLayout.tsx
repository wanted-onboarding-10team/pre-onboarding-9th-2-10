import { Box } from '@chakra-ui/react';
import NavBar from 'components/NavBar';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <Box
        maxWidth='100vw'
        minHeight='100vh'
        margin='auto'
        paddingTop={30}
        paddingBottom={100}
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        as='main'
        backgroundColor='gray.200'
      >
        {children}
      </Box>
    </>
  );
};
export default MainLayout;
