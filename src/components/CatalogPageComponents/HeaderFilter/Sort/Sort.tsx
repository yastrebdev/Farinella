import { useState } from 'react';
import { ReactComponent as Arrow } from '../../../../assets/image/arrow-sort.svg';
import mod from './Sort.module.scss';

type SortItem = {
  name: string;
};

export const sortList: SortItem[] = [
  { name: 'Популярности' },
  { name: 'Цене (↑↑)' },
  { name: 'Цене (↓↓)' },
];

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const onClickSortItem = (i: number) => {
    setSelected(i);
    setOpen(false);
  };

  return (
    <div className={mod.main}>
      <span className={mod.main__sortby}>Сортировать по:</span>
      <div className={mod.main__button}>
        <span onClick={() => setOpen(!open)}>{sortList[selected].name}</span>
        <Arrow />
      </div>
      {open && (
        <div className={mod.main__popup}>
          <ul>
            {sortList.map((item, i) => (
              <li
                key={i}
                className={selected === i ? `${mod.main__active}` : ''}
                onClick={() => onClickSortItem(i)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
