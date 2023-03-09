import React from 'react';

import { Box, Button, Card, CardBody, CardFooter, Grid, Heading, Text } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';

import { useLoaderData } from 'react-router-dom';
import { travleContent } from 'types';
import ReservationsContent from 'components/reservations/ReservationsContent';

const ReservationPage = () => {
  const data = JSON.parse(localStorage.getItem('shopping-basket') || '') as travleContent[];

  return (
    <MainLayout>
      <Grid templateColumns='1fr 400px'>
        <Box as='section'>
          <Grid templateColumns='repeat(1,1fr)' gap={10}>
            {data.map(product => (
              <ReservationsContent {...product} key={product.idx} />
            ))}
          </Grid>
        </Box>
        <Card marginLeft={'10'} maxH={'200px'} variant='outline' overflow='hidden'>
          <CardBody>
            <Heading>결제금액</Heading>
          </CardBody>
          <Button>결제하기</Button>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default ReservationPage;
