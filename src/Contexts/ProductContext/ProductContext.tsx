import { groupBy, tidy } from '@tidyjs/tidy';
import { createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { IProductContext, ProductProviderProps } from '@/Contexts/ProductContext/types';
import { useGetAllCategories } from '@/Hooks/useGetAllCategories';

const ProductContext = createContext<IProductContext>({
  categories: {},
  loading: false,
});

const ProductProvider = ({ children }: ProductProviderProps) => {
  const { data: categories, loading } = useGetAllCategories();

  const categoriesGroupByName = tidy(categories, groupBy('name', groupBy.object()));

  const isLoading = loading;

  return (
    <ProductContext.Provider
      value={{
        categories: categoriesGroupByName,
        loading: isLoading,
      }}
    >
      {children ?? <Outlet />}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }

  return context;
};

export default ProductProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useProduct };
