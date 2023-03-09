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
} from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';

import { useLoaderData, Link } from 'react-router-dom';
import { travleContent } from 'types';
import { CheckIcon } from '@chakra-ui/icons';

const setSelectLocation = new Set();

const Main = () => {
  const data = useLoaderData() as travleContent[];

  const [filteredData, setFilteredData] = useState(data);
  const [locationArr, setLocationArr] = useState<string[]>([]);

  useEffect(() => {
    setLocationArr(
      data.reduce<string[]>((acc, cur) => {
        if (!acc.includes(cur.spaceCategory)) acc.push(cur.spaceCategory);
        return acc;
      }, []),
    );
  }, []);

  const onClick = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;

    setSelectLocation.has(element.innerHTML)
      ? setSelectLocation.delete(element.innerHTML)
      : setSelectLocation.add(element.innerHTML);

    const filtered = data.filter(cur => setSelectLocation.has(cur.spaceCategory));

    setFilteredData(filtered);
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
        minH={'150px'}
        top={'20px'}
        padding={'10px 100px'}
        shadow={'3px 3px 5px #cacaca5c'}
      >
        <Heading fontSize={'2xl'} marginTop={'10px'} marginBottom={'10px'}>
          필터
        </Heading>
        <HStack spacing={4}>
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
        </HStack>
        <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30} marginTop={'20px'}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
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
