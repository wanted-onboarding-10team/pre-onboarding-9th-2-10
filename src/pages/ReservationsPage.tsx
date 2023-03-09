import { useBasketState } from 'components/context/BasketProvider';
import MainLayout from 'components/MainLayout';
import ReservationsContent from 'components/ReservationsContent';
import { useEffect, useState } from 'react';
import { travleContent } from 'types';

const ReservationsPage = () => {
  const baskets = useBasketState();
  const [filterBaskets, setFilterBaskets] = useState<travleContent[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setFilterBaskets(
      baskets
        .filter((item, i) => {
          return (
            baskets.findIndex(item2 => {
              return item.idx === item2.idx;
            }) === i
          );
        })
        .sort((a, b) => a.idx - b.idx),
    );
    setTotalPrice(baskets.map(item => item.price).reduce((prev, curr) => prev + curr, 0));
  }, [baskets]);

  return (
    <MainLayout>
      {baskets.length === 0 ? (
        <>장바구니에 담은 상품이 없습니다.</>
      ) : (
        <>
          {totalPrice.toLocaleString('ko-KR')}
          {filterBaskets?.map((basket, i) => (
            <ReservationsContent {...basket} key={i} />
          ))}
        </>
      )}
    </MainLayout>
  );
};

export default ReservationsPage;
