import CartProductBlock from '../components/CartPageComponents/CartProductBlock/CartProductBlock';
import Order from '../components/CartPageComponents/Order/Order';
import mod from '../scss/Cart.module.scss'

const Cart = () => {
  return (
    <div className={mod.cart}>
      <div className='container'>
        <div className={mod.cart__wrapper}>
          <CartProductBlock />
          <Order />
        </div>
      </div>
    </div>
  );
}

export default Cart