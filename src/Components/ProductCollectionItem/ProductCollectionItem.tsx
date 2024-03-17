import { Button } from '@/Components/Base';

type ProductCollectionItemProps = {
  header: string;
  description: string;
  imgUrl: string;
  onClick: () => void;
};

const ProductCollectionItem = (props: ProductCollectionItemProps) => {
  const { header, description, imgUrl, onClick } = props;

  return (
    <div className={'flex-1 h-[500px] relative text-center text-white'}>
      <img className={'absolute object-none w-full h-full'} src={imgUrl} alt={`image of ${header} content`} />
      <div
        className={
          'absolute bottom-0 p-4 flex flex-col w-full gap-4 justify-end items-center bg-gradient-to-b from-transparent to-[hsla(0,0%,0%,0.8)]'
        }
      >
        <p className={'text-h6'}>{header}</p>
        <p>{description}</p>
        <Button onClick={onClick}>View more</Button>
      </div>
    </div>
  );
};

export default ProductCollectionItem;
