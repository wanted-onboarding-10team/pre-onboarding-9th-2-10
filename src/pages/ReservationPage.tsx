import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useBasketState } from 'components/context/BasketProvider';
import MainLayout from 'components/MainLayout';
import ReservationItem from 'components/ReservationItem';
import { PATH_ROUTES } from 'constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ReservationPage = () => {
  const basketDatas = useBasketState();
  const [checkedItems, setCheckedItems] = useState(Array<boolean>(basketDatas.length).fill(true));
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const totalPrice = basketDatas.reduce((prev, current, currentIdx) => {
    if (checkedItems[currentIdx]) {
      return prev + current.price * current.count;
    }
    return prev;
  }, 0);

  const handleItemChecked = (idx: number, checked: boolean) => {
    setCheckedItems(prev => {
      prev[idx - 1] = checked;
      return [...prev];
    });
  };

  const changeAllChecked = () => {
    setCheckedItems(prev => prev.map(() => !allChecked));
  };

  return (
    <MainLayout>
      <Heading>장바구니</Heading>
      <TableContainer>
        <Table variant='simple' size='lg'>
          <Thead>
            <Tr>
              <Th>
                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={changeAllChecked}
                />
              </Th>
              <Th>상품명</Th>
              <Th>가격</Th>
              <Th>수량</Th>
              <Th>삭제</Th>
            </Tr>
          </Thead>
          <Tbody>
            {basketDatas.length > 0 ? (
              basketDatas.map((travelData, index) => {
                return (
                  <ReservationItem
                    key={travelData.idx}
                    travelData={travelData}
                    checkedItem={checkedItems[index]}
                    handleItemChecked={handleItemChecked}
                  />
                );
              })
            ) : (
              <Tr>
                <Td colSpan={5} bg='gray.100'>
                  <Flex
                    minW='xl'
                    textAlign='center'
                    flexDirection='column'
                    gap='5'
                    alignItems='center'
                    pt='4'
                    pb='4'
                  >
                    <Text>장바구니에 담긴 상품이 없습니다.</Text>
                    <Button as={Link} to={PATH_ROUTES.main} colorScheme='teal' variant='solid'>
                      홈으로 이동하시겠습니까?
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            )}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td colSpan={2}>총 상품 가격</Td>
              <Td colSpan={3} textAlign='right'>
                {totalPrice.toLocaleString()}원
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </MainLayout>
  );
};

export default ReservationPage;
