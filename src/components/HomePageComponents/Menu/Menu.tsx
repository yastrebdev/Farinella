import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { RootState } from '../../../redux/store';
import { ProductItem, fetchProducts } from '../../../redux/slices/productSlice';

import HeaderBlock from '../../TitleBlock/TitleBlock';
import Categories from '../../Categories/Categories';
import ProductCard from '../../ProductCard/ProductCard';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import Skeleton from '../../Skeleton';

import mod from './Menu.module.scss';

const Menu = () => {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const skeletonsProducts = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const filterProducts = products.filter((item: ProductItem) => item.rating >= 4);
  const menu = filterProducts.map((item: ProductItem) => <ProductCard {...item} />);

  const skeletonsSets = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
  const sets = products.filter((item: any) => item.set);
  const productsSets = sets.map((item: any) => <ProductCard {...item} />);

  return (
    <div id="menu" className={mod.menu}>
      <div className="container">
        <HeaderBlock title={'Меню'} description={'Это вкусно'} />
        <Categories />
        <h3 className={mod.title}>Пицца</h3>
        <div className={`${mod.product_block} ${mod.product_block__margin}`}>
          {status === 'loading' ? skeletonsProducts : menu}
          {status === 'error' && <h2>Что-то пошло не так :/</h2>}
        </div>
        <h3 className={`${mod.title} ${mod.title_sub}`}>
          Наборы для тех <br />
          кому лень выбирать
        </h3>
        <p className={mod.title_desc}>
          Выберите комбо на свой вкус, для себя,
          <br /> большой семьи или компании
        </p>
        <div className={`${mod.product_block} ${mod.product_block__margin}`}>
          {status === 'loading' ? skeletonsSets : productsSets}
          {status === 'error' && <h2>Что-то пошло не так :/</h2>}
        </div>
        <div className={mod.menu__button}>
          <Link to="/catalog">
            <ButtonPrimary buttonText={'Полное меню'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
