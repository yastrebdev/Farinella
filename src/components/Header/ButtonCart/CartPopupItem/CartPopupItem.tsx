import { ReactComponent as Close } from '../../../../assets/image/close.svg';
import { CartItem, addIngredient, minusIngredient, removeIngredient, removeItem } from '../../../../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hook';
import { RootState } from '../../../../redux/store';
import { ReactComponent as Plus } from '../../../../assets/image/plus.svg'
import { ReactComponent as Minus } from '../../../../assets/image/minus.svg'
import Counter from '../../../Counter/Counter';
import mod from './CartPopupItem.module.scss';

const CartPopupItem: React.FC<CartItem> = ({ urlImg, productName, price, count, id }) => {
  const dispatch = useAppDispatch();

  const { supplements } = useAppSelector((state: RootState) => state.cart);
  const productIngredients = supplements.filter((item) => item.asProductId === id);

  const addSupplements = (name: string): any => {
    const ingredient: any = {
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

      <div className={mod.supplements}>
        {productIngredients.map((item: any) => (
          <div className={mod.supplements__item}>
            <span>{item.name}</span>
            <div className={mod.supplements__sum}>
              <span>{item.price * item.count} ₽</span>
              <div className={mod.supplements__counter}>
                <div>
                  <Minus
                    onClick={() => {
                      countMinus(item.name, item.count);
                    }}
                    className={mod.supplements__counter__button}
                  />
                </div>
                <span>{item.count}</span>
                <div>
                  <Plus
                    onClick={() => {
                      addSupplements(item.name);
                    }}
                    className={mod.supplements__counter__button}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPopupItem;
