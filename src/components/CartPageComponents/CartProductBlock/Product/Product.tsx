import React from 'react';
import { ReactComponent as Close } from '../../../../assets/image/close.svg';
import { CartItem } from '../../../../redux/slices/cartSlice';
import { useAppDispatch } from '../../../../hooks/hook';
import { removeItem } from '../../../../redux/slices/cartSlice'
import Counter from '../../../Counter/Counter';
import mod from './Product.module.scss';

const Product: React.FC<CartItem> = ({ urlImg, productName, description, price, count, id }) => {
  const dispatch = useAppDispatch()

  const clickItemRemove = () => {
    if (window.confirm('Правда удалить?')) {
      dispatch(removeItem(id));
    }
  }

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
          <div>
            <Counter count={count} id={id}/>
          </div>
          <span className={mod.main__price}>{price * count} ₽</span>
        </div>
      </div>
      <Close onClick={clickItemRemove} className={mod.main__close} />
    </div>
  );
};

export default Product;
