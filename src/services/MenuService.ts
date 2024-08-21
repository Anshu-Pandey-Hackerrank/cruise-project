import { useEffect, useState } from 'react';
import { Menu } from '@/models';
import { API_URL } from '@/utils';

/**
 * Hook to fetch menu
 */
export function useMenu() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>();
  const [menu, setMenu] = useState<Menu>({
    items: {},
    sections: {},
    sectionIds: [],
  });

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/menu`);

        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }

        const fetchedMenu = await response.json();
        setMenu(fetchedMenu);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, []);
  return { isLoading, isError, error, menu };
}
