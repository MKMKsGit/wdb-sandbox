import { Category } from '@/Hooks/useGetAllCategories';

export type IProductContext = {
  categories: Record<string, Category[]>;
  loading: boolean;
};

export type ProductProviderProps = {
  children?: React.ReactNode;
};
