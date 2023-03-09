import React from 'react';
import { Box, Grid, Button, Text } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';

import { useLoaderData, Link } from 'react-router-dom';
import { travleContent } from 'types';
import { CheckIcon } from '@chakra-ui/icons';

const Main = () => {
  const data = useLoaderData() as travleContent[];
  return (
    <MainLayout>
      <Box as='section'>
        <Link to='/reservations'>
          <Button marginBottom={'3'} minW={'200px'} fontSize='m'>
            <CheckIcon boxSize={'1.5rem'} marginRight={'2'} />
            <Text>장바구니</Text>
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
