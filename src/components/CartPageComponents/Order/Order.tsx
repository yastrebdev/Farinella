import { useState } from 'react';
import { ReactComponent as ArrowRight } from '../../../assets/image/arrow_right.svg';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import mod from './Order.module.scss';
import DeliverySelect from './DeliverySelect/DeliverySelect';
import PaySelect from './PaySelect/PaySelect';

const Order = () => {
  const [openSelectDelivery, setOpenSelectDelivery] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(0);
  const [openSelectPay, setOpenSelectPay] = useState(false);
  const [selectedPay, setSelectedPay] = useState(0);

  const clickDeliveryItem = (i: number) => {
    setSelectedDelivery(i);
    setOpenSelectDelivery(false);
  };

  const clickPayItem = (i: number) => {
    setSelectedPay(i);
    setOpenSelectPay(false);
  };

  return (
    <div className={mod.main}>
      <div className={mod.main__header}>
        <h4>Оформление заказа</h4>
      </div>

      <form className={mod.form}>
        <div className={mod.form__contacts}>
          <h5>Контаакты</h5>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="+7" />
        </div>
        <DeliverySelect
          openSelectDelivery={openSelectDelivery}
          setOpenSelectDelivery={setOpenSelectDelivery}
          clickDeliveryItem={clickDeliveryItem}
          selectedDelivery={selectedDelivery}
        />
        <PaySelect
          setOpenSelectPay={setOpenSelectPay}
          openSelectPay={openSelectPay}
          selectedPay={selectedPay}
          clickPayItem={clickPayItem}
        />
        <div className={mod.form__promo}>
          <div>
            <input type="text" placeholder="Ввести промокод" />
            <div>
              <ArrowRight className={mod.form__promo__arrow} />
            </div>
          </div>
        </div>
        <div className={mod.form__button}>
          <ButtonPrimary buttonText={'Оформить заказ'} />
        </div>
      </form>
    </div>
  );
};

export default Order;
