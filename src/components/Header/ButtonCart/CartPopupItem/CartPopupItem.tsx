import { ReactComponent as Close } from '../../../../assets/image/close.svg';
import { CartItem, removeItem } from '../../../../redux/slices/cartSlice';
import mod from './CartPopupItem.module.scss'
import Counter from '../../../Counter/Counter';
import { useAppDispatch } from '../../../../hooks/hook';

const CartPopupItem: React.FC<CartItem> = ({ urlImg, productName, price, count, id }) => {
  const dispatch = useAppDispatch();

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
          <Close onClick={clickItemRemove} className={mod.main__close}/>
        </div>
        <div className={mod.main__footer}>
          <div className={mod.main__counter}>
            <Counter count={count} id={id}/>
          </div>
          <span className={mod.main__price}>{price * count} ₽</span>
        </div>
      </div>
    </div>
  );
}

export default CartPopupItem