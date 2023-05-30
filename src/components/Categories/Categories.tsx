import { useState } from 'react';
import mod from './Categories.module.scss';

const Categories = () => {
  const [avtiveindex, setActiveIndex] = useState(0);

  const onClickCategory = (index: number) => {
    setActiveIndex(index)
  }

  const categories = ['Напитки', 'Пицца', 'Акции', 'Закуски', 'Паста'];
  return (
    <div className={mod.categories}>
      <ul className={mod.list}>
        {categories.map((categoryName, index) => (
          <li onClick={() => onClickCategory(index)} className={avtiveindex === index ? `${mod.active}` : ''} key={index}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
