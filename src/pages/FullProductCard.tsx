import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SupplementsItem, addItem } from '../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { RootState } from '../redux/store';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';
import Supplements from '../components/FullPageComponents/Supplements';
import mod from '../scss/FullProductCard.module.scss';
import Animation from '../components/FullPageComponents/DownloadAnimation/Animation';

const FullProductCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [product, setProduct] = useState<{
    id: string;
    urlImg: string;
    productName: string;
    price: number;
    description: string;
    added: SupplementsItem;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  const selectCartItemById = (id: string) => (state: RootState) =>
    state.cart.items.find((obj) => obj.id === id);

  const cartItem = useAppSelector(selectCartItemById(id ? id : ''));

  const addedCount = cartItem ? cartItem.count : 0;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get('https://646c82af7b42c06c3b2b65e5.mockapi.io/items/' + id);
        setProduct(data);
      } catch (error) {
        alert('Ошибка при получении товара');
        navigate('/');
      }
    }
    fetchProduct();
  }, [id, navigate]);

  const dispatch = useAppDispatch();

  const addToCart = () => {
    const item: any = {
      ...product,
      count: 0,
    };
    dispatch(addItem(item));
  };

  if (!product) {
    return <Animation />
  }

  return (
    <div className={mod.main}>
      <div className="container">
        <div className={mod.main__wrapper}>
          <div className={mod.main__product}>
            <img src={product.urlImg} alt='product'/>
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
          <Supplements ingredients={product.added} />
        </div>
      </div>
    </div>
  );
};

export default FullProductCard;
