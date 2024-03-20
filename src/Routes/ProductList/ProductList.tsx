import { useEffect, useMemo, useState } from 'react';

import ProductCard from '@/Components/ProductCard';
import { useProduct } from '@/Contexts/ProductContext';
import { Product } from '@/Hooks/useGetAllProducts';
import Pagination from '@/Routes/ProductList/Components/Pagination';

enum SortType {
  PRICE_ASC,
  PRICE_DESC,
  RATING,
}

const COLUMNS_PER_ROW = 4;
const ROWS_PER_PAGE = 2;

const sortPriceAsc = (a: Product, b: Product) => {
  return a.price - b.price;
};

const sortPriceDesc = (a: Product, b: Product) => {
  return b.price - a.price;
};

const sortRating = (a: Product, b: Product) => {
  return b.ratings - a.ratings;
};

const ProductList = () => {
  const [sort, setSort] = useState<SortType>(SortType.PRICE_ASC);
  const [pages, setPages] = useState(1);
  const { featuredProducts } = useProduct();
  const TOTAL_ITEM_PER_PAGE = ROWS_PER_PAGE * COLUMNS_PER_ROW;
  const totalPages = Math.ceil(featuredProducts.length / TOTAL_ITEM_PER_PAGE);

  const title = 'Product List';

  const sortedProducts = useMemo(() => {
    switch (sort) {
      case SortType.PRICE_DESC:
        return featuredProducts.sort(sortPriceDesc);
      case SortType.RATING:
        return featuredProducts.sort(sortRating);
      case SortType.PRICE_ASC:
      default:
        return featuredProducts.sort(sortPriceAsc);
    }
  }, [sort, featuredProducts]);

  const currentProducts = useMemo(() => {
    return sortedProducts.slice((pages - 1) * TOTAL_ITEM_PER_PAGE, pages * TOTAL_ITEM_PER_PAGE);
  }, [sortedProducts, pages, TOTAL_ITEM_PER_PAGE]);

  const handleSortChange = (index: number) => {
    setSort(index);
  };

  const handlePageChange = (page: number) => {
    setPages(page);
  };

  const handleNextPage = () => {
    setPages(pages + 1);
  };

  const handlePrevPage = () => {
    setPages(pages - 1);
  };

  useEffect(() => {
    setPages(1);
  }, [featuredProducts]);

  return (
    <div id="product-list-container" className={'px-40 pt-24 pb-40 flex w-full justify-center'}>
      <div id="product-list-sidebar"></div>
      <div id="product-list-content">
        <div id="product-list-title-and-sort" className={'mb-[60px]'}>
          <p className={'text-h5'}>{title}</p>
          <div id="product-list-sort-box"></div>
        </div>
        <div className={'grid grid-cols-4 gap-x-10 gap-y-[60px]'}>
          {currentProducts.map((product) => {
            const { id, name, description, price, promotionalPrice, ratings, imageUrls } = product;
            return (
              <ProductCard
                key={id}
                name={name}
                description={description}
                price={price}
                promotionPrice={promotionalPrice}
                rating={ratings}
                imgUrl={imageUrls[0]}
              />
            );
          })}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={pages}
          onPageChange={handlePageChange}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
};

export default ProductList;
