import { Box, Grid } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';
import { PATH_ROUTES } from 'constant';

import { Link, useLoaderData } from 'react-router-dom';
import { travleContent } from 'types';

const Main = () => {
  const data = useLoaderData() as travleContent[];
  return (
    <MainLayout>
      <nav>
        <ul>
          <li>
            <Link to={PATH_ROUTES.main}>Home</Link>
          </li>
          <li>
            <Link to={PATH_ROUTES.shopBasket}>장바구니</Link>
          </li>
        </ul>
      </nav>
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
