import { useEffect, useState } from 'react';

type CollectionItem = {
  title: string;
  description: string;
  imageUrl: string;
};

export type Collection = {
  id: string;
  name: string;
  description: string;
  permalink: string;
  items: CollectionItem[];
};

export const useGetAllCollection = () => {
  const [data, setData] = useState<Collection[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.storefront.wdb.skooldio.dev/collections');
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
