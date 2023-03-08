import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getData } from 'api/module';
import { Outlet } from 'react-router-dom';

function App() {
  const getAPI = () => {
    getData().then(res => {
      const API: [] = res.data;
      console.log(API);
    });
  };
  useEffect(() => {
    getAPI();
  }, []);

  return <Outlet />;
}

export default App;
