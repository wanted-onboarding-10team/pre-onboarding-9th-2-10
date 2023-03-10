import React, { useEffect, useState } from 'react';
import { Box, Button, Checkbox, Flex, Grid, Input } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';
import { travleContent } from 'types';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
  const mockData = useLoaderData() as travleContent[];
  const [data, setData] = useState<travleContent[]>(mockData);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(30000);

  const filter = () => {
    const priceFilterData = mockData.filter(v => v.price >= min && v.price <= max);
    if (categoryFilters.length === 0) setData(priceFilterData);
    else setData(priceFilterData.filter(v => categoryFilters.includes(v.spaceCategory)));
  };

  const handleCategoryFilterChange = (event: any) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCategoryFilters([...categoryFilters, value]);
    } else {
      setCategoryFilters(categoryFilters.filter(filter => filter !== value));
    }
  };

  const dataReset = () => {
    setMin(0);
    setMax(30000);
    setCategoryFilters([]);
  };

  useEffect(() => {
    filter();
  }, [categoryFilters]);

  return (
    <MainLayout>
      <Flex>
        <Input onChange={e => setMin(Number(e.target.value))} value={min} /> ~
        <Input onChange={e => setMax(Number(e.target.value))} value={max} />원
        <Button isDisabled={min >= max} onClick={filter} colorScheme='red'></Button>
      </Flex>

      <Flex direction='column'>
        {['서울', '강원', '부산', '대구', '제주'].map(v => (
          <div key={v}>
            <Checkbox
              value={v}
              onChange={handleCategoryFilterChange}
              isChecked={categoryFilters.includes(v)}
            />
            {v}
          </div>
        ))}
      </Flex>
      <Button onClick={dataReset}>초기화</Button>

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
