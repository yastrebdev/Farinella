import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { ReactComponent as SearchIcon } from '../../../assets/image/search-icon.svg';
import { Link } from 'react-router-dom';
import mod from './Search.module.scss';
import { CartItem } from '../../../redux/slices/cartSlice';

const Search = () => {
  const [isActive, setActive] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchResults, setResults] = useState([]);

  const ref = useRef(null);

  useOutsideClick(ref, () => setActive(false), setResults);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get('https://646c82af7b42c06c3b2b65e5.mockapi.io/items/');
        setProducts(data);
      } catch (error) {
        alert('Ошибка при получении пиццы');
      }
    }
    fetchProduct();
  }, []);

  const viewInput = () => {
    setActive(!isActive);
  };

  const handleSearch = (e: any) => {
    const value = e.target.value;

    if (value.length < 3) {
      setResults([]);
      return;
    }

    const results = products.filter((item: CartItem) => {
      return item.productName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    setResults(results);
  };

  return (
    <div ref={ref} className={mod.search}>
      <button
        onClick={viewInput}
        className={mod.button}
        style={{
          right: isActive ? '10px' : '0px',
        }}>
        <SearchIcon />
      </button>
      {isActive && (
        <div>
          <div className={mod.input}>
            <input onChange={handleSearch} type="text" placeholder="Поиск" />
          </div>
          <div className={mod.results}>
            {searchResults.length === 0 ? (
              <div className={mod.result}>
                <p>Нет результатов</p>
              </div>
            ) : (
              searchResults.map((item: any) => {
                return (
                  <Link
                    onClick={viewInput}
                    to={`/product/${item.id}`}
                    key={item.id}
                    className={mod.result}>
                    <img src={item.urlImg} alt={item.productName} />
                    <p>{item.productName}</p>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

function useOutsideClick(ref: any, handler: any, results: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
        results([]);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}

export default Search;