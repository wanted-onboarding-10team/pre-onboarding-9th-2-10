import React from 'react';
import CardList from 'components/main/CardList';
import FiltterBox from 'components/main/FiltterBox';
import LayoutWrapper from 'components/commons/LayoutWrapper';

const MainPage = () => {
  return (
    <>
      <LayoutWrapper>
        <FiltterBox />
        <CardList />
      </LayoutWrapper>
    </>
  );
};

export default MainPage;
