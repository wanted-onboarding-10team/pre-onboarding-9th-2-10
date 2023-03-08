import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { GoodsType } from 'types/Goods';
import GoodsDetail from 'components/GoodsDetail';
import { AddIcon, CheckIcon } from '@chakra-ui/icons';

interface ItemPropsType {
  item: GoodsType;
}

const Goods = ({ item }: ItemPropsType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 예약된 id
  //   const [reservation, setReservation] = useState<string[]>([]);
  const [isReservation, setIsReservation] = useState<boolean>(false);
  const price = item.price.toLocaleString('ko-KR');

  const handleReservation = async (e: any) => {
    e.stopPropagation();
    setIsReservation(!isReservation);
  };

  return (
    <>
      <Card align="center">
        <CardBody onClick={onOpen} cursor="pointer" position="relative">
          <Text
            position="absolute"
            fontSize="2xl"
            margin="2"
            color="white"
            textShadow="0px 2px 4px rgb(0 0 0 / 50%);"
            as="b"
          >
            {item.idx}
          </Text>
          <Image src={item.mainImage} alt={item.name} borderRadius="lg" width="100%" />
          {isReservation ? (
            <IconButton
              onClick={handleReservation}
              aria-label="Add Reservation"
              icon={<CheckIcon />}
              position="absolute"
              top="7"
              left="80%"
              borderRadius="50%"
              colorScheme="blue"
            />
          ) : (
            <IconButton
              onClick={handleReservation}
              aria-label="Add Reservation"
              icon={<AddIcon />}
              position="absolute"
              top="7"
              left="80%"
              borderRadius="50%"
              colorScheme="gray"
            />
          )}
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.name}</Heading>
            <Flex justifyContent="space-between">
              <Text fontSize="16" display="inline-block" color="gray">
                {item.spaceCategory}
              </Text>
              <Text fontSize="16" display="inline-block" color="red.400">
                {price}원
              </Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>

      <GoodsDetail isOpen={isOpen} onClose={onClose} item={item} />
    </>
  );
};

export default Goods;
