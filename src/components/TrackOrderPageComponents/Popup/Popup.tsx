import { ReactComponent as Close } from '../../../assets/image/close.svg';
import mod from './Popup.module.scss';

type PopupProps = {
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({closePopup}) => {
  return (
    <div className={mod.popup}>
      <div className={mod.popup__overflow}></div>
      <div className={mod.popup__content}>
        <div className={mod.popup__close}>
          <Close onClick={closePopup} />
        </div>
        <h4 className={mod.popup__title}>Отмена заказа</h4>
        <p>
          Для отмены заказа позвоните <br />
          нам по номеру
        </p>
        <h2>8 (800) 245 - 12 - 25</h2>
      </div>
    </div>
  );
};

export default Popup;
