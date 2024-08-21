import { MenuSection, MenuItem } from '@/models';
import { MenuItemView } from './MenuItemView';

export interface SectionViewProps {
  section: MenuSection;
  items: { [itemId: string]: MenuItem };
  onMenuItemClicked: (id: string) => void;
}

export function SectionView({
  section,
  items,
  onMenuItemClicked,
}: SectionViewProps) {
  const { name, itemIds } = section;

  return (
    <li>
      <h2 className="text-primary-500 text-xl font-medium uppercase mt-4">
        {name}
      </h2>
      <ul>
        {itemIds.map((itemId) => (
          <MenuItemView
            key={itemId}
            item={items[itemId]}
            onMenuItemClicked={onMenuItemClicked}
          />
        ))}
      </ul>
    </li>
  );
}
