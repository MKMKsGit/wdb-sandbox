import { useEffect, useState } from 'react';

export type Category = {
  id: string;
  name: string;
  parentId: string;
  permalink: string;
};

export const useGetAllCategories = () => {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.storefront.wdb.skooldio.dev/categories');
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
