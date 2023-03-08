import { PATH_ROUTES } from 'constant';
import Root from 'pages/Root';
import TravleListPage from 'pages/TravleListPage';
import { createBrowserRouter } from 'react-router-dom';
import mainLoader from 'router/loader/mainLoader';
import rootLoader from 'router/loader/rootLoader';

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
