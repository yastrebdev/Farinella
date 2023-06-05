import { useState } from 'react';
import LogoSvgBlack from '../../assets/image/logo-black.svg';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonCart from './ButtonCart/ButtonCart';
import Navigation from './Navigation';
import mod from './Header.module.scss';
import Search from './Search/Search';
import { Link, useLocation } from 'react-router-dom';
import Popup from './Popup/Popup';

const Header = () => {
  const [activePopup, setOpenPopup] = useState(false);
  const location = useLocation();

  const openPopup = () => {
    setOpenPopup(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      {activePopup && <Popup setOpenPopup={setOpenPopup} />}
      <div id="top" className={mod.header}>
        <div className="container">
          <div className={mod.wrapper}>
            <Link to="/farinella">
              <img src={LogoSvgBlack} alt="farinella" />
            </Link>
            <Navigation />
            <ButtonPrimary buttonText={'Связаться с нами'} onClick={openPopup} />
            <div className={mod.user_panel}>
              {location.pathname !== '/cart' && <ButtonCart />}
              <Search />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
