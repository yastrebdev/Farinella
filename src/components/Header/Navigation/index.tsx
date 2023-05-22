import { Link } from 'react-router-dom'
import mod from './Navigation.module.scss'

const Navigation = () => {
  return (
    <ul className={mod.navigation}>
      <Link className={mod.link} to='menu'>Меню</Link>
      <Link className={mod.link} to='menu'>Акции</Link>
      <Link className={mod.link} to='menu'>О нас</Link>
      <Link className={mod.link} to='menu'>Контакты</Link>
      <Link className={mod.link} to='menu'>Отследить заказ</Link>
    </ul>
  );
}

export default Navigation