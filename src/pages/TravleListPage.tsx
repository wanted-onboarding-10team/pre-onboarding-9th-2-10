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
} from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';

import { useLoaderData, Link } from 'react-router-dom';
import { travleContent } from 'types';
import { CheckIcon } from '@chakra-ui/icons';

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
      <Box
        width={'725.33px'}
        zIndex={2}
        position={'fixed'}
        borderWidth='1px'
        borderRadius='lg'
        background={'white'}
        minH={'180px'}
        top={'20px'}
        padding={'10px 100px'}
        shadow={'3px 3px 5px #cacaca5c'}
      >
        <Heading fontSize={'2xl'} marginTop={'10px'} marginBottom={'10px'}>
          필터
        </Heading>
        <HStack spacing={4} marginBottom={'20px'}>
          {locationArr.map(e => {
            return (
              <Tag
                key={e}
                size={'lg'}
                variant='subtle'
                colorScheme='blackAlpha'
                bg={setSelectLocation.has(e) ? 'gray.400' : 'gray.200'}
                onClick={e => onClick(e)}
                cursor={'pointer'}
                fontWeight='black'
              >
                {e}
              </Tag>
            );
          })}
          <Tag
            size={'lg'}
            variant='subtle'
            colorScheme='blackAlpha'
            bg={'gray.200'}
            fontWeight='black'
            cursor={'pointer'}
            onClick={e => onClick(e)}
          >
            {StateSelect.ALL_SLELCT}
          </Tag>
        </HStack>
        <Divider />
        <RangeSlider
          defaultValue={[priceRange[0], priceRange[1]]}
          min={priceRange[0]}
          max={priceRange[1]}
          step={1000}
          marginTop={'20px'}
          onChange={e => onChange(e)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={10} index={0}>
            {minMaxPrice[0]}
          </RangeSliderThumb>
          <RangeSliderThumb boxSize={8} index={1}>
            {minMaxPrice[1]}
          </RangeSliderThumb>
        </RangeSlider>
        <HStack spacing='400px'>
          <Text minW={'20'}>{priceRange[0].toLocaleString() + '원'}</Text>
          <Text minW={'20'}>{priceRange[1].toLocaleString() + '원'}</Text>
        </HStack>
      </Box>
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
