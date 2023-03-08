import App from 'App';
import MainPage from 'pages/MainPage';
import ReservationsPage from 'pages/ReservationsPage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" index element={<MainPage />} />
      <Route path="reservation" element={<ReservationsPage />} />
    </Route>,
  ),
);
