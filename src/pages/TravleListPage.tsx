import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Box, Grid } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';
import { travleContent } from 'types';

const Main = () => {
  const data = useLoaderData() as travleContent[];

  return (
    <MainLayout>
      <Box as='section'>
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
