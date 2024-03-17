import { useEffect, useState } from 'react';

import ProductCard from '@/Components/ProductCard';
import { useProduct } from '@/Contexts/ProductContext';
import Pagination from '@/Routes/ProductList/Components/Pagination';

const COLUMNS_PER_ROW = 4;
const ROWS_PER_PAGE = 2;

const ProductList = () => {
  const [pages, setPages] = useState(1);
  const { featuredProducts } = useProduct();
  const TOTAL_ITEM_PER_PAGE = ROWS_PER_PAGE * COLUMNS_PER_ROW;
  const currentProducts = featuredProducts.slice((pages - 1) * TOTAL_ITEM_PER_PAGE, pages * TOTAL_ITEM_PER_PAGE);
  const totalPages = Math.ceil(featuredProducts.length / TOTAL_ITEM_PER_PAGE);

  const title = 'Product List';

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
    <div id="product-list-container" className={'px-40 pt-24 pb-40 flex'}>
      <div id="product-list-sidebar"></div>
      <div id="product-list-content">
        <div id="product-list-title-and-sort" className={'mb-[60px]'}>
          <p className={'text-h5'}>{title}</p>
          <div id="product-list-sort-box"></div>
        </div>
        <div className={`grid grid-cols-${COLUMNS_PER_ROW} gap-x-10 gap-y-[60px]`}>
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
