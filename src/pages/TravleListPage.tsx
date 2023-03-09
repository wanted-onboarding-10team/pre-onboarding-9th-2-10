import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';
import { TravleContentType } from 'types';

const Main = () => {
  const data = useLoaderData() as TravleContentType[];
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
