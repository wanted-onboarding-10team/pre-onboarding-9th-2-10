import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'api/api';
import ProductCard from './ProductCard';
import { ProductType } from 'types/ProductType';

const ProductList = () => {
  const {
    data: productList,
    isLoading,
    isError,
    error,
  } = useQuery<ProductType[], Error>(['productList'], getPosts);

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {isLoading ? (
        <div>Loading... loading 컴포넌트 만들 계획</div>
      ) : (
        productList?.map(list => <ProductCard list={list} key={list.idx} />)
      )}
    </>
  );
};

export default ProductList;
