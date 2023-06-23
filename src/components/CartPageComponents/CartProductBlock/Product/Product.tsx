import React from 'react';
import {
  CartItem,
  SupplementsItem,
  addIngredient,
  clearIngredients,
  minusIngredient,
  removeIngredient,
} from '../../../../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hook';
import { removeItem } from '../../../../redux/slices/cartSlice';
import { ReactComponent as Close } from '../../../../assets/image/close.svg';
import { RootState } from '../../../../redux/store';
import Counter from '../../../Counter/Counter';
import mod from './Product.module.scss';
import Supplements from './Supplements/Supplements';

const Product: React.FC<CartItem> = ({ urlImg, productName, description, price, count, id }) => {
  const { supplements } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const productIngredients = supplements.filter((item) => item.asProductId === id);

  const clickItemRemove = () => {
    if (window.confirm('Правда удалить?')) {
      dispatch(removeItem(id));
      productIngredients.map((item) => dispatch(clearIngredients(item)));
    }
  };

  const addSupplements = (name: string) => {
    const ingredient: SupplementsItem = {
      namePlusId: id + name,
      asProductId: id,
      name,
      urlImg,
      price,
      count: 0,
    };
    dispatch(addIngredient(ingredient));
  };

  const countMinus = (name: string, count: number) => {
    const namePlusId = id + name;
    dispatch(minusIngredient(namePlusId));
    count < 2 && deleteIngredient(namePlusId);
  };

  const deleteIngredient = (namePlusId: string) => {
    dispatch(removeIngredient(namePlusId));
  };

  return (
    <div className={mod.main}>
      <div className={mod.main__img}>
        <img src={urlImg} alt="product" />
      </div>
      <div className={mod.main__wrapper}>
        <div className={mod.main__content}>
          <div className={mod.main__header}>
            <h5 className={mod.main__title}>{productName}</h5>
            <p className={mod.main__description}>{description}</p>
          </div>
          <div className={mod.main__footer}>
            <div className={mod.main__counter}>
              <Counter count={count} id={id} />
            </div>
            <span className={mod.main__price}>{price * count} ₽</span>
          </div>
        </div>
        <Supplements
          productIngredients={productIngredients}
          addSupplements={addSupplements}
          countMinus={countMinus}
          deleteIngredient={deleteIngredient}
        />
      </div>
      <Close onClick={clickItemRemove} className={mod.main__close} />
    </div>
  );
};

export default Product;
