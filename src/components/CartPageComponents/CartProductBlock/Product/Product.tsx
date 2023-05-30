import React from 'react';
import { CartItem } from '../../../ProductCard/ProductCard';
import { ReactComponent as Close } from '../../../../assets/image/close.svg';
import Counter from '../../../Counter/Counter';
import mod from './Product.module.scss';

const Product: React.FC<CartItem> = ({ urlImg, productName, description, price, count }) => {
  return (
    <div className={mod.main}>
      <div className={mod.main__img}>
        <img src={urlImg} alt="product" />
      </div>
      <div className={mod.main__content}>
        <div className={mod.main__header}>
          <h5 className={mod.main__title}>{productName}</h5>
          <p className={mod.main__description}>{description}</p>
        </div>
        <div className={mod.main__footer}>
          <Counter count={count}/>
          <span className={mod.main__price}>{price} ₽</span>
        </div>
      </div>
      <Close className={mod.main__close} />
    </div>
  );
};

export default Product;
