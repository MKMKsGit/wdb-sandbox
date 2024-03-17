type RatingProps = {
  rating: number;
};

const originalClassName = ['fa-solid', 'fa-star'].join(' ');

const Rating = (props: RatingProps) => {
  const { rating } = props;
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < rating) {
          return <i key={index} className={`${originalClassName} text-primary-700`}></i>;
        }
        return <i key={index} className={`${originalClassName} text-secondary-300`}></i>;
      })}
    </div>
  );
};

export default Rating;
