import React from 'react';
import { Box, Image, Badge, Button } from '@chakra-ui/react';
import Modal from 'components/Modal';
//import { useModalProductContext } from 'contexts/ModalProductContext';
import useModal from 'hooks/useModal';
import { ProductType } from 'types/ProductType';

type ProductProps = {
  list: ProductType;
};

const ProductCard = ({ list }: ProductProps) => {
  const { mainImage, name, spaceCategory, idx, price } = list;

  const { isShowing, toggle } = useModal();

  //const { setModalProduct } = useModalProductContext();

  return (
    <>
      <Box
        maxW='sm'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        display='flex'
        m='10px auto'
        flexDirection='column'
        key={idx}
        onClick={toggle}
      >
        <Image src={mainImage} alt={name} />
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
        </Box>
      </Box>
      <Button>예약하기</Button>
      <Modal isShowing={isShowing} toggle={toggle} list={list} />
    </>
  );
};

export default ProductCard;
