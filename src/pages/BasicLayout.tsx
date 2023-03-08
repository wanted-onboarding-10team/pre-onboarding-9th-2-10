import { Box, Grid, GridItem } from '@chakra-ui/react';
import ReservedTravelProductList from 'components/presenter/ReservedTravelProductList';

interface BasicLayoutParams {
  children: React.ReactElement;
}

const BasicLayout = ({ children }: BasicLayoutParams) => {
  return (
    <Grid
      templateAreas={`"header header"
                    "main nav"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'4fr 1fr'}
      gap="1"
      bg="gray.100"
    >
      <GridItem area={'header'}></GridItem>
      <GridItem area={'main'}>{children}</GridItem>
      <GridItem area={'nav'}>
        <Box bgColor="white">
          <ReservedTravelProductList />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default BasicLayout;
