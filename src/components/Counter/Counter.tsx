import React from 'react'
import { ReactComponent as Minus } from '../../assets/image/minus.svg'
import { ReactComponent as Plus } from '../../assets/image/plus.svg'
import mod from './Counter.module.scss';

type CounterProps = {
  count: number;
}

const Counter: React.FC<CounterProps> = ({count}) => {
  return (
    <div className={mod.counter}>
      <Minus className={mod.counter__point} />
      <span>{count}</span>
      <Plus className={mod.counter__point} />
    </div>
  );
};

export default Counter;
