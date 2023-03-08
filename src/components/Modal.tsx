import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Box,
  Badge,
} from '@chakra-ui/react';
import { ProductType } from 'types/ProductType';

type ModalProps = {
  isShowing: boolean;
  toggle: () => void;
  list: ProductType;
};

const ModalCard = ({ isShowing, toggle, list }: ModalProps) => {
  const {
    idx,
    mainImage,
    name,
    description,
    spaceCategory,
    price,
    maximumPurchases,
    registrationDate,
  } = list;
  return (
    <Modal isOpen={isShowing} onClose={toggle}>
      <ModalOverlay />
      <ModalContent>
        <Image src={mainImage} alt={name} />
        <ModalCloseButton />
        <ModalBody>
          <Box p='6'>
            <Box display='flex' alignItems='baseline' mb='3'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                {spaceCategory}
              </Badge>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {idx}
              </Box>
            </Box>
            <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1} mb='2'>
              {name}
            </Box>
            <Box>{price}원</Box>
            <Box>{description}</Box>
            <Box>{maximumPurchases}</Box>
            <Box>{registrationDate}</Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ModalCard;
