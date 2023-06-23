import { ReactComponent as Close } from '../../../../assets/image/close.svg';
import {
  CartItem,
  SupplementsItem,
  addIngredient,
  minusIngredient,
  removeIngredient,
  removeItem,
} from '../../../../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hook';
import { RootState } from '../../../../redux/store';
import Counter from '../../../Counter/Counter';
import mod from './CartPopupItem.module.scss';
import Supplements from './Supplements/Supplements';

const CartPopupItem: React.FC<CartItem> = ({ urlImg, productName, price, count, id }) => {
  const dispatch = useAppDispatch();

  const { supplements } = useAppSelector((state: RootState) => state.cart);
  const productIngredients = supplements.filter((item) => item.asProductId === id);

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

  const clickItemRemove = () => {
    if (window.confirm('Правда удалить?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={mod.main}>
      <div className={mod.main__wrapper}>
        <div className={mod.main__img}>
          <img src={urlImg} alt="product" />
        </div>

        <div className={mod.main__content}>
          <div className={mod.main__header}>
            <h5 className={mod.main__title}>{productName}</h5>
            <Close onClick={clickItemRemove} className={mod.main__close} />
          </div>
          <div className={mod.main__footer}>
            <div className={mod.main__counter}>
              <Counter count={count} id={id} />
            </div>
            <span className={mod.main__price}>{price * count} ₽</span>
          </div>
        </div>
      </div>
      <Supplements
        productIngredients={productIngredients}
        addSupplements={addSupplements}
        countMinus={countMinus}
      />
    </div>
  );
};

export default CartPopupItem;
