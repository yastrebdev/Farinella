import Sort from './Sort/Sort';
import mod from './HeaderFilter.module.scss'
import Categories from '../../Categories/Categories';

const HeaderFilter = () => {
  return (
    <div className={mod.main}>
      <div className='container'>
        <Categories />
        <div className={mod.main__wrapper}>
          <Sort />
        </div>
      </div>
    </div>
  );
}

export default HeaderFilter