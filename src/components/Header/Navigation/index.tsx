import { Link, useLocation } from 'react-router-dom';
import { Link as A, animateScroll as scroll } from 'react-scroll';
import mod from './Navigation.module.scss';

const Navigation = () => {
  const location = useLocation();
  return (
    <ul className={mod.navigation}>
      {location.pathname !== '/farinella' ? (
        <Link className={mod.link} to="/farinella">
          На главную
        </Link>
      ) : (
        <>
          <A className={mod.link} to="menu" smooth={true}>
            Меню
          </A>
          <A className={mod.link} to="stocks" smooth={true}>
            Акции
          </A>
          <A className={mod.link} to="about" smooth={true}>
            О нас
          </A>
          <A className={mod.link} to="contacts" smooth={true}>
            Контакты
          </A>
        </>
      )}
      <Link className={mod.link} to="/track">
        Отследить заказ
      </Link>
    </ul>
  );
};

export default Navigation;
