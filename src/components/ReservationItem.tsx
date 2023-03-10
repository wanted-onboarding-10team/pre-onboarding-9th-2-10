import { Box, Button, Checkbox, Image, Select, Td, Text, Tr } from '@chakra-ui/react';
import { useBasketDispatch } from 'components/context/BasketProvider';
import React from 'react';
import { basketItem } from 'types';
import { ActionType } from 'types/enum';

interface ReservationItemParam {
  travelData: basketItem;
  checkedItem: boolean;
  handleItemChecked: (idx: number, checked: boolean) => void;
}

const ReservationItem = ({ travelData, checkedItem, handleItemChecked }: ReservationItemParam) => {
  const basketDispatch = useBasketDispatch();

  const changeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleItemChecked(travelData.idx, event.target.checked);
  };

  const onChangeCount = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const count = event.target.value;
    basketDispatch({
      type: ActionType.CHANGE_COUNT,
      item: {
        ...travelData,
        count: +count,
      },
    });
  };

  return (
    <Tr key={travelData.idx}>
      <Td>
        <Checkbox isChecked={checkedItem} onChange={changeChecked} />
      </Td>
      <Td>
        <Box display='flex' alignItems='center' gap={4}>
          <Image
            boxSize='100px'
            src={travelData.mainImage}
            fallback={
              <Box
                boxSize={100}
                bg='gray.400'
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <Text fontSize='sm' color='white'>
                  Not Loading
                </Text>
              </Box>
            }
          />
          {travelData.name}
        </Box>
      </Td>
      <Td>{travelData.price.toLocaleString()}원</Td>
      <Td>
        <Select placeholder='수량' defaultValue={travelData.count} onChange={onChangeCount}>
          {Array(travelData.maximumPurchases)
            .fill(1)
            .map((_, index) => (
              <option value={index + 1} key={index}>
                {index + 1}
              </option>
            ))}
        </Select>
      </Td>
      <Td>
        <Button
          size='xs'
          onClick={() =>
            basketDispatch({
              type: ActionType.DELETE_ITEM,
              item: travelData,
            })
          }
        >
          삭제
        </Button>
      </Td>
    </Tr>
  );
};

export default ReservationItem;
