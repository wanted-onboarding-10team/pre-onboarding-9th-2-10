import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { travelContent } from 'types';
import TravelDetailModal from 'components/modal/TravelDetailModal';
import { useBasketDispatch, useBasketState } from './context/BasketProvider';
import { ActionType } from 'types/enum';

const TravelContent = ({
  idx,
  name,
  mainImage,
  description,
  spaceCategory,
  price,
  maximumPurchases,
  registrationDate,
}: travelContent) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useBasketDispatch();
  const basket = useBasketState();
  const [isMaximum, setIsMaximum] = useState(false);

  useEffect(() => {
    if (basket.filter(product => product.idx === idx).length >= maximumPurchases)
      setIsMaximum(true);
    else setIsMaximum(false);
  }, [basket]);

  const addItem = (e: any) => {
    e.stopPropagation();
    if (basket.findIndex(product => product.idx === idx) !== -1) {
      return alert('이미 장바구니에 담겨있습니다');
    }
    dispatch({
      type: ActionType.ADD_ITEM,
      item: {
        idx,
        name,
        mainImage,
        price,
        maximumPurchases,
        count: 1,
      },
    });
    alert('예약에 성공하였습니다');
  };

  return (
    <Card align='center'>
      <CardBody onClick={onOpen} cursor='pointer' position='relative'>
        <Text
          position='absolute'
          fontSize='2xl'
          margin='2'
          color='white'
          textShadow='0px 2px 4px rgb(0 0 0 / 50%);'
          as='b'
        >
          {idx}
        </Text>
        <Image src={mainImage} alt={name} borderRadius='lg' width='100%' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Flex justifyContent='space-between'>
            <Text fontSize='16' display='inline-block' color='gray'>
              {spaceCategory}
            </Text>
            <Text fontSize='16' display='inline-block' color='red.400'>
              {price.toLocaleString('ko-KR')}원
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme='blue' size='md' onClick={addItem} isDisabled={isMaximum}>
          예약
        </Button>
      </CardBody>

      <TravelDetailModal
        show={isOpen}
        close={onClose}
        idx={idx}
        name={name}
        mainImage={mainImage}
        price={price}
        spaceCategory={spaceCategory}
        maximumPurchases={maximumPurchases}
        registrationDate={registrationDate}
        description={description}
      />
    </Card>
  );
};

export default TravelContent;
