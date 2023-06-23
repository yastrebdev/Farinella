import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/hook';
import { RootState } from '../../../redux/store';
import { ProductItem, fetchProducts } from '../../../redux/slices/productSlice';

import ProductCard from '../../ProductCard/ProductCard';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import Skeleton from '../../Skeleton';

import mod from './ProductBlock.module.scss';

const ProductBlock = () => {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsMap = products.map((obj: ProductItem) => <ProductCard {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className={mod.main}>
      <div className="container">
        <div className={mod.main__wrapper}>
          <div className={mod.main__products}>
            {status === 'loading' ? skeletons : productsMap}
            {status === 'error' && <h2>Что-то пошло не так :/</h2>}
          </div>
          <div className={mod.main__button}>
            <ButtonPrimary buttonText={'Показать еще'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
