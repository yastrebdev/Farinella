import { useResize } from '../../../hooks/use-resize';
import TitleBlock from '../../TitleBlock/TitleBlock';
import DeliveryCard from './DeliveryCard/DeliveryCard';
import Carousel from '../../Carousel/Carousel';
import img1 from '../../../assets/image/delivery-1.svg';
import img2 from '../../../assets/image/delivery-2.svg';
import img3 from '../../../assets/image/delivery-3.svg';
import mod from './Delivery.module.scss';

const deliveryData = [
  {
    imgUrl: img1,
    description:
      'Доставка в Казани работает с 10-00, приблизительное время доставки – 60 минут. Время доставки может меняться в зависимости от трафика.',
  },
  {
    imgUrl: img2,
    description:
      'Вы можете оформить заказ с получением по готовности или к определенному времени – это удобно, если вы выбрали закуски и сеты для большой компании или корпоративного мероприятия.',
  },
  {
    imgUrl: img3,
    description:
      'Укажите адрес и ознакомьтесь с доступным меню: вам будут предложены блюда из разных ресторанов – остается только выбрать',
  },
  {
    imgUrl: img2,
    description:
      'Вы можете оформить заказ с получением по готовности или к определенному времени – это удобно, если вы выбрали закуски и сеты для большой компании или корпоративного мероприятия.',
  },
  {
    imgUrl: img3,
    description:
      'Укажите адрес и ознакомьтесь с доступным меню: вам будут предложены блюда из разных ресторанов – остается только выбрать',
  },
];

const Delivery = () => {
  const { width } = useResize()

  return (
    <div className={mod.delivery}>
      <div className="container">
        <div className={mod.delivery__wrapper}>
          <TitleBlock title={'Условия доставки'} description={'всё просто'} />
          <div className={mod.delivery__content}>
            <Carousel 
              quantitySlides={width < 768 ? 1 : width < 1024 ? 2 : 3}
              pagination={true}
              paginationQuantity={3}
              pt={0}
              pb={30}
            >
              {deliveryData.map((card, i) => (
                <DeliveryCard key={i} {...card} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
