import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import mod from '../scss/FullProductCard.module.scss';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';
import { CartItem, addItem } from '../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { RootState } from '../redux/store';
import Supplements from '../components/FullPageComponents/Supplements';

export type Supplement = {
  urlImg: string,
  name: string,
  price: number
}

const FullProductCard = () => {
  const dispatch = useAppDispatch();

  const [supplements, setSupplements] = useState([]);

  const [product, setProduct] = useState<{
    id: string;
    urlImg: string;
    productName: string;
    price: number;
    description: string;
    added: Supplement;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(product)

  const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id)
  const cartItem = useAppSelector(selectCartItemById(id ? id : ''));

  const addedCount = cartItem ? cartItem.count : 0;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get('https://646c82af7b42c06c3b2b65e5.mockapi.io/items/' + id);
        setProduct(data);
        setSupplements(data.added);
      } catch (error) {
        alert('Ошибка при получении товара');
        navigate('/');
      }
    }
    fetchProduct();
  }, []);

  const addToCart = () => {
    const item: any = {
      ...product,
      count: 0,
    };
    dispatch(addItem(item));
  };

  if (!product) {
    return (
      <div className={mod.wrapper}>
        <div className={mod.loader}>
          <div className={mod.circles}>
            <span className={mod.one}></span>
            <span className={mod.two}></span>
            <span className={mod.three}></span>
          </div>
          <div className={mod.pacman}>
            <span className={mod.top}></span>
            <span className={mod.bottom}></span>
            <span className={mod.left}></span>
            <div className={mod.eye}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={mod.main}>
      <div className="container">
        <div className={mod.main__wrapper}>
          <div className={mod.main__product}>
            <img src={product.urlImg} />
            <div className={mod.main__information}>
              <div className={mod.main__header}>
                <h2>{product.productName}</h2>
                <p className={mod.main__description}>{product.description}</p>
                <h4>{product.price} ₽</h4>
              </div>
              <div className={mod.main__body}>
                <div className={mod.main__sizes}>
                  <h5>Выберите размер</h5>
                  <form action="size">
                    <label>
                      <input type="radio" name="size" />
                      <span>M - 20см</span>
                    </label>
                    <label>
                      <input type="radio" name="size" />
                      <span>L - 25см</span>
                    </label>
                    <label>
                      <input type="radio" name="size" />
                      <span>XL - 30см</span>
                    </label>
                    <label>
                      <input type="radio" name="size" />
                      <span>XXL - 35см</span>
                    </label>
                  </form>
                </div>
                <div className={mod.main__portions}>
                  <h6>в порции</h6>
                  <div className={mod.main__portionsBlock}>
                    <div className={mod.main__portionsList}>
                      <div className={mod.main__portionsItem}>
                        <span>960</span>
                        <span>Калории</span>
                      </div>
                      <div className={mod.main__portionsItem}>
                        <span>38</span>
                        <span>Белки</span>
                      </div>
                      <div className={mod.main__portionsItem}>
                        <span>36</span>
                        <span>Жири</span>
                      </div>
                      <div className={mod.main__portionsItem}>
                        <span>75</span>
                        <span>Углеводы</span>
                      </div>
                    </div>
                    <div>
                      <span className={mod.main__portionsDesc}>КБЖУ указано без доп добавок</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={mod.main__footer}>
                <div className={mod.main__button}>
                  <ButtonPrimary
                    buttonText="Беру"
                    count={addedCount}
                    counter={true}
                    onClick={addToCart}
                  />
                </div>
              </div>
            </div>
          </div>
          <Supplements ingredients={supplements}/>
        </div>
      </div>
    </div>
  );
};

export default FullProductCard;
