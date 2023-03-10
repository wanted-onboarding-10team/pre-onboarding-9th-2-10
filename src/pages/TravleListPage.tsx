import React, { useState, useCallback, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Box, Grid, CheckboxGroup, Stack, Text, Checkbox } from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';
import { travleContent } from 'types';

const PRICES_LIST = [
  { id: 0, data: '0 ~ 1000' },
  { id: 1, data: '1500 ~ 3000' },
  { id: 2, data: '10000 ~ 15000' },
  { id: 3, data: '20000 ~ 25000' },
  { id: 4, data: '30000 ~ 35000' },
];

const PIACES_LIST = [
  { id: 0, data: '서울' },
  { id: 1, data: '부산' },
  { id: 2, data: '강원' },
  { id: 3, data: '대구' },
  { id: 4, data: '제주' },
];

const Main = () => {
  const data = useLoaderData() as travleContent[];
  const [filterData, setFilterDate] = useState(data);
  const [cateObject, setCateObject] = useState<Array<string>>([]);

  const onCheckedItem = useCallback(
    (checked: boolean, item: string) => {
      if (checked) {
        setCateObject(prev => [...prev, item]);
      } else if (!checked) {
        setCateObject(cateObject.filter((el: string) => el !== item));
      }
    },
    [cateObject],
  );

  const onFilterItem = () => {
    setFilterDate(
      data.filter(i => {
        return cateObject.some(
          (el: string) => el === i.spaceCategory || el.includes(String(i.price)),
        );
      }),
    );
  };

  useEffect(() => {
    if (cateObject.length !== 0) onFilterItem();
  }, [cateObject]);

  return (
    <MainLayout>
      <Box as='section'>
        <Box border='1px' borderColor='gray.200' mb='20px'>
          <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
            <Stack
              spacing={[1, 5]}
              direction={['column', 'row']}
              p='20px'
              borderBottom='1px'
              borderColor='gray.200'
            >
              <Text borderRight='1px' borderColor='gray.200' fontWeight='700'>
                가격
              </Text>
              {PRICES_LIST.map(item => (
                <Checkbox
                  value={item.data}
                  key={item.id}
                  onChange={e => {
                    onCheckedItem(e.target.checked, e.target.value);
                  }}
                >
                  {item.data}
                </Checkbox>
              ))}
            </Stack>
            <Stack spacing={[1, 5]} direction={['column', 'row']} p='20px'>
              <Text borderRight='1px' borderColor='gray.200' fontWeight='700'>
                지역
              </Text>
              {PIACES_LIST.map(item => (
                <Checkbox
                  value={item.data}
                  key={item.id}
                  onChange={e => {
                    onCheckedItem(e.target.checked, e.target.value);
                  }}
                >
                  {item.data}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </Box>
        <Grid templateColumns='repeat(2,1fr)' gap={10}>
          {cateObject.length !== 0
            ? filterData.map(product => <TravleContent {...product} key={product.idx} />)
            : data.map(product => <TravleContent {...product} key={product.idx} />)}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Main;
