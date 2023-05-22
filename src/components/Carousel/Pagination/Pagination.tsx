import React from 'react';
import mod from './Pagination.module.scss';

type PaginationProps = {
  quantity: number;
}

const Pagination: React.FC<PaginationProps> = ({ quantity }) => {

  const quantityPag = quantity
  const pagItems = []

  for (let i = 0; i < quantityPag; i++) {
    pagItems.push(i)
  }

  return (
    <div className={mod.pagination}>
      {
        pagItems.map((item, i) => <div key={i} className={mod.pagination__item}></div>)
      }
    </div>
  );
};

export default Pagination;
