import { Order } from '@/models';
import { API_URL } from '@/utils';

/**
 * Post order to server
 */
export async function postOrder(order: Order) {
  return await fetch(`${API_URL}/order`, {
    method: 'POST',
    body: JSON.stringify(order),
  });
}
