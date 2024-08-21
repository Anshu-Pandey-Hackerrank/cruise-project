import { Menu, Order } from '@/models';
import { postOrder } from '@/services';
import { TrashIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

export interface OrderViewProps {
  menu: Menu;
  order: Order;
}

export function OrderView({ order }: OrderViewProps) {
  const navigate = useNavigate();

  const handleCheckout = async () => {
    await postOrder(order);
    navigate('/checkout');
  };

  return (
    <section>
      <h2 id="order-heading" className="heading-2">
        Your Order
      </h2>
      <button className="button mt-4" onClick={handleCheckout}>
        Checkout
      </button>
      <table aria-labelledby="order-heading" className="mt-3">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Avocado Toast</td>
            <td>1</td>
            <td>9.00</td>
            <td>
              <button>
                <TrashIcon className="h-5 w-5" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
