import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import * as P from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="/main" element={<P.MainPage />} />
      <Route path="/reservations" element={<P.ReservationsPage />} />
      <Route path="/*" element={<Navigate to="/main" />} />
    </Routes>
  );
}

export default App;
