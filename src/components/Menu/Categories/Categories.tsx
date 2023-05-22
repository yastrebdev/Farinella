import mod from './Categories.module.scss';

const Categories = () => {
  const categories = ['Напитки', 'Пицца', 'Акции', 'Закуски', 'Еще что-то', 'Паста'];
  return (
    <div className={mod.categories}>
      <ul className={mod.list}>
        {categories.map((categoryName, i) => (
          <li className={mod.item} key={i}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
