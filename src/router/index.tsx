import { PATH_ROUTES } from 'constant';
import ReservationPage from 'pages/ReservationPage';
import Root from 'pages/Root';
import TravelListPage from 'pages/TravelListPage';
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
    element: <TravelListPage />,
    loader: mainLoader,
  },
  {
    path: PATH_ROUTES.shopBasket,
    element: <ReservationPage />,
  },
]);

export default router;
