import { Order } from '@/models';
import * as React from 'react';

// ---------- OrderContext ----------
type OrderSetter = (order: Order) => void;

/** OrderContext contains Order and OrderSetter */
export const OrderContext = React.createContext<
  { order: Order; setOrder: OrderSetter } | undefined
>(undefined);

// ---------- OrderContextProvider ----------
interface OrderContextProviderProps {
  initialState?: Order;
  children?: React.ReactNode;
}

function OrderContextProvider({
  initialState = { id: '1000', items: [] },
  children,
}: OrderContextProviderProps) {
  const [order, setOrder] = React.useState<Order>(initialState);

  const value = { order, setOrder };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

// ---------- useOrderContext ----------
function useOrderContext() {
  const orderContext = React.useContext(OrderContext);
  if (orderContext === undefined) {
    throw new Error(
      'useOrderContext must be used within a OrderContextProvider'
    );
  }
  return orderContext;
}

export { OrderContextProvider, useOrderContext };
