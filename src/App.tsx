import { CheckoutPage } from './pages/CheckoutPage';
import { OrderPage } from './pages/OrderPage';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route element={<OrderPage />} path="/" />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
