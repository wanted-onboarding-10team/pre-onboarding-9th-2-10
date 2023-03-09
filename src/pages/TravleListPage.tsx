import React, { useEffect, useState } from 'react';
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Grid,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import MainLayout from 'components/MainLayout';
import TravleContent from 'components/TravleContent';
import { TravleContentType } from 'types';
import { SPACE_CATEGORY } from 'constant';

const Main = () => {
  const data = useLoaderData() as TravleContentType[];
  const [range, setRange] = useState({ start: 0, end: 50000 });
  const [areaSelect, setAreaSelect] = useState<string[]>([]);
  const [filterdData, setFilterdData] = useState<TravleContentType[]>([]);

  useEffect(() => {
    setFilterdData(
      data.filter(data => {
        if (areaSelect.length === 0) {
          return data.price >= range.start && data.price <= range.end;
        } else {
          return (
            data.price >= range.start &&
            data.price <= range.end &&
            areaSelect.some(area => area === data.spaceCategory)
          );
        }
      }),
    );
  }, [range, areaSelect]);

  return (
    <MainLayout>
      <Box width={'50%'}>
        <Stack spacing={7}>
          <Box textAlign={'center'}>
            <Text fontWeight={'bold'}>사용가능 지역</Text>
          </Box>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Stack direction={['column', 'row']} spacing={5}>
              <CheckboxGroup
                colorScheme={'green'}
                onChange={(value: string[]) => setAreaSelect(value)}
              >
                {SPACE_CATEGORY.map(space => (
                  <Checkbox value={space} key={space} spacing={3}>
                    {space}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </Stack>
          </Box>
          <Box textAlign={'center'}>
            <Text fontWeight={'bold'}>가격</Text>
          </Box>
          <Box>
            <RangeSlider
              defaultValue={[0, 50000]}
              min={0}
              max={50000}
              step={5000}
              onChange={value =>
                setRange(prev => {
                  const result = { ...prev };
                  result.start = value[0];
                  result.end = value[1];
                  return result;
                })
              }
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack bg={'tomato'} />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={5} index={0}>
                <Box position={'absolute'} top='-30px'>
                  {range.start}
                </Box>
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={5} index={1}>
                <Box position={'absolute'} top='-30px'>
                  {range.end}
                </Box>
              </RangeSliderThumb>
            </RangeSlider>
          </Box>
        </Stack>
      </Box>
      <Box as='section'>
        {filterdData.length === 0 ? (
          <Box>결과가 없습니다</Box>
        ) : (
          <Grid templateColumns='repeat(2,1fr)' gap={10}>
            {filterdData.map(product => (
              <TravleContent {...product} key={product.idx} />
            ))}
          </Grid>
        )}
      </Box>
    </MainLayout>
  );
};

export default Main;
