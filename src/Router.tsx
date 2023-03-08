import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/Main';
import Reservations from './pages/Reservations';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: 'main', element: <Main /> },
      { path: 'reservations', element: <Reservations /> },
    ],
  },
]);

export default Router;
