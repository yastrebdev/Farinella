import { useRef } from 'react';
// import { useAppDispatch } from '../../hooks/hook';
// import { addIngridient } from '../../redux/slices/cartSlice';
import mod from './Supplements.module.scss';
import Ingredient from './Ingredient/Ingredient';

const Supplements: React.FC<any> = ({ ingredients }) => {
  const buttonRef = useRef<(HTMLButtonElement | null)[]>([]);
  // const dispatch = useAppDispatch();

  // const addSupplements = (index: number): any => {
  //   const ingredient: any = {
  //     seqnum: id,
  //     ...ingredients[index],
  //   };
  //   dispatch(addIngridient(ingredient));
  // };

  return (
    <div className={mod.main}>
      <h4>Платные добавки</h4>
      <div className={mod.main__supplements}>
        {ingredients.map((ingredient: any, index: number) => (
          <Ingredient key={index} {...ingredient} />
        ))}
      </div>
    </div>
  );
};

export default Supplements;
