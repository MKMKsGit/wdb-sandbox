import { useEffect, useState } from 'react';

export type Product = {
  id: string;
  name: string;
  skuCode: string;
  permalink: string;
  description: string;
  price: number;
  promotionalPrice: number;
  categories: string[];
  collection: string;
  ratings: number;
  imageUrls: string[];
};

export const useGetAllProducts = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.storefront.wdb.skooldio.dev/products');
        const data = await response.json();
        setData(data.data);
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
