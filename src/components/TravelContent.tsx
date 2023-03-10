import React, { useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { travelContent } from 'types';
import TravelDetailModal from 'components/modal/TravelDetailModal';
import { useBasketDispatch, useBasketState } from 'components/context/BasketProvider';
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

  const addItem = () => {
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
    <GridItem>
      <Card maxW='sm' variant='outline'>
        <CardBody>
          <Image src={mainImage} alt='product image' fit='fill' htmlWidth='100%' />
          <Stack mt={6} spacing={3}>
            <Heading size='sm'>{name}</Heading>
            <Text>상품번호:{idx}</Text>
            <Text>사용가능 지역:{spaceCategory}</Text>
            <Text fontSize='2xl'>{price.toLocaleString('ko-KR')}원</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Button colorScheme='blue' size='md' onClick={addItem} isDisabled={isMaximum}>
              예약
            </Button>
            <Button colorScheme='gray' size='md' onClick={onOpen}>
              상세보기
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
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
    </GridItem>
  );
};

export default TravelContent;
