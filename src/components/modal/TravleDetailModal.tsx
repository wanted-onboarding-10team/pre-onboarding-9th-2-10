import React from 'react';
import {
  Text,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Box,
} from '@chakra-ui/react';
import { TravleDetailModalProps } from 'types';
const TravleDetailModal = ({
  show,
  close,
  idx,
  name,
  mainImage,
  description,
  spaceCategory,
  price,
  maximumPurchases,
  registrationDate,
}: TravleDetailModalProps) => {
  return (
    <Modal isOpen={show} onClose={close}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={mainImage} alt='product image' htmlWidth={'100%'} />
          <Stack spacing={10}>
            <Text>{description}</Text>
            <Box>
              <Text>상품번호 : {idx}</Text>
              <Text>사용가능 지역 : {spaceCategory}</Text>
              <Text>최대구매 횟수 : {maximumPurchases}</Text>
              <Text color='gray.500'>상품 등록 시간: {registrationDate}</Text>
              <Text fontSize={'2xl'} color='blue.400'>
                {price.toLocaleString('ko-KR')}원
              </Text>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TravleDetailModal;
