import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from 'pages/Root';
import Main from 'pages/Main';
import rootLoader from './loader/rootLoader';
import { PATH_ROUTES } from 'constant';
import mainLoader from './loader/mainLoader';

const router = createBrowserRouter([
  {
    path: PATH_ROUTES.root,
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: PATH_ROUTES.main,
    element: <Main />,
    loader: mainLoader,
  },
  {
    path: PATH_ROUTES.shopBasket,
    element: <Main />,
  },
]);

export default router;
