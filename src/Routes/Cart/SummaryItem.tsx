import { formatNumberWithCommas } from '@/Utils/utils';

type SummaryItemProps = {
  name: string;
  price: number;
};

const SummaryItem = (props: SummaryItemProps) => {
  const { name, price } = props;
  return (
    <div className={'flex justify-between'}>
      <p>{name}</p>
      <p>{formatNumberWithCommas(price, 2)}</p>
    </div>
  );
};

export default SummaryItem;
