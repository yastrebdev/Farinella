import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useResize } from '../../hooks/use-resize';
import { Link as A } from 'react-scroll';
import { ReactComponent as Menu } from '../../assets/image/menu.svg';
import { ReactComponent as Close } from '../../assets/image/close.svg';
import LogoSvgBlack from '../../assets/image/logo-black.svg';
import LogoSvgWhite from '../../assets/image/logo-white.svg';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonCart from './ButtonCart/ButtonCart';
import Navigation from './Navigation';
import Search from './Search/Search';
import Popup from './Popup/Popup';
import mod from './Header.module.scss';

const Header = () => {
  const [activePopup, setOpenPopup] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const hidden = () => (document.body.style.overflow = 'hidden');
  const visible = () => (document.body.style.overflow = 'visible');

  const openPopup = () => {
    setOpenPopup(true);
    hidden();
  };

  const clickBurger = () => {
    setOpenMenu(true);
    hidden()
  };

  const closeBurger = () => {
    setOpenMenu(false);
    visible()
  }

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
                <>
                  <div className={mod.burger}>
                    <button onClick={clickBurger} className={mod.burger__button}>
                      <Menu />
                    </button>
                  </div>
                  <div className={mod.menu}>
                    <div
                      className={`${openMenu === true ? `${mod.menu__popup__open}` : ''} ${
                        mod.menu__popup
                      }`}>
                      <div className={mod.menu__header}>
                        <button onClick={closeBurger} className={mod.menu__burger}>
                          <Close className={mod.menu__burger__icon} />
                        </button>
                        <img src={LogoSvgWhite} alt="logoWite" />
                      </div>
                      <div className={mod.menu__body}>
                        <ul className={mod.menu__navigation}>
                          {location.pathname !== '/farinella' ? (
                            <Link onClick={closeBurger} className={mod.menu__link} to="/farinella">
                              На главную
                            </Link>
                          ) : (
                            <>
                              <A onClick={closeBurger} className={mod.menu__link} to="menu" smooth={true}>
                                Меню
                              </A>
                              <A onClick={closeBurger} className={mod.menu__link} to="stocks" smooth={true}>
                                Акции
                              </A>
                              <A onClick={closeBurger} className={mod.menu__link} to="about" smooth={true}>
                                О нас
                              </A>
                              <A onClick={closeBurger} className={mod.menu__link} to="contacts" smooth={true}>
                                Контакты
                              </A>
                            </>
                          )}
                          <Link onClick={closeBurger} className={mod.menu__link} to="/track">
                            Отследить заказ
                          </Link>
                        </ul>
                        {/* <button>Связаться с нами</button> */}
                        <ButtonPrimary buttonText={'Связаться с нами'} onClick={() => {
                            closeBurger()
                            openPopup()
                          }} 
                          bgColor={'#ffffff'}
                          color={'#2d2d2d'}
                        />
                      </div>
                    </div>
                  </div>
                </>
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
