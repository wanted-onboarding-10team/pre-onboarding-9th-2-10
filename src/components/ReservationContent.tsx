import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';
import { TravleContentType } from 'types';
import { useBasketDispatch } from './context/BasketProvider';

const ReservationContent = ({ data }: { data: TravleContentType }) => {
  const { mainImage, idx, name, description, maximumPurchases, quantity, price, spaceCategory } =
    data;
  const dispatch = useBasketDispatch();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    dispatch({ type: 'UPDATE_ITEM', item: data, changeQuantity: Number(e.target.value) });
  };

  const handleClick = () => {
    dispatch({ type: 'DELETE_ITEM', item: data });
  };

  return (
    <Card direction={{ base: 'column', sm: 'row' }} variant='outline' key={idx} maxW='600px'>
      <Image
        src={mainImage}
        alt='main Image'
        maxW={{ base: '100%', sm: '200px' }}
        objectFit='cover'
      />
      <Stack>
        <CardBody>
          <Heading size={'md'}>{name}</Heading>
          <Text py={2}>{description}</Text>
          <Text>사용가능 지역 : {spaceCategory}</Text>
          <Text>최대구매 수량 : {maximumPurchases}</Text>
          <Text fontWeight={700}>금액 : {price}</Text>
          <Box display={'flex'} alignItems='center'>
            담은 수량 :
            <Select size={'md'} width='100px' defaultValue={quantity} onChange={handleChange}>
              {Array.from({ length: maximumPurchases }).map((_, index) => (
                <option value={index + 1} key={index}>
                  {index + 1}
                </option>
              ))}
            </Select>
          </Box>
        </CardBody>
        <CardFooter>
          <Button onClick={handleClick}>삭제</Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default ReservationContent;
