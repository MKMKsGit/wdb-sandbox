import ProductCard from '@/Components/ProductCard';
import { useProduct } from '@/Contexts/ProductContext';

const FeaturedProduct = () => {
  const { featuredProducts = [] } = useProduct();

  const displayProducts = featuredProducts.slice(0, 4);

  return (
    <div className={'flex gap-10 w-full justify-center'}>
      {displayProducts.map((product) => {
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
  );
};

export default FeaturedProduct;
