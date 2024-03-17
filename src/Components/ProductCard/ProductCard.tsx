import { formatNumberWithCommas, formatNumberWithDecimal } from '@/Utils/utils';

import Rating from './Rating';

type ProductCardProps = {
  name: string;
  imgUrl: string;
  description: string;
  price: number;
  promotionPrice?: number;
  rating: number;
};

const ProductCard = (props: ProductCardProps) => {
  const { name, imgUrl, description, price, promotionPrice, rating } = props;

  const isSale = promotionPrice && promotionPrice < price;
  const displayPrice = isSale ? promotionPrice : price;
  const percentageOff = isSale ? ((price - promotionPrice!) / price) * 100 : 0;

  return (
    <div className="flex flex-col gap-4 min-w-[250px] max-w-[370px] relative flex-1">
      <img className="object-cover aspect-square" src={imgUrl} alt={`picture of ${name}`} />
      <div className="flex flex-col gap-2">
        <p className="text-h6 overflow-hidden overflow-ellipsis whitespace-nowrap">{name}</p>
        <p className="text-body text-secondary-700 overflow-hidden overflow-ellipsis whitespace-nowrap">
          {description}
        </p>
        <Rating rating={rating} />
        <div className={'w-full flex justify-end gap-4 items-center'}>
          {isSale && (
            <p className="text-secondary-700 text-subtitle line-through font-semibold">
              {formatNumberWithCommas(price)}
            </p>
          )}
          <p
            className={`text-h6 ${isSale ? 'text-danger' : 'text-secondary-900'}`}
          >{`THB ${formatNumberWithCommas(displayPrice)}`}</p>
        </div>
      </div>
      {isSale && (
        <div
          className={'absolute right-0 top-6 px-2.5 py-1 bg-danger text-white'}
        >{`- ${formatNumberWithDecimal(percentageOff)}%`}</div>
      )}
    </div>
  );
};

export default ProductCard;
