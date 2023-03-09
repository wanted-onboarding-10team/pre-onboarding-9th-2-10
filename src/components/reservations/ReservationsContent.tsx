import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useMergeRefs,
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon, MinusIcon, CloseIcon } from '@chakra-ui/icons';
import { travleContent } from 'types';
import { useBasketDispatch, useBasketState } from 'components/context/BasketProvider';

const ReservationsContent = ({
  idx,
  name,
  mainImage,
  spaceCategory,
  description,
  price,
  maximumPurchases,
  registrationDate,
}: travleContent) => {
  const baskets = useBasketState();
  const dispatch = useBasketDispatch();

  const [isMax, setIsMax] = useState(false);
  const [count, setCount] = useState<number>(0);

  const getCount = () => setCount(baskets.filter(e => e.idx === idx).length);

  const val = {
    idx,
    name,
    mainImage,
    description,
    spaceCategory,
    price,
    maximumPurchases,
    registrationDate,
  };

  useEffect(() => {
    getCount();
  }, [baskets]);

  const onAddItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      item: {
        ...val,
      },
    });
  };

  const onMinusItem = () => {
    dispatch({
      type: 'DELETE_ITEM',
      item: {
        ...val,
      },
    });
  };

  const allDelete = () => {
    baskets.forEach(e => e.idx === idx && dispatch({ type: 'DELETE_ITEM', item: { ...e } }));
  };

  return (
    <Card minH={'150px'} minW={'900px'} variant='outline' direction={'row'} overflow='hidden'>
      <Image src={mainImage} alt='product image' maxH={'200'} object-fit='cover' />

      <Grid templateColumns='repeat(2, 1fr)' paddingLeft={'3'} alignContent={'center'}>
        <CardBody width={'400px'}>
          <Heading size={'sm'} fontSize='1.5rem' marginBottom={'8'}>
            {name}
          </Heading>
          <Text fontSize='xl'>{price.toLocaleString('ko-KR')}원</Text>
        </CardBody>
        <ButtonGroup>
          <IconButton
            size='lg'
            icon={<AddIcon />}
            aria-label={'Add Item'}
            marginTop={'3'}
            marginRight={'3'}
            onClick={onAddItem}
          />
          <Text> {count}</Text>
          <IconButton
            size='lg'
            icon={<MinusIcon />}
            aria-label={'Minus Item'}
            marginTop={'3'}
            marginRight={'3'}
            onClick={onMinusItem}
          />
        </ButtonGroup>
      </Grid>
      <IconButton
        size='lg'
        background={'none'}
        icon={<CloseIcon />}
        aria-label={'Delet Item'}
        marginTop={'3'}
        marginRight={'3'}
        onClick={allDelete}
      />
    </Card>
  );
};

export default ReservationsContent;
