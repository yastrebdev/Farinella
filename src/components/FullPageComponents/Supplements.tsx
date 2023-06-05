import { ReactComponent as Plus } from '../../assets/image/plus.svg'
import mod from './Supplements.module.scss';

const Supplements: React.FC<any> = ({ingredients}) => {

  return (
    <div className={mod.main}>
      <h4>Платные добавки</h4>
      <div className={mod.main__supplements}>
        {ingredients.map((ingredient: any, index: number) =>
          <div className={mod.main__item} key={index}>
            <img src={ingredient.urlImg} alt={ingredient.name} />
            <h5>{ingredient.name}</h5>
            <span>+ {ingredient.price} ₽</span>
            <button>
              <Plus className={mod.main__plus}/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Supplements;
