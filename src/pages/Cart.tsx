import { useEffect } from 'react';
import { RootState } from '../redux/store';
import { useAppSelector } from '../hooks/hook';
import CartProductBlock from '../components/CartPageComponents/CartProductBlock/CartProductBlock';
import Order from '../components/CartPageComponents/Order/Order';
import mod from '../scss/Cart.module.scss'

const Cart = () => {
  const { items } = useAppSelector((state: RootState) => state.cart);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={mod.cart}>
      <div className='container'>
        <div className={mod.cart__wrapper}>
          <CartProductBlock />
          {
            items.length > 0 &&
            <Order />
          }
        </div>
      </div>
    </div>
  );
}

export default Cart