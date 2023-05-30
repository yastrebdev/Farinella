import Sort from './Sort/Sort';
import mod from './HeaderFilter.module.scss'
import Categories from '../../Categories/Categories';

const HeaderFilter = () => {
  return (
    <div className={mod.main}>
      <div className='container'>
        <div className={mod.main__wrapper}>
          <Categories />
          <Sort />
        </div>
      </div>
    </div>
  );
}

export default HeaderFilter