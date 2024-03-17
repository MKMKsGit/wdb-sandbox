import { groupBy, tidy } from '@tidyjs/tidy';
import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Loading from '@/Components/Loading';
import { IProductContext, ProductProviderProps } from '@/Contexts/ProductContext/types';
import { Category, useGetAllCategories } from '@/Hooks/useGetAllCategories';
import { Product, useGetAllProducts } from '@/Hooks/useGetAllProducts';

const ProductContext = createContext<IProductContext>({
  categories: {},
  featuredProducts: [],
  loading: false,
});

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  const { category } = useParams();

  const { data: categories, loading: categoriesLoading } = useGetAllCategories();
  const categoriesGroupByName = tidy(categories, groupBy('name', groupBy.object()));

  const { data: products, loading: productsLoading } = useGetAllProducts();

  useEffect(() => {
    if (category === undefined) {
      setFeaturedProducts(products);
      return;
    }
    const featured = products?.filter((product) => {
      const productCategory = product.categories;
      const permaLinkOfCategory = categoriesGroupByName[category].map((category: Category) => category.permalink);

      return productCategory.some((category) => permaLinkOfCategory.includes(category));
    });
    setFeaturedProducts(featured);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, products]);

  const isLoading = categoriesLoading || productsLoading;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ProductContext.Provider
      value={{
        categories: categoriesGroupByName,
        featuredProducts,
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
