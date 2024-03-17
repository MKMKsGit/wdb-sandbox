type PaginationProps = {
  totalPages: number;
  currentPage: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
};

const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage, onPageChange, onNextPage, onPrevPage } = props;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  return (
    <div className={'flex justify-center items-center mt-10'}>
      <i
        className={`fa-solid fa-angle-left px-4 py-2${isFirstPage ? ' opacity-0' : ' cursor-pointer'}`}
        onClick={isFirstPage ? () => {} : onPrevPage}
      ></i>
      <div>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`${currentPage === pageNumber ? 'bg-primary-900 text-white border-primary-900' : 'bg-white text-secondary-900'} px-4 py-2 border border-neutral-200 ml-[-1px]`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <i
        className={`fa-solid fa-angle-right px-4 py-2${isLastPage ? ' opacity-0' : ' cursor-pointer'}`}
        onClick={isLastPage ? () => {} : onNextPage}
      ></i>
    </div>
  );
};

export default Pagination;
