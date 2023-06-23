import mod from './Pagination.module.scss';

type PaginationProps = {
  quantity: number;
  paginationIndex: number;
  setPaginationIndex: (index: number) => void;
  slideIndex: number;
  setSlideIndex: (index: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  quantity,
  paginationIndex,
  setPaginationIndex,
  slideIndex,
  setSlideIndex
}) => {
  const quantityPag = quantity;
  const pagItems = [];

  for (let i = 0; i < quantityPag; i++) {
    pagItems.push(i);
  }

  const clickPaginationItem = (i: number) => {
    setPaginationIndex((paginationIndex = i));
    setSlideIndex(slideIndex = i)
  };

  return (
    <div className={mod.pagination}>
      {pagItems.map((item, i) => (
        <div
          onClick={() => {
            clickPaginationItem(i);
          }}
          key={i}
          className={
            paginationIndex === i
              ? `${mod.pagination__item} ${mod.pagination__active}`
              : `${mod.pagination__item}`
          }></div>
      ))}
    </div>
  );
};

export default Pagination;
