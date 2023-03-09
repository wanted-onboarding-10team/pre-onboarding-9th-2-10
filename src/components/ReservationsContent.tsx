import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { travleContent } from 'types';
import { useBasketState, useBasketDispatch } from './context/BasketProvider';
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
  const baskets = useBasketState();
  const [count, setCount] = useState<number>(0);
  const dispatch = useBasketDispatch();
  const [isMaximum, setIsMaximum] = useState(false);

  const getCount = () => {
    setCount(baskets.filter(v => v.idx === idx).length);
  };

  useEffect(() => {
    if (baskets.filter(v => v.idx === idx).length >= maximumPurchases) setIsMaximum(true);
    else setIsMaximum(false);

    getCount();
  }, [baskets]);

  useEffect(() => {
    if (count === 0) getCount();
  }, [count]);

  const deleteItem = () => {
    dispatch({
      type: 'DELETE_ITEM',
      item: {
        idx,
        name,
        mainImage,
        description,
        spaceCategory,
        price,
        maximumPurchases,
        registrationDate,
      },
    });
  };

  const addItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      item: {
        idx,
        name,
        mainImage,
        description,
        spaceCategory,
        price,
        maximumPurchases,
        registrationDate,
      },
    });
  };

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      width='100%'
      height={'250px'}
      marginBottom='10'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={mainImage}
        alt='Caffe Latte'
      />

      <Text
        fontSize='20'
        textShadow='0px 2px 4px rgb(0 0 0 / 50%)'
        color='white'
        position='absolute'
        as='b'
        left='10px'
        top='10px'
      >
        {idx}
      </Text>
      <CardBody>
        <Heading size='md'>{name}</Heading>
        <Divider />
        <Stack spacing='2' paddingTop='3'>
          <Text fontSize='sm' as='p'>
            {description}
          </Text>
          <Text color='red.400' as='b'>
            {price.toLocaleString('ko-KR')}원
          </Text>
          <Divider />
          <Flex gap='3'>
            <Text fontSize='sm'> 사용 위치</Text>
            <Text fontSize='sm' as='b'>
              {spaceCategory}
            </Text>
          </Flex>
          <Flex gap='3'>
            <Text fontSize='sm'> 상품재고</Text>
            <Text fontSize='sm' as='b'>
              {maximumPurchases}개
            </Text>
          </Flex>
          <Flex gap='3'>
            <Text fontSize='sm'>등록날짜</Text>
            <Text fontSize='sm' as='b'>
              {registrationDate}
            </Text>
          </Flex>
        </Stack>
      </CardBody>

      <CardFooter display='flex' flexDir='column' justifyContent='space-between' width='150px'>
        <Flex gap='3' flexDir='column'>
          <Text fontSize='sm' as='b'>
            수량
          </Text>
          <Flex display='flex' justifyContent='space-between' align='center'>
            <Button variant='solid' onClick={deleteItem}>
              -
            </Button>
            <Text fontSize='sm' as='b'>
              {count}개
            </Text>
            <Button variant='solid' onClick={addItem} isDisabled={isMaximum}>
              +
            </Button>
          </Flex>
        </Flex>
        <Flex gap='1' flexDir='column'>
          <Text fontSize='sm' as='b'>
            상품금액
          </Text>
          <Text as='b' color='red.400'>
            {(count * price).toLocaleString('ko-KR')}원
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default ReservationsContent;
