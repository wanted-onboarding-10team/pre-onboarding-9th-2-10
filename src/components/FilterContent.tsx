import React, { useState } from 'react';
import {
  Box,
  Tag,
  HStack,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';

import { travleContent } from './../types/index.d';

interface FilterContentProps {
  data: travleContent[];
  locationArr: string[];
  onClick: (e: React.MouseEvent) => void;
}

const FilterContent = ({ onClick, locationArr }: FilterContentProps) => {
  return (
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
    >
      <Text>지역</Text>
      <HStack spacing={4}>
        {locationArr.map(e => {
          return (
            <Tag
              key={e}
              size={'lg'}
              variant='subtle'
              colorScheme='cyan'
              onClick={e => onClick(e)}
              cursor={'pointer'}
            >
              {e}
            </Tag>
          );
        })}
      </HStack>
      <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0} />
        <RangeSliderThumb boxSize={6} index={1} />
      </RangeSlider>
      <Text>hi</Text>
    </Box>
  );
};

export default FilterContent;
