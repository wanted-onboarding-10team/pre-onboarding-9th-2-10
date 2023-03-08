import React, { SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Data } from 'types';
import Card from './Card';
import { useAppSelector, useAppDispatch } from 'utils/hooks';
import { getTravalList } from '../../utils/mainReducer';

const initialValue = [
  {
    idx: 0,
    name: '',
    mainImage: '',
    description: '',
    spaceCategory: '',
    price: 0,
    maximumPurchases: 0,
    registrationDate: '',
  },
];

const CardList = () => {
  const { data: datas, status, rejectValue } = useAppSelector(state => state.main);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTravalList());
  }, []);

  return (
    <>
      <SimpleGrid spacing={4} templateColumns="repeat(3, minmax(300px, 1fr))">
        {datas.map(el => (
          <Card key={el.idx} props={el} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CardList;
