import React, { useEffect, useState } from 'react';
import {
  ButtonGroup,
  Card,
  CardBody,
  Grid,
  IconButton,
  Image,
  Text,
  Tag,
  HStack,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon, CloseIcon } from '@chakra-ui/icons';
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
    if (count >= maximumPurchases) {
      alert('최대 수량을 넘겨 담을 수 없습니다.');
    } else {
      dispatch({
        type: 'ADD_ITEM',
        item: {
          ...val,
        },
      });
    }
  };

  const onMinusItem = () => {
    if (count <= 1) {
      alert('최소 주문 수량은 1개 입니다.');
    } else {
      dispatch({
        type: 'DELETE_ITEM',
        item: {
          ...val,
        },
      });
    }
  };

  const allDelete = () => {
    baskets.forEach(e => e.idx === idx && dispatch({ type: 'DELETE_ITEM', item: { ...e } }));
  };

  return (
    <Card minH={'150px'} minW={'900px'} variant='outline' direction={'row'} overflow='hidden'>
      <Image src={mainImage} alt='product image' maxH={'200'} object-fit='cover' />

      <Grid templateColumns='repeat(2, 1fr)' paddingLeft={'3'} alignContent={'center'}>
        <CardBody width={'400px'}>
          <Text fontSize={'2xl'} fontWeight={'bold'} marginBottom='2'>
            {name}
          </Text>
          <HStack spacing={'4'} marginBottom='6'>
            <Tag fontWeight={'bold'} size={'md'}>
              {spaceCategory}
            </Tag>
            <Tag fontWeight={'bold'} size={'md'}>
              남은 수량: {maximumPurchases - count}
            </Tag>
          </HStack>
          <Text size='xl' fontSize={'1.5rem'} fontWeight='medium'>
            {price.toLocaleString('ko-KR')}원
          </Text>
        </CardBody>
        <ButtonGroup alignItems={'center'}>
          <IconButton
            size='lg'
            icon={<AddIcon />}
            aria-label={'Add Item'}
            marginTop={'3'}
            marginRight={'3'}
            onClick={onAddItem}
          />
          <Text fontSize={'2xl'} fontWeight={'bold'} align={'center'} marginRight='3'>
            {count}
          </Text>
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
