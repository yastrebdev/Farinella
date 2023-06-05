import { useEffect } from 'react';
import Banner from '../components/HomePageComponents/Banner/Banner';
import Menu from '../components/HomePageComponents/Menu/Menu';
import Stocks from '../components/HomePageComponents/Stocks/Stocks';
import AboutPizzeria from '../components/HomePageComponents/AboutPizzeria/AboutPizzeria';
import Team from '../components/HomePageComponents/Team/Team';
import Delivery from '../components/HomePageComponents/Delivery/Delivery';
import Pacman from '../components/HomePageComponents/Pacman/Pacman';
import GoTop from '../components/GoTop/GoTop';

import mod from '../scss/Home.module.scss'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={mod.home}>
      <Banner />
      <Menu />
      <Stocks />
      <AboutPizzeria />
      <Team />
      <Delivery />
      <Pacman />
      <GoTop />
    </div>
  );
};

export default Home;
