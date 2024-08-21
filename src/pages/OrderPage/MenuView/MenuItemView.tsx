import { formatAsMoney } from '@/utils';
import { MenuItem } from '@/models';

export interface MenuItemViewProps {
  item: MenuItem;
  onMenuItemClicked: (id: string) => void;
}

export function MenuItemView({ item, onMenuItemClicked }: MenuItemViewProps) {
  return (
    <li
      className="bg-paper hover:bg-paper-hover border border-paper rounded mt-4 p-4 cursor-pointer select-none"
      onClick={() => {
        onMenuItemClicked(item.id);
      }}
    >
      <h3 className="text-lg leading-none font-medium">{item.name}</h3>
      <p className="mt-1 mb-4">{item.description}</p>
      <p>{formatAsMoney(item.price)}</p>
    </li>
  );
}
