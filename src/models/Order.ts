export interface OrderItem {
  menuItemId: string;
  quantity: number;
}

export interface Order {
  id: string;
  items: Array<OrderItem>;
}
