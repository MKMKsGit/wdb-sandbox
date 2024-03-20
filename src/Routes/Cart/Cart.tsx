import { Button } from '@/Components';
import EmptyCart from '@/Routes/Cart/EmptyCart';
import SummaryItem from '@/Routes/Cart/SummaryItem';
import { formatNumberWithCommas } from '@/Utils/utils';

const mockItems = [
  {
    name: 'Item 1',
    total: 1,
    price: 100,
  },
  {
    name: 'Item 2',
    total: 2,
    price: 200,
  },
  {
    name: 'Item 3',
    total: 3,
    price: 300,
  },
];

const Cart = () => {
  const totalItems = mockItems.length;
  const hasNoItem = totalItems === 0;

  const subTotalPrice = mockItems.reduce((acc, item) => acc + item.total * item.price, 0);
  const shippingFee = 200;
  const totalPrice = subTotalPrice + shippingFee;

  return (
    <div className={'bg-neutral-100 px-40 pt-10 pb-40 flex w-full flex-col'}>
      <p className={'text-h5 ml-6'}>My cart</p>
      <div className={'mt-10 flex gap-10'}>
        <div className={'p-6 bg-white flex-grow-[7] flex flex-col gap-6 items-center text-secondary-900'}>
          <p className={'text-h6 place-self-start'}>Items</p>
          {hasNoItem && <EmptyCart />}
        </div>
        <div className={`p-6 bg-white h-fit flex-grow-[3]${hasNoItem ? ' text-secondary-500' : ''}`}>
          <div className={'flex flex-col gap-6'}>
            <div className={'flex justify-between'}>
              <p className={'text-h6 text-secondary-900'}>Summary</p>
              <p className={'text-subHeading text-secondary-700'}>{`${totalItems} items`}</p>
            </div>
            {hasNoItem ? (
              <SummaryItem name={'No item'} price={0} />
            ) : (
              <>
                {mockItems.map((item, index) => {
                  const { name, total, price } = item;

                  const displayNames = total > 1 ? `${name} x ${total}` : name;
                  const totalPrice = total * price;

                  return <SummaryItem key={`summary-item-${index}`} name={displayNames} price={totalPrice} />;
                })}
              </>
            )}
            <div className="inline-block h-px self-stretch bg-secondary-300"></div>
            <div className={'flex justify-between'}>
              <p>Subtotal</p>
              <p>{formatNumberWithCommas(subTotalPrice, 2)}</p>
            </div>
            <div className={'flex justify-between'}>
              <p>Shipping fee</p>
              <p>{formatNumberWithCommas(shippingFee, 2)}</p>
            </div>
            <div className="inline-block h-px self-stretch bg-secondary-300"></div>
            <div className={'flex justify-between text-subHeading'}>
              <p>Total</p>
              <p>{formatNumberWithCommas(totalPrice, 2)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-4 mt-10'}>
            <Button fullWidth disabled={hasNoItem}>
              Check out
            </Button>
            <Button fullWidth variant={'secondary'} disabled={hasNoItem}>
              Continue shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
