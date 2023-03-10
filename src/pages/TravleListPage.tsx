import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Grid,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  Tag,
  TagLabel,
  TagLeftIcon,
  useDisclosure,
} from '@chakra-ui/react';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';
import { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { travleContent } from 'types';

const Main = () => {
  const data = useLoaderData() as travleContent[];

  const { isOpen, onToggle } = useDisclosure();
  const [sliderValue, setSliderValue] = useState([0, 100]);
  const [isFilter, setIsFilter] = useState(false);
  const isFilterPrice = sliderValue[0] !== 0 || sliderValue[1] !== 100;
  const spaceCategoryData = Array.from(
    data.reduce((arr, currData) => arr.add(currData.spaceCategory), new Set<string>()),
  );

  const [spaceCategoriesFilter, setSpaceCatoriesFilter] = useState<string[]>([]);
  const isSpaceCategoriesFilter = spaceCategoriesFilter.length === 0;
  const getFilteredData = () => {
    if (isFilter) {
      if (isFilterPrice && isSpaceCategoriesFilter) {
        return data.filter(content => {
          const price = content.price / 1000;
          return sliderValue[0] <= price &&
            price <= sliderValue[1] &&
            spaceCategoriesFilter.includes(content.spaceCategory)
            ? content
            : null;
        });
      } else if (isFilterPrice) {
        return data.filter(content => {
          const price = content.price / 1000;
          return sliderValue[0] <= price && price <= sliderValue[1] ? content : null;
        });
      } else if (isSpaceCategoriesFilter) {
        return data.filter(content =>
          spaceCategoriesFilter.includes(content.spaceCategory) ? content : null,
        );
      }
    }
    return data;
  };

  const travelContentsView = getFilteredData();

  useEffect(() => {
    if (!isFilter) {
      setSpaceCatoriesFilter([]);
      setSliderValue([0, 100]);
    }
  }, [isFilter]);

  const addCategory = (space: string) => {
    !spaceCategoriesFilter.includes(space) &&
      setSpaceCatoriesFilter([...spaceCategoriesFilter, space]);
  };

  const removeCategory = (space: string) => {
    setSpaceCatoriesFilter(spaceCategoriesFilter.filter(data => data !== space));
  };

  return (
    <MainLayout>
      <Container as='section'>
        <Button onClick={onToggle}>필터</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box padding={5}>
            <Heading fontSize={'xl'}>가격</Heading>
            <Box minH='60px' padding='10x 5px'>
              <RangeSlider
                maxW='90%'
                aria-label={['min', 'max']}
                defaultValue={sliderValue}
                onChange={val => setSliderValue(val)}
              >
                <RangeSliderMark value={0} mt='1' fontSize='sm'>
                  0
                </RangeSliderMark>
                <RangeSliderMark value={50} mt='1' fontSize='sm'>
                  50,000
                </RangeSliderMark>
                <RangeSliderMark value={100} mt='1' fontSize='sm'>
                  100,000
                </RangeSliderMark>
                <RangeSliderMark
                  value={sliderValue[0]}
                  textAlign='center'
                  color='gray.500'
                  mt='-10'
                  ml='-5'
                  w='15'
                >
                  {(sliderValue[0] * 1000).toLocaleString()}
                </RangeSliderMark>
                <RangeSliderMark
                  value={sliderValue[1]}
                  textAlign='center'
                  color='gray.500'
                  mt='-10'
                  ml='-5'
                  w='15'
                >
                  {(sliderValue[1] * 1000).toLocaleString()}
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
              {spaceCategoryData.map(space =>
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
          <Button onClick={() => setIsFilter(!isFilter)}>필터 {isFilter ? '취소' : '적용'}</Button>
        </Collapse>
      </Container>
      <Box as='section'>
        <Grid templateColumns='repeat(2,1fr)' gap={10}>
          {travelContentsView.map(product => (
            <TravleContent {...product} key={product.idx} />
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Main;
