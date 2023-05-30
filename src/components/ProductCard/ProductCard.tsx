import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../app/hook';
import { addItem } from '../../redux/slices/productSlice';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import mod from './ProductCard.module.scss';

type ProductCardProps = {
  id: string;
  urlImg: string;
  productName: string;
  description: string;
  price: string;
};

export type CartItem = {
  id: string;
  urlImg: string;
  productName: string;
  description: string;
  price: string;
  count: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  urlImg,
  productName,
  description,
  price,
}) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);

  const addToCart = () => {
    const item: CartItem = {
      id,
      urlImg,
      productName,
      description,
      price,
      count: 0,
    };
    dispatch(addItem(item))
    addProduct()
  };

  const addProduct = () => {
    setCount(count + 1);
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
            <ButtonPrimary buttonText={'Подробнее'} height={'40px'} fontSize={'14px'}/>
          </Link>
          <div className={mod.buy_block}>
            {/* <div className={mod.counter}>
              <button>
                <Minus />
              </button>
              <span>0</span>
              <button>
                <Plus />
              </button>
            </div> */}
            <div className={mod.button}>
              <ButtonPrimary
                buttonText={'Беру'}
                height={'40px'}
                fontSize={'14px'}
                counter={true}
                count={count}
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
