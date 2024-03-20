import { Button } from '@/Components';

const EmptyCart = () => {
  return (
    <div className={'text-center mb-28'}>
      <img
        className={'h-[430px] w-[430px] object-cover'}
        alt={''}
        src={`${import.meta.env.VITE_PUBLIC_URL}assets/images/empty-cart.svg`}
      />
      <p className={'text-h4 mt-6'}>Your cart is empty</p>
      <p
        className={'text-subHeading whitespace-pre-line text-center mt-2'}
      >{`Looks like you have not added anything to your cart.\nGo ahead & explore top categories.`}</p>
      <Button className={'mt-6'}>Continue shopping</Button>
    </div>
  );
};

export default EmptyCart;
