import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FilterItems } from 'types';

interface FilterContainerParam {
  defaultSpaceCategory: string[];
  filterItems: FilterItems;
  setFilterItems: (items: FilterItems) => void;
}

const FilterContainer = ({
  defaultSpaceCategory,
  filterItems,
  setFilterItems,
}: FilterContainerParam) => {
  const [sliderValue, setSliderValue] = useState(filterItems.price);
  const [spaceCategoriesFilter, setSpaceCatoriesFilter] = useState<string[]>(
    filterItems.spaceCategory,
  );

  const addCategory = (space: string) => {
    !spaceCategoriesFilter.includes(space) &&
      setSpaceCatoriesFilter([...spaceCategoriesFilter, space]);
  };

  const removeCategory = (space: string) => {
    setSpaceCatoriesFilter(spaceCategoriesFilter.filter(data => data !== space));
  };

  const applyFilterItems = () => {
    setFilterItems({
      price: sliderValue,
      spaceCategory: spaceCategoriesFilter,
    });
  };

  const resetFilterItems = () => {
    setFilterItems({
      price: [0, 100],
      spaceCategory: [],
    });
  };

  return (
    <Box borderWidth='1px' mt={1} p={3} borderRadius='lg'>
      <Box padding={5}>
        <Heading fontSize={'xl'}>가격</Heading>
        <Box minH='60px' padding='10x 5px'>
          <RangeSlider
            maxW='90%'
            aria-label={['min', 'max']}
            defaultValue={sliderValue}
            onChange={val => setSliderValue(val)}
            mt={10}
          >
            <RangeSliderMark value={0} mt='1' fontSize='sm'>
              0 원
            </RangeSliderMark>
            <RangeSliderMark value={50} mt='1' fontSize='sm'>
              50,000 원
            </RangeSliderMark>
            <RangeSliderMark value={100} mt='1' fontSize='sm' w='20'>
              100,000 원
            </RangeSliderMark>
            <RangeSliderMark
              value={sliderValue[0]}
              textAlign='center'
              color='gray.500'
              mt='-10'
              w='15'
              fontSize={'sm'}
            >
              {(sliderValue[0] * 1000).toLocaleString()} 원
            </RangeSliderMark>
            <RangeSliderMark
              value={sliderValue[1]}
              textAlign='center'
              color='gray.500'
              mt='-10'
              w='20'
              fontSize={'sm'}
            >
              {(sliderValue[1] * 1000).toLocaleString()} 원
            </RangeSliderMark>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
          </RangeSlider>
        </Box>
      </Box>
      <Divider />
      <Box padding={5} display='flex' flexDirection='column'>
        <Heading fontSize={'xl'}>장소</Heading>
        <Box display='flex' gap={3} padding='10px 5px'>
          {defaultSpaceCategory.map(space =>
            spaceCategoriesFilter.includes(space) ? null : (
              <Tag
                size='md'
                variant='subtle'
                colorScheme='cyan'
                key={space}
                onClick={() => addCategory(space)}
              >
                <TagLeftIcon boxSize='12px' as={AddIcon} />
                <TagLabel>{space}</TagLabel>
              </Tag>
            ),
          )}
        </Box>
        <Divider />
        <Box display='flex' gap={3} padding='10px 5px'>
          {spaceCategoriesFilter.map(space => (
            <Tag
              size='md'
              variant='subtle'
              colorScheme='teal'
              key={space}
              onClick={() => removeCategory(space)}
            >
              <TagLeftIcon boxSize='12px' as={MinusIcon} />
              <TagLabel>{space}</TagLabel>
            </Tag>
          ))}
        </Box>
      </Box>
      <Box display='flex' justifyContent={'space-around'}>
        <Button onClick={applyFilterItems}>필터 적용</Button>
        <Button onClick={resetFilterItems}>필터 취소</Button>
      </Box>
    </Box>
  );
};

export default FilterContainer;
