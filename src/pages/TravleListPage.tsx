import React from 'react';
import { Box, Grid, Button } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';

import { useLoaderData, Link } from 'react-router-dom';
import { travleContent } from 'types';

const Main = () => {
  const data = useLoaderData() as travleContent[];
  return (
    <MainLayout>
      <Box as='section'>
        <Link to='/reservations'>
          <Button marginBottom={'3'} minW={'200px'}>
            장바구니
          </Button>
        </Link>
        <Grid templateColumns='repeat(2,1fr)' gap={10}>
          {data.map(product => (
            <TravleContent {...product} key={product.idx} />
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Main;
