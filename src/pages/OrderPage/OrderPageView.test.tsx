import { OrderPageView } from './OrderPageView';
import { render, screen, userEvent, within } from '@/test/test-utils';
import { menu } from '@/mocks/mockMenu';

describe('<OrderPageView />', () => {
  it('should show an order item with quantity=1 when the corresponding menu item is clicked once', async () => {
    render(<OrderPageView menu={menu} />);

    // click the "Avocado Toast" menu-item
    const menuSection = screen.getByLabelText('Our Menu');
    const avocadoToast = within(menuSection)
      .getByText('Avocado Toast')
      .closest('li');
    if (avocadoToast === null) {
      throw new Error("Couldn't find Avocado Toast");
    }
    // screen.debug(avocadoToast);
    userEvent.click(avocadoToast);

    // expect "Avocado Toast" to appear in the order with qty=1
  });

  it('should show an order item with quantity=2 when the corresponding menu item is clicked twice', async () => {
    render(<OrderPageView menu={menu} />);
  });
});
