import { useState } from 'react';
import LogoSvgBlack from '../../assets/image/logo-black.svg';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonCart from './ButtonCart/ButtonCart';
import Navigation from './Navigation';
import mod from './Header.module.scss';
import Search from './Search/Search';
import { ReactComponent as Menu } from '../../assets/image/menu.svg';
import { Link, useLocation } from 'react-router-dom';
import Popup from './Popup/Popup';
import { useMatchMedia } from '../../hooks/use-match-media';
import { useResize } from '../../hooks/use-resize';

const Header = () => {
  const [activePopup, setOpenPopup] = useState(false);
  const location = useLocation();

  const openPopup = () => {
    setOpenPopup(true);
    document.body.style.overflow = 'hidden';
  };

  // const { isTablet, isMobile }: any = useMatchMedia();
  const { isScreenXl } = useResize();

  return (
    <>
      {activePopup && <Popup setOpenPopup={setOpenPopup} />}
      <div id="top" className={mod.header}>
        <div className="container">
          <div className={mod.wrapper}>
            <div className={mod.insideWrapper}>
              <div className={mod.logo}>
                <Link to="/farinella">
                  <img src={LogoSvgBlack} alt="farinella" />
                </Link>
              </div>
              {!isScreenXl ? (
                <div className={mod.burger}>
                  <button className={mod.burger__button}>
                    <Menu />
                  </button>
                </div>
              ) : (
                <div className={mod.navigation}>
                  <Navigation />
                  <ButtonPrimary buttonText={'Связаться с нами'} onClick={openPopup} />
                </div>
              )}
              <div className={mod.cart}>{location.pathname !== '/cart' && <ButtonCart />}</div>
            </div>
            <div className={mod.search}>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
