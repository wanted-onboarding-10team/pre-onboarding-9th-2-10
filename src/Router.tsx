import MainPage from 'pages/MainPage';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route path="/main" index element={<MainPage />} />
    </Route>,
  ),
);
