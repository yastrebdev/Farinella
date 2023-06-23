import { ReactComponent as Arrow } from '../../../../assets/image/arrow-sort.svg';
import mod from './PaySelect.module.scss';

type PaySelectItem = {
  name: string;
};

const payList: PaySelectItem[] = [
  { name: 'Банковской картой' },
  { name: 'PayPal' },
  { name: 'Наличные' },
];

type PaySelectProps = {
  openSelectPay: boolean;
  selectedPay: number;
  setOpenSelectPay: (openSelectPay: boolean) => void;
  clickPayItem: (i: number) => void;
}

const PaySelect: React.FC<PaySelectProps> = ({setOpenSelectPay, openSelectPay, selectedPay, clickPayItem}) => {
  return (
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
  );
};

export default PaySelect;
