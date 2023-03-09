import { PATH_ROUTES } from 'constant';
import { ReservationsPage, Root, TravleListPage } from 'pages';
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
    element: <ReservationsPage />,
  },
]);

export default router;
