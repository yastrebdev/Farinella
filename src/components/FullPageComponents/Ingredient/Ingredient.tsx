import { SupplementsItem, addIngredient, minusIngredient, removeIngredient } from '../../../redux/slices/cartSlice';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import {ReactComponent as Plus} from '../../../assets/image/plus.svg'
import {ReactComponent as Minus} from '../../../assets/image/minus.svg'
import mod from './Ingredient.module.scss';
import { RootState } from '../../../redux/store';
// import Counter from '../../Counter/Counter';

const Ingredient = ({ name, urlImg, price }: SupplementsItem) => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const namePlusId = id + name;

  const addSupplements = (): any => {
    const ingredient: any = {
      namePlusId,
      asProductId: id,
      name,
      urlImg,
      price,
      count: 0,
    };
    dispatch(addIngredient(ingredient));
  };

  const selectCartItemByName = (namePlusId: string) => (state: RootState) => state.cart.supplements.find((obj) => obj.namePlusId === namePlusId)
  const cartItem = useAppSelector(selectCartItemByName(namePlusId ? namePlusId : ''));
  const addedCount = cartItem ? cartItem.count : 0;

  const countMinus = () => {
    dispatch(minusIngredient(namePlusId));
    deleteIngredient()
  }

  const deleteIngredient = () => {
    addedCount === 1 && dispatch(removeIngredient(namePlusId))
  }

  return (
    <div className={mod.main__item}>
      <img src={urlImg} alt={name} />
      <h5>{name}</h5>
      <span className={mod.main__price}>+ {price} ₽</span>

      {/* <Counter count={0} id={id !== undefined ? id : ''}/> */}
      <div className={mod.counter}>
        {addedCount === 0 ? (
          <Minus
            onClick={countMinus}
            className={mod.counter__point}
            style={{
              opacity: 0.5,
              pointerEvents: 'none',
            }}
          />
        ) : (
          <Minus onClick={countMinus} className={mod.counter__point} />
        )}
        <span>{addedCount}</span>
        <Plus onClick={addSupplements} className={mod.counter__point} />
      </div>
    </div>
  );
};

export default Ingredient;
