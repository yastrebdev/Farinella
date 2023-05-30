import { useEffect, useState } from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import Skeleton from '../../Skeleton';
import mod from './ProductBlock.module.scss';

const ProductBlock = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://646c82af7b42c06c3b2b65e5.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false)
      });
  }, []);

  const products = items.map((obj: any) => <ProductCard {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className={mod.main}>
      <div className="container">
        <div className={mod.main__wrapper}>
          <div className={mod.main__products}>
            {
              isLoading ? skeletons : products
            }
          </div>
          <div className={mod.main__button}>
            <ButtonPrimary buttonText={'Показать еще'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
