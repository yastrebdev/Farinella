import { SupplementsItem } from '../../../../../redux/slices/cartSlice';
import { ReactComponent as Plus } from '../../../../../assets/image/plus.svg';
import { ReactComponent as Minus } from '../../../../../assets/image/minus.svg';
import { ReactComponent as Close } from '../../../../../assets/image/close.svg';
import mod from './Supplements.module.scss';

type SupplementsProps = {
  productIngredients: SupplementsItem[];
  addSupplements: (name: string) => void;
  countMinus: (name: string, count: number) => void;
  deleteIngredient: (namePlusId: string) => void;
}

const Supplements: React.FC<SupplementsProps> = ({productIngredients, addSupplements, countMinus, deleteIngredient}) => {
  return (
    <div className={mod.supplements}>
      {productIngredients.map((item: SupplementsItem) => (
        <div className={mod.supplements__item}>
          <img src={item.urlImg} alt="" />
          <Close
            onClick={() => {
              deleteIngredient(item.namePlusId);
            }}
            className={mod.supplements__close}
          />
          <div className={mod.supplements__info}>
            <span className={mod.supplements__name}>
              {item.name}
              <span className={mod.supplements__count}>{item.count > 1 && `X${item.count}`}</span>
            </span>
            <span className={mod.supplements__price}>{item.price * item.count} ₽</span>
          </div>
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
      ))}
    </div>
  );
};

export default Supplements;
