import React from 'react';
import { Card, CardBody, Heading, Image, Stack, Text, Flex, useDisclosure } from '@chakra-ui/react';
import { travleContent } from 'types';
import TravleDetailModal from 'components/modal/TravleDetailModal';
const TravleContent = ({
  idx,
  name,
  mainImage,
  description,
  spaceCategory,
  price,
  maximumPurchases,
  registrationDate,
}: travleContent) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              {price}원
            </Text>
          </Flex>
        </Stack>
      </CardBody>

      <TravleDetailModal
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

export default TravleContent;
