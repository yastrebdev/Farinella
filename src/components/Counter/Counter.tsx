import React from 'react';
import { ReactComponent as Minus } from '../../assets/image/minus.svg';
import { ReactComponent as Plus } from '../../assets/image/plus.svg';
import mod from './Counter.module.scss';
import { useAppDispatch } from '../../hooks/hook';
import { CartItem as CartItemType, addItem, minusItem } from '../../redux/slices/cartSlice';

type CounterProps = {
  count: number;
  id: string;
};

const Counter: React.FC<CounterProps> = ({ count, id }) => {
  const dispatch = useAppDispatch();

  const countPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItemType),
    );
  };

  const countMinus = () => {
    dispatch(minusItem(id));
  };

  return (
    <div className={mod.counter}>
      {
        count === 1 ? (
          <Minus onClick={countMinus} className={mod.counter__point} style={{
            opacity: 0.5,
            pointerEvents: 'none',
          }}/>
        ) : (
          <Minus onClick={countMinus} className={mod.counter__point} />
        )
      }
      <span>{count}</span>
      <Plus onClick={countPlus} className={mod.counter__point} />
    </div>
  );
};

export default Counter;
