import React from 'react';
import { travelContent } from 'types';
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

interface TravelDetailModalProps extends travelContent {
  show: boolean;
  close: () => void;
}

const TravelDetailModal = ({
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
}: TravelDetailModalProps) => {
  return (
    <>
      <Modal isOpen={show} onClose={close}>
        <ModalOverlay />
        <ModalContent maxW='1000px' height='550px' padding='40px 40px'>
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
          <ModalBody display='flex' gap='16' width='1200px' padding='0'>
            <Image src={mainImage} width='450px' />
            <Flex flexDir='column' width='400px'>
              <Text fontSize='2xl' as='b'>
                {name}
              </Text>
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
              <Button colorScheme='blue' mr={3} onClick={close} marginTop='auto'>
                닫기
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TravelDetailModal;
