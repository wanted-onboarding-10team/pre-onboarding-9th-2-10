import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  Spacer,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FilterItems } from 'types';

interface FilterContainerParam {
  defaultSpaceCategory: string[];
  filterItems: FilterItems;
  setFilterItems: (items: FilterItems) => void;
  dataPriceRange: number[];
}

const FilterContainer = ({
  defaultSpaceCategory,
  filterItems,
  setFilterItems,
  dataPriceRange,
}: FilterContainerParam) => {
  const [priceRange, setPriceRange] = useState(dataPriceRange);
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
      price: priceRange,
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
            value={[priceRange[0], priceRange[1]]}
            min={dataPriceRange[0]}
            max={dataPriceRange[1]}
            onChange={val => setPriceRange(val)}
            mt={10}
            step={1000}
          >
            <RangeSliderMark
              value={priceRange[0]}
              textAlign='center'
              color='gray.500'
              mt='-10'
              w='15'
              fontSize='sm'
            >
              {Number.isNaN(priceRange[0]) ? 0 : priceRange[0].toLocaleString()} 원
            </RangeSliderMark>
            <RangeSliderMark
              value={priceRange[1]}
              textAlign='center'
              color='gray.500'
              mt='-10'
              w='20'
              fontSize='sm'
            >
              {Number.isNaN(priceRange[1]) ? 0 : priceRange[1].toLocaleString()} 원
            </RangeSliderMark>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
          </RangeSlider>
        </Box>
        <Flex>
          <Input
            minW='100px'
            maxW='100px'
            marginRight='60'
            value={priceRange[0]}
            type='number'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPriceRange(prev => {
                const result = [...prev];
                const {
                  target: { value },
                } = event;
                const price = parseInt(value);
                if (price <= 0 || price >= dataPriceRange[1]) {
                  result[0] = dataPriceRange[0];
                } else result[0] = price;
                return result;
              })
            }
          />
          <Spacer />
          <Input
            minW='100px'
            value={priceRange[1]}
            type='number'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPriceRange(prev => {
                const result = [...prev];
                const {
                  target: { value },
                } = event;
                const price = parseInt(value);
                if (price <= 0 || price >= dataPriceRange[1]) {
                  result[1] = dataPriceRange[1];
                } else result[1] = price;
                return result;
              })
            }
          />
        </Flex>
      </Box>

      <Divider />
      <Box padding={5} display='flex' flexDirection='column'>
        <Heading fontSize='xl'>장소</Heading>
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
      <Box display='flex' justifyContent='space-around'>
        <Button onClick={applyFilterItems}>필터 적용</Button>
        <Button onClick={resetFilterItems}>필터 취소</Button>
      </Box>
    </Box>
  );
};

export default FilterContainer;
