import { ReactComponent as Close } from '../../../assets/image/close.svg';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import mod from './Popup.module.scss'

type PopupProps = {
  setOpenPopup: (atg: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({setOpenPopup}) => {

  const closePopup = () => {
    setOpenPopup(false);
    document.body.style.overflow = 'visible';
  }

  return (
    <div className={mod.popup}>
      <div className={mod.popup__overflow}></div>
      <div className={mod.popup__content}>
        <div className={mod.popup__close}>
          <Close onClick={closePopup}/>
        </div>
        <h4 className={mod.popup__title}>Связаться с нами</h4>
        <form>
          <input type="text" placeholder='Имя'/>
          <input type="text" placeholder='+7 ...'/>
          <textarea placeholder='Комментарий'/>
          <ButtonPrimary buttonText='Отправить'/>
        </form>
      </div>
    </div>
  );
}

export default Popup