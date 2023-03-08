import React from 'react';
import {
  Button,
  Divider,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { GoodsDetailType } from 'types/Goods';

interface GoodsDetailProps {
  isOpen: boolean;
  onClose: () => void;
  item: GoodsDetailType;
}

const GoodsDetail = ({ isOpen, onClose, item }: GoodsDetailProps) => {
  const price = item.price.toLocaleString('ko-KR');

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalBody>{item.idx}</ModalBody>
        <ModalContent maxW="1000px" height="550px" padding="40px 40px">
          <ModalBody display="flex" gap="16" width="1200px" padding="0">
            <Image src={item.mainImage} width="450px" />
            <Flex flexDir="column" width="400px">
              <Text fontSize="2xl" as="b">
                {item.name}
              </Text>
              <Divider />
              <Stack spacing="2" paddingTop="3">
                <Text fontSize="sm" as="p">
                  {item.description}
                </Text>
                <Text color="red.400" as="b">
                  {price}원
                </Text>
                <Divider />
                <Flex gap="3">
                  <Text fontSize="sm"> 사용 위치</Text>
                  <Text fontSize="sm" as="b">
                    {item.spaceCategory}
                  </Text>
                </Flex>
                <Flex gap="3">
                  <Text fontSize="sm"> 상품재고</Text>
                  <Text fontSize="sm" as="b">
                    {item.maximumPurchases}개
                  </Text>
                </Flex>
                <Flex gap="3">
                  <Text fontSize="sm">등록날짜</Text>
                  <Text fontSize="sm" as="b">
                    {item.registrationDate}
                  </Text>
                </Flex>
              </Stack>
              <Button colorScheme="blue" mr={3} onClick={onClose} marginTop="auto">
                닫기
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GoodsDetail;
