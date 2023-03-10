import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Button,
  Text,
  HStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tag,
  Heading,
  Divider,
  RangeSliderMark,
} from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';

import { useLoaderData, Link } from 'react-router-dom';
import { travleContent } from 'types';
import { CheckIcon } from '@chakra-ui/icons';
import { FilterBox, MyCustomTag } from './Styles';

enum StateSelect {
  ALL_SLELCT = '전체 선택하기',
}

const setSelectLocation = new Set();
const priceRange = [0, 0];

const Main = () => {
  const data = useLoaderData() as travleContent[];
  const [filteredData, setFilteredData] = useState(data);
  const [locationArr, setLocationArr] = useState<string[]>([]);
  const [minMaxPrice, setMinMaxPrice] = useState<number[]>([0, 0]);

  useEffect(() => {
    setLocationArr(
      data.reduce<string[]>((acc, cur) => {
        if (!acc.includes(cur.spaceCategory)) acc.push(cur.spaceCategory);
        return acc;
      }, []),
    );
  }, []);

  let min = data[0].price;
  let max = data[0].price;
  data.forEach(e => {
    if (e.price < min) min = e.price;
    else if (e.price > max) max = e.price;
  });
  priceRange[0] = min;
  priceRange[1] = max;

  useEffect(() => {
    setMinMaxPrice([min, max]);
  }, []);

  const onClick = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;
    if (element.innerHTML === StateSelect.ALL_SLELCT) {
      locationArr.forEach(e => setSelectLocation.add(e));
    } else {
      setSelectLocation.has(element.innerHTML)
        ? setSelectLocation.delete(element.innerHTML)
        : setSelectLocation.add(element.innerHTML);
    }

    const filtered = data.filter(cur => setSelectLocation.has(cur.spaceCategory));

    setFilteredData(filtered);
  };

  const onChange = (e: number[]) => {
    const [min, max] = e;
    setFilteredData(data.filter(e => e.price >= min && e.price <= max));
    setMinMaxPrice([min, max]);
  };

  return (
    <MainLayout>
      <FilterBox>
        <Heading fontSize={'2xl'} marginTop={'10px'} marginBottom={'10px'}>
          필터
        </Heading>
        <HStack spacing={4} marginBottom={'20px'}>
          {locationArr.map(e => {
            return (
              <MyCustomTag
                key={e}
                bg={setSelectLocation.has(e) ? 'gray.400' : 'gray.200'}
                onClick={e => onClick(e)}
              >
                {e}
              </MyCustomTag>
            );
          })}
          <MyCustomTag bg={'gray.200'} onClick={e => onClick(e)}>
            {StateSelect.ALL_SLELCT}
          </MyCustomTag>
        </HStack>
        <Divider />
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={[priceRange[0], priceRange[1]]}
          min={priceRange[0]}
          max={priceRange[1]}
          step={1000}
          marginTop={'20px'}
          onChange={e => onChange(e)}
        >
          <RangeSliderMark value={priceRange[0]} mt='1' ml='-2.5' fontSize='sm'>
            {priceRange[0].toLocaleString()}
          </RangeSliderMark>
          <RangeSliderMark value={priceRange[0] + priceRange[1] / 2} mt='1' ml='-2.5' fontSize='sm'>
            {(priceRange[0] + priceRange[1] / 2).toLocaleString()}
          </RangeSliderMark>
          <RangeSliderMark value={priceRange[1]} mt='1' ml='-2.5' fontSize='sm'>
            {priceRange[1].toLocaleString()}
          </RangeSliderMark>
          <RangeSliderMark
            value={minMaxPrice[0]}
            textAlign='center'
            bg='gray.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {minMaxPrice[0]}
          </RangeSliderMark>
          <RangeSliderMark
            value={minMaxPrice[1]}
            textAlign='center'
            bg='gray.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {minMaxPrice[1]}
          </RangeSliderMark>
          <RangeSliderTrack bg='gray.300'>
            <RangeSliderFilledTrack bg='gray.500' />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
        {/* <MyCustomRangeSlider onChange={e => onChange(e)} priceRange={priceRange} /> */}
        <HStack spacing='400px'></HStack>
      </FilterBox>
      <Box as='section' marginTop={'120px'}>
        <Link to='/reservations'>
          <Button marginBottom={'3'} minW={'200px'} fontSize='m'>
            <CheckIcon boxSize={'1.5rem'} marginRight={'2'} />
            <Text>장바구니</Text>
          </Button>
        </Link>
        <Grid templateColumns='repeat(2,1fr)' gap={10}>
          {filteredData.map(product => (
            <TravleContent {...product} key={product.idx} />
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Main;
