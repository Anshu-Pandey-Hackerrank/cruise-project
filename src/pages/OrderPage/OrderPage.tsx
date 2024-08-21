import { ErrorView } from '@/components/ErrorView';
import { LoadingView } from '@/components/LoadingView';
import { useMenu } from '@/services';
import { OrderPageView } from './OrderPageView';

export function OrderPage() {
  const { isLoading, isError, error, menu } = useMenu();

  if (isLoading) {
    return <LoadingView />;
  }

  if (isError) {
    return <ErrorView error={error} />;
  }

  return <OrderPageView menu={menu} />;
}
