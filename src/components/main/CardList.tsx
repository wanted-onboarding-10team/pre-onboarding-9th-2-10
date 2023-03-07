import React, { useEffect, useState } from 'react';
import { Grid, SimpleGrid } from '@chakra-ui/layout';
import { getTravelListAPI } from 'api/main';
import { Data } from 'types';
import Card from './Card';

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
  const [datas, setDatas] = useState(initialValue as Data[]);
  const getData = async () => {
    try {
      const { data } = await getTravelListAPI();
      setDatas(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
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
