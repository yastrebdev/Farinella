import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../../assets/image/cart-icon.svg';
import { ReactComponent as Close } from '../../../assets/image/close.svg';
import { useAppSelector } from '../../../app/hook';
import { RootState } from '../../../redux/store';
import CartPopupItem from './CartPopupItem/CartPopupItem';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import mod from './ButtonCart.module.scss';

const ButtonCart = () => {
  const { items } = useAppSelector((state: RootState) => state.product);
  const [overflow, setOverflow] = useState(false);

  const visibleCart = () => {
    setOverflow(!overflow);
  };

  const hiddenCart = () => {
    setOverflow(false);
  };

  return (
    <>
      <button onClick={visibleCart} className={mod.button}>
        <div className={mod.marker}></div>
        <CartIcon className={mod.icon} />
        <span>3</span>
      </button>
      <div className={mod.cart}>
        <div
          className={`${overflow === true ? `${mod.cart__active}` : ''} ${
            mod.cart__overflow
          }`}></div>
        <div className={`${overflow === true ? `${mod.cart__popup_open}` : ''} ${mod.cart__popup}`}>
          <div className={mod.cart__header}>
            <h4>Корзина</h4>
            <Close onClick={hiddenCart} className={mod.cart__close} />
          </div>
          <div className={mod.cart__product}>
            <div className={mod.cart__items}>
              {items.map((item) => (
                <CartPopupItem key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className={mod.cart__footer}>
            <div className={mod.cart__total}>
              <h3>Итого:</h3>
              <span>4000 ₽</span>
            </div>
            <Link to='/cart' className={mod.cart__button}>
              <ButtonPrimary buttonText={'Перейти к оформлению'}/>
            </Link>
            <button className={mod.cart__clear}>Очистить корзину</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonCart;
