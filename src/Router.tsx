import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import App from 'App';
import MainPage from 'pages/MainPage';
import ReservationPage from 'pages/ReservationPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' index element={<Navigate to='main' />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/reservation' element={<ReservationPage />} />
    </Route>,
  ),
);
