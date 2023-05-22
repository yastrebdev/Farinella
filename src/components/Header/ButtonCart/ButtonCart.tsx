import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../../assets/image/cart-icon.svg'
import mod from './ButtonCart.module.scss'

const ButtonCart = () => {
  return (
    <Link className={mod.button} to='/cart'>
      <div className={mod.marker}></div>
      <CartIcon className={mod.icon}/>
      <span>3</span>
    </Link>
  );
}

export default ButtonCart