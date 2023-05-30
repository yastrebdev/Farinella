import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import mod from './Order.module.scss'

const Order = () => {
  return (
    <div className={mod.main}>
      <div className={mod.main__header}>
        <h4>Оформление заказа</h4>
      </div>

      <form className={mod.form}>
        <div className={mod.form__contacts}>
          <h5>Контаакты</h5>
          <input type="text" placeholder='Имя'/>
          <input type="text" placeholder='E-mail'/>
          <input type="text" placeholder='+7'/>
        </div>
        <div className={mod.form__delivery}>
          <h5>Способ доставки</h5>
          <input type="text" placeholder='Самовывоз'/>
        </div>
        <div className={mod.form__pay}>
          <h5>Способ оплаты</h5>
          <input type="text" placeholder='Банковской картой'/>
        </div>
        <div className={mod.form__promo}>
          <input type="text" placeholder='Ввести промокод'/>
        </div>
        <div className={mod.form__button}>
          <ButtonPrimary buttonText={'Оформить заказ'}/>
        </div>
      </form>
    </div>
  );
}

export default Order