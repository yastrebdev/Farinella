import { ReactComponent as Plus } from '../../../../../assets/image/plus.svg'
import { ReactComponent as Minus } from '../../../../../assets/image/minus.svg'
import { SupplementsItem } from '../../../../../redux/slices/cartSlice';
import mod from './Supplements.module.scss';

type SupplementsProps = {
  productIngredients: SupplementsItem[];
  addSupplements: (name: string) => void;
  countMinus: (name: string, count: number) => void;
}

const Supplements: React.FC<SupplementsProps> = ({productIngredients, addSupplements, countMinus}) => {
  return (
    <div className={mod.supplements}>
      {productIngredients.map((item: SupplementsItem) => (
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
  );
};

export default Supplements;
