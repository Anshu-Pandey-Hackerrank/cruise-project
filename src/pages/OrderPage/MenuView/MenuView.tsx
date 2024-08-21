import { Menu } from '@/models';
import { SectionView } from './SectionView';

export interface MenuViewProps {
  menu: Menu;
  onMenuItemClicked: (id: string) => void;
}

export function MenuView({ menu, onMenuItemClicked }: MenuViewProps) {
  const { items, sections, sectionIds } = menu;

  return (
    <section>
      <h1
        id="menu-heading"
        className="text-primary-500 text-3xl font-medium uppercase"
      >
        Our Menu
      </h1>
      <ul aria-labelledby="menu-heading">
        {sectionIds.map((sectionId) => (
          <SectionView
            key={sectionId}
            section={sections[sectionId]}
            items={items}
            onMenuItemClicked={onMenuItemClicked}
          />
        ))}
      </ul>
    </section>
  );
}
