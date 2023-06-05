import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../../assets/image/cart-icon.svg';
import { ReactComponent as Close } from '../../../assets/image/close.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { RootState } from '../../../redux/store';
import { useMatchMedia } from '../../../hooks/use-match-media';
import { useScrollbar } from '../../../hooks/use-scrollbar';
import { clearItems } from '../../../redux/slices/cartSlice';

import CartPopupItem from './CartPopupItem/CartPopupItem';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';

import mod from './ButtonCart.module.scss';

const ButtonCart = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state: RootState) => state.cart);
  const [overflow, setOverflow] = useState(false);

  const ref = useRef(null);
  useOutsideClick(ref, () => setOverflow(false));

  // scroll settings -------------------- //
  const [scroll, setScroll] = useState(0);
  const { isMobile }: any = useMatchMedia();
  const itemsWrapper = useRef(null);
  const hasScroll = !isMobile && items.length > 3;
  useScrollbar(itemsWrapper, hasScroll);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollNow = document.documentElement.clientHeight;
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  // scroll settings -------------------- //

  const totalCount = items.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.count, 0);

  const visibleCart = () => {
    setOverflow(!overflow);
    window.document.body.style.overflow = 'hidden';
  };

  const hiddenCart = () => {
    setOverflow(false);
    window.document.body.style.overflow = 'visible';
  };

  const clearCart = () => {
    if (window.confirm('Правда очистить?')) {
      dispatch(clearItems());
    }
    hiddenCart();
  };

  return (
    <>
      <button onClick={visibleCart} className={mod.button}>
        {totalCount > 0 && <div className={mod.marker}></div>}
        <CartIcon className={mod.icon} />
        <span>{totalCount}</span>
      </button>
      {scroll > scrollNow && (
        <button
          onClick={visibleCart}
          className={`${scroll > scrollNow + 50 ? `${mod.buttonFixedVisible}` : ''} ${
            mod.buttonFixed
          }`}>
          <div>
            {totalCount > 0 && <div className={mod.marker}></div>}
            <CartIcon className={mod.iconFixed} />
            <span>{totalCount}</span>
          </div>
        </button>
      )}
      <div className={mod.cart}>
        <div
          className={`${overflow === true ? `${mod.cart__active}` : ''} ${
            mod.cart__overflow
          }`}></div>
        <div ref={ref} className={`${overflow === true ? `${mod.cart__popup_open}` : ''} ${mod.cart__popup}`}>
          <div className={mod.cart__header}>
            <h4>Корзина</h4>
            <Close onClick={hiddenCart} className={mod.cart__close} />
          </div>
          <div className={mod.cart__product} ref={itemsWrapper}>
            {items.length === 0 && (
              <div className={mod.cart__empty}>
                <CartIcon className={mod.cart__icon} />
                <h4>Корзина пустая</h4>
              </div>
            )}
            <div className={mod.cart__items}>
              {items.map((item) => (
                <CartPopupItem key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className={mod.cart__footer}>
            {items.length > 0 && (
              <>
                <div className={mod.cart__total}>
                  <h3>Итого:</h3>
                  <span>{totalPrice} ₽</span>
                </div>
                <Link onClick={hiddenCart} to="/cart" className={mod.cart__button}>
                  <ButtonPrimary buttonText={'Перейти к оформлению'} />
                </Link>
                <button onClick={clearCart} className={mod.cart__clear}>
                  Очистить корзину
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

function useOutsideClick(ref: any, handler: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
        window.document.body.style.overflow = 'visible';
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}

export default ButtonCart;
