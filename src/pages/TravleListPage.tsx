import { Box, Button, Collapse, Container, Grid, Text, useDisclosure } from '@chakra-ui/react';
import FilterContainer from 'components/FilterContainer';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';
import { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { travleContent } from 'types';

export interface FilterItems {
  price: number[];
  spaceCategory: string[];
}

const Main = () => {
  const data = useLoaderData() as travleContent[];
  const spaceCategoryData = Array.from(
    data.reduce((arr, currData) => arr.add(currData.spaceCategory), new Set<string>()),
  );
  const { isOpen, onToggle } = useDisclosure();

  const [filterItems, setFilterItems] = useState<FilterItems>({
    price: [0, 100],
    spaceCategory: [],
  });

  const setItems = (items: FilterItems) => {
    setFilterItems(items);
  };

  const getFilteredData = () => {
    const { price, spaceCategory } = filterItems;
    const isPriceFilter = price[0] !== 0 && price[1] !== 100;
    const isSpaceCategoryFilter = spaceCategory.length > 0;
    if (isPriceFilter && isSpaceCategoryFilter) {
      return data.filter(content => {
        const contentPrice = content.price / 1000;
        return price[0] <= contentPrice &&
          contentPrice <= price[1] &&
          spaceCategory.includes(content.spaceCategory)
          ? content
          : null;
      });
    } else if (isPriceFilter) {
      return data.filter(content => {
        const contentPrice = content.price / 1000;
        return price[0] <= contentPrice && contentPrice <= price[1] ? content : null;
      });
    } else if (isSpaceCategoryFilter) {
      return data.filter(content =>
        spaceCategory.includes(content.spaceCategory) ? content : null,
      );
    }
    return data;
  };

  const travelContentsView = getFilteredData();

  return (
    <MainLayout>
      <Container as='section'>
        <Button onClick={onToggle}>필터</Button>
        <Collapse in={isOpen} animateOpacity>
          <FilterContainer
            defaultSpaceCategory={spaceCategoryData}
            filterItems={filterItems}
            setFilterItems={setItems}
          />
        </Collapse>
      </Container>
      <Box as='section' mt='5'>
        <Text>총 상품 수: {travelContentsView.length}</Text>
        <Grid templateColumns='repeat(2,1fr)' gap={10}>
          {travelContentsView.map(product => (
            <TravleContent {...product} key={product.idx} />
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Main;
