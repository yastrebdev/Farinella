import { useState, useEffect } from 'react';
import { Link as A } from 'react-scroll';
import { ReactComponent as Top } from '../../assets/image/arrow_top.svg';
import mod from './GoTop.module.scss';

const GoTop = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollNow = document.documentElement.clientHeight;

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      {scroll > scrollNow && (
        <A to="top" className={`${scroll > scrollNow + 50 ? `${mod.gotop__visible}` : ''} ${mod.gotop}`} smooth={true}>
          <Top className={mod.arrow} />
        </A>
      )}
    </>
  );
};

export default GoTop;
