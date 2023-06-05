import { useState, useEffect } from 'react';
import { ReactComponent as Close } from '../assets/image/close.svg';
import mod from '../scss/TrackOrder.module.scss';

const TrackOrder = () => {
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const viewPopup = () => {
    setOpenPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setOpenPopup(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <div className={mod.main}>
      <div className="container">
        <div className={mod.main__wrapper}>
          <div className={mod.main__order}>
            <div className={mod.main__header}>
              <h4 className={mod.main__orderName}>Заказ №00123</h4>
              <h4 className={mod.main__time}>01.01.2023 19:45</h4>
            </div>
            <div className={mod.main__content}>
              <div className={mod.main__contentItem}>
                <h5>Название пиццы</h5>
                <span>2</span>
                <span className={mod.main__price}>999 ₽</span>
              </div>
              <div className={mod.main__contentItem}>
                <h5>Название пиццы</h5>
                <span>2</span>
                <span className={mod.main__price}>999 ₽</span>
              </div>
              <div className={mod.main__contentItem}>
                <h5>Название пиццы</h5>
                <span>2</span>
                <span className={mod.main__price}>999 ₽</span>
              </div>
            </div>
            <div className={mod.main__total}>
              <h5>Итого</h5>
              <span>4</span>
              <span className={mod.main__price}>3000 ₽</span>
            </div>
            <div className={mod.main__footer}>
              <button onClick={viewPopup}>Отменить заказ</button>
              <div className={mod.main__status}>
                <span>Статус заказа:</span>
                <span>Собираем заказ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openPopup && (
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
      )}
    </div>
  );
};

export default TrackOrder;
