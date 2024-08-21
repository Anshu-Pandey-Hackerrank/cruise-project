import { Menu, Order } from '@/models';
import { MenuView } from './MenuView';
import { OrderView } from './OrderView';
import * as React from 'react';

export interface OrderPageViewProps {
  menu: Menu;
}

export function OrderPageView({ menu }: OrderPageViewProps) {
  const [order] = React.useState<Order>({ id: '1000', items: [] });

  const handleMenuItemClicked = (menuItemId: string) => {
    console.log('handleClick', menuItemId);
  };

  return (
    <div className="mx-auto max-w-7xl bg-page">
      <div className="h-screen flex flex-col divide-x">
        <div className="flex-1 flex flex-row min-h-0 divide-x">
          <div className="overflow-auto flex-1 pl-8 pr-4 px-4 py-8">
            <MenuView menu={menu} onMenuItemClicked={handleMenuItemClicked} />
          </div>
          <div className="overflow-auto pl-4 pr-8 py-8 w-[26rem]">
            <OrderView menu={menu} order={order} />
          </div>
        </div>
      </div>
    </div>
  );
}
