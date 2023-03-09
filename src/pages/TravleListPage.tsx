import React, { useState } from 'react';
import { Box, Button, Flex, Grid, Input } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';
import { travleContent } from 'types';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
  const mockData = useLoaderData() as travleContent[];
  const [data, setData] = useState<travleContent[]>(mockData);

  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(30000);

  const filter = () => {
    setData(mockData?.filter(v => v.price >= min && v.price <= max));
  };

  return (
    <MainLayout>
      <Flex>
        <Input onChange={e => setMin(Number(e.target.value))} /> ~
        <Input onChange={e => setMax(Number(e.target.value))} />원
        <Button isDisabled={min >= max} onClick={filter} colorScheme='red'></Button>
      </Flex>
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
