import mod from './Supplements.module.scss';
import Ingredient from './Ingredient/Ingredient';
import { SupplementsItem } from '../../redux/slices/cartSlice';

const Supplements: React.FC<any> = ({ ingredients }) => {
  console.log(ingredients)
  return (
    <div className={mod.main}>
      <h4>Платные добавки</h4>
      <div className={mod.main__supplements}>
        {ingredients.map((ingredient: SupplementsItem, index: number) => (
          <Ingredient key={index} {...ingredient} />
        ))}
      </div>
    </div>
  );
};

export default Supplements;
