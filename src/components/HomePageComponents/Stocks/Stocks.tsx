import { useResize } from '../../../hooks/use-resize';
import Carousel from '../../Carousel/Carousel';
import TitleBlock from '../../TitleBlock/TitleBlock';
import stockPizza from '../../../assets/image/stocks-pizza.png';
import stockSuper from '../../../assets/image/super-stock.png';
import mod from './Stocks.module.scss';

const Stocks = () => {
  const { width } = useResize();

  return (
    <div id="stocks" className={mod.stocks}>
      <TitleBlock title={'Акции и скидки'} description={'надпись для декора'} />
      <Carousel
        quantitySlides={width >= 576 ? 2 : 1}
        pagination={true}
        paginationQuantity={width >= 576 ? 2 : 3}
        pt={width >= 576 ? 50 : 32}
        pb={width >= 576 ? 30 : 24}>
        <a href="#none" className={mod.stocks__slide}>
          <img src={stockPizza} alt="pizza-stock" />
        </a>
        <a href="#none" className={mod.stocks__slide}>
          <img src={stockSuper} alt="super-super" />
        </a>
        <a href="#none" className={mod.stocks__slide}>
          <img src={stockPizza} alt="pizza-stock" />
        </a>
      </Carousel>
    </div>
  );
};

export default Stocks;
