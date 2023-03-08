import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from 'utils/store/store';
import { TravelProduct } from 'utils/type/travelProduct';
import { formatPrice } from 'utils/utils';

const TravelProductCard = (product: TravelProduct) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const makeReservation = (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: 예약 구현
    event.stopPropagation();
    confirm(`[${product.name}] 상품을 예약하시겠습니까?`) && dispatch(add(product));
  };

  return (
    <>
      <Card onClick={onOpen}>
        <Image borderRadius="md" src={product.mainImage} alt={product.name} objectFit="cover" />
        <CardBody>
          <Text>{product.idx}번째 상품</Text>
          <Text>{product.name}</Text>
          <Text>{product.spaceCategory}</Text>
          <Text>{formatPrice(product.price)}원</Text>
        </CardBody>
        <CardFooter>
          <Button variant="solid" onClick={makeReservation}>
            예약
          </Button>
        </CardFooter>
      </Card>
      {isOpen ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent width={'full'} display="flex" flexDirection="row">
            <Image src={product.mainImage} alt={product.name} maxW={200} />
            <ModalCloseButton />
            <Container display="flex" flexDirection="column">
              <ModalHeader>{product.name}</ModalHeader>
              <ModalBody>
                <Text fontSize="sm">{product.idx}번째 상품</Text>
                <Text>사용 공간: {product.spaceCategory}</Text>
                <Text>가격: {product.price}</Text>
                <Text>상품 내용</Text>
                <Text>{product.description}</Text>
                <Text>개인이 구매할 수 있는 최대 상품 갯수</Text>
                <Text>{product.maximumPurchases}</Text>
                <Text>등록 시간</Text>
                <Text>{product.registrationDate}</Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={makeReservation}>
                  예약하기
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  닫기
                </Button>
              </ModalFooter>
            </Container>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default React.memo(TravelProductCard);
