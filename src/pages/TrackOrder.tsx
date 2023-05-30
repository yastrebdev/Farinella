import mod from '../scss/TrackOrder.module.scss';

const TrackOrder = () => {
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
              <button>Отменить заказ</button>
              <div className={mod.main__status}>
                <span>Статус заказа:</span>
                <span>Собираем заказ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
