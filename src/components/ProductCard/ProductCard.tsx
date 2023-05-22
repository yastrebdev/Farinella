import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { ReactComponent as Minus } from '../../assets/image/minus.svg';
import { ReactComponent as Plus } from '../../assets/image/plus.svg';
import mod from './ProductCard.module.scss';

type ProductCardProps = {
  id: string;
  urlImg: string;
  productName: string;
  description: string;
  price: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ urlImg, productName, description, price }) => {
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
          <div className={mod.button}>
            <ButtonPrimary buttonText={'Подробнее'} height={'40px'} fontSize={'14px'}/>
          </div>
          <div className={mod.buy_block}>
            <div className={mod.counter}>
              <button>
                <Minus />
              </button>
              <span>0</span>
              <button>
                <Plus />
              </button>
            </div>
            <ButtonPrimary buttonText={'Беру'} height={'40px'} fontSize={'14px'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
