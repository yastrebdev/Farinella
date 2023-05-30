import React from 'react'
import { CartItem } from '../../../ProductCard/ProductCard';
import { ReactComponent as Close } from '../../../../assets/image/close.svg';
import { ReactComponent as Minus } from '../../../../assets/image/minus.svg';
import { ReactComponent as Plus } from '../../../../assets/image/plus.svg';
import mod from './CartPopupItem.module.scss'

const CartPopupItem: React.FC<CartItem> = ({ urlImg, productName, price }) => {
  return (
    <div className={mod.main}>
      <div className={mod.main__img}>
        <img src={urlImg} alt="product" />
      </div>
      <div className={mod.main__content}>
        <div className={mod.main__header}>
          <h5 className={mod.main__title}>{productName}</h5>
          <Close className={mod.main__close}/>
        </div>
        <div className={mod.main__footer}>
          <div className={mod.main__counter}>
            <Minus className={mod.main__point}/>
            <span>1</span>
            <Plus className={mod.main__point}/>
          </div>
          <span className={mod.main__price}>{price} ₽</span>
        </div>
      </div>
    </div>
  );
}

export default CartPopupItem