import { CheckOutPage } from './pages/CheckOutPage/CheckOutPage'
import { OrderPage } from './pages/OrderPage';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route element={<OrderPage />} path="/" />
      <Route path="/checkout" element={<CheckOutPage />} />
    </Routes>
  );
}
