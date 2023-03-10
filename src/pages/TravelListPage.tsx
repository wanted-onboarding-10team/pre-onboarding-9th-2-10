import { Box, Button, Collapse, Container, Grid, Text, useDisclosure } from '@chakra-ui/react';
import FilterContainer from 'components/FilterContainer';
import MainLayout from 'components/MainLayout';
import TravelContent from 'components/TravelContent';
import { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { FilterItems, travelContent } from 'types';

const dataPriceRange = [0, 0];

const Main = () => {
  const data = useLoaderData() as travelContent[];
  const spaceCategoryData = Array.from(
    data.reduce((arr, currData) => arr.add(currData.spaceCategory), new Set<string>()),
  );
  const { isOpen, onToggle } = useDisclosure();

  const [filterItems, setFilterItems] = useState<FilterItems>({
    price: [0, 100],
    spaceCategory: [],
  });

  // DETERMINED MIN MAX PRICE OF THE DATA
  let min = data[0].price;
  let max = data[0].price;
  data.forEach(e => {
    if (e.price < min) min = e.price;
    else if (e.price > max) max = e.price;
  });
  dataPriceRange[0] = min;
  dataPriceRange[1] = max;

  const setItems = (items: FilterItems) => {
    setFilterItems(items);
  };

  const getFilteredData = () => {
    const { price, spaceCategory } = filterItems;
    const isPriceFilter = price[0] !== 0 || price[1] !== 100;
    const isSpaceCategoryFilter = spaceCategory.length > 0;
    if (isPriceFilter && isSpaceCategoryFilter) {
      return data.filter(content => {
        const contentPrice = content.price;
        return price[0] <= contentPrice &&
          contentPrice <= price[1] &&
          spaceCategory.includes(content.spaceCategory)
          ? content
          : null;
      });
    } else if (isPriceFilter) {
      return data.filter(content => {
        const contentPrice = content.price;
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
            dataPriceRange={dataPriceRange}
          />
        </Collapse>
      </Container>
      <Box as='section' mt='5'>
        <Text>총 상품 수: {travelContentsView.length}</Text>
        <Grid templateColumns='repeat(2,1fr)' gap={10}>
          {travelContentsView.map(product => (
            <TravelContent {...product} key={product.idx} />
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Main;
