import { useState } from 'react';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import { ReactComponent as Arrow } from '../../../assets/image/arrow-sort.svg';
import { ReactComponent as ArrowRight } from '../../../assets/image/arrow_right.svg';
import mod from './Order.module.scss';

type DeliverySelectItem = {
  name: string;
  address: boolean;
};

const deliveryList: DeliverySelectItem[] = [
  { name: 'Самовывоз', address: false },
  { name: 'Доставка', address: true },
  { name: 'Курьер', address: true },
];

type PaySelectItem = {
  name: string;
};

const payList: PaySelectItem[] = [{ name: 'Банковской картой' }, { name: 'PayPal' }, { name: 'Наличные' }];

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
        <div className={mod.form__delivery}>
          <h5>Способ доставки</h5>
          <div className={`${mod.form__delivery__select} ${mod.select}`}>
            <div
              onClick={() => {
                setOpenSelectDelivery(!openSelectDelivery);
              }}
              className={mod.select__header}>
              <input type="text" value={deliveryList[selectedDelivery].name} readOnly />
              <Arrow className={mod.select__arrow} />
            </div>
            {openSelectDelivery && (
              <div className={mod.select__body}>
                <ul className={mod.select__list}>
                  {deliveryList.map((delivery, i) => (
                    <li
                      key={i}
                      className={`${selectedDelivery === i ? `${mod.select__item__active}` : ''} ${
                        mod.select__item
                      }`}
                      onClick={() => {
                        clickDeliveryItem(i);
                      }}>
                      {delivery.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {deliveryList[selectedDelivery].address && (
            <div className={`${mod.form__delivery__address} ${mod.address}`}>
              <input type="text" placeholder="Район / улица" />
              <div>
                <input type="text" placeholder="Дом" />
                <input type="text" placeholder="Квартира" />
              </div>
              <textarea placeholder="Комментарий" />
            </div>
          )}
        </div>
        <div className={mod.form__pay}>
          <h5>Способ оплаты</h5>
          <div className={`${mod.form__delivery__select} ${mod.select}`}>
            <div
              onClick={() => {
                setOpenSelectPay(!openSelectPay);
              }}
              className={mod.select__header}>
              <input type="text" value={payList[selectedPay].name} readOnly />
              <Arrow className={mod.select__arrow} />
            </div>
            {openSelectPay && (
              <div className={mod.select__body}>
                <ul className={mod.select__list}>
                  {payList.map((pay, i) => (
                    <li
                      key={i}
                      className={`${selectedPay === i ? `${mod.select__item__active}` : ''} ${
                        mod.select__item
                      }`}
                      onClick={() => {
                        clickPayItem(i);
                      }}>
                      {pay.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={mod.form__promo}>
          <div>
            <input type="text" placeholder="Ввести промокод" />
            <div>
              <ArrowRight className={mod.form__promo__arrow}/>
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
