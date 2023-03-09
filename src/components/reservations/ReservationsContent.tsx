import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon, MinusIcon } from '@chakra-ui/icons';
import { travleContent } from 'types';

const ReservationsContent = ({
  idx,
  name,
  mainImage,
  description,
  spaceCategory,
  price,
  maximumPurchases,
  registrationDate,
}: travleContent) => {
  return (
    <Card minH={'150px'} minW={'900px'} variant='outline' direction={'row'} overflow='hidden'>
      <Image
        src={'https://picsum.photos/id/17/300/300'}
        alt='product image'
        maxH={'200'}
        object-fit='cover'
      />

      <Grid templateColumns='repeat(2, 1fr)' paddingLeft={'3'} alignContent={'center'}>
        <CardBody width={'400px'}>
          <Heading size={'sm'} fontSize='1.5rem' marginBottom={'8'}>
            {name}
          </Heading>
          <Text fontSize='xl'>{price.toLocaleString('ko-KR')}원</Text>
        </CardBody>

        <Center minW={'200px'} marginRight={'1'}>
          <IconButton
            size='lg'
            colorScheme={'gray'}
            icon={<AddIcon />}
            aria-label={'Add Purchases'}
            marginRight={'3'}
          />
          <Text fontSize='xl'>개수</Text>
          <IconButton
            size='lg'
            colorScheme={'gray'}
            icon={<MinusIcon />}
            aria-label={'Minus Purchases'}
            marginLeft={'3'}
          />
        </Center>
      </Grid>
    </Card>
  );
};

export default ReservationsContent;
