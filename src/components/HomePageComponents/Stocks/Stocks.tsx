import Carousel from '../../Carousel/Carousel';
import TitleBlock from '../../TitleBlock/TitleBlock';
import stockPizza from '../../../assets/image/stocks-pizza.png';
import stockSuper from '../../../assets/image/super-stock.png';
import {ReactComponent as Circle} from '../../../assets/image/circle-arrow.svg';
import mod from './Stocks.module.scss';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';

const Stocks = () => {
  return (
    <div className={mod.stocks}>
      <TitleBlock title={'Акции и скидки'} description={'надпись для декора'} />
      <Carousel quantitySlides={2} pagination={true} paginationQuantity={2} pt={50} pb={30}>
        <div className={mod.stocks__slide}>
          <img src={stockPizza} alt="pizza-stock" />
          <div className={mod.stocks__button}>
            <ButtonPrimary buttonText={'Участвовать'}/>
          </div>
        </div>
        <div className={mod.stocks__slide}>
          <img src={stockSuper} alt="super-super" />
          <button className={mod.stocks__circleButton}>
            <Circle />
          </button>
        </div>
        <div className={mod.stocks__slide}>
          <img src={stockPizza} alt="pizza-stock" />
        </div>
      </Carousel>
    </div>
  );
};

export default Stocks;
