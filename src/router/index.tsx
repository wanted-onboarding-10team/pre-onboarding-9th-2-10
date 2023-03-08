import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from 'pages/Root';
import TravleListPage from 'pages/TravleListPage';
import rootLoader from 'router/loader/rootLoader';
import { PATH_ROUTES } from 'constant';
import mainLoader from 'router/loader/mainLoader';

const router = createBrowserRouter([
  {
    path: PATH_ROUTES.root,
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: PATH_ROUTES.main,
    element: <TravleListPage />,
    loader: mainLoader,
  },
  {
    path: PATH_ROUTES.shopBasket,
    element: <TravleListPage />,
  },
]);

export default router;
