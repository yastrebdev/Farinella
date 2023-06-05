import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { CartItem, addItem } from '../../redux/slices/cartSlice';
import { ProductItem } from '../../redux/slices/productSlice';
import { RootState } from '../../redux/store';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import mod from './ProductCard.module.scss';

const ProductCard: React.FC<ProductItem> = ({ id, urlImg, productName, description, price }) => {
  const dispatch = useAppDispatch();
  const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id)
  const cartItem = useAppSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const addToCart = () => {
    const item: CartItem = {
      id,
      urlImg,
      productName,
      description,
      price,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={mod.product_card}>
      <div className={mod.image_block}>
        <img className={mod.image} src={urlImg} alt="product" />
      </div>
      <div className={mod.product_content}>
        <div className={mod.content_top}>
          <h4 className={mod.product_name}>{productName}</h4>
          <p className={mod.product_desc}>{description}</p>
        </div>
        <div className={mod.content_bot}>
          <span className={mod.price}>{price} ₽</span>
          <Link to={`/product/${id}`} className={mod.button_info}>
            <ButtonPrimary buttonText={'Подробнее'} height={'40px'} fontSize={'14px'} />
          </Link>
          <div className={mod.buy_block}>
            <div className={mod.button}>
              <ButtonPrimary
                buttonText={'Беру'}
                height={'40px'}
                fontSize={'14px'}
                counter={true}
                count={addedCount}
                onClick={addToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
