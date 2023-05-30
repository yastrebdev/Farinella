import { useAppSelector } from '../../../app/hook';
import { RootState } from '../../../redux/store';
import Product from './Product/Product';
import mod from './CartProductBlock.module.scss'

const CartProductBlock = () => {
  const { items } = useAppSelector((state: RootState) => state.product);
  return (
    <div className={mod.main}>
      <div className={mod.main__product}>
        {items.map((item) => (
          <Product key={item.id} {...item}/>
        ))}
      </div>
      <div className={mod.main__total}>
        <h4>Итого</h4>
        <span>2 997 ₽</span>
      </div>
    </div>
  );
}

export default CartProductBlock