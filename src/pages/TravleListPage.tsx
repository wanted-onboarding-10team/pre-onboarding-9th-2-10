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

const INNER_HTML = {
  ALL_SLELCT: '전체 선택하기',
} as const;

const setUserSelectLocation = new Set();
const dataPriceRange = [0, 0];

const Main = () => {
  const datas = useLoaderData() as travleContent[];

  const [filteredDatas, setFilteredData] = useState(datas);
  const [showLocationArr, setShowLocationArr] = useState<string[]>([]);
  const [userMinMaxPrice, setUserMinMaxPrice] = useState<number[]>([0, 0]);

  useEffect(() => {
    // DETERMINED SPACECATEGORY OF THE DATA
    setShowLocationArr(
      datas.reduce<string[]>((acc, cur) => {
        if (!acc.includes(cur.spaceCategory)) acc.push(cur.spaceCategory);
        return acc;
      }, []),
    );
  }, []);

  // DETERMINED MIN MAX PRICE OF THE DATA
  let min = datas[0].price;
  let max = datas[0].price;
  datas.forEach(data => {
    data.price < min ? (min = data.price) : (max = data.price);
  });
  dataPriceRange[0] = min;
  dataPriceRange[1] = max;

  useEffect(() => {
    setUserMinMaxPrice([min, max]);
  }, []);

  // FILTERING SPACECATEGORY
  const onTagClick = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;
    if (element.innerHTML === INNER_HTML.ALL_SLELCT) {
      showLocationArr.forEach(e => setUserSelectLocation.add(e));
    } else {
      setUserSelectLocation.has(element.innerHTML)
        ? setUserSelectLocation.delete(element.innerHTML)
        : setUserSelectLocation.add(element.innerHTML);
    }
    setFilteredData(datas.filter(cur => setUserSelectLocation.has(cur.spaceCategory)));
  };

  const onChange = (e: number[]) => {
    const [min, max] = e;
    setFilteredData(datas.filter(e => e.price >= min && e.price <= max));
    setUserMinMaxPrice([min, max]);
  };

  return (
    <MainLayout>
      <FilterBox>
        <Heading fontSize={'2xl'} marginTop={'10px'} marginBottom={'10px'}>
          위치 필터
        </Heading>
        <HStack spacing={4} marginBottom={'20px'}>
          {showLocationArr.map(location => {
            return (
              <MyCustomTag
                key={location}
                bg={setUserSelectLocation.has(location) ? 'gray.400' : 'gray.200'}
                onClick={location => onTagClick(location)}
              >
                {location}
              </MyCustomTag>
            );
          })}
          <MyCustomTag bg={'gray.200'} onClick={e => onTagClick(e)}>
            {INNER_HTML.ALL_SLELCT}
          </MyCustomTag>
        </HStack>
        <Divider marginBottom={'8'} />
        <Heading fontSize={'2xl'} marginTop={'10px'} marginBottom={'15px'}>
          금액 필터
        </Heading>
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={[dataPriceRange[0], dataPriceRange[1]]}
          min={dataPriceRange[0]}
          max={dataPriceRange[1]}
          step={1000}
          marginTop={'20px'}
          marginBottom={'20px'}
          onChange={e => onChange(e)}
        >
          <RangeSliderMark value={dataPriceRange[0]} mt='4' ml='-2.5' fontSize='sm'>
            {dataPriceRange[0].toLocaleString()}
          </RangeSliderMark>
          <RangeSliderMark
            value={dataPriceRange[0] + dataPriceRange[1] / 2}
            mt='4'
            ml='-9'
            fontSize='sm'
          >
            {(dataPriceRange[0] + dataPriceRange[1] / 2).toLocaleString()}
          </RangeSliderMark>
          <RangeSliderMark value={dataPriceRange[1]} mt='4' ml='-2.5' fontSize='sm'>
            {dataPriceRange[1].toLocaleString()}
          </RangeSliderMark>
          <RangeSliderMark
            value={userMinMaxPrice[0]}
            textAlign='center'
            bg='gray.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {userMinMaxPrice[0]}
          </RangeSliderMark>
          <RangeSliderMark
            value={userMinMaxPrice[1]}
            textAlign='center'
            bg='gray.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {userMinMaxPrice[1]}
          </RangeSliderMark>
          <RangeSliderTrack bg='gray.300'>
            <RangeSliderFilledTrack bg='gray.500' />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
      </FilterBox>
      <Box as='section' marginTop={'40px'}>
        <Link to='/reservations'>
          <Button marginBottom={'3'} minW={'200px'} fontSize='m'>
            <CheckIcon boxSize={'1.5rem'} marginRight={'2'} />
            <Text>장바구니</Text>
          </Button>
        </Link>
        <Grid templateColumns='repeat(2,1fr)' gap={10}>
          {filteredDatas.map(product => (
            <TravleContent {...product} key={product.idx} />
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Main;
