import { Category } from '@/Hooks/useGetAllCategories';
import { Product } from '@/Hooks/useGetAllProducts';

export type IProductContext = {
  categories: Record<string, Category[]>;
  featuredProducts: Product[];
  loading: boolean;
};

export type ProductProviderProps = {
  children?: React.ReactNode;
};
