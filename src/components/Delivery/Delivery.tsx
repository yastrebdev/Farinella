import TitleBlock from '../TitleBlock/TitleBlock';
import deliveryImg1 from '../../assets/image/delivery-1.svg';
import deliveryImg2 from '../../assets/image/delivery-2.svg';
import deliveryImg3 from '../../assets/image/delivery-3.svg';
import mod from './Delivery.module.scss';

const Delivery = () => {
  return (
    <div className={mod.delivery}>
      <div className="container">
        <div className={mod.delivery__wrapper}>
          <TitleBlock title={'Условия доставки'} description={'всё просто'} />
          <div className={mod.delivery__content}>
            <div className={mod.delivery__item}>
              <img className={mod.delivery__img} src={deliveryImg1} alt="delivery" />
              <p className={mod.delivery__description}>
                Доставка в Казани работает с 10-00, приблизительное время доставки – 60 минут. Время
                доставки может меняться в зависимости от трафика.
              </p>
            </div>
            <div className={mod.delivery__item}>
              <img className={mod.delivery__img} src={deliveryImg2} alt="delivery" />
              <p className={mod.delivery__description}>
                Вы можете оформить заказ с получением по готовности или к определенному времени –
                это удобно, если вы выбрали закуски и сеты для большой компании или корпоративного
                мероприятия.
              </p>
            </div>
            <div className={mod.delivery__item}>
              <img className={mod.delivery__img} src={deliveryImg3} alt="delivery" />
              <p className={mod.delivery__description}>
                Укажите адрес и ознакомьтесь с доступным меню: вам будут предложены блюда из разных
                ресторанов – остается только выбрать.
              </p>
            </div>
            <div className={mod.delivery__item}>
              <img className={mod.delivery__img} src={deliveryImg1} alt="delivery" />
              <p className={mod.delivery__description}>
                Доставка в Казани работает с 10-00, приблизительное время доставки – 60 минут. Время
                доставки может меняться в зависимости от трафика.
              </p>
            </div>
            <div className={mod.delivery__item}>
              <img className={mod.delivery__img} src={deliveryImg2} alt="delivery" />
              <p className={mod.delivery__description}>
                Вы можете оформить заказ с получением по готовности или к определенному времени –
                это удобно, если вы выбрали закуски и сеты для большой компании или корпоративного
                мероприятия.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
