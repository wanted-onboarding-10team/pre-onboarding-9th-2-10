import React, { ReactNode } from 'react';
import { Box, ChakraComponent, Tag, TagProps } from '@chakra-ui/react';

export const FilterBox = ({ children }: { children: ReactNode }) => {
  return (
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
      {children}
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-types
type DivComponent = ChakraComponent<'div', {}>;

export const MyCustomTag = ((props: TagProps) => (
  <Tag
    size={'lg'}
    variant='subtle'
    colorScheme='blackAlpha'
    cursor={'pointer'}
    fontWeight='black'
    {...props}
  />
)) as DivComponent;
