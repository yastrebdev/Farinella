import LogoSvgBlack from '../../assets/image/logo-black.svg'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonCart from './ButtonCart/ButtonCart';
import Navigation from './Navigation';
import mod from './Header.module.scss'
import Search from './Search/Search';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={mod.header}>
      <div className='container'>
        <div className={mod.wrapper}>
          <Link to='/'>
            <img src={LogoSvgBlack} alt="farinella" />
          </Link>
          <Navigation />
          <ButtonPrimary buttonText={'Связаться с нами'}/>
          <div className={mod.user_panel}>
            <ButtonCart />
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header