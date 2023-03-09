import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { travleContent } from 'types';
import { useBasketDispatch, useBasketState } from './context/BasketProvider';

const ReservationContent = ({
  idx,
  name,
  mainImage,
  description,
  spaceCategory,
  price,
  maximumPurchases,
  registrationDate,
}: travleContent) => {
  const dispatch = useBasketDispatch();
  const basket = useBasketState();

  const [quantity, setQuantity] = useState(1);
  const [isMaximum, setIsMaximum] = useState(false);

  useEffect(() => {
    if (basket.filter(product => product.idx === idx).length >= maximumPurchases)
      setIsMaximum(true);
    else setIsMaximum(false);
  }, [basket]);

  const deleteItem = () => {
    dispatch({
      type: 'DELETE_ITEM',
      item: {
        idx,
        name,
        mainImage,
        description,
        spaceCategory,
        price,
        maximumPurchases,
        registrationDate,
      },
    });
  };

  return (
    <>
      <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={mainImage} alt={name} />

        <Stack>
          <CardBody>
            <Heading size='md'>{name}</Heading>
            <Text py='2'>{description}</Text>
            <Text color='gray.50' fontSize='2xl'>
              {price}원
            </Text>
            <Button
              variant='solid'
              onClick={() => setQuantity(prev => prev - 1)}
              isDisabled={isMaximum}
            >
              -
            </Button>
            <Text fontSize='sm' as='b'>
              {quantity}
            </Text>
            <Button
              variant='solid'
              onClick={() => setQuantity(prev => prev + 1)}
              isDisabled={isMaximum}
            >
              +
            </Button>
          </CardBody>

          <CardFooter>
            <Button colorScheme='red' onClick={deleteItem}>
              삭제
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};
export default ReservationContent;
