import { ReactComponent as Arrow } from '../../../../assets/image/arrow-sort.svg';
import mod from './DeliverySelect.module.scss';

type DeliverySelectItem = {
  name: string;
  address: boolean;
};

const deliveryList: DeliverySelectItem[] = [
  { name: 'Самовывоз', address: false },
  { name: 'Доставка', address: true },
  { name: 'Курьер', address: true },
];

type DeliverySelectProps = {
  openSelectDelivery: boolean;
  setOpenSelectDelivery: (openSelectDelivery: boolean) => void;
  clickDeliveryItem: (i: number) => void;
  selectedDelivery: number;
};

const DeliverySelect: React.FC<DeliverySelectProps> = ({
  openSelectDelivery,
  setOpenSelectDelivery,
  selectedDelivery,
  clickDeliveryItem,
}) => {
  return (
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
  );
};

export default DeliverySelect;
