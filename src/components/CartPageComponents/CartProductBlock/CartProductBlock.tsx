import { useAppSelector } from '../../../hooks/hook';
import { RootState } from '../../../redux/store';
import Product from './Product/Product';
import { ReactComponent as CartIcon } from '../../../assets/image/cart-icon.svg';
import mod from './CartProductBlock.module.scss';
import { useResize } from '../../../hooks/use-resize';
import CartPopupItem from '../../Header/ButtonCart/CartPopupItem/CartPopupItem';

const CartProductBlock = () => {
  const { items, supplements } = useAppSelector((state: RootState) => state.cart);

  const supplementsPrice = supplements.reduce((acc, item) => acc + item.price * item.count, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.count + supplementsPrice, 0);

  const { width } = useResize()
  return (
    <div className={mod.main}>
      <div className={mod.main__product}>
        {items.map((item) => (
          width > 576 ? <Product key={item.id} {...item}/> : <CartPopupItem key={item.id} {...item}/>
        ))}
      </div>
      {items.length > 0 && (
        <div className={mod.main__total}>
          <h4>Итого</h4>
          <span>{totalPrice} ₽</span>
        </div>
      )}
      {items.length === 0 && (
        <div className={mod.cart__empty}>
          <CartIcon className={mod.cart__icon} />
          <h4>Корзина пустая</h4>
        </div>
      )}
    </div>
  );
};

export default CartProductBlock;
